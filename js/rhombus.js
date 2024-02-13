function rhombusAreaCalculation() {
  // call input
  const rhombusBase = getRhombusInput("rhombus-base");
  const rhombusHeight = getRhombusInput("rhombus-height");

  // display rhombus area
  const getRhombusArea = document.getElementById("rhombus-area");
// check validity
  if (isNaN(rhombusBase) || isNaN(rhombusHeight)) {
    getRhombusArea.innerText = "provide an number";
  } else {
    // rhombus area calculate
    const rhombusArea = (1 / 2) * rhombusBase * rhombusHeight;
    getRhombusArea.innerHTML = `Area : <span>${rhombusArea}</span> cm<sup>2</sup>`;
  }
}

// get input
function getRhombusInput(input) {
  const rhombusInput = document.getElementById(input);
  const rhombusText = parseFloat(rhombusInput.value);
  return rhombusText;
}
