document.getElementById('parallelogram-btn').addEventListener('click',function(){
    // get parallelogram base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parseFloat(parallelogramBaseInput.value);

    // get parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parseFloat(parallelogramHeightInput.value);

    // display parallelogram Area
    const parallelogramArea = document.getElementById('parallelogram-area');
    // check validity
    if(isNaN(parallelogramBaseText) || isNaN(parallelogramHeightText)){
        parallelogramArea.innerText = "sorry it is empty value";
    }else{
        const parallelogramAreaCalculate = parallelogramBaseText * parallelogramHeightText;
        parallelogramArea.innerHTML =`Area : <span>${parallelogramAreaCalculate}</span> cm<sup>2</sup>`;
    }
});