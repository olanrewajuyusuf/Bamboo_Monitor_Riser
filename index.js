const blackLabel = document.querySelector("label");
const page = document.querySelector("#page");
const wallew = document.querySelector("#modal-page");
const btn = document.querySelector("#btn-b");
const close = document.querySelector(".stroke");
const enter = document.querySelector("#enter");
const modalComplete = document.querySelector("#modal-complete");
const complete = document.querySelector("#enter button");

// blackLabel.on = (){
//     blackLabel.classList.toggle("open");

//     if(blackLabel.className === "open"){
//         blackLabel.style.fontSize = "20px"
//     }
// }

function wale (){
    wallew.style.display = "block";
}
function walex (){
    blackLabel.style.color = "blue";
}
btn.addEventListener("click", wale);
blackLabel.addEventListener("mouseover", walex);
blackLabel.addEventListener("click", function(){
    enter.style.display = "flex";
    page.style.display = "block";
})
// blackLabel.addEventListener("click", function(){
//     enter.style.display = "none";
// })
complete.addEventListener(click, function(){
    complete.style.color = "black";
    modalComplete.style.display = "block";
})