var res = document.querySelector(".result");

var element = document.getElementsByTagName("a");

var btn = document.getElementById("btn");

function handleInput(e) {
    console.log("test msg");
    res.innerText += e.value;
}

function changeLink() {

    element[0].href = "http://digitalacademy.eu-4.evennode.com/WEB%20FUNDAMENTALS/JS/Document%20Object%20Model/InputAndChange.html";

}


btn.addEventListener('click', function () {alert("this is an alert") })
