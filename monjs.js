console.log("FIN monjs.js");

function envoieMessage() {
    let message = "Mon super message";
    console.log(message);
    alert(message);
};


// envoieMessage();
// envoieMessage();

//reaction a un evenement
// 1 - récupération de l'élément
let btn = document.getElementById("monbtn");
// 2 - ajout d'un listner
btn.addEventListener("click", envoieMessage);
console.log("FIN monjs.js");

function sendMessage() {
    let message = "Un bon message"
    console.log(message);
};

let btn2 = document.getElementById("monbtn2");
btn2.addEventListener("dblclick", sendMessage);