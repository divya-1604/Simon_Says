let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let h2=document.querySelector('h2');
function startGame(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
}
let btns=["yellow","red","purple","green"];
function addStartListener(){
    document.addEventListener('keypress',startGame)
    document.addEventListener('touchstart', startGame);
}
addStartListener();
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score is <b>${level}</b> <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor="white";
        }, 250);
        // setTimeout(),);
        reset();
    }
   
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}