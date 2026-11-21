let ReqMovieTitle="";
let DeleteBtns = document.querySelectorAll("#TitleBox i");
for (let i = 0; i < DeleteBtns.length; i++) {
    let currBtn=DeleteBtns[i];
    currBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        // 1.Extract the required Movie title
        let MovieTitles=document.querySelectorAll(`#TitleBox h2`);
        ReqMovieTitle=MovieTitles[i].innerText;

        //2. Manipulate the popup box
        let Popup=document.querySelector("#Overlay");
        
        let TextBoxDisplay=document.querySelector("#AlertBox p");
       
        TextBoxDisplay.innerText=`Do you Want To Remove ${ReqMovieTitle} From the Watchlist?`
        Popup.style.display="flex";

    })
}

// Functionality Of PopUp buttons (Yes/No)
let WatchlistPopupBtns=document.querySelectorAll("#AlertBox div button");
// Functionality of Yes
WatchlistPopupBtns[0].addEventListener("click",(event)=>{
    event.stopPropagation();
    window.location.href = `http://localhost:8080/landingHomePage/remove-from-Watchlist/${ReqMovieTitle}`;
    let Popup=document.querySelector("#Overlay");
    Popup.style.display="none";

})

// Functionality of No
WatchlistPopupBtns[1].addEventListener("click",(event)=>{
    event.stopPropagation();
    let Popup=document.querySelector("#Overlay");
    Popup.style.display="none";
})

