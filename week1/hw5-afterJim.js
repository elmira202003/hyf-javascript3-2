"use strict";

class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this.stars = [];
        this.writers = [];
        this.rating = [];
    }

    getTitle() {
        return this.title;
    }

    getDirector() {
        return this.director;
    }

    addStar(star) {
        this.stars.push(star);
        return this;
    }

    getStars() {
        return this.stars;
    }

    addWriter(writer) {
        this.writers.push(writer);
        return this;
    }

    getWriters() {
        return this.writers;
    }

    addRating(rating) {
        this.ratings.push(rating);
        return this
    }

    getAverageRating() {
        return this.averageRating;
    }

}

const gattaca = new Movie("Gattaca", "Andrew Niccol");

console.log(gattaca);

//////////////// INTERNAL DIVIDER BETWEEN MOVIE AND STAFF ////////////

class StaffMember {
    constructor(name, role, dateOfBirth) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.movie = []
    }


    addMovie(movie) {
        this.movie.push(movie);
        return this
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    getAge() {
        return this.dateOfBirth;
    }
}

let d = new Date();
let n = d.getFullYear();

gattaca
    .addStar(new StaffMember("Ethan Hawke", "actor", `Age: ${n - 1970}`))
    .addStar(new StaffMember("Uma Thurman", "actor", `Age: ${n - 1970}`))
    .addStar(new StaffMember("Jude Law", "actor", `Age: ${n - 1972}`))
    .getDirector(new StaffMember("Andrew Niccol", "director", `Age: ${n - 1964}`))
//.addRating(this.rating = 64)
//.addWriter(new StaffMember("Andrew Niccol", "writer", `Age: ${n - 1964}`))

console.log(gattaca.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = gattaca.getDirector();
console.log(`Director: ${director}`);