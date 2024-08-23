
const queries = new URLSearchParams(window.location.search);

//a script to count the number of days from a person's date of birth to the current date
let userDay = parseInt(queries.get('day'), 10);
let userMonth = parseInt(queries.get('month'), 10);
userMonth--; //must decrement by one due to how the Date object handles months (0-11) not (1-12)
let userYear = parseInt(queries.get('year'), 10);


//counts the number of days between a given date of birth and the current day
const daysBorn = (month, day, year) => {
    timeDifference = Date.now() -  (new Date(year, month, day).valueOf());
    //console.log(timeDifference);
    timeDifference = timeDifference / 1000;
    //console.log(`This is the numner of seconds I've been born: ${timeDifference}`);
    numOfDays = timeDifference / 86400;
    //console.log(`This is the number of days I've been born: ${numOfDays}`);
    return Math.floor(numOfDays);
}
//testing to see if the function works: it works on its own
//daysBorn(userMonth, userDay, userYear);

const numAnswer = daysBorn(userMonth, userDay, userYear);
console.log(numAnswer);
const returnValue = document.getElementById('answer');
returnValue.innerHTML = `<h3> ${numAnswer} days!</h3>`;