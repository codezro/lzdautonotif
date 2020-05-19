// ==UserScript==
// @name    PLDTWIFI script v2
// @version  2
// @grant    none
// ==/UserScript==



var timer = 0.5; // minutes. 1 = 1 minute; 2 = 2 minutes
var title = "PLDT PREPAID WIFI IS AVAILABLE!";
var description = "The item that you need is already available. Click me to purchase.";



//dont remove/modify
let src = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';
let audio = new Audio(src);


function isLazada(){
	if (window.location.href.indexOf("https://www.lazada.com.ph/products/") > -1) {
    return true;
  }else{
  	return false;
  }
}


reloadPage(timer);
function reloadPage(minute){
  var duration = (60 * minute) * 1000;
  if (isLazada()) {
        setTimeout(function(){ location.reload(); }, duration);
  }

}

window.onload = function () {
    var minute = timer; 
    var display = document.querySelector('#module_redmart_product_price');
    if(isLazada()){
        checkAvailability();
        reloadPage(minute);
        startTimer(minute, display);
        insertCountDown(display);
    }
};



function startTimer(mins, display) {
    var duration = 60 * mins;
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function insertCountDown(display){
 display = document.querySelector('#module_redmart_product_price');
 display.style.color = 'red';
 display.style.fontSize = "xx-large";
}


function checkAvailability(){
  if (document.getElementsByClassName('pdp-button_theme_yellow pdp-button_size_xl').length){
   audio.play();
   notifyMe();
	}
}


function notifyMe() {
 if (Notification.permission !== 'granted')
  Notification.requestPermission();
 else {
  var notification = new Notification(title, {
   icon: 'https://lh3.googleusercontent.com/-yrzRQxBT_mk/XrkxOawFTZI/AAAAAAAAABA/fR1JyAD4Z0o2tOJRGbaH1jK5Dg9mbsqGwCEwYBhgL/w140-h140-p/tips%2526tricks%2Blogo.png',
   body: description,
  });
  notification.onclick = function() {
   window.open('https://www.lazada.com.ph/products/pldt-home-wifi-prepaid-with-free-10gb-data-i449560363-s1219998261.html?spm=a2o4l.searchlist.list.59.674f33f8mZ62cW&search=1');
  };
 }
}


// request permission on page load

document.addEventListener('DOMContentLoaded', function() {
 if (!Notification) {
  alert('Desktop notifications not available in your browser. Try Chromium.');
  return;
 }

 if (Notification.permission !== 'granted')
  Notification.requestPermission();
});

