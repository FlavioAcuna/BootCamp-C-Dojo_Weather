function alertMsg() {
  alert("Cargando informe meteorológico…");
}

var redText = document.getElementsByClassName("red_text");
var blueText = document.getElementsByClassName("blue_text");
function fahrenheit() {
  for (let i = 0; i < redText.length; i++) {
    var rf = redText[i].innerText;
    rf = rf.substring(0, rf.length - 1);
    rf = (rf * 9) / 5 + 32;
    rf = parseInt(rf);
    redText[i].innerHTML = `${rf}º`;
    var bf = blueText[i].innerText;
    bf = bf.substring(0, bf.length - 1);
    bf = (bf * 9) / 5 + 32;
    console.log(bf);
    bf = Math.round(bf);
    blueText[i].innerHTML = `${bf}º`;
  }
}
function celsius() {
  for (let i = 0; i < redText.length; i++) {
    var rf = redText[i].innerText;
    rf = rf.substring(0, rf.length - 1);
    rf = ((rf - 32) * 5) / 9;
    rf = parseInt(rf);
    redText[i].innerHTML = `${rf}º`;
    var bf = blueText[i].innerText;
    bf = bf.substring(0, bf.length - 1);
    bf = ((bf - 32) * 5) / 9;
    console.log(bf);
    bf = Math.round(bf);
    blueText[i].innerHTML = `${bf}º`;
  }
}

function convert(e) {
  if (e.value === "fahrenheit") {
    fahrenheit();
  } else {
    celsius();
  }
}
var accept = document.getElementById("cookies-footer");

function funcBtn() {
  accept.style.display = "none";
}
