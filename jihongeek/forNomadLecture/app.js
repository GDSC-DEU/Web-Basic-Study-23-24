const header = document.querySelector("h1");

function headerClickHandler() {
    console.log("🍅");
}
header.onclick = headerClickHandler;
header.onclick = ()=>{
    console.log("Tomato");
}
header.addEventListener("click",()=>{
    console.log("Tomato");
});