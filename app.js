const music = document.getElementById("music");

document.body.addEventListener(
"click",
function(){

if(music){

music.play().catch(()=>{});

}

},
{once:true}
);

/* yurak */

function createHeart(){

const h=
document.createElement("div");

h.className=
"heart";

h.innerHTML=
"❤️";

h.style.left=
Math.random()*100+
"vw";

h.style.fontSize=
(
20+
Math.random()*30
)
+"px";

h.style.animationDuration=
(
4+
Math.random()*3
)
+"s";

document.body.appendChild(h);

setTimeout(
()=>{
h.remove();
},
7000
);

}

setInterval(
createHeart,
500
);

/* HA */

function accept(){

document
.querySelector(
".buttons"
)
.style
.display=
"none";

document
.getElementById(
"question"
)
.innerHTML=
"💖 Zo‘r! Uchrashuv vaqtini tanlang";

document
.getElementById(
"meetingBox"
)
.style
.display=
"block";

}

/* YOQ */

const noBtn=
document.getElementById(
"noBtn"
);

if(noBtn){

noBtn.addEventListener(
"mouseover",

()=>{

let x=
Math.random()
*
(
window.innerWidth
-
220
);

let y=
Math.random()
*
(
window.innerHeight
-
120
);

noBtn.style.position=
"fixed";

noBtn.style.left=
x+"px";

noBtn.style.top=
y+"px";

}

);

}

/* TASDIQLASH */

function confirmMeeting(){

const day=
document
.getElementById(
"meetingDay"
)
.value;

const time=
document
.getElementById(
"meetingTime"
)
.value;

if(
!day
||
!time
){

alert(
"Kun va vaqt tanlang 💖"
);

return;

}

document
.getElementById(
"result"
)
.innerHTML=

`
💖 Kelishdik!<br>
📅 ${day}<br>
⏰ ${time}
`;

document
.getElementById(
"meetingBox"
)
.style
.display=
"none";

}
