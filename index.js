let a;
function takeNumber(e){
 a=e;   
 const ids="star-div"+a;
    document.getElementById(ids).style.background="orange";
removebefore(a);
}
function removebefore(a){
    for( i=1;i<=5;i++){
        if(i!=a){
            const ids="star-div"+i;
            document.getElementById(ids).style.background="black";
        }
    }
}
function onSubmit(){
    document.getElementById('mid-val').style.display="none";
    document.getElementById('insert-text').innerHTML="Thankyou for giving rating "+a+" out of 5";
    document.getElementById('mid2-val').style.display="flex";
}
