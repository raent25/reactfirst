"use strict";
let numberOfFirst = +prompt("How many movies have you seen?", '')
let personalMovieBD = {
    count: numberOfFirst,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
let LastMovie = prompt("Last watched movie?", '')
let Rating = prompt("Rating?", '')
personalMovieBD.movies[LastMovie] = Rating
console.log(personalMovieBD)