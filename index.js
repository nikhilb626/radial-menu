var i=0;
function expand(){
    if(i==0){
        document.getElementById("menu").style.transform="scale(3)";
        document.getElementById("plus").style.transform="rotate(45deg)";
        i=1;
    }
    else{
        document.getElementById("menu").style.transform="scale(0)";
        document.getElementById("plus").style.transform="rotate(0deg)";
        i=0; 
    }
}