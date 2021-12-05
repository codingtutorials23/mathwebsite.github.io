function go(){
  if(document.getElementById("option").value == 1){
    window.location.hash = "https://mathwebsite.github.io?math";
    math()
  }
}
function math(){
  document.getElementById("main").style.display ="none";
 var options = ["<a href='#math+adding'>adding</a>"]
 document.write(options);
  if(window.location.href =="https://mathwebsite.github.io?math=adding"){
    document.getElementById("adding").style.display ="block";
    options = false;
  }
  if(window.location.href== "https://mathwebsite.github.io?math=adding+1+20"){
    document.getElementById("1plus20").style.display ="block";  
  }
}
if(window.location.href == "https://mathwebsite.github.io?math"){
  math()
}
if(window.location.href =="https://mathwebsite.github.io?math"){
  math()
}
 if(window.location.hash == "https://mathwebsite.github.io?math=adding+1+20"){
    document.getElementById("1plus20").style.display ="block";  
 }
if(window.undifiend){
  window.location.assign("404.html");
}
