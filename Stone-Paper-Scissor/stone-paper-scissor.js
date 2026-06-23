let userscore=0;
let botscore=0;

let userscorepara=document.querySelector("#user-score");
let botscorepara=document.querySelector("#bot-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const drawgame=()=>{
    console.log("GAME IS DRAW")
    msg.innerText="DRAW";
}

const showWinner=(userwin,userchoice,botchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("YOU WON!");
        msg.innerText=`YOU WON! Your ${userchoice} beats ${botchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        botscore++;
        botscorepara.innerText=botscore;
        console.log("YOU LOSE!");
        msg.innerText=`YOU LOSE! Bot ${botchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const botgenerate=()=>{
    let options=["rock","paper","scissor"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
}

const playgame=(userchoice)=>{
    console.log("USER CHOICE=", userchoice);
    const botchoice=botgenerate();
    console.log("COMPUTER CHOICE = ", botchoice);

    if(userchoice===botchoice){
        drawgame();
    } else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=botchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=botchoice==="rock"?true:false;
        }
        else{
            userwin=botchoice==="paper"?true:false;
        }
        showWinner(userwin,userchoice,botchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
});