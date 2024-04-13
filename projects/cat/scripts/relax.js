// Javascript for Relax page 


// cat name generator //

function catNameGenerator() {
    const adjective = document.getElementById('adjective').value;
    const foodColor = document.getElementById('food-color').value;
    const randomIndex = Math.floor(Math.random() * 3);
    const nameCombinations = [
        `${adjective} Whiskers`,
        `${foodColor} Paws`,
        `Captain ${adjective} ${foodColor}`
    ];
    const generatedName = nameCombinations[randomIndex];
    document.getElementById('generated-name').innerHTML = `Your cat's name is: ${generatedName}`;
}


// change cat color //

function colorChange(){
    let sleepyKitty = document.getElementById("sleeping-kitty");
    sleepyKitty.style.backgroundColor = "grey";
}
function colorChange2(){
    let sleepyKitty = document.getElementById("sleeping-kitty");
    sleepyKitty.style.backgroundColor = "white";
}

