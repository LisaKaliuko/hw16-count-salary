'use strict';

let sumOfAllSalaries = 0;
let numberOfSalaries = 0;
let historyOfSalaries = [];
let introducedSalary;

alert('Welcome to app, which hepls to count salaries');

nextSalary: while(true) {
    introducedSalary = +prompt('Enter salary');

    if(introducedSalary === 0 || introducedSalary < 0) {
        break;
    } else if (isNaN(introducedSalary)) {
        let userAnswer = confirm('Be careful! Enter a number!');

        if(userAnswer === false) {
            break;
        } else {
            continue nextSalary;
        }
    }

    sumOfAllSalaries += introducedSalary;
    numberOfSalaries += 1;
    historyOfSalaries.push(introducedSalary);
}

alert(`Sum of all salaries: ${sumOfAllSalaries} rub.
Average salary: ${sumOfAllSalaries / numberOfSalaries} rub.
History: ${historyOfSalaries.join(' rub. + ')}  rub.`);