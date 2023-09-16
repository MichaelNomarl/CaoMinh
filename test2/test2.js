let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.backgroundColor = color ;


    document.querySelector('h1').style.color = color;
});
function myFunction() {
var copyText = document.getElementById("hex");
navigator.clipboard.writeText(copyText.value);
alert("Copied the text: " + copyText.value);
}
