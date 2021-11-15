document.getElementById("btn1").addEventListener("click",function(){
    document.getElementById("b2").style.display="none"
    document.getElementById("b3").style.display="none"
    document.getElementById("b4").style.display="none"
    document.getElementById("b5").style.display="none"
    document.getElementById("b6").style.display="none"
    var n1 = document.getElementById("b1")
    n1.style.width="900px"
    n1.style.height="400px"
    document.getElementById("some").style.display="none"
    document.getElementById("aparece").style.display="flex"
})
document.getElementById("btn2").addEventListener("click",function(){
    document.getElementById("b1").style.display="none"
    document.getElementById("b3").style.display="none"
    document.getElementById("b4").style.display="none"
    document.getElementById("b5").style.display="none"
    document.getElementById("b6").style.display="none"
    var n1 = document.getElementById("b2")
    n1.style.width="900px"
    n1.style.height="400px"
    
    var n2 = document.querySelectorAll("#some")
    var n3 = document.querySelectorAll("#aparece")
    n2.forEach(element => {
        element.style.display="none"
    });
    n3.forEach(element => {
        element.style.display="flex"
    });
})
document.getElementById("btn3").addEventListener("click",function(){
    document.getElementById("b1").style.display="none"
    document.getElementById("b2").style.display="none"
    document.getElementById("b4").style.display="none"
    document.getElementById("b5").style.display="none"
    document.getElementById("b6").style.display="none"
    var n1 = document.getElementById("b3")
    n1.style.width="900px"
    n1.style.height="400px"
    var n2 = document.querySelectorAll("#some")
    var n3 = document.querySelectorAll("#aparece")
    n2.forEach(element => {
        element.style.display="none"
    });
    n3.forEach(element => {
        element.style.display="flex"
    });
})
document.getElementById("btn4").addEventListener("click",function(){
    document.getElementById("b1").style.display="none"
    document.getElementById("b2").style.display="none"
    document.getElementById("b3").style.display="none"
    document.getElementById("b5").style.display="none"
    document.getElementById("b6").style.display="none"
    var n1 = document.getElementById("b4")
    n1.style.width="900px"
    n1.style.height="400px"
    var n2 = document.querySelectorAll("#some")
    var n3 = document.querySelectorAll("#aparece")
    n2.forEach(element => {
        element.style.display="none"
    });
    n3.forEach(element => {
        element.style.display="flex"
    });
})
document.getElementById("btn5").addEventListener("click",function(){
    document.getElementById("b1").style.display="none"
    document.getElementById("b2").style.display="none"
    document.getElementById("b3").style.display="none"
    document.getElementById("b4").style.display="none"
    document.getElementById("b6").style.display="none"
    var n1 = document.getElementById("b5")
    n1.style.width="900px"
    n1.style.height="400px"
    var n2 = document.querySelectorAll("#some")
    var n3 = document.querySelectorAll("#aparece")
    n2.forEach(element => {
        element.style.display="none"
    });
    n3.forEach(element => {
        element.style.display="flex"
    });
})
document.getElementById("btn6").addEventListener("click",function(){
    document.getElementById("b1").style.display="none"
    document.getElementById("b2").style.display="none"
    document.getElementById("b3").style.display="none"
    document.getElementById("b4").style.display="none"
    document.getElementById("b5").style.display="none"
    var n1 = document.getElementById("b6")
    n1.style.width="900px"
    n1.style.height="400px"
    var n2 = document.querySelectorAll("#some")
    var n3 = document.querySelectorAll("#aparece")
    n2.forEach(element => {
        element.style.display="none"
    });
    n3.forEach(element => {
        element.style.display="flex"
    });
})
const fe =document.querySelectorAll("#fe")
fe.forEach(element => {
    element.addEventListener("click",function(){
        document.getElementById("b1").style.display="flex"
        document.getElementById("b2").style.display="flex"
        document.getElementById("b3").style.display="flex"
        document.getElementById("b4").style.display="flex"
        document.getElementById("b5").style.display="flex"
        document.getElementById("b6").style.display="flex"
        var n1 = document.querySelectorAll(".box2")
        n1.forEach(element => {
            element.style.width=""
            element.style.height="" 
        });

        var n2 = document.querySelectorAll("#some")
        var n3 = document.querySelectorAll("#aparece")
        n2.forEach(element => {
            element.style.display="flex"
        });
        n3.forEach(element => {
            element.style.display="none"
        });
    }) 
});