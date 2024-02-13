function rectangleAreaCalculation() {
      // get rectangle length
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = parseFloat(rectangleLengthInput.value);

  // get rectangle base
  const rectangleBaseInput = document.getElementById("rectangle-base");
  const rectangleBaseText = parseFloat(rectangleBaseInput.value);

  // display rectangle area
  const rectangleArea = document.getElementById("rectangle-area");

  //check validation
  if (isNaN(rectangleBaseText) || isNaN(rectangleLengthText)) {
    rectangleArea.parentNode.innerText = "sorry it is empty value";
  } else {
    // rectangle calculate
    const rectangleAreaCalculate = rectangleBaseText * rectangleLengthText;
    rectangleArea.innerText = rectangleAreaCalculate;
  }
}
