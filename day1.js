let input = "day1.txt";
let inputexample = "day1example.txt";


fetch(input).then(response => response.text()).then(data => {
    let lines = data.split("\n");
    lines = lines.map(line => parseInt(line));
    console.log(lines);
    part1(lines);
    part2(lines);
    part3(lines);
}
);

function part1(lines) {
    let solution = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] <60)
        {
            solution += 60 - lines[i];
        }
    }
    console.log("part1:" + solution);
}

function part2(lines) {
    let solution = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] < 60)
        {
            solution += 60 - lines[i];
        }
        else
        {
            solution += (lines[i] - 60)*5;
        }
    }
    console.log("part2:" + solution);
}

function part3(lines) {
    let solution = 0;

    let currentTemperature = lines.slice(0, lines.length / 2);
    let desiredTemperature = lines.slice(lines.length / 2);
    
    for (let i = 0; i < currentTemperature.length; i++) {
        if (currentTemperature[i] < desiredTemperature[i])
        {
            solution += desiredTemperature[i] - currentTemperature[i];
        }
        else
        {
            solution += (currentTemperature[i] - desiredTemperature[i])*5;
        }
    }
    console.log("part3:" + solution);
}