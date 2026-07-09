let input = "day3.txt";
let inputexample = "day3example.txt";
console.log("start");


fetch(input).then(response => response.text()).then(data => {

    let passwords_array = data.split("\r\n");
    console.log(passwords_array);


    part1(passwords_array);
    part2(passwords_array);
    part3(passwords_array);
}
);

function longestRepeatedRun(str) {
    let maxCount = 1;
    let currentCount = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 1;
        }
    }

    return str.length === 0 ? 0 : maxCount;
}

function hasOnly7(str) {
    const digits = str.match(/\d/g) || [];
    return digits.length > 0 && digits.every(d => d === '7');
}

function part1(passwords_array) {
    let solution = 0;
    let bestStrength = 0;

    for (let i = 0; i < passwords_array.length; i++) {
        let strengthFactors = (+/\d/.test(passwords_array[i])) + (+/[A-Z]/.test(passwords_array[i])) + (+/[a-z]/.test(passwords_array[i]));
        let strength = strengthFactors * passwords_array[i].length;
        if (bestStrength < strength) {
            bestStrength = strength;
            solution = passwords_array[i];
        }
    }
    console.log("part1: " + solution);
}

function part2(passwords_array) {
    let solution = "";
    let bestStrength = 0;
    let all = 0;

    for (let i = 0; i < passwords_array.length; i++) {
        let strengthFactors = (+/\d/.test(passwords_array[i])) + (+/[A-Z]/.test(passwords_array[i])) + (+/[a-z]/.test(passwords_array[i]));

        //check chars next to each other more than 3
        if (longestRepeatedRun(passwords_array[i]) > 2) {
            strengthFactors = strengthFactors + Math.pow(longestRepeatedRun(passwords_array[i]), 2);
        }

        //check if has only 7
        if (hasOnly7(passwords_array[i])) {
            strengthFactors = strengthFactors + 7;
        }

        //check blue or red or green
        if (/blue|red|green/.test(passwords_array[i])) {
            strengthFactors = strengthFactors * 3;
        }

        let strength = strengthFactors * passwords_array[i].length;
        console.log(strength);
        all = all + strength;
        if (bestStrength < strength) {
            bestStrength = strength;
            solution = passwords_array[i];
        }
    }
    console.log("all: " + all);
    console.log("part2: " + solution);
}

function part3(passwords_array) {
    let solution = 0;
    let scores = [];
    let best = 0;

    let addchars_array = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');

    for (j = 0; j < addchars_array.length; j++) {

        let solution = 0;

        for (let i = 0; i < passwords_array.length; i++) {

            let testPassword = passwords_array[i] + "" + addchars_array[j];

            console.log(testPassword);

            let strengthFactors = (+/\d/.test(testPassword)) + (+/[A-Z]/.test(testPassword)) + (+/[a-z]/.test(testPassword));

            //check chars next to each other more than 3
            if (longestRepeatedRun(testPassword) > 2) {
                strengthFactors = strengthFactors + Math.pow(longestRepeatedRun(testPassword), 2);
            }

            //check if has only 7
            if (hasOnly7(testPassword)) {
                strengthFactors = strengthFactors + 7;
            }

            //check blue or red or green
            if (/blue|red|green/.test(testPassword)) {
                strengthFactors = strengthFactors * 3;
            }

            let strength = strengthFactors * testPassword.length;
            solution += strength;
        }
        scores.push(solution + "-" + addchars_array[j]);
        if (best < solution) { best = solution }
    }
    console.log("part3: " + best);
}