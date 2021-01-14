var myList = document.getElementsByTagName("LI");
var x;
for (x = 0; x < myList.length; x++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var x;
for (i = 0; i< close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click',function(ev) {
    if (ev.target.tagName == "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("userinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Please input a value.");
    } else {
      document.getElementById("reminders").appendChild(li);
    }
    document.getElementById("userinput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (x = 0; x < close.length; x++) {
      close[x].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }