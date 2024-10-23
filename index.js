const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function data() {
    var a = document.getElementaryById("n1").value;
    var b = document.getElementaryById("n2").value;
    var c = document.getElementaryById("n3").value;
    var d = document.getElementaryById("n4").value;
    if (a == "" || b == "" || c == "" || d == "") {
        alert("All fiels are mandatory");
        return false;
    }
    else {
        return true;
    }

}
