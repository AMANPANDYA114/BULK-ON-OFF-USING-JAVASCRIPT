document.getElementById("img").src="https://i.postimg.cc/MKxbpm3n/of.png"

function on()
{
    document.getElementById("img").src="https://i.postimg.cc/1tmszTFW/on.png"
    document.getElementById("text").innerText="On"
}

function off()
{
    document.getElementById("text").innerText="Off"
    document.getElementById("img").src="https://i.postimg.cc/MKxbpm3n/of.png"

}

function night(){
    document.body.style.background = "black";
}
function day(){
    document.body.style.background = "white";
}
// var a = document.querySelector('.sw');

// function toggle() {
//   var body = document.body;
//   if (body.style.background === "black") {
//     body.style.background = "white";
//   } else {
//     body.style.background = "black";
//   }
// }