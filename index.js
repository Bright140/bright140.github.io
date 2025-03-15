function changer() {
    document.getElementById("name").style.color= "red";
    document.getElementById("name").style.fontStyle= "italic";
}
function changer0() {
    document.getElementById("name").style.color= "darkslateblue";
    document.getElementById("name").style.fontStyle= "normal";
}
function WFSE1(a,b,c,d,x,y,z,w) {
    document.getElementById(a).style.backgroundColor= x;
    document.getElementById(a).style.borderColor= y;
    document.getElementById(b).innerHTML= z;
    document.getElementById(b).style.fontStyle= "italic";
    document.getElementById(b).style.color= y;
    document.getElementById(c).innerHTML= w;
    document.getElementById(c).style.fontSize= "20px";
    document.getElementById(c).style.color= y;
    document.getElementById(d).style.display= "block";
}
function WFSE2(a,b,c,d,x,y,z) {
    document.getElementById(a).style.backgroundColor= x;
    document.getElementById(a).style.borderColor= y;
    document.getElementById(b).innerHTML= z;
    document.getElementById(b).style.fontStyle= "normal";
    document.getElementById(b).style.color= y;
    document.getElementById(c).innerHTML= "";
    document.getElementById(d).style.display= "none";
}
function ap0(x) {
    if(x<10) {
        return '0'+ x;
    } else {
        return x;
    }
}
function time() {
    const tn= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const t= new Date();
    tnv= tn[t.getDay()];
    y= t.getFullYear(); m= ap0(t.getMonth()+1); d= ap0(t.getDate());
    h= ap0(t.getHours()); n= ap0(t.getMinutes()); s= ap0(t.getSeconds());
    gmt= tnv+' '+y+'/'+m+'/'+d+' - '+h+':'+n+':'+s;
    document.getElementById("minute").innerHTML= gmt;
}
setInterval(time,1000);
'text3','Synthetic','St3','PS3','white','black','Gosei'
function element1() {
    WFSE1('text1','Wind','Wt1','PW1','Green','rgb(0, 255, 0)','Wind (Phong)','Gentle as Wind');
    WFSE1('text2','Fire','Ft2','PF2','red','rgb(120, 0, 0)','Fire (Hoả)','Strong as Fire');
    WFSE1('text6','Earth','Et6','PE6','yellow','rgb(152, 152, 0)','Earth (Nham)','Hard as Earth');
    WFSE1('text7','Water','Wt7','PW7','blue','rgb(110, 110, 200)','Water (Thủy)','Flexible as Water');
    document.getElementById('text3').style.backgroundColor= 'White';
    document.getElementById('text3').style.borderColor= 'black';
    document.getElementById('text3').style.borderStyle= 'solid';
    document.getElementById('Synthetic').innerHTML= 'Gosei';
    document.getElementById('Synthetic').style.fontStyle= 'normal';
    document.getElementById('Synthetic').style.margin= '90px 0 0 145px';
    document.getElementById('Synthetic').style.color= 'black';
    document.getElementById('St3').innerHTML= '';
}
function element2() {
    WFSE2('text1','Wind','Wt1','PW1','White','Green','Kaze');
    WFSE2('text2','Fire','Ft2','PF2','white','red','Hi');
    WFSE2('text6','Earth','Et6','PE6','White','yellow','Tochi');
    WFSE2('text7','Water','Wt7','PW7','White','blue','Mizu');
    document.getElementById('text3').style.backgroundColor= 'black';
    document.getElementById('text3').style.borderColor= 'red yellow blue green';
    document.getElementById('text3').style.borderStyle= 'dashed';
    document.getElementById('Synthetic').style.fontStyle= 'italic';
    document.getElementById('Synthetic').style.color= 'white';
    document.getElementById('Synthetic').innerHTML= 'Synthetic (Vô Hạn)';
    document.getElementById('Synthetic').style.margin= '60px 0 0 90px';
    document.getElementById('St3').innerHTML= '0 Infinity Element 0';
    document.getElementById('St3').style.fontSize= '20px';
    document.getElementById('St3').style.color= 'white';
}
setInterval(element1,3000);
setInterval(element2,6000);