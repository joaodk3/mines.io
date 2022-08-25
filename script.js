// Declares all squares
let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");
let square5=  document.getElementById("square5");
let square6 = document.getElementById("square6");
let square7 = document.getElementById("square7");
let square8 = document.getElementById("square8");
let square9 = document.getElementById("square9");
let square10 = document.getElementById("square10");
let square11 = document.getElementById("square11");
let square12 = document.getElementById("square12"); 
let square13 = document.getElementById("square13");
let square14 = document.getElementById("square14"); 
let square15 = document.getElementById("square15"); 
let square16 = document.getElementById("square16");
let square17=  document.getElementById("square17"); 
let square18 = document.getElementById("square18");
let square19 = document.getElementById("square19");
let square20 = document.getElementById("square20");
let square21 = document.getElementById("square21");
let square22 = document.getElementById("square22");
let square23 = document.getElementById("square23");
let square24 = document.getElementById("square24");
let square25 = document.getElementById("square25");

// Declares the Bombs
let bomb1 = document.getElementById("bomb1");
let bomb2 = document.getElementById("bomb2");
let bomb3 = document.getElementById("bomb3");
let bomb4 = document.getElementById("bomb4");
let bomb5 = document.getElementById("bomb5");
let bomb6 = document.getElementById("bomb6");
let bomb7 = document.getElementById("bomb7");
let bomb8 = document.getElementById("bomb8");
let bomb9 = document.getElementById("bomb9");
let bomb10 = document.getElementById("bomb10");
let bomb11 = document.getElementById("bomb11");
let bomb12 = document.getElementById("bomb12");
let bomb13 = document.getElementById("bomb13");
let bomb14 = document.getElementById("bomb14");
let bomb15 = document.getElementById("bomb15");
let bomb16 = document.getElementById("bomb16");
let bomb17 = document.getElementById("bomb17");
let bomb18 = document.getElementById("bomb18");
let bomb19 = document.getElementById("bomb19");
let bomb20 = document.getElementById("bomb20");
let bomb21 = document.getElementById("bomb21");
let bomb22 = document.getElementById("bomb22");
let bomb23 = document.getElementById("bomb23");
let bomb24 = document.getElementById("bomb24");
let bomb25 = document.getElementById("bomb25");

// Declares the Gems

let gem1 = document.getElementById('gem1');
let gem2 = document.getElementById('gem2');
let gem3 = document.getElementById('gem3');
let gem4 = document.getElementById('gem4');
let gem5 = document.getElementById('gem5');
let gem6 = document.getElementById('gem6');
let gem7 = document.getElementById('gem7');
let gem8 = document.getElementById('gem8');
let gem9 = document.getElementById('gem9');
let gem10 = document.getElementById('gem10');
let gem11 = document.getElementById('gem11');
let gem12 = document.getElementById('gem12');
let gem13 = document.getElementById('gem13');
let gem14 = document.getElementById('gem14');
let gem15 = document.getElementById('gem15');
let gem16 = document.getElementById('gem16');
let gem17 = document.getElementById('gem17');
let gem18 = document.getElementById('gem18');
let gem19 = document.getElementById('gem19');
let gem20 = document.getElementById('gem20');
let gem21 = document.getElementById('gem21');
let gem22 = document.getElementById('gem22');
let gem23 = document.getElementById('gem23');
let gem24 = document.getElementById('gem24');
let gem25 = document.getElementById('gem25');

// Declares de Initial Question Marks

let qm1 = document.getElementById('qm1');
let qm2 = document.getElementById('qm2');
let qm3 = document.getElementById('qm3');
let qm4 = document.getElementById('qm4');
let qm5 = document.getElementById('qm5');
let qm6 = document.getElementById('qm6');
let qm7 = document.getElementById('qm7');
let qm8 = document.getElementById('qm8');
let qm9 = document.getElementById('qm9');
let qm10 = document.getElementById('qm10');
let qm11 = document.getElementById('qm11');
let qm12 = document.getElementById('qm12');
let qm13 = document.getElementById('qm13');
let qm14 = document.getElementById('qm14');
let qm15 = document.getElementById('qm15');
let qm16 = document.getElementById('qm16');
let qm17 = document.getElementById('qm17');
let qm18 = document.getElementById('qm18');
let qm19 = document.getElementById('qm19');
let qm20 = document.getElementById('qm20');
let qm21 = document.getElementById('qm21');
let qm22 = document.getElementById('qm22');
let qm23 = document.getElementById('qm23');
let qm24 = document.getElementById('qm24');
let qm25 = document.getElementById('qm25');

// SideBar Buttons Declaration

let playButton = document.getElementById('play');
let resetButton = document.getElementById('reset');

// Reset Button

let reset = function() {
    bomb1.style.display = "none";
    bomb2.style.display = "none";
    bomb3.style.display = "none";
    bomb4.style.display = "none";
    bomb5.style.display = "none";
    bomb6.style.display = "none";
    bomb7.style.display = "none";
    bomb8.style.display = "none";
    bomb9.style.display = "none";
    bomb10.style.display = "none";
    bomb11.style.display = "none";
    bomb12.style.display = "none";
    bomb13.style.display = "none";
    bomb14.style.display = "none";
    bomb15.style.display = "none";
    bomb16.style.display = "none";
    bomb17.style.display = "none";
    bomb18.style.display = "none";
    bomb19.style.display = "none";
    bomb20.style.display = "none";
    bomb21.style.display = "none";
    bomb22.style.display = "none";
    bomb23.style.display = "none";
    bomb24.style.display = "none";
    bomb25.style.display = "none";

    gem1.style.display = "none";
    gem2.style.display = "none";
    gem3.style.display = "none";
    gem4.style.display = "none";
    gem5.style.display = "none";
    gem6.style.display = "none";
    gem7.style.display = "none";
    gem8.style.display = "none";
    gem9.style.display = "none";
    gem10.style.display = "none";
    gem11.style.display = "none";
    gem12.style.display = "none";
    gem13.style.display = "none";
    gem14.style.display = "none";
    gem15.style.display = "none";
    gem16.style.display = "none";
    gem17.style.display = "none";
    gem18.style.display = "none";
    gem19.style.display = "none";
    gem20.style.display = "none";
    gem21.style.display = "none";
    gem22.style.display = "none";
    gem23.style.display = "none";
    gem24.style.display = "none";
    gem25.style.display = "none";

    qm1.style.display = "block"
    qm2.style.display = "block"
    qm3.style.display = "block"
    qm4.style.display = "block"
    qm5.style.display = "block"
    qm6.style.display = "block"
    qm7.style.display = "block"
    qm8.style.display = "block"
    qm9.style.display = "block"
    qm10.style.display = "block"
    qm11.style.display = "block"
    qm12.style.display = "block"
    qm13.style.display = "block"
    qm14.style.display = "block"
    qm15.style.display = "block"
    qm16.style.display = "block"
    qm17.style.display = "block"
    qm18.style.display = "block"
    qm19.style.display = "block"
    qm20.style.display = "block"
    qm21.style.display = "block"
    qm22.style.display = "block"
    qm23.style.display = "block"
    qm24.style.display = "block"
    qm25.style.display = "block"
}

resetButton.onclick = reset;

// Probabilities calculations 

let probability = function() {
    return Math.random(1);
}

console.log(probability);

// Square Activation - BOMB 1

let bomb1_Activation = function() {

    if(qm1.style.display != "none") {
        if (probability() > 0.5) {
            qm1.style.display = 'none';
            bomb1.style.display = 'flex';
        } else {
            qm1.style.display = 'none';
            gem1.style.display = 'flex'; 
        } 
    }
}

square1.onclick = bomb1_Activation;

// Square Activation - BOMB 2

let bomb2_Activation = function() {

    if(qm2.style.display != "none") {
        if (probability() > 0.5) {
            qm2.style.display = 'none';
            bomb2.style.display = 'flex';
        } else {
            qm2.style.display = 'none';
            gem2.style.display = 'flex'; 
        } 
    }
}

square2.onclick = bomb2_Activation;

// Square Activation - BOMB 3

let bomb3_Activation = function() {

    if(qm3.style.display != "none") {
        if (probability() > 0.5) {
            qm3style.display = 'none';
            bomb3.style.display = 'flex';
        } else {
            qm3.style.display = 'none';
            gem3.style.display = 'flex'; 
        } 
    }
}

square3.onclick = bomb3_Activation;

// Square Activation - BOMB 4

let bomb4_Activation = function() {

    if(qm4.style.display != "none") {
        if (probability() > 0.5) {
            qm4.style.display = 'none';
            bomb4.style.display = 'flex';
        } else {
            qm4.style.display = 'none';
            gem4.style.display = 'flex'; 
        } 
    }
}

square4.onclick = bomb4_Activation;

// Square Activation - BOMB 5

let bomb5_Activation = function() {

    if(qm5.style.display != "none") {
        if (probability() > 0.5) {
            qm5.style.display = 'none';
            bomb5.style.display = 'flex';
        } else {
            qm5.style.display = 'none';
            gem5.style.display = 'flex'; 
        } 
    }
}

square5.onclick = bomb5_Activation;

// Square Activation - BOMB 6

let bomb6_Activation = function() {

    if(qm6.style.display != "none") {
        if (probability() > 0.5) {
            qm6.style.display = 'none';
            bomb6.style.display = 'flex';
        } else {
            qm6.style.display = 'none';
            gem6.style.display = 'flex'; 
        } 
    }
}

square6.onclick = bomb6_Activation;

// Square Activation - BOMB 7

let bomb7_Activation = function() {

    if(qm7.style.display != "none") {
        if (probability() > 0.5) {
            qm7.style.display = 'none';
            bomb7.style.display = 'flex';
        } else {
            qm7.style.display = 'none';
            gem7.style.display = 'flex'; 
        } 
    }
}

square7.onclick = bomb7_Activation;

// Square Activation - BOMB 8

let bomb8_Activation = function() {

    if(qm8.style.display != "none") {
        if (probability() > 0.5) {
            qm8.style.display = 'none';
            bomb8.style.display = 'flex';
        } else {
            qm8.style.display = 'none';
            gem8.style.display = 'flex'; 
        } 
    }
}

square8.onclick = bomb8_Activation;

// Square Activation - BOMB 9

let bomb9_Activation = function() {

    if(qm9.style.display != "none") {
        if (probability() > 0.5) {
            qm9.style.display = 'none';
            bomb9.style.display = 'flex';
        } else {
            qm9.style.display = 'none';
            gem9.style.display = 'flex'; 
        } 
    }
}

square9.onclick = bomb9_Activation;

// Square Activation - BOMB 10

let bomb10_Activation = function() {

    if(qm10.style.display != "none") {
        if (probability() > 0.5) {
            qm10.style.display = 'none';
            bomb10.style.display = 'flex';
        } else {
            qm10.style.display = 'none';
            gem10.style.display = 'flex'; 
        } 
    }
}

square10.onclick = bomb10_Activation;

// Square Activation - BOMB 11

let bomb11_Activation = function() {

    if(qm11.style.display != "none") {
        if (probability() > 0.5) {
            qm11.style.display = 'none';
            bomb11.style.display = 'flex';
        } else {
            qm11.style.display = 'none';
            gem11.style.display = 'flex'; 
        } 
    }
}

square11.onclick = bomb11_Activation;

// Square Activation - BOMB 12

let bomb12_Activation = function() {

    if(qm12.style.display != "none") {
        if (probability() > 0.5) {
            qm12.style.display = 'none';
            bomb12.style.display = 'flex';
        } else {
            qm12.style.display = 'none';
            gem12.style.display = 'flex'; 
        } 
    }
}

square12.onclick = bomb12_Activation;

// Square Activation - BOMB 13

let bomb13_Activation = function() {

    if(qm13.style.display != "none") {
        if (probability() > 0.5) {
            qm13.style.display = 'none';
            bomb13.style.display = 'flex';
        } else {
            qm13.style.display = 'none';
            gem13.style.display = 'flex'; 
        } 
    }
}

square13.onclick = bomb13_Activation;

// Square Activation - BOMB 14

let bomb14_Activation = function() {

    if(qm14.style.display != "none") {
        if (probability() > 0.5) {
            qm14.style.display = 'none';
            bomb14.style.display = 'flex';
        } else {
            qm14.style.display = 'none';
            gem14.style.display = 'flex'; 
        } 
    }
}

square14.onclick = bomb14_Activation;

// Square Activation - BOMB 15

let bomb15_Activation = function() {

    if(qm15.style.display != "none") {
        if (probability() > 0.5) {
            qm15.style.display = 'none';
            bomb15.style.display = 'flex';
        } else {
            qm15.style.display = 'none';
            gem15.style.display = 'flex'; 
        } 
    }
}

square15.onclick = bomb15_Activation;

// Square Activation - BOMB 16

let bomb16_Activation = function() {

    if(qm16.style.display != "none") {
        if (probability() > 0.5) {
            qm16.style.display = 'none';
            bomb16.style.display = 'flex';
        } else {
            qm16.style.display = 'none';
            gem16.style.display = 'flex'; 
        } 
    }
}

square16.onclick = bomb16_Activation;

// Square Activation - BOMB 17

let bomb17_Activation = function() {

    if(qm17.style.display != "none") {
        if (probability() > 0.5) {
            qm17.style.display = 'none';
            bomb17.style.display = 'flex';
        } else {
            qm17.style.display = 'none';
            gem17.style.display = 'flex'; 
        } 
    }
}

square17.onclick = bomb17_Activation;

// Square Activation - BOMB 18

let bomb18_Activation = function() {

    if(qm18.style.display != "none") {
        if (probability() > 0.5) {
            qm18.style.display = 'none';
            bomb18.style.display = 'flex';
        } else {
            qm18.style.display = 'none';
            gem18.style.display = 'flex'; 
        } 
    }
}

square18.onclick = bomb18_Activation;

// Square Activation - BOMB 19

let bomb19_Activation = function() {

    if(qm19.style.display != "none") {
        if (probability() > 0.5) {
            qm19.style.display = 'none';
            bomb19.style.display = 'flex';
        } else {
            qm19.style.display = 'none';
            gem19.style.display = 'flex'; 
        } 
    }
}

square19.onclick = bomb19_Activation;

// Square Activation - BOMB 20

let bomb20_Activation = function() {

    if(qm20.style.display != "none") {
        if (probability() > 0.5) {
            qm20.style.display = 'none';
            bomb20.style.display = 'flex';
        } else {
            qm20.style.display = 'none';
            gem20.style.display = 'flex'; 
        } 
    }
}

square20.onclick = bomb20_Activation;

// Square Activation - BOMB 21

let bomb21_Activation = function() {

    if(qm21.style.display != "none") {
        if (probability() > 0.5) {
            qm21.style.display = 'none';
            bomb21.style.display = 'flex';
        } else {
            qm21.style.display = 'none';
            gem21.style.display = 'flex'; 
        } 
    }
}

square21.onclick = bomb21_Activation;

// Square Activation - BOMB 22

let bomb22_Activation = function() {

    if(qm22.style.display != "none") {
        if (probability() > 0.5) {
            qm22.style.display = 'none';
            bomb22.style.display = 'flex';
        } else {
            qm22.style.display = 'none';
            gem22.style.display = 'flex'; 
        } 
    }
}

square22.onclick = bomb22_Activation;

// Square Activation - BOMB 23

let bomb23_Activation = function() {

    if(qm23.style.display != "none") {
        if (probability() > 0.5) {
            qm23.style.display = 'none';
            bomb23.style.display = 'flex';
        } else {
            qm23.style.display = 'none';
            gem23.style.display = 'flex'; 
        } 
    }
}

square23.onclick = bomb23_Activation;

// Square Activation - BOMB 24

let bomb24_Activation = function() {

    if(qm24.style.display != "none") {
        if (probability() > 0.5) {
            qm24.style.display = 'none';
            bomb24.style.display = 'flex';
        } else {
            qm24.style.display = 'none';
            gem24.style.display = 'flex'; 
        } 
    }
}

square24.onclick = bomb24_Activation;

// Square Activation - BOMB 2

let bomb25_Activation = function() {

    if(qm25.style.display != "none") {
        if (probability() > 0.5) {
            qm25.style.display = 'none';
            bomb25.style.display = 'flex';
        } else {
            qm25.style.display = 'none';
            gem25.style.display = 'flex'; 
        } 
    }
}

square25.onclick = bomb25_Activation;

// Square Activation - RIGHT


// Play Button

let playTest = function() {
    playButton.style.backgroundColor = "red";
}

playButton.onclick = playTest;