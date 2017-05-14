var time=31;//the time given for each search
var delay_counter=0;//This is used to keep track of how many times player crossed the time line.
var t=setInterval(function(){
    time--;
    if(time<0){
        deductPoints();
        time=30;
    }
    if(time<10)
        time="0"+time;
    if(time<=10)
    {
        document.getElementById('timer').style.color="red";
        document.getElementById('timer').style.fontSize="larger";
    }
    else
    {
        document.getElementById('timer').style.color="#303030";
        document.getElementById('timer').style.fontSize="small";
    }
    var result ='00:' + time;   //format seconds back into mm:ss
    document.getElementById('timer').innerHTML = result;
},1000);

