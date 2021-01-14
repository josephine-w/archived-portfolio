// create x button for each element
var myList = document.getElementsByTagName("li");
var x;
for (x = 0; x < myList.length; x++) {
  var item = document.createTextNode("\u2715");
  var span = document.createElement("span");
  span.className = "close";
  span.appendChild(item);
}

// close function
var close = document.getElementsByClassName("close");
var x;
for (x = 0; x < close.length; x++) {
    close[x].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// add to list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("userinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("reminders").appendChild(li);
    document.getElementById("userinput").value = "";
  
    var item = document.createTextNode("\u2715");
    var span = document.createElement("span");
    span.className = "close";
    span.appendChild(item);
    li.appendChild(span);
  
    for (x = 0; x < close.length; x++) {
      close[x].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }