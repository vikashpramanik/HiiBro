// function swip(){
//     sww = document.getElementById("img1").src ;
//     sww=document.getElementById("img1").innerText = "  Kuso Yaro Brother ";
   
// }


function swip() {
    let imgElement = document.getElementById("imgg");
    let container = document.getElementById("img1");

    if (imgElement) {
        // Remove the image
        container.removeChild(imgElement);

        // Add the text
        let textElement = document.createElement("div");
        textElement.innerText = "Kuso Yaro Brother";
        container.appendChild(textElement);
    }
}