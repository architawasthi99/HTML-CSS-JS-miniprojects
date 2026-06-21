let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
const soundX = document.querySelector("#soundX");
const soundO = document.querySelector("#soundO");
let newgame=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
console.log(soundX.src);
console.log(soundO.src);
let turnO=true;
 
const winpattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
];

const resetgame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        count++;
        if(turnO){
            box.innerText="O";
            soundO.play();
            turnO=false;
        }else{
            box.innerText="X";
            soundX.play();
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

let gameover=false;
const showWinner=(winner)=>{
    gameover=true;
    msg.innerText=`WINNER WINNER CHICKEN DINNER ${winner} WINS`;
    msgContainer.classList.remove("hide");
    document.body.style.background ="linear-gradient(135deg,#ff9a00,#ff206e,#8338ec)";
    disableBoxes();
}

const showdraw=()=>{
    msg.innerText="MATCH DRAW";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winpattern){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;

            if(pos1val!="" && pos2val!="" && pos3val!=""){
                if(pos1val === pos2val && pos2val ===pos3val){
                    console.log("WINNER",pos1val);
                    showWinner(pos1val);
                }
            }
    }
    if(count===9){
        showdraw();
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);