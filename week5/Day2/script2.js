var a = document.querySelector(".paragraphe")
var b = document.querySelector("body")

var c = document.querySelector("button")

var myDiv = document.getElementById("myDiv")
// console.log(myDiv);

var par = document.getElementsByClassName("paragraphe")
// console.log(par[0]);

var select = document.getElementById('select')
var result = document.querySelector('.result')


function changeColor() {
    a.classList.add("back-color")

    a.className = "back-color"

}


function darkMode() {
    // b.classList.add('dark')
    // console.log(b.classList.contains('dark'));

    if (b.classList.contains('dark')) {
        c.innerText = "switch to dark mode";
        b.classList.remove('dark');
    } else{
        c.innerText = "switch to light mode";
        b.classList.add('dark')
    }
}


function changedValue() {
    console.log(result.innerText );
    console.log(select.value);
    result.innerText += select.value;
}

