var  aboutus=document.getElementById("abs")
var soo=document.getElementById("sso")
var sooo=document.getElementById("ssoo")
var soooo=document.getElementById("ssooo")
var clos=document.getElementById("closs")
clos.onclick=function (){
    aboutus.style.display="none"
    clos.style.display="none"
   soo.style.display="block"
   sooo.style.display="block"
   soooo.style.display="block"
}
var show=document.getElementById("ssooo")
show.onclick=function(){
    aboutus.style.display="block"
    clos.style.display="block"
    soo.style.display="none"
    sooo.style.display="none"
    soooo.style.display="none"
}