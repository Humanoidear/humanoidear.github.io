/* Header blur on hover*/
window.addEventListener("scroll", function() {
    var b = document.querySelector("b");
    b.classList.toggle("sticky", window.scrollY > 800);
})

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 790);
})

window.addEventListener("scroll", function() {
    var opaque = document.querySelector("opaque");
    opaque.classList.toggle("sticky", window.scrollY > 300);
})

window.addEventListener("scroll", function() {
    var c = document.querySelector("c");
    c.classList.toggle("sticky", window.scrollY > 790);
})

window.addEventListener("scroll", function() {
    var d = document.querySelector("d");
    d.classList.toggle("sticky", window.scrollY > 790);
})

window.addEventListener("scroll", function() {
    var e = document.querySelector("e");
    e.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function() {
    var f = document.querySelector("f");
    f.classList.toggle("sticky", window.scrollY > 790);
})

var TRange=null;

function findString (str) {
 if (parseInt(navigator.appVersion)<4) return;
 var strFound;
 if (window.find) {

  // CODE FOR BROWSERS THAT SUPPORT window.find

  strFound=self.find(str);
  if (!strFound) {
   strFound=self.find(str,0,1);
   while (self.find(str,0,1)) continue;
  }
 }
 else if (navigator.appName.indexOf("Microsoft")!=-1) {

  // EXPLORER-SPECIFIC CODE

  if (TRange!=null) {
   TRange.collapse(false);
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
  if (TRange==null || strFound==0) {
   TRange=self.document.body.createTextRange();
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
 }
 else if (navigator.appName=="Opera") {
  alert ("Opera browsers not supported, sorry...")
  return;
 }
 if (!strFound) alert ("String '"+str+"' not found!")
 return;
}



/* Launch Particle-JS*/

window.particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});
