alert("Альбина не бань")
var b = document.querySelector("button")
let img = document.querySelector(".mu")
b.onclick = function(){
    var angle = 720 + Math.random()*1000
    var time = 3 + Math.random()*5
    img.style.transition = `${time}s`
    img.style.transform = `rotate(${angle}deg)`
}