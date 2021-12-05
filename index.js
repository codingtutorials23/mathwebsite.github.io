function go(){
  if(document.getElementById("option").value == 1){
    window.location.hash = "#math";
    math()
  }
}
function math(){
  document.getElementById("main").style.display ="none";
 var options = ["<a href='#math+adding'>adding</a>"]
 document.write(options);
  if(window.location.hash =="#math+adding"){
    document.getElementById("adding").style.display ="block";
    options.style.display ="none";
  }
  if(window.location.hash == "#math+adding+1+20"){
    document.getElementById("1plus20").style.display ="block";  
  }
}
if(window.location.hash == "#math"){
  math()
}
if(window.location.hash =="#math"){
  math()
}
 if(window.location.hash == "#math+adding+1+20"){
    document.getElementById("1plus20").style.display ="block";  
 }
if(window.undifiend){
  window.location.assign("404.java");
}
if(window.location.hash =="#math+adding"){
  document.getElementById("adding").style.display ="block";
  document.getElementById("main").style.display ="none";
}
var fs = require("fs");
console.log("Going to write into existing file");
// Open a new file with name input.txt and write Simply Easy Learning! to it.
fs.writeFile('404.java', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   // Read the newly written file and print all of its content on the console
   fs.readFile('404.java', function (err, data) {
      if (err) {
         return console.error(err);
      }
      document.write("Asynchronous read: " + data.toString());
   });
});
