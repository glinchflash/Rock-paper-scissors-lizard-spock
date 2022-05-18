//variable list
/*
const optionArr = ["rock","paper","scissors","lizard","spock"];
const imgArr = ["images/rock.jpg","images/paper.png","images/scissor.jpg","images/lizard.jpg","images/spock.png"];
*/

let playersOption;
let computerOption;



//ask users name
let playerName = prompt("Please enter your name"); //DON'T FORGET TO ENABLE AGAIN!

// display users name on screen in players id


// viewing your choice
document.getElementById('rock').addEventListener('click', () =>{
    playersOption = 0;
    document.getElementById('imgplayer').src = "images/rock.jpg"
})

document.getElementById('paper').addEventListener('click', () =>{
    playersOption = 1;
    document.getElementById('imgplayer').src = "images/paper.png"
})

document.getElementById('scissors').addEventListener('click', () =>{
    playersOption = 2;
    document.getElementById('imgplayer').src = "images/scissor.jpg"
})

document.getElementById('lizard').addEventListener('click', () =>{
    playersOption = 3;
    document.getElementById('imgplayer').src = "images/lizard.jpg"
})

document.getElementById('spock').addEventListener('click', () =>{
    playersOption = 4;
    document.getElementById('imgplayer').src = "images/spock.png"
})


//select sign for computer
document.getElementById('generate').addEventListener('click', () => {
    computerOption = Math.round(Math.random()*4);
    console.log(computerOption);
    if (computerOption === 0){
        document.getElementById('imgpc').src = "images/rock.jpg";
    } else if (computerOption === 1){
        document.getElementById('imgpc').src = "images/paper.png";
    } else if (computerOption === 2){
        document.getElementById('imgpc').src = "images/scissor.jpg";
    }else if (computerOption === 3){
        document.getElementById('imgpc').src = "images/lizard.jpg";
    }else {
        document.getElementById('imgpc').src = "images/spock.png";
    }
} )


//calculate winner
document.getElementById('win').addEventListener('click', winning);

function winning() {
    if (playersOption === computerOption){
        document.getElementById('result').innerHTML = "DRAW!"
    }else if(computerOption === 0 && playersOption === 1 || computerOption === 0 && playersOption === 4){
        document.getElementById('result').innerHTML = playerName + " WINS!"
    }
    else if(computerOption === 1 && playersOption === 2 || computerOption === 1 && playersOption ===3 ){
        document.getElementById('result').innerHTML = playerName + " WINS!"
    }
    else if(computerOption === 2 && playersOption === 0 || computerOption === 2 && playersOption === 4){
        document.getElementById('result').innerHTML = playerName + " WINS!"
    }
    else if(computerOption === 3 && playersOption === 0 || computerOption === 3 && playersOption ===2){
        document.getElementById('result').innerHTML = playerName + " WINS!"
    }
    else if (computerOption === 4 && playersOption === 1 || computerOption === 4 && playersOption === 3){
        document.getElementById('result').innerHTML = playerName + " WINS!"
    }
    else{
        document.getElementById('result').innerHTML = "Computer WINS!"
    }
}
