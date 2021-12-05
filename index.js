function go(){
  if(document.getElementById("option").value == 1){
    window.location.href = "#math";
    math()
  }
}
function math(){
  document.getElementById("main").style.display ="none";
 var options = ["<a href='#math+adding'>adding</a>"]
 document.write(options);
  if(window.location.hash =="#math=adding"){
    document.getElementById("adding").style.display ="block";
    options = false;
  }
  if(window.location.hash== "#math=adding+1+20"){
    document.getElementById("1plus20").style.display ="block";  
  }
}
if(window.location.hash == "#math"){
  math()
}
if(window.location.hash =="#math"){
  math()
}
 if(window.location.hash == "#math=adding+1+20"){
    document.getElementById("1plus20").style.display ="block";  
 }
if(window.undifiend){
  window.location.assign("404.html");
}
