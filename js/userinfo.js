let userUrl = window.location.pathname;
let name =   sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let quel = sessionStorage.getItem("ql")*10;
document.querySelector(".name").innerHTML = name;
if(userUrl!=="/quiz.html"){
document.querySelector(".points").innerHTML = points;
document.querySelector(".percentage").innerHTML = points/quel*100+"%";
}

if(points/quel*100 >= 70 && userUrl=="/result.html"){
    window.setTimeout(function(){
        window.location.href = '/next.html';
     }, 5000);
}


