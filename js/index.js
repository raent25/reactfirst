"use strict";
let numberOfFirst = +prompt("How many movies have you seen?", '')
let personalMovieBD = {
    count: numberOfFirst,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
for (let i = 0; i < 2; i++) {
    let LastMovie = prompt("Last watched movie?", '')
    if (LastMovie == '' || LastMovie.length > 50) {
        do {
            LastMovie = prompt("You didn`t ansver! Or line length exceeded! Last watched movie?", '')
        } while (LastMovie == '' || LastMovie == null || LastMovie.length > 50)
    }
    let Rating = prompt("Rating?", '')
    if (Rating == '') {
        do {
            Rating = prompt("You didn`t ansver! Rating?", '')
        } while (Rating == '' || Rating == null)
    }
    personalMovieBD.movies[LastMovie] = Rating
}

if (personalMovieBD.count > 0 && personalMovieBD.count < 11) {
    alert("ви дивились мало фільмів")
} else if (personalMovieBD.count > 10 && personalMovieBD.count < 31) {
    alert("ви середньостатичстичний глядач")
} else if (personalMovieBD.count > 30) {
    alert("ви кіноман")
} else {
    alert("вийшла помилка")
}
console.log(personalMovieBD)