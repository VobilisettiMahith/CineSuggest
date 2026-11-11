let movies=document.querySelectorAll(".Moviecontent");
for(let i=0;i<movies.length;i++){
    let movie=movies[i];
    movie.addEventListener("click",()=>{
        let title=movie.querySelector(".Imagetitle");
        console.log(title.innerText);
        window.location.href=`http://localhost:8080/movies/${title.innerText}`;
    })
}
