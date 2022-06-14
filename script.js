const searchBtn = document.getElementById("search-bar"),
  gameFolder = document.querySelector(".game-card"),
  nextBtn = document.getElementById("btn-next"),
  prevBtn = document.getElementById("btn-prev"),
  cards = document.querySelectorAll(".movie"),
  overlay = document.querySelector(".overlay");

//This function displays all games
const returnId = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "c2356ea906msh491a7bdbced25c8p1ca321jsncf59f3f6d19b",
    },
  };

  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options)
    .then((response) => {
      return response.json();
    })

    .then((response) => {
      const gamesData = response;
      let output = "";
      console.log(gamesData);

      gamesData.forEach((game) => {
        output += `  
            <div class="movie">        
            <div class="game-img">
                <img src="${game.thumbnail}" alt="">
            </div>
            <div class="game-name">
                <h3>${game.title}</h3>
            </div>
            <div class="game-sub-details">
                ${game.short_description} 
            </div>  </div>     
            `;

        return game.id;
      });
      gameFolder.innerHTML = output;
    })

    .catch((err) => {
      gameFolder.innerHTML = `<h2>Kindly check your internet connection and try again<br>
        
        Error Type: ${err.message} error</h2>`;
    });

  searchBtn.addEventListener("click", showOverlay);

  function showOverlay() {
    overlay.classList.remove("show");
    console.log("ki");
  }
};
returnId();
/*
//this function returns all previews a game when clicked
function overlayDispay (){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'c2356ea906msh491a7bdbced25c8p1ca321jsncf59f3f6d19b'
        }
    };
    const id = 1;
  /*  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        .then(response =>{
            return response.json()})
        .then(response =>{ 
          const printGames =  response
          let viewfromOverlay = ''
          printGames.forEach(over=>{
              viewfromOverlay +=`<div class="tubnail-vid">
              <video autoplay loop src="${over.thumbnail}"></video>
          </div>
          <div class="text-content-overlay ">
          <div class="game-name-overlay">
              <h2>Alience Ware</h2>
          </div>
          <div class="fulltails"></div>
          <div class="creater"><h2>Ebenezer</h2></div>`
          })
          overlay.innerHTML=viewfromOverlay
        
        
        })
        .catch(err => console.error(err));
}

overlayDispay()*/
