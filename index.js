function changer() {
    document.getElementById("name").style.color= "red";
    document.getElementById("name").style.fontStyle= "italic";
}
function changer0() {
    document.getElementById("name").style.color= "darkslateblue";
    document.getElementById("name").style.fontStyle= "normal";
}
function changer1() {
    document.getElementById("like").innerHTML= '&#10084';
}
function changer2() {
    document.getElementById("like").innerHTML= 'love';
}
function apha(s) {
    document.getElementById("title-pro").innerHTML= s; 
}
function namers() {
    const stri= ['P','Ph','Pha','Phan','Phan S','Phan Su','Phan Su B','Phan Su Bi','Phan Su Bin'];
    const stra= ['','P','Ph','Pha','Phan','Phan S','Phan Su','Phan Su B','Phan Su Bi'];
    setTimeout(apha,0,stri[0]); 
    setTimeout(apha,200,stri[1]); 
    setTimeout(apha,400,stri[2]); 
    setTimeout(apha,600,stri[3]);
    setTimeout(apha,800,stri[4]); 
    setTimeout(apha,1000,stri[5]); 
    setTimeout(apha,1200,stri[6]); 
    setTimeout(apha,1400,stri[7]);
    setTimeout(apha,1600,stri[8]);
    setTimeout(apha,1800,stra[7]); 
    setTimeout(apha,2000,stra[6]); 
    setTimeout(apha,2200,stra[5]); 
    setTimeout(apha,2400,stra[4]);
    setTimeout(apha,2600,stra[3]); 
    setTimeout(apha,2800,stra[2]); 
    setTimeout(apha,3000,stra[1]); 
    setTimeout(apha,3200,stra[0]);
}
setInterval(namers,3600);
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
function color(x) {
    const c= ["red","orange","yellow","green","blue","indigo","pink"];
    return c[x];
}
function time() {
    const tn= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const t= new Date();
    tnv= tn[t.getDay()];
    y= t.getFullYear(); m= ap0(t.getMonth()+1); d= ap0(t.getDate());
    h= ap0(t.getHours()); n= ap0(t.getMinutes()); s= ap0(t.getSeconds());
    gmt= tnv+' '+y+'/'+m+'/'+d+' - '+h+':'+n+':'+s;
    document.getElementById("minute").innerHTML= gmt;
    document.getElementById("minute").style.color= color(t.getDay());
}
setInterval(time,1000);
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
function random(min,max) {
    return Math.floor(Math.random()*(max-min+1));
}
function chosse(x) {
    const url= ["./images/Icon_Sword.webp","./images/Icon_Claymore.webp","./images/Icon_Polearm.webp","./images/Icon_Catalyst.webp","./images/Icon_Bow.webp"];
    t= random(1,5);
    w= url[t]; r= '<img src="'; l= '" alt="">';
    document.getElementById(x).innerHTML= r+w+l;
    return w;
}
function content(a,b,c,d,e,f) {
    const url= ["./images/Icon_Sword.webp","./images/Icon_Claymore.webp","./images/Icon_Polearm.webp","./images/Icon_Catalyst.webp","./images/Icon_Bow.webp"];
    if(a==url[0]&&b==url[0]&&c==url[0]&&d==url[0]&&e==url[0]) {
        document.getElementById(f).innerHTML= "Sword attacks are the middle ground of melee weapons";
    } else if(a==url[1]&&b==url[1]&&c==url[1]&&d==url[1]&&e==url[1]) {
        document.getElementById(f).innerHTML= "Claymores attacks hit slower than melee weapons, but deal much more damage per swing";
    } else if(a==url[2]&&b==url[2]&&c==url[2]&&d==url[2]&&e==url[2]) {
        document.getElementById(f).innerHTML= "Polearms have fast attacks, long forward reach, and deal moderate damage per hit";
    } else if(a==url[3]&&b==url[3]&&c==url[3]&&d==url[3]&&e==url[3]) {
        document.getElementById(f).innerHTML= "Due to their magical nature, all attacks with a Catalyst are considered elemental damage";
    } else if(a==url[4]&&b==url[4]&&c==url[4]&&d==url[4]&&e==url[4]) {
        document.getElementById(f).innerHTML= "Bows boast long-ranged attacks, with Charged Attacks that are capable of hitting monsters with proper aim";
    } else {
        document.getElementById(f).innerHTML= "Good luck next time";
    }
}
function stop(x) {
    document.getElementById(x).innerHTML= '';
}
function want(n) {
    t= "please wait... ";
    document.getElementById("want").innerHTML= t+n;
}
function start() {
    x= chosse("S1"); y= chosse("P2"); z= chosse("C3"); w= chosse("C4"); v= chosse("B5");
    setTimeout(content,500,x,y,z,w,v,'about');
    setTimeout(want,0,'3');
    setTimeout(want,1000,'2');
    setTimeout(want,2000,'1');
}
function reset() {
    stop("S1"); stop("P2"); stop("C3"); stop("C4"); stop("B5"); stop("about"); stop("want");
}
function roll() {
    start();
    setTimeout(reset,3000);
}