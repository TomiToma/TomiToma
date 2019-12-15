var tabChance=[];
var i=0,nbs;
var a,b=0,tab=[];
a = Number(prompt("Un nombre entre 15 ainsi que 75."));

for(i;i<200;i++){
    nbs=Math.floor(Math.random()*75-15+1)+15;
    tabChance[i]=nbs;
    if(tabChance[i]===a){
        b++;
    }
}
if(b===1){
    document.write("Le nombre "+a+ " se retrouve une seule fois dans le tableau.");
}
else if(b>1){
    document.write("Le nombre "+a+ " se retrouve " +b+ " fois dans le tableau.");
}
else if(b===0){
    document.write("Le nombre "+a+ " ne se retrouve pas dans le tableau");
}
