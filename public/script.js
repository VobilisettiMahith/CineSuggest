let ReqMovieTitle="";

let movies = document.querySelectorAll(".Moviecontent");
for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    movie.addEventListener("click", () => {
        let title = movie.querySelector(".Imagetitle");
        console.log(title.innerText);
        window.location.href = `http://localhost:8080/movies/${title.innerText}`;
    })
}

let watchlistBtn = document.querySelectorAll(".Moviecontent div .AddToWatchlist");
for (let i = 0; i < watchlistBtn.length; i++) {
    let currBtn=watchlistBtn[i];
    currBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        // 1.Extract the required Movie title
        let MovieTitles=document.querySelectorAll(".Moviecontent div:first-of-type p:first-of-type");
        ReqMovieTitle=MovieTitles[i].innerText;

        //2. Manipulate the popup box
        let Popup=document.querySelector("#Overlay");
        
        let TextBoxDisplay=document.querySelector("#AlertBox p");
       
        TextBoxDisplay.innerText=`Do you Want To Add ${ReqMovieTitle} To the Watchlist?`
        Popup.style.display="flex";

    })
}

let WatchlistPopupBtns=document.querySelectorAll("#AlertBox div button");
console.log(WatchlistPopupBtns);
WatchlistPopupBtns[0].addEventListener("click",(event)=>{
    event.stopPropagation();
    window.location.href = `http://localhost:8080/landingHomePage/add-to-Watchlist/${ReqMovieTitle}`;
    let Popup=document.querySelector("#Overlay");
    Popup.style.display="none";

})

WatchlistPopupBtns[1].addEventListener("click",(event)=>{
    event.stopPropagation();
    let Popup=document.querySelector("#Overlay");
    Popup.style.display="none";
    window.location.href = `http://localhost:8080/landingHomePage`;
})





let searchInput = document.querySelector("#SearchBox");
searchInput.addEventListener("keydown", (event) => {
    if (event.code == "Enter") {
        let moviename = searchInput.children[1].value;
        console.log(moviename);
        window.location.href = `http://localhost:8080/search/${moviename}`;
    }
})

let Genres = document.querySelectorAll("#CategorySection div");
for (let genre of Genres) {
    if (genre.innerText == "All") {
        continue;
    }
    else {
        
        genre.addEventListener("click", () => {
            console.log(genre.innerText);
            window.location.href = `http://localhost:8080/landingHomePage/genres/${genre.innerText}`;
        })
    }
}

let NavButtons=document.querySelectorAll("#NavMenu p");
//Home button
NavButtons[0].addEventListener("click",()=>{
    window.location.href = `http://localhost:8080/landingHomePage`;
})

//Watchlist functionality
NavButtons[2].addEventListener("click",()=>{
    window.location.href = `http://localhost:8080/landingHomePage/watchlist`;
})