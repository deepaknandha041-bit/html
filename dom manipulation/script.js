// Select HTML Elements
const paragraph = document.getElementById("paragraph");
const image = document.getElementById("image");
const container = document.getElementById("container");

const btnText = document.getElementById("btnText");
const btnImage = document.getElementById("btnImage");
const btnAdd = document.getElementById("btnAdd");
const btnColor = document.getElementById("btnColor");
const btnFont = document.getElementById("btnFont");
const btnHide = document.getElementById("btnHide");
const btnRemove = document.getElementById("btnRemove");

// 1. Change Paragraph
btnText.addEventListener("click", function(){

    paragraph.textContent = "Paragraph changed using JavaScript.";

});

// 2. Change Image
btnImage.addEventListener("click", function(){

    image.src = "https://picsum.photos/301/200";

});

// 3. Add Paragraph
btnAdd.addEventListener("click", function(){

    let newPara = document.createElement("p");

    newPara.textContent = "This is a new paragraph.";

    container.appendChild(newPara);

});

// 4. Change Background Color
btnColor.addEventListener("click", function(){

    document.body.style.backgroundColor = "lightblue";

});

// 5. Change Text Color
btnFont.addEventListener("click", function(){

    paragraph.style.color = "red";

});

// 6. Hide / Show Paragraph
btnHide.addEventListener("click", function(){

    if(paragraph.style.display == "none"){

        paragraph.style.display = "block";

    }
    else{

        paragraph.style.display = "none";

    }

});

// 7. Remove Last Paragraph
btnRemove.addEventListener("click", function(){

    if(container.lastElementChild){

        container.removeChild(container.lastElementChild);

    }

});