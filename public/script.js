let movies = document.querySelectorAll(".Moviecontent");
for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    movie.addEventListener("click", () => {
        let title = movie.querySelector(".Imagetitle");
        console.log(title.innerText);
        window.location.href = `http://localhost:8080/movies/${title.innerText}`;
    })
}

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
NavButtons[0].addEventListener("click",()=>{
    window.location.href = `http://localhost:8080/landingHomePage`;
})