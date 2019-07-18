function bigImg(x) {
  x.style.height = "30%";
  x.style.width = "30%";
}

function normalImg(x) {
  x.style.height = "20%";
  x.style.width = "20%";
}

function showhidecontent(id) {
  var element = document.getElementById(id);
  if (element.style.display === "block") {
    element.style.display = "none";
    document.getElementById("show/hide").innerHTML = "Show More";
  } else {
    element.style.display = "block";
    document.getElementById("show/hide").innerHTML = "Hide";
  }
}
