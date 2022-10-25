cleared = document.getElementById("clear");
clear.addEventListener("click", removed)
function removed(){
    console.log("cleared....");
    localStorage.setItem("name", " ");
    localStorage.setItem("number", " ")
    localStorage.setItem("gender", " ")
    localStorage.setItem("bloodD", " ")
    localStorage.setItem("village", " ")
    localStorage.setItem("place", " ")
}