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
function ap0(x) {
    if(x<10) {
        return '0'+ x;
    } else {
        return x;
    }
}
function color(x) {
    const c= ["red","orange","rgb(200, 200, 0)","green","blue","indigo","palevioletred"];
    return c[x];
}
function inline(x,y,z,w) {
    document.getElementById("content-option-1").innerHTML= x;
    document.getElementById("content-option-3").innerHTML= y;
    document.getElementById("content-option-2").innerHTML= z;
    document.getElementById("option-3").style.backgroundColor= w;
    document.getElementById("option-1").style.backgroundColor= w;
}
function time() {
    const tn= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const t= new Date();
    tnv= tn[t.getDay()];
    y= t.getFullYear(); m= ap0(t.getMonth()+1); d= ap0(t.getDate());
    h= ap0(t.getHours()); n= ap0(t.getMinutes()); s= ap0(t.getSeconds());
    year= m +'/'+ y; hour= tnv+' '+'-'+' '+h+':'+n+':'+s; day= d; backcolor= color(t.getDay());
    inline(year,hour,day,backcolor);
    if(tnv== tn[3]) {
        document.getElementById("content-option-3").style.fontSize= "14px";
    }
}
setInterval(time,1000);
function element3s() {
    document.getElementById("Synthetic").innerHTML= 'Synthetic (Vô Hạn)';
    document.getElementById('Synthetic').style.fontStyle= 'italic';
    document.getElementById('Synthetic').style.margin= '60px 0 0 90px';
    document.getElementById('St3').innerHTML= '0 Infinity Element 0';
    document.getElementById('Synthetic').style.color= 'black';
}
function element3r() {
    document.getElementById("Synthetic").innerHTML= 'Gosei';
    document.getElementById('Synthetic').style.fontStyle= 'normal';
    document.getElementById('Synthetic').style.margin= '90px 0 0 140px';
    document.getElementById('St3').innerHTML= '';
    document.getElementById('Synthetic').style.color= 'white';
}
function element0s(a,b,c,x,y,z) {
    document.getElementById(a).innerHTML= x;
    document.getElementById(a).style.fontStyle= 'italic';
    document.getElementById(a).style.color= z;
    document.getElementById(b).innerHTML= y;
    document.getElementById(c).style.display= 'block';
}
function element0r(a,b,c,x,y,z) {
    document.getElementById(a).innerHTML= x;
    document.getElementById(a).style.fontStyle= 'normal';
    document.getElementById(a).style.color= z;
    document.getElementById(b).innerHTML= y;
    document.getElementById(c).style.display= 'none';
}
function element3Ss() {
    document.getElementById("text3").style.animationName= 'Synthetics';
    setTimeout(element3s,2500);
}
function element3Sr() {
    document.getElementById("text3").style.animationName= 'Synthetict';
    setTimeout(element3r,2500);
}
function element16s() {
    document.getElementById("text1").style.animationName= 'Winds';
    document.getElementById("text6").style.animationName= 'Earths';
    setTimeout(element0s,2500,'Wind','Wt1','PW1','Wind (Phong)','Gentle as Wind','rgb(0, 255, 0)');
    setTimeout(element0s,2500,'Earth','Et6','PE6','Earth (Nham)','Hard as Earth','rgb(152, 152, 0)');
}
function element16r() {
    document.getElementById("text1").style.animationName= 'Windt';
    document.getElementById("text6").style.animationName= 'Eartht';
    setTimeout(element0r,2500,'Wind','Wt1','PW1','Kaze','','green');
    setTimeout(element0r,2500,'Earth','Et6','PE6','Tochi','','yellow');
}
function element27s() {
    document.getElementById("text2").style.animationName= 'Fires';
    document.getElementById("text7").style.animationName= 'Waters';
    setTimeout(element0s,2500,'Fire','Ft2','PF2','Fire (Hoả)','Strong as Fire','rgb(120, 0, 0)');
    setTimeout(element0s,2500,'Water','Wt7','PW7','Water (Thủy)','Flexible as Water','rgb(110, 110, 200)');
}
function element27r() {
    document.getElementById("text2").style.animationName= 'Firet';
    document.getElementById("text7").style.animationName= 'Watert';
    setTimeout(element0r,2500,'Fire','Ft2','PF2','Hi','','red');
    setTimeout(element0r,2500,'Water','Wt7','PW7','Mizu','','blue');
}
function replay() {
    setTimeout(element3Ss,0);
    setTimeout(element16s,4000);
    setTimeout(element27s,8000);
    setTimeout(element27r,15000);
    setTimeout(element16r,19000);
    setTimeout(element3Sr,23000);
}
setInterval(replay,30000);
function random(min,max) {
    return Math.floor(Math.random()*(max-min+1));
}
function chosse(x) {
    const url= ["/images/Icon_Sword.webp","/images/Icon_Claymore.webp","/images/Icon_Polearm.webp","/images/Icon_Catalyst.webp","/images/Icon_Bow.webp"];
    t= random(1,5);
    w= url[t]; r= '<img src="'; l= '" alt="">';
    document.getElementById(x).innerHTML= r+w+l;
    return w;
}
function content(a,b,c,d,e,f) {
    const url= ["/images/Icon_Sword.webp","/images/Icon_Claymore.webp","/images/Icon_Polearm.webp","/images/Icon_Catalyst.webp","/images/Icon_Bow.webp"];
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
function lr_heart_s() {
    document.getElementById("b1").style.animationName= "bl18s";
    document.getElementById("r1").style.animationName= "br18s";
    document.getElementById("b2").style.animationName= "bl26s";
    document.getElementById("r2").style.animationName= "br26s";
    document.getElementById("b3").style.animationName= "bl3s";
    document.getElementById("r3").style.animationName= "br3s";
    document.getElementById("b4").style.animationName= "bl4s";
    document.getElementById("r4").style.animationName= "br4s";
    document.getElementById("b5").style.animationName= "bl5s";
    document.getElementById("r5").style.animationName= "br5s";
    document.getElementById("b6").style.animationName= "bl26s";
    document.getElementById("r6").style.animationName= "br26s";
    document.getElementById("b7").style.animationName= "bl7s";
    document.getElementById("r7").style.animationName= "br7s";
    document.getElementById("b8").style.animationName= "bl18s";
    document.getElementById("r8").style.animationName= "br18s";
    document.getElementById("b9").style.animationName= "bl9s";
    document.getElementById("r9").style.animationName= "br9s";
    document.getElementById("b10").style.animationName= "bl10s";
    document.getElementById("r10").style.animationName= "br10s";
}
function lr_heart_t() {
    document.getElementById("b1").style.animationName= "bl18t";
    document.getElementById("r1").style.animationName= "br18t";
    document.getElementById("b2").style.animationName= "bl26t";
    document.getElementById("r2").style.animationName= "br26t";
    document.getElementById("b3").style.animationName= "bl3t";
    document.getElementById("r3").style.animationName= "br3t";
    document.getElementById("b4").style.animationName= "bl4t";
    document.getElementById("r4").style.animationName= "br4t";
    document.getElementById("b5").style.animationName= "bl5t";
    document.getElementById("r5").style.animationName= "br5t";
    document.getElementById("b6").style.animationName= "bl26t";
    document.getElementById("r6").style.animationName= "br26t";
    document.getElementById("b7").style.animationName= "bl7t";
    document.getElementById("r7").style.animationName= "br7t";
    document.getElementById("b8").style.animationName= "bl18t";
    document.getElementById("r8").style.animationName= "br18t";
    document.getElementById("b9").style.animationName= "bl9t";
    document.getElementById("r9").style.animationName= "br9t";
    document.getElementById("b10").style.animationName= "bl10t";
    document.getElementById("r10").style.animationName= "br10t";
}
function interation() {
    setTimeout(lr_heart_s,0);
    setTimeout(lr_heart_t,1500);
}
setInterval(interation,3000);
function off() {
    alert("Đã mất kết nối internet o(￣┰￣*)ゞ");
}
function on() {
    alert("Đã khôi phục kết nối internet o\(￣︶￣*\))")
}
window.onoffline= off; window.ononline= on;
function down(x,y) {
    document.getElementById(x).style.color= y;
}
function downup(x,y,z) {
    document.getElementById(x).style.color= y;
    document.getElementById(x).style.backgroundColor= z;
}
function doup(x,y,z) {
    document.getElementById(x).firstElementChild.style.color= y;
    document.getElementById(x).firstElementChild.style.backgroundColor= z;
}
function respan() {
    document.getElementById("avatar-form").src= "";
}
function hovere(x,y) {
    document.getElementById(x).firstElementChild.style.backgroundColor= y;
}
function seop(x) {
    document.getElementById("op-3").style.backgroundColor= x;
}
function look() {
    const t= ['royalblue','palevioletred'];
    setTimeout(seop,0,t[0]);
    setTimeout(seop,1000,t[1]);
}
setInterval(look,1500);
function avatarfo() {
    const imgs= new FileReader();
    imgs.readAsDataURL(document.getElementById("avatar").files[0]);
    imgs.onload= function() {
        document.getElementById("avatar-form").src= imgs.result;
    };
}