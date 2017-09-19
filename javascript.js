

function changeBox(buttonClicked) {
  //when activated, change the box's display attributes based on the value
 // of the parameter "buttonClicked"
  if (buttonClicked === "grow") {
    // Increase the size of the box.
      document.getElementById('box').style.height = "200px";
      document.getElementById('box').style.width = "200px";
  }

  if (buttonClicked === "blueColor"){
    document.getElementById('box').style.backgroundColor = "blue";
  }

  if (buttonClicked === "fade"){
    document.getElementById('box').style.opacity = "0.5";
  }

  if (buttonClicked === "reset") {
    document.getElementById('box').style.height = "150px";
    document.getElementById('box').style.width = "150px";
    document.getElementById('box').style.backgroundColor = "orange";
    document.getElementById('box').style.opacity = "1.0";

  }


}
