var Maxpoints=100;
var timePenality=0;
function scoreBoardMax(Max_count,wrong_ans_penality)
{
    Maxpoints=parseInt(100*(1/Math.log10(Max_count)))-(5-wrong_ans_penality)-timePenality;
    document.getElementById("max_score").innerHTML=Maxpoints;
    document.getElementById("no_of_attempts").innerHTML=(Max_count-10);
    document.getElementById('points-deducted').innerHTML=timePenality;
}
function deductPoints(){
    timePenality+=4;
}
function finalPoints(){
    document.getElementById("input-container").innerHTML="You Scored :"+Maxpoints;
    $(document).ready(function(){
        $.ajax({
            url:'mongodb://localhost:27017/userdata',
            data: JSON.stringify({
                "points":Maxpoints
            }),
            type :"POST",
            contentType : 'application/json',
            success:function(data){
                window.location.href='wordhunt.html'
            },
            error: function(xhr, status, err){
                console.log(err);
            }
        });
    });
}
// 0-->100
// 1-->96
// 2-->92
// 3-->89
// 4-->87
// 5-->85
// 6-->83
// 7-->81
// 8-->79
// 9-->78
// 10-->76
// 11-->75
// 12-->74
// 13-->73
// 14-->72
// 15-->71