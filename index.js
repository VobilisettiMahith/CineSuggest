const express = require("express")
const app = express();
const port = 8080;
const path = require("path");
let { movies, watchlist, remainingWatchlist } = require("./Data");



app.use((req, res, next) => {
    res.setHeader(
        "Referrer-Policy",
        "strict-origin-when-cross-origin"
    );
    next();
});

function Handlerequest(req, res) {
    const name = req.params.moviename;
    const reqMov = movies.find((movies) => {
        return movies.title.toLowerCase() === name.toLowerCase()
    });
    res.render("index.ejs", { reqMov });
}

app.use(express.urlencoded({ extended: true }));



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Movie page
app.get("/movies/:moviename", Handlerequest)

// Search bar 
app.get("/search/:moviename", Handlerequest)

// Render the home page dynamically
app.get("/landingHomePage", (req, res) => {
    res.render("landingpage.ejs", { movies });
})

// Render the home page according to given genre
app.get("/landingHomePage/genres/:genre", (req, res) => {
    const reqGenre = req.params.genre;
    let movies_copy = movies;
    movies = [];
    for (let i = 0; i < movies_copy.length; i++) {
        let currMov = movies_copy[i];
        for (let j = 0; j < currMov.genre.length; j++) {
            if (currMov.genre[j].toLowerCase() == reqGenre.toLowerCase()) {
                movies.push(currMov);
            }
        }
    }
    res.render("landingpage.ejs", { movies });
    movies = movies_copy;
})

// Display the watchlist Page
app.get("/landingHomePage/watchlist", (req, res) => {
    res.render("watchlist.ejs", { watchlist });
})

// Adding required Movie to Watchlist
app.get("/landingHomePage/add-to-Watchlist/:title", (req, res) => {
    let name = req.params.title;
    let flag = 0;
    for (let movie of watchlist) {
        if (movie.title.toLowerCase() == name.toLowerCase()) {
            flag = 1;
        }
    }
    if (!flag) {
        const reqMov = remainingWatchlist.find((remainingWatchlist) => {
            return remainingWatchlist.title.toLowerCase() === name.toLowerCase()
        });
        watchlist.push(reqMov);
    }

    res.render("watchlist.ejs", { watchlist });

})

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})





