let input = "day4.txt";
let inputexample = "day4example.txt";



fetch(input).then(response => response.text()).then(data => {
    let flowerArray = data.split("\r\n");
    console.log(flowerArray);
    part1(flowerArray);//259
    part2(flowerArray);
    part3(flowerArray);
});

function part1(flowerArray) {
    let solution = 0;
    for (let i = 0; i < flowerArray.length; i++) {
        if (flowerArray[i].includes("o")) {
            if (i < flowerArray.length - 401) {
                solution++;
            }
        }
    }
    console.log("part1:", solution);
}

function part2(flowerArray) {
    let side = -1;
    let solution = 0;
    for (let i = flowerArray.length - 1; i > 0; i--) {
        if (side == -1) {
            if (flowerArray[i].includes("-o")) {
                side = 0;
            }
            if (flowerArray[i].includes("o-")) {
                side = 1;
            }
        }
        else {
            if (side == 0) {
                if (flowerArray[i].includes("o-")) {
                    solution++;
                    side = 1;
                }
            } else if (side == 1) {
                if (flowerArray[i].includes("-o")) {
                    solution++;
                    side = 0;
                }
            }
        }
    }
    console.log("part2:", solution);
}

function part3(flowerArray) {
    let solution = 0;

    console.log(flowerArray.join("\n"));

    while (countFlowers(flowerArray) > 0) {
        flowerArray = climbFlower(flowerArray);
        solution++;
    }
    console.log("part3:", solution);
}

function countFlowers(flowerArray) {
    let flowers = 0;
    for (let i = 0; i < flowerArray.length; i++) {
        if (flowerArray[i].includes("-o")) {
            flowers++;
        }
        if (flowerArray[i].includes("o-")) {
            flowers++;
        }
    }
    return flowers;
}


function climbFlower(flowerArray) {
    let side = -1;
    let solution = 0;
    let lastFoundFlower = -1;
    for (let i = flowerArray.length - 1; i > 0; i--) {
        if (side == -1) {
            if (flowerArray[i].includes("-o")) {
                side = 0;
            }
            if (flowerArray[i].includes("o-")) {
                side = 1;
            }
        }
        else {
            if (side == 0) {
                if (flowerArray[i].includes("o-")) {
                    side = 1;
                    //flowerArray[i] = "  |  ";
                    if (lastFoundFlower != -1) {
                        flowerArray[lastFoundFlower] = "  |  ";
                        lastFoundFlower = -1;
                    }
                }
            } else if (side == 1) {
                if (flowerArray[i].includes("-o")) {
                    side = 0;
                    //  flowerArray[i] = "  |  ";
                    if (lastFoundFlower != -1) {
                        flowerArray[lastFoundFlower] = "  |  ";
                        lastFoundFlower = -1;
                    }
                }
            }
        }
        if (flowerArray[i].includes("-o")) {
            lastFoundFlower = i;
        }
        if (flowerArray[i].includes("o-")) {
            lastFoundFlower = i;
        }
    }
    flowerArray[lastFoundFlower] = "  |  ";
    console.log(flowerArray.join("\n"));
    return flowerArray;
}



