

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let stringDirectors = moviesArray.map(function (movie) {
        return movie.director;})
        return stringDirectors;
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSteven = moviesArray.filter( function (dramaSpielberg){
        if(dramaSpielberg.director == 'Steven Spielberg' && dramaSpielberg.genre.includes('Drama')){
            return movies
        }
    });return moviesSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray == "") return 0;

    let scoresMediaValor = moviesArray.reduce((accumulator, currentVal) => {
        if(!currentVal.score) return accumulator;
       else return accumulator + currentVal.score;
    }, 0);
    let totalMovies = moviesArray.length
    return Math.round(scoresMediaValor / totalMovies * 100) /100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramas = moviesArray.filter(function (drama){
        if (drama.genre.includes('Drama')) return movies;
    });
    if (dramas.length == '0') {return 0;}
    else {return (Math.round(dramas.reduce((accumulator, currentVal) => accumulator + currentVal.score, 0)/ dramas.length * 100))/100};
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let ordenadas = Array.from(moviesArray);
    ordenadas.sort((a,b) => {
        if (a.year == b.year) return a.title.localeCompare(b.title);
       if (a.year !== b.year) return a.year - b.year;
    });
    return ordenadas;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let pelis = Array.from(moviesArray);
     pelis.sort((a,b) => {
        return a.title.localeCompare(b.title);
    });
   let pelis20 = pelis.slice(0,20);
    return pelis20.map((movie) => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
