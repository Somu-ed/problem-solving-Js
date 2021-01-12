function addNumbers(num1, num2) {
    return num1+num2;
}

// console.log(addNumbers(2, 5));
// console.log(addNumbers(5, 5));
// console.log(addNumbers(15, 5));

function convertMinutesToSeconds(min) {
    return min*60;
}

// console.log(convertMinutesToSeconds(1));
// console.log(convertMinutesToSeconds(5));
// console.log(convertMinutesToSeconds(3));

function yourAgeInSeconds(age) {
    return age*12*30*24*60*60;
}

// console.log(yourAgeInSeconds(25));

function getFirstItem(items) {
    return items[0];
}

let item = ["banana", "godfather", "shawshank", "pickle"];
// console.log(getFirstItem(item));

function badOrGoodMovie(rating) {
    if (rating <= 6) {
        return "Bad Movie";
    } else if (rating <= 10) {
        return "Good Movie";
    }
}

console.log(badOrGoodMovie(6));
console.log(badOrGoodMovie(7));
console.log(badOrGoodMovie(9.2));
console.log(badOrGoodMovie(2));