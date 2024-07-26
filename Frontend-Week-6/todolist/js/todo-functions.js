function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue.trim() === '') {
        $('.toast.error').toast('show');
    } else {
        li.onclick = function(){toggleComplete(this)}
        document.getElementById("list").appendChild(li);
        $('.toast.success').toast('show');
    }

    document.getElementById("task").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  
  let myNodelist = document.getElementsByTagName("LI");
  for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }

  function toggleComplete(item) {
    item.classList.toggle('completed');
  }