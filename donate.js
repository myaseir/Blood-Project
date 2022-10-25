
submitDonate = document.getElementById("submit");
submitDonate.addEventListener("click", submitFun)
function submitFun(){
    console.log("submit Button Clicked...")

   var name1 = document.getElementById("name").value ;
   var number1 = document.getElementById("number").value ;
   var gender1 = document.getElementById("gender").value ;
   var bloodGroup1 = document.getElementById("bloodD").value ;
   var village1 = document.getElementById("village").value ;
   var place1 = document.getElementById("place").value ;


   localStorage.setItem("name", name1)
   localStorage.setItem("number", number1)
   localStorage.setItem("gender", gender1)
   localStorage.setItem("bloodD", bloodGroup1)
   localStorage.setItem("village", village1)
   localStorage.setItem("place", place1)
   
//    localStorage.setItem("name1", name1)
//    localStorage.setItem("number1", number1)
//    localStorage.setItem("gender1", gender1)
//    localStorage.setItem("bloodD1", bloodGroup1)
//    localStorage.setItem("village1", village1)
//    localStorage.setItem("place1", place1)

}
// setTimeout(() => {
//     console.log(".......................")
//     localStorage.clear()
// }, 10000);