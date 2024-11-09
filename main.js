let img=document.getElementById("img");
let scissors=document.getElementById("scissors");
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let score=document.getElementById("score");
let userscoreElement=document.getElementById("user_score");
let computerscoreElement=document.getElementById("computer_score");
let reset_bin=document.getElementById("reset_btn");
let end_btn=document.getElementById("end_btn");

let imgArray=new Array();
imgArray[0]="img/paper.png";
imgArray[1]="img/rock.png";
imgArray[2]="img/scissors.png";

let a;
let userscore=0;
let computerscore=0;

function imagetime()
{
    a = Math.floor(Math.random()*3);
    img.src=imgArray[a];
}
setInterval(imagetime,150);

// 가위를 클릭
scissors.onclick = ()=>{
    clearInterval(); 
    if(a==0) //승리(컴퓨터:보)
    {
        alert("승리");
        userscore++;
        userscoreElement.textContent=userscore;
    }
    else if(a==2) //비김(컴퓨터:가위)
    {
        alert("비겼습니다.");
    }
    else //패배(컴퓨터:묵)
    {
        alert("패배");
        computerscore++;
        computerscoreElement.textContent=computerscore;
    }
}

// 묵을 클릭
rock.onclick = ()=>{
    clearInterval(); 
    if(a==2) //승리(컴퓨터:가위)
    {
        alert("승리");
        userscore++;
        userscoreElement.textContent=userscore;
    }
    else if(a==1) //비김(컴퓨터:묵)
    {
        alert("비겼습니다.");
    }
    else //패배(컴퓨터:보)
    {
        alert("패배");
        computerscore++;
        computerscoreElement.textContent=computerscore;
    }
}

// 보자기를 클릭
paper.onclick = ()=>{
    clearInterval(); 
    if(a==1) //승리(컴퓨터:묵)
    {
        alert("승리");
        userscore++;
        userscoreElement.textContent=userscore;
    }
    else if(a==0) //비김(컴퓨터:보)
    {
        alert("비겼습니다.")
    }
    else //패배(컴퓨터:가위)
    {
        alert("패배")
        computerscore++;
        computerscoreElement.textContent=computerscore;
    }
}

// 다시 시작하기 클릭
reset_btn.onclick=()=>{
    let check=confirm("다시 시작하시겠습니까?");
    if(check==true)
    {
        location.reload();
    }
}

// 게임종료 클릭
end_btn.onclick=()=>{
    let check=confirm("게임을 종료하시겠습니까?");
    if(check==true)
    {
        alert("게임 승리 : " + userscore + "게임 패배 : " + computerscore);
        location.reload();
    }
}

