function calculateTriangleArea() {
    // get triangle base 
    const triangleBaseInput = document.getElementById('triangle-b');
    const triangleBaseText = parseFloat(triangleBaseInput.value);

    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-h');
    const triangleHeightText = parseFloat(triangleHeightInput.value);
    // get triangle area show
    const triangleAreaShowBowser = document.getElementById('triangle-area');
    // check validation
    if (isNaN(triangleBaseText) || isNaN(triangleHeightText)) {
        triangleAreaShowBowser.parentNode.innerText = 'sorry it is empty value';
    }
    else{
        
        // triangle calculaton
        const triangleArea = ((1/2) * triangleBaseText * triangleHeightText);
        // set triangle area output
        triangleAreaShowBowser.innerText = triangleArea;
    }
}


