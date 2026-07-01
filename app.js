const music =
document.getElementById(
"music"
);

document.body.addEventListener(
"click",
()=>{

music
.play()
.catch(()=>{});

},
{
once:true
}
);

/* yurak */

function createHeart(){

const h=
document
.createElement(
"div"
);

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
Math.random()*4
)
+"s";

document.body.appendChild(
h
);

setTimeout(
()=>{

h.remove();

},
7000
);

}

setInterval(
createHeart,
350
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
"💖 Zo‘r! Endi vaqtni tanlaymiz";

document
.getElementById(
"meetingBox"
)
.style
.display=
"block";

for(
let i=0;
i<30;
i++
){

setTimeout(
createHeart,
i*120
);

}

}

/* YO‘Q */

const noBtn=
document
.getElementById(
"noBtn"
);

noBtn
.addEventListener(
"mouseenter",
()=>{

const x=
Math.random()
*
(
window
.innerWidth
-
150
);

const y=
Math.random()
*
(
window
.innerHeight
-
80
);

noBtn
.style
.position=
"fixed";

noBtn
.style
.left=
x+"px";

noBtn
.style
.top=
y+"px";

}
);

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
${day}<br>
⏰ ${time}
`;

for(
let i=0;
i<40;
i++
){

setTimeout(
createHeart,
i*70
);

}

}
