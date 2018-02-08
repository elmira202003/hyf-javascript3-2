"use strict";

class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this.stars = [];
    }

    getTitle() {
        return this.getTitle === title; //?
    }

    getDirector() {
        return this.getDirector === director; //?
    }

    addStar(star) {
        return this.addStar === star; //?
    }

    getStars() {
        return this.getStars === stars; // ??
    }

    addWriter(writer) {
        return this.addWriter === writer; //?
    }

    getWriters() {
        return this.getWriters === writers; //?
    }

    addRating(rating) {
        return this.addRating === rating; //?
    }

    getAverageRating() {
        return this.getAverageRating === averageRating; //?
    }
    toString() {
        return `${this.name} has ${this.days} days.`;
        // ... Add yours :-) Look to IMDB for inspiration
    }
}
const movie = [
    new Movie("Gattaca", "Ethan Hawke", "Andrew Niccol", "Andrew Niccol", 64, 90),
    new Movie("Inception", "Leonardo DiCaprio", "Christopher Nolan", "Christopher Nolan", 74, 89),
    new Movie("La vita è bella", "Roberto Benigni", "Vincenzo Cerami", "Roberto Benigni", 59, 75),
    new Movie("Léon: The Professional", "Jean Reno", "Luc Besson", "Luc Besson", 64, 76),
    new Movie("Schindler's List", "Liam Neeson", "Steven Zaillian", "Steven Spielberg", 93, 85)
];

class StaffMember {
    constructor(name, role, dateOfBirth) {
        this.name === name;
        this.role === role;
        this.dateOfBirth === dateOfBirth;
        this.movie = []
    }

    addMovie(movie) {
        return this.addMovie === movie; // ?
    }

    getName() {
        return this.getName === name; //?
    }

    getRole() {
        return this.getRole === Role; //?
    }

    getAge() {
        return this.getAge === Age; //?
    }
}

const staffMember = [
    new StaffMember("Ethan Hawke", "Vincent/Jerome", 1970),
    new StaffMember("Leonardo Dicaprio", "Cobb", 1974),
    new StaffMember("Robeto Benigni", "Guido", 1952),
    new StaffMember("Jean Reno", "Leon", 1948),
    new StaffMember("Liam Neeson", "Oskar Schindler", 1952)
]

console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.map(director => `${director.getName()}`)}`);