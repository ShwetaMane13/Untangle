import ("./style.css");
import ("../images/icons8-bold-your-text-field-on-document-file-96.png");
import ("../images/icons8-italic-96.png");

window.onload = () => {
    let display = document.getElementById("display");

    let divLeft = document.createElement("div");
    let divRight = document.createElement("div");
    var input = document.createElement("textArea");
    let divFeatures = document.createElement("div");

    let textColorOne = document.createElement("div");
    let textColorTwo = document.createElement("div");
    let textColorThree = document.createElement("div");
    let textColorFour = document.createElement("div");
    let textColorFive = document.createElement("div");

    let fontSelect = document.createElement("select");
    let select = document.createElement("option");
    let fontOne = document.createElement("option");
    let fontTwo = document.createElement("option");
    let fontThree = document.createElement("option");
    let fontFour = document.createElement("option");

    let sizeSelect = document.createElement("select");
    let size = document.createElement("option");
    let sizeOne = document.createElement("option");
    let sizeTwo = document.createElement("option");
    let sizeThree = document.createElement("option");
    let sizeFour = document.createElement("option");

    let textBold = document.createElement("img");
    let textItalic = document.createElement("img");
    let submit = document.createElement("button");

    divLeft.setAttribute("id", "divLeft");
    divRight.setAttribute("id", "divRight");
    input.setAttribute("id", "input");
    divFeatures.setAttribute("id", "divFeatures");
    submit.setAttribute("id", "submit");
   
    textColorOne.setAttribute("id", "textColorOne");
    textColorTwo.setAttribute("id", "textColorTwo");
    textColorThree.setAttribute("id", "textColorThree");
    textColorFour.setAttribute("id", "textColorFour");
    textColorFive.setAttribute("id", "textColorFive");

    fontSelect.setAttribute("id", "fontSelect");
    sizeSelect.setAttribute("id", "sizeSelect");

    textBold.setAttribute("id", "textBold");
    textItalic.setAttribute("id", "textItalic");


    submit.innerHTML = "Submit";
    select.innerText = "Select Font";
    fontOne.innerText = "Courier New";
    fontTwo.innerText = "Tahoma";
    fontThree.innerText = "Georgia";
    fontFour.innerText = "Trebuchet";
    textBold.src = "../images/icons8-bold-your-text-field-on-document-file-96.png";
    textItalic.src = "../images/icons8-italic-96.png";
    size.innerText = "size";
    sizeOne.innerText = "10";
    sizeTwo.innerText = "12";
    sizeThree.innerText = "14";
    sizeFour.innerText = "16";
    


    var color = "rgb(145, 139, 139)";
    textColorOne.onclick = () =>{
        let textColor = document.getElementById("input");
        color = "#eab595";
        textColor.style.color = "#eab595";
    }

    textColorTwo.onclick = () =>{
        let textColor = document.getElementById("input");
        color = "#d87f81";
        textColor.style.color = "#d87f81";
    }

    textColorThree.onclick = () =>{
        let textColor = document.getElementById("input");
        color = "#ae6378";
        textColor.style.color = "#ae6378";
    }

    textColorFour.onclick = () =>{
        let textColor = document.getElementById("input");
        color = "#79616f";
        textColor.style.color = "#79616f";
    }

    textColorFive.onclick = () =>{
        let textColor = document.getElementById("input");
        color = "#7e9680";
        textColor.style.color = "#7e9680";
    }



   var font = "Roboto";
   fontSelect.onclick = () => {

    if(fontOne.selected)
    {
        let textFont = document.getElementById("input");
        textFont.style.fontFamily = "Courier New";
        font = "Courier New";
    }
    if(fontTwo.selected)
    {
        let textFont = document.getElementById("input");
        textFont.style.fontFamily = "Tahoma";
        font = "Tahoma";
    }
    if(fontThree.selected)
    {
        let textFont = document.getElementById("input");
        textFont.style.fontFamily = "Georgia";
        font = "Georgia";
    }
    if(fontFour.selected)
    {
        let textFont = document.getElementById("input");
        textFont.style.fontFamily = "Trebuchet MS";
        font = "Trebuchet MS";
    }
   }



   var Size = "10px";
   sizeSelect.onclick = () => {

    if(sizeOne.selected)
    {
        let textsize = document.getElementById("input");
        textsize.style.fontSize = "15px";
        Size = "15px";
    }
    if(sizeTwo.selected)
    {
        let textsize = document.getElementById("input");
        textsize.style.fontSize = "20px";
        Size = "20px";
    }
    if(sizeThree.selected)
    {
        let textsize = document.getElementById("input");
        textsize.style.fontSize = "25px";
        Size = "25px";
    }
    if(sizeFour.selected)
    {
        let textsize = document.getElementById("input");
        textsize.style.fontSize = "30px";
        Size = "30px";
    }
   }



   var Bold = false;
   textBold.onclick = () => {
       let bold = document.getElementById("input");
       bold.style.fontWeight = "bold";
       Bold = true;
   } 

   textBold.addEventListener("dblclick", () =>{
        let bold = document.getElementById("input");
        bold.style.fontWeight = "400";
        Bold = false;
   });
    
   var Italic = false;
    textItalic.onclick = () => {
        let italic = document.getElementById("input");
        italic.style.fontStyle = "italic";
        Italic = true;
    } 

    textItalic.addEventListener("dblclick", () =>{
        let bold = document.getElementById("input");
        bold.style.fontStyle = "normal";
        Italic = false;
       });

      

    submit.onclick = () => {
        console.log(input.value, color, font, Size, Bold, Italic);
        let data = {
            "value": input.value,
            "color": color,
            "font": font,
            "size": Size,
            "bold": Bold,
            "italic": Italic
        }
        appendNotes(data);
      }

    sizeSelect.append(size, sizeOne, sizeTwo, sizeThree, sizeFour)
    fontSelect.append(select, fontOne, fontTwo, fontThree, fontFour);
    divFeatures.append(textColorOne, textColorTwo, textColorThree, textColorFour, 
    textColorFive, fontSelect, sizeSelect, textBold, textItalic, submit);
    divRight.append(input, divFeatures);
    display.append(divLeft, divRight);
}


if(localStorage.getItem("notes")  === null)
    {
        localStorage.setItem("notes", JSON.stringify([]));
    }


    function appendNotes(data){

        divLeft.innerHTML = null;

        let note = JSON.parse(localStorage.getItem("notes"));
        note.push(data);
        localStorage.setItem("notes", JSON.stringify(note));

        
       note.forEach(function(item){
            let entry = document.createElement("div");
            let title = document.createElement("p");

            entry.setAttribute("id", "entry");
            title.setAttribute("id", "entryTitle");

            title.innerHTML = item.value;
            entry.style.backgroundColor = item.color;

            entry.onclick = () => {
                showNote(item)
            }

            entry.append(title);
            divLeft.append(entry);
            document.getElementById("input").value = null;
       });
       
    }

    function showNote(item){
        let input = document.getElementById("input");

        input.value = item.value;
        input.style.color = item.color;
        input.style.fontFamily = item.font;
        input.style.fontSize = item.size;
        if(item.bold)
        {
            input.style.fontWeight = "700px";
        }
        else
        {
            input.style.fontWeight = "400px";
        }

        if(item.italic)
        {
            input.style.fontStyle = "italic";
        }
        else
        {
            input.style.fontStyle = "normal";
        }
     }


//      Today's todo list:
// - finish react assignment 2
// - watch DSA lectures again
// - solve contest questions
// - workout