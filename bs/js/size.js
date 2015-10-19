adjust = function(){
  height = window.innerHeight - document.getElementById('menu').getBoundingClientRect().height - document.getElementById('footer').getBoundingClientRect().height;
  if(height>document.getElementById('content').getBoundingClientRect().height){
   document.getElementById('content').style.height = height + 'px';
  }
 }
 window.onload = adjust;
 window.onresize = adjust;