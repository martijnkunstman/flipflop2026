let input = "day2.txt";
let inputexample = "day2example.txt";

let wallTemperatureArray = [];


fetch(input).then(response => response.text()).then(data => {
    for (let i = 0; i < 100; i++) {
        wallTemperatureArray.push(0);
    }
    console.log(wallTemperatureArray);
    let chars = data.split("");
    console.log(chars);
    part1(chars);
    part2(chars);
    part3(chars);
}
);

function part1(chars) {
    let solution = 0;
    let position = 0;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == "<") {
            position--;
        }
        if (chars[i] == ">") {
            position++;
        }
        if (position < 0) {
            position = 99;
        }
        if (position > 99) {
            position = 0;
        }
        wallTemperatureArray[position]++;
    }
    console.log(wallTemperatureArray);
    let currentsegmentnumberwithhighesttemperature = 0;
    let highesttemperature = 0;
    for (let i = 0; i < wallTemperatureArray.length; i++) {
        if (wallTemperatureArray[i] > highesttemperature) {
            highesttemperature = wallTemperatureArray[i];
            currentsegmentnumberwithhighesttemperature = i;
        }
    }
    currentsegmentnumberwithhighesttemperature++;
    console.log("highesttemperature:" + highesttemperature);
    console.log("currentsegmentnumberwithhighesttemperature:" + currentsegmentnumberwithhighesttemperature);
    console.log("part1:" + (highesttemperature * currentsegmentnumberwithhighesttemperature));
}

function part2(chars) {
    let solution = 0;
    let positionWall = 0;
    let postionLaser = 0;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == "<") {
            postionLaser--;
        }
        if (chars[i] == ">") {
            postionLaser++;
        }
        if (postionLaser < 0) {
            postionLaser = 99;
        }
        if (postionLaser > 99) {
            postionLaser = 0;
        }
        //---
        if (chars[chars.length - 1 - i] == "<") {
            positionWall--;
        }
        if (chars[chars.length - 1 - i] == ">") {
            positionWall++;
        }
        if (positionWall < 0) {
            positionWall = 99;
        }
        if (positionWall > 99) {
            positionWall = 0;
        }
        if (positionWall == postionLaser) {
            solution++;
        }
    }
    console.log("positionWall:" + positionWall);
    console.log("postionLaser:" + postionLaser);
    console.log("part2:" + solution);
}

function part3(chars) {
    let solution = 0;
    let position = 0;
    let wallTemperatureArray = [];
    for (let i = 0; i < 100; i++) {
        wallTemperatureArray.push({ temperature: 0, index: i});
    }

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == "<") {
            position--;
        }
        if (chars[i] == ">") {
            position++;
        }
        if (position < 0) {
            position = 99;
        }
        if (position > 99) {
            position = 0;
        }
        if (chars[chars.length - 1 - i] == "<") {
            //remove first element of wallTemperatureArray and add it to the end of wallTemperatureArray
            wallTemperatureArray.push(wallTemperatureArray.shift());
        }
        if (chars[chars.length - 1 - i] == ">") {
            //shift wallTemperatureArray to right
            wallTemperatureArray.unshift(wallTemperatureArray.pop());
        }
        wallTemperatureArray[position].temperature++;
    }

    console.log(wallTemperatureArray);
    let currentsegmentnumberwithhighesttemperature = 0;
    let highesttemperature = 0;
    for (let i = 0; i < wallTemperatureArray.length; i++) {
        if (wallTemperatureArray[i].temperature > highesttemperature) {
            highesttemperature = wallTemperatureArray[i].temperature;
            currentsegmentnumberwithhighesttemperature = wallTemperatureArray[i].index;
        }
    }
    currentsegmentnumberwithhighesttemperature++;
    console.log("highesttemperature:" + highesttemperature);
    console.log("currentsegmentnumberwithhighesttemperature:" + currentsegmentnumberwithhighesttemperature);
    console.log("part3:" + (highesttemperature * currentsegmentnumberwithhighesttemperature));
}