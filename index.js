
let count = 0;

document.getElementById("increment").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}
