// first.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';
//    temp=true;
//    console.log(image.innerHTML);
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//          console.log(image.innerHTML);
//     }
//     //console.log(e.target.innerHTML);
//     if((first.innerHTML===second.innerHTML && second.innerHTML===third.innerHTML)||(first.innerHTML===fourth.innerHTML && fourth.innerHTML===seventh.innerHTML)||(first.innerHTML===fifth.innerHTML&&fifth.innerHTML===nineth.innerHTML)){
//         console.log("you won");
//     }
// })
// second.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';
//    temp=true;
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//     }
//     console.log(e.target.innerHTML);
//     if((second.innerHTML===fifth.innerHTML && eighth.innerHTML===fifth.innerHTML)||(first.innerHTML===second.innerHTML && second.innerHTML===third.innerHTML)){
//         console.log("you won");
//     }
// })
// third.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';

//    temp=true;
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//     }
//     console.log(e.target.innerHTML);
//     if((third.innerHTML===fifth.innerHTML&&fifth.innerHTML===seventh.innerHTML)||(third.innerHTML===sixth.innerHTML&&sixth.innerHTML===nineth.innerHTML)||(first.innerHTML===second.innerHTML && second.innerHTML===third.innerHTML)){
//         console.log("you won");
//         setTimeout(()=>{

//             history.go(0);
//         },500);
//     }
// })
// fourth.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';
//    temp=true;
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//     }
//     console.log(e.target.innerHTML);
//     if((first.innerHTML===fourth.innerHTML && fourth.innerHTML===seventh.innerHTML)||(fourth.innerHTML===fifth.innerHTML&&fifth.innerHTML===sixth.innerHTML)){
//         console.log("you won");
//     }
   
// })
// fifth.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';
//    temp=true;
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//     }
//     console.log(e.target.innerHTML);
//     if((second.innerHTML===fifth.innerHTML && eighth.innerHTML===fifth.innerHTML)||(fourth.innerHTML===fifth.innerHTML&&fifth.innerHTML===sixth.innerHTML)||(first.innerHTML===fifth.innerHTML&&fifth.innerHTML===nineth.innerHTML)||(third.innerHTML===fifth.innerHTML&&fifth.innerHTML===seventh.innerHTML)){
//         console.log("you won");
//     }
// })
// sixth.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';
//    temp=true;
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//     }
//     console.log(e.target.innerHTML);
//     if((fourth.innerHTML===fifth.innerHTML&&fifth.innerHTML===sixth.innerHTML)||(third.innerHTML===sixth.innerHTML&&sixth.innerHTML===nineth.innerHTML)){
//      console.log("you won");
//     }
// })
// seventh.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';
//    temp=true;
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//     }
//     console.log(e.target.innerHTML);
//     if((seventh.innerHTML===eighth.innerHTML&&eighth.innerHTML===nineth.innerHTML)||(first.innerHTML===fourth.innerHTML && fourth.innerHTML===seventh.innerHTML)||(third.innerHTML===fifth.innerHTML&&fifth.innerHTML===seventh.innerHTML)){
//         console.log("you won");
//     }
// })
// eighth.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';
//    temp=true;
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//     }
//     console.log(e.target.innerHTML);
//     if((second.innerHTML===fifth.innerHTML && eighth.innerHTML===fifth.innerHTML)||(seventh.innerHTML===eighth.innerHTML&&eighth.innerHTML===nineth.innerHTML)){
//         console.log("you won");
//     }
// })
// nineth.addEventListener("click",(e)=>{
//     if(temp===false){
//    e.target.innerHTML='<img src="img/1.jpg"/>';
//    temp=true;
//     }
//     else{
//          e.target.innerHTML='<img src="img/2.jpg"/>';
//          temp=false;
//     }
//     console.log(e.target.innerHTML);
//     if((seventh.innerHTML===eighth.innerHTML&&eighth.innerHTML===nineth.innerHTML)||(first.innerHTML===fifth.innerHTML&&fifth.innerHTML===nineth.innerHTML)||(third.innerHTML===sixth.innerHTML&&sixth.innerHTML===nineth.innerHTML)){
//         console.log("you won");
//     }
// })
// console.log(first.innerHTML);
// console.log(second.innerHTML);
// console.log(third.innerHTML);
// let validPatterns=[["first","second","third"],["first","fourth","seventh"],["first","fifth","nineth"],["second","fifth","eighth"],["third","sixth","nineth"],["third","fifth","seventh"],["fourth","fifth","sixth"],["seventh","eighth","nineth"]];
let temp=false;
let p=document.querySelector("p");
let boxes = document.querySelectorAll(".box");
let h1 = document.querySelector("h1");
let btn = document.querySelector(".btn");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let winner = false;
let winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6],[2,5,8]];
let xMoves = [];
let oMoves = [];


var sound=new Audio("sounds/mixkit-musical-game-over-959.wav");
sound.play();

boxes.forEach((box, index) => {
    box.addEventListener("click", (e) => {
        if (temp === false) {
            e.target.style.color = "black";
            e.target.innerText = "X";
            temp = true;
            let snd = new Audio("sounds/blue.mp3");
            snd.play();
            xMoves.push(index);
            
            if (xMoves.length === 4) {
                let firstMove = xMoves.shift();
                boxes[firstMove].innerText = "";
                boxes[firstMove].disabled = false;
            }
            if (xMoves.length === 3) {
                boxes[xMoves[0]].style.color = "white";
            }
            p.innerText="O";
            p.style.color="red";
            console.log("xMoves =",xMoves[0]);
        } else {
            e.target.style.color = "red";
            e.target.innerText = "O";
            temp = false;
            let snd = new Audio("sounds/green.mp3");
            snd.play();
            oMoves.push(index);
           
            if (oMoves.length === 4) {
                let firstMove = oMoves.shift();
                boxes[firstMove].innerText = "";
                boxes[firstMove].disabled = false;
            }
            if (oMoves.length === 3 ) {
                boxes[oMoves[0]].style.color = "white";
            }
            console.log("oMoves = ",oMoves[0]);
            p.innerText="X";
            p.style.color="black";
        }
        box.disabled = true;
        checkWinner();
        
    });
});

newBtn.addEventListener("click", () => {
    history.go(0);
});
btn.addEventListener("click", () => {
    history.go(0);
});

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if ((posVal1 !== "") && (posVal2 !== "") && (posVal3 !== "") && (posVal1 === posVal2) && (posVal2 === posVal3)) {
            winner = true;
            setTimeout(() => {
                var sound=new Audio("sounds/mixkit-positive-notification-951.wav");
                sound.play();
                h1.innerText = `Congratulations Winner is ${posVal1}`;
                newBtn.classList.remove("hide");
                msgContainer.classList.remove("msg-container");
                msgContainer.classList.add("ok");
                p.classList.add("vis");
            }, 700);

            for (let box of boxes) {
                box.disabled = true;
            }
        }
    }
};


