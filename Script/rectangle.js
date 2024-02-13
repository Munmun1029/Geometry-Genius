
function calculateRectangle(){
    // get rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)
    console.log(width);

    // get Rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
    console.log(length);

    // calculation area
    const area = width * length;
    console.log("Area of rectangle is : ", area);
    // display area
    const rectangleAreaSpan =document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=area;


}