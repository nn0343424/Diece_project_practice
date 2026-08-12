const playbtn= document.getElementById("play-btn")

const play = () => {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNumber1);
    
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNumber2);
    
    let randomimg1 = "images/dice" + randomNumber1 + ".png";
    let randomimg2 = "images/dice" + randomNumber2 + ".png";
    
    // console.log(randomimg1);
    // console.log(randomimg2);
    
    const image1 = document.querySelector(".img1");
    const image2 = document.querySelector(".img2");
    
    image1.setAttribute("src", randomimg1);
    image2.setAttribute("src", randomimg2);
    
    const won = document.querySelector("h1");
    
    if (randomNumber1 > randomNumber2) {
        won.innerText = "Player 1 Won";
    } else if (randomNumber1 < randomNumber2) {
        won.innerText = "Player2 Won";
    } else {
        won.innerText = "Tie";
    }
    
}

playbtn.addEventListener("click",play )
    
