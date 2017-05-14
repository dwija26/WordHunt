$(document).ready(function() {
    $('#new_word').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        verify();
        }
    });
    $('#new_word').keypress(function(){
        $('#new_word').css('background','#00FF7F');
    });
    $('#new_word').keyup(function(){
        $('#new_word').css('background','yellow');
    });
});
var words=['about','above','abuse','actor','acute','admit','adopt','adult','after','agent','album','alert','alike','alive','alone','along','alter','among','anger','angle','angry','argue','arise','aside','audio','audit','avoid','badly','baker','basic','beach','began','begin','begun','being','below','bench','birth','black','blame','blind','block','board','bound','brain','brand','bread','break','brief','bring','broad','broke','brown','build','built','buyer','cable','calif','cause','chain','chair','chart','chase','cheap','chest','chief','child','china','chose','claim','clean','clear','close','coast','could','count','court','cover','craft','crash','cream','crime','crowd','crown','curve','daily','dance','dealt','death','debut','delay','depth','doing','doubt','dozen','draft','drawn','dream','drink','drive','drove','dying','early','earth','eight','empty','enjoy','entry','equal','exact','exist','extra','faith','false','fault','fiber','field','fight','final','first','fixed','flash','fluid','focus','force','forth','forty','forum','found','frame','frank','fraud','fresh','front','fruit','giant','given','globe','grace','grade','grand','grant','great','group','grown','guard','guest','guide','heart','heavy','henry','horse','hotel','house','human','ideal','image','index','input','joint','jones','judge','large','laser','later','laugh','layer','learn','least','lewis','light','links','lives','logic','lower','lucky','lunch','magic','major','maker','march','match','meant','media','metal','might','minor','minus','mixed','model','money','month','moral','mount','mouse','mouth','movie','music','newly','night','noise','north','noted','novel','nurse','ocean','often','other','ought','paint','panel','party','phase','phone','pilot','pitch','place','plain','plane','plant','plate','point','pound','power','price','pride','prime','print','prize','proud','prove','quick','quiet','quite','radio','raise','range','rapid','ratio','reach','ready','right','rival','robin','roman','rough','round','route','royal','scale','scope','score','shape','share','sharp','shelf','shift','shirt','shock','short','shown','sight','since','sixth','sixty','sized','slide','smart','smile','smith','smoke','solid','solve','sound','south','space','spare','speak','spend','spent','split','spoke','sport','stage','stake','stand','steam','stick','stock','stone','store','storm','story','strip','stuck','study','style','sugar','suite','super','table','taken','taxes','teach','texas','thank','their','thick','thing','think','third','those','threw','throw','times','tired','today','topic','touch','tough','tower','track','trade','train','trend','trial','tried','tries','truck','truly','twice','under','unity','until','upset','urban','usage','valid','value','video','virus','vital','voice','waste','watch','water','while','white','whole','whose','woman','women','world','worse','worst','worth','would','wound','write','wrong','wrote','yield','young','youth']
r=parseInt((Math.random())*words.length);
var count=0;
var Maxcount=10;
var points=0;
function yourAdmin(){
    alert(words[r]);
}
function verify()
{
    document.getElementById("quit-button").classList.remove("hide");
    count++;
    remakeClass();
    var w,nw="",p=0;
    var f=1,i,j;
    w=words[r].toLowerCase();
    nw=document.getElementById("new_word").value.toLowerCase();
    if(nw=="....."){
        yourAdmin();
    }
    if(nw=='' || nw.length<5){
        alert("Please Enter a 5 letter word");
        f=0;
    }
    else if(f)
        for (i = 0; i < nw.length; i++) {
            var _=0,cnt=0;
            while(_<nw.length){
                if(nw[i]==nw[_])
                    cnt++;
                _++;
            }
            if(cnt>1){
                alert("The Letters cannot REPEAT");
                f=0;
                break;
            }
        }
    if(f)
    {
        for(i=0;i<5;i++)
        {
            f=1;
            for(j=0;j<5;j++)
            {
                if(nw[i]==w[j])
                 {
                    if(i==j)
                     {
                        switch(i)
                        {
                        case 0:
                            document.getElementById("b1").style.background="lightgreen";
                            document.getElementById("b1").value=nw[i];
                            document.getElementById("l1").value=nw[i];break;
                        case 1:
                            document.getElementById("b2").style.background="lightgreen";
                            document.getElementById("b2").value=nw[i];
                            document.getElementById("l2").value=nw[i];break;
                        case 2:
                            document.getElementById("b3").style.background="lightgreen";
                            document.getElementById("b3").value=nw[i];
                            document.getElementById("l3").value=nw[i];break;
                        case 3:
                            document.getElementById("b4").style.background="lightgreen";
                            document.getElementById("b4").value=nw[i];
                            document.getElementById("l4").value=nw[i];break;
                        case 4:
                            document.getElementById("b5").style.background="lightgreen";
                            document.getElementById("b5").value=nw[i];
                            document.getElementById("l5").value=nw[i];break;
                        //default is not required
                        }
                    }
                    else
                    {
                        switch(i)
                        {
                            case 0:document.getElementById("b1").value=nw[i];
                                document.getElementById("b1").style.background="yellow";
                                break;
                            case 1:document.getElementById("b2").value=nw[i];
                                document.getElementById("b2").style.background="yellow";
                                break;
                            case 2:
                                document.getElementById("b3").value=nw[i];
                                document.getElementById("b3").style.background="yellow";
                                break;
                            case 3:document.getElementById("b4").value=nw[i];
                                document.getElementById("b4").style.background="yellow";
                                break;
                            case 4:document.getElementById("b5").value=nw[i];
                                document.getElementById("b5").style.background="yellow";
                                break;
                        }
                    }
                    f=0;
                }
                else if(j==4 && f)
                {
                    switch(i)
                    {
                    case 0:
                        document.getElementById("b1").style.background="#FF0000";
                        document.getElementById("b1").value=nw[i];
                        break;
                    case 1:
                        document.getElementById("b2").style.background="#FF0000";
                        document.getElementById("b2").value=nw[i];
                        break;
                    case 2:
                        document.getElementById("b3").style.background="#FF0000";
                        document.getElementById("b3").value=nw[i];
                        break;
                    case 3:
                        document.getElementById("b4").style.background="#FF0000";
                        document.getElementById("b4").value=nw[i];
                        break;
                    case 4:
                        document.getElementById("b5").style.background="#FF0000";
                        document.getElementById("b5").value=nw[i];
                        break;
                    }
                }
            }
        document.getElementById('boxes').classList.remove("hide");
        }
        if(nw==w)
            {
                displayResart();
            }
        for(i=0;i<5;i++)
            for(j=0;j<5;j++)
                if(nw[i] == w[j]){p++;}
    Maxcount++;
    scoreBoardMax(Maxcount,p);
    }
}
function gameRules(){
    $('#rule').fadeToggle('slow');
}
function displayResart(){
    document.getElementById("clue-containerId").className="clue-container hide";
    document.getElementById("new_word").readOnly=true;
    document.getElementById("new_word").value="Resart :)";
    document.getElementById("boxes").className="clue-boxes flip animated hide";
    document.getElementById("info").className="btn btn-info bounceInRight animated hide";
    document.getElementById("play_rule").className="info-button-container hide";
    document.getElementById("msg").classList.remove("hide");
    document.getElementById("reset").classList.remove("hide");
    document.getElementById("time-display").className="time-container hide";
    document.getElementById("quit-button").className="quit-button hide";
    finalPoints();
    scoreBoard(count);
}

// function displayLost(){
//     document.getElementById("clue-containerId").className="clue-container hide";
//     document.getElementById("new_word").readOnly=true;
//     document.getElementById("new_word").value="Resart :)";
//     document.getElementById("boxes").className="clue-boxes flip animated hide";
//     document.getElementById("info").className="btn btn-info bounceInRight animated hide";
//     document.getElementById("play_rule").className="info-button-container hide";
//     document.getElementById("lost-msg").classList.remove("hide");
//     document.getElementById("LOSTreset").classList.remove("hide")
// }

function focusInput(){
    document.getElementById("new_word").focus();
}
function hideClue(){
    document.getElementById("new_word").value='';
    document.getElementById("boxes").className="clue-boxes flip animated hide";
    $('#msg-text').fadeToggle('slow');
}
function remakeClass(){
    document.getElementById("b1").style.background="white";
    document.getElementById("b2").style.background="white";
    document.getElementById("b3").style.background="white";
    document.getElementById("b4").style.background="white";
    document.getElementById("b5").style.background="white";
}
function quits(){
    document.getElementById("clue-containerId").className="clue-container hide";
    document.getElementById("new_word").readOnly=true;
    document.getElementById("new_word").value="Restart :)";
    document.getElementById("boxes").className="clue-boxes flip animated hide";
    document.getElementById("info").className="btn btn-info bounceInRight animated hide";
    document.getElementById("play_rule").className="info-button-container hide";
    document.getElementById("quit-msg").classList.remove("hide");
    document.getElementById("reset").classList.remove("hide");
    document.getElementById("time-display").className="time-container hide";
    document.getElementById("word").classList.remove("hide");
    document.getElementById("pword").classList.remove("hide");
    document.getElementById("word").innerHTML=words[r].toUpperCase();
    document.getElementById("quit-button").className="quit-button hide";
    document.getElementById("input-container").innerHTML="You Scored : 00";
}
