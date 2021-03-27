'use strict';

let sumOfAllSalaries = 0;
let numberOfSalaries = 0;
let historyOfSalaries = '';

alert('Welcome to app, which hepls to count salaries');

while(true) {
    let introducedSalary;

    if(numberOfSalaries === 0) {
        introducedSalary = +prompt(`Enter salary`);
    } else {
        introducedSalary = +prompt(`Enter next salary
    Sum of all salaries: ${sumOfAllSalaries} rub.
    Average salary: ${sumOfAllSalaries / numberOfSalaries} rub.
    History: ${historyOfSalaries} rub.`);
    }

    if(introducedSalary === 0 || introducedSalary < 0) {
        break;
    } else if (isNaN(introducedSalary)) {
        let userAnswer = confirm('Be careful! Enter a number!');

        if(userAnswer === false) {
            break;
        } else {
            continue;
        }   
    }

    sumOfAllSalaries += introducedSalary;
    numberOfSalaries += 1;

    if(numberOfSalaries === 1) {
        historyOfSalaries = introducedSalary;
    } else {
        historyOfSalaries = historyOfSalaries + ' rub. + ' + introducedSalary;
    }  
}

alert(`Sum of all salaries: ${sumOfAllSalaries} rub.
Average salary: ${sumOfAllSalaries / numberOfSalaries} rub.
History: ${historyOfSalaries} rub.`);