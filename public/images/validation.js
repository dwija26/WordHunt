var y=false;
function display(){
    alert("Invalid Input");
}
function verifyEmail(){
    e=document.getElementById("email").value;
    re=/^[a-Z0-9._%+-]+@[a-Z0-9.-]+\.[a-Z]{2,}$/;
    if(re.test(e)){
        var y=true;
        alert("matched!!");
        //document.getElementById("clue_display").innerHTML=e+" is invalid Email id";
    }
    else
        alert("Invalid Email!!");
    alert("all gud");
}
function verifyName(){
    n=document.getElementById("name").value;
    re=/[a-Z]+/
    if(re.test(n)){
        var y=true;
        alert("matched");
    }
    else{
        alert("did not match!!")
    }
}

function disappear(){
    document.getElementById(".")
}
