let but =document.querySelectorAll(".btn");
let reset=document.querySelector(".set");
let newgamebtn=document.querySelector(".btnss");
let  container=document.querySelector(".msgcon");
let msg1=document.querySelector(".msg");

let turn0=true; //playerx,player0  

let win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let resetgame=() =>
{  
    turn0=true;
     enab(); 
    container.classList.add("hide");

}

but.forEach((btn) => {
    btn.addEventListener("click",()=>{
       
        if(turn0)
        {
            btn.innerText="O";//player0
          
            turn0=false;
        }
        else
        {
            btn.innerText="X";
            turn0=true;
        }
         btn.disabled=true;


         checkWinner();
    });
});
    let dis=() =>
    {
        for(let buts of but)
        {
            buts.disabled=true;
        
    
        }
    }
    let enab=() =>
    {
        for(let buts of but)
        {
            buts.disabled=false;
            buts.innerText="";
    
        }
    };
    let showWinner= (winner) =>
    {
        msg1.innerText=`congratulation the winner ${winner}`;
        container.classList.remove("hide");
        dis();
        
    };
     let checkWinner = () => {
     
        for(let pat of win)
        {
            
            let pos1=but[pat[0]].innerText;
            let pos2=but[pat[1]].innerText;
            
            let pos3=but[pat[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!="")
            {
                if(pos1===pos2 && pos2===pos3)
                {
                    console.log("winner",pos1);
                    showWinner(pos1);
                    
                }
            }
            

        }
    };
  

newgamebtn.addEventListener("click" ,resetgame);
reset.addEventListener("click" ,resetgame)