var moveleft=moveright;
var moveright=0;
var moveup=0;
var movedown=0;
status_right= "moving";
status_left= "moving";
status_up= "moving";
status_down= "moving";
var interval_right;
var interval_left;
var interval_up;
var interval_down;


function interval_right(){
    if(status_right=="moving" || status_right=="stop_left"){
                    interval_right=setInterval(right,10); 
                    status_left="stop";
     
    }
}
function interval_left(){
    if(status_left="moving"){
                    interval_left=setInterval(left,10); 
                   status_right="stop_left";
     
    }
}

function right(){
    if(status_right=="moving"){
  moveright=moveright+1;
document.querySelector(".snake").style.transform=`translateX(${moveright}px)`;
    }
if(moveright==380){
    status_right="stop";
}
    }

    function left(){
        if(status_left=="moving"){
      moveleft--;
    document.querySelector(".snake").style.transform=`translateX(${moveleft}px)`;
        }
    if(moveleft==0){
        status_left="stop";
    }
        }

 
    
// function stop(){
// if(status=="moving" && moveright==20){
//     status="stop";
//     clearInterval(interval);
// }
// }
// setinterval(stop,1);