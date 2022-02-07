
$(document).ready(function(){
  $("#page_logo").fadeIn(2100).css('display', 'inline-block');
  $("#logo_line").delay(300).animate({
    width:'toggle',
    opacity:'toggle'
  }, 1200 );
});

var myCodeMirror = CodeMirror(document.getElementById("IDEcontainer"), {
  value: "function myScript(){return 100;}\n",
  mode:  "javascript",
  lineWrapping: true,
  lineNumbers: true,
  theme: "mdn-like"
});