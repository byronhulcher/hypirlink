var glitchHeight = 36;

redNoiseKeyframeHTML ="@keyframes red-anim {";
blueNoiseKeyframeHTML ="@keyframes blue-anim {";

for (var i = 0; i <= 100; i+= 5){
  redNoiseKeyframeHTML += i.toString()+"% { clip: rect(" + Math.floor(Math.random()*glitchHeight).toString() + "px, 999px, " + Math.floor(Math.random()*glitchHeight).toString() + "px, 0); }";
  blueNoiseKeyframeHTML += i.toString()+"% { clip: rect(" + Math.floor(Math.random()*glitchHeight).toString() + "px, 999px, " + Math.floor(Math.random()*glitchHeight).toString() + "px, 0); }";
};

redNoiseKeyframeHTML += "}";
blueNoiseKeyframeHTML += "}";

var animationHTML = "\
  .glitch:hover:after {\
      animation: red-anim " + ((Math.random()*1.5)+2.5).toString() + "s infinite linear alternate-reverse;\
  }\
  .glitch:hover:before {\
      animation: blue-anim " + ((Math.random()*1)+2).toString() + "s infinite linear alternate-reverse;\
  }";

var style = document.createElement("style");
style.innerHTML = redNoiseKeyframeHTML + blueNoiseKeyframeHTML + animationHTML
document.getElementsByTagName('head')[0].appendChild(style);