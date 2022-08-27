// document.getElementsByTagName('body')[0].style.color="red";
let dt;
setInterval(mainTime, 1000);

function mainTime(){
  dt = new Date();
  document.getElementsByClassName('date')[0].innerHTML= dt.toLocaleDateString('en-in');
  document.getElementsByClassName('time')[0].innerHTML= dt.toLocaleTimeString('EN-IN');
}

document.getElementsByClassName('primary_info')[0].style.fontSize='20px';
