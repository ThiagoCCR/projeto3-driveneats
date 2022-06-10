let selectedPlate;
let selectedDrink;
let selectedDesert;

function selectBox(){
    const selectedElement = event.currentTarget;
    const selectedElementPlate = selectedElement.classList.contains("plate");
    const selectedElementDrink = selectedElement.classList.contains("drink");
    const selectedElementDesert = selectedElement.classList.contains("desert");
    const checkedIcon = selectedElement.querySelector(".check-icon");

    if (selectedElementPlate === true){
        let boxes = document.querySelectorAll(".plate");

        for(let i=0; i<boxes.length; i++){
            boxes[i].classList.remove("selected-box");
            let selectedBoxes = boxes[i].querySelector(".check-icon");
            selectedBoxes.classList.add("hidden");
        }
        selectedElement.classList.toggle("selected-box");
        checkedIcon.classList.remove("hidden");
        selectedPlate = selectedElement;
    }

    if (selectedElementDrink === true){
        let boxes = document.querySelectorAll(".drink");

        for(let i=0; i<boxes.length; i++){
            boxes[i].classList.remove("selected-box");
            let selectedBoxes = boxes[i].querySelector(".check-icon");
            selectedBoxes.classList.add("hidden");
        }
        selectedElement.classList.toggle("selected-box");
        checkedIcon.classList.remove("hidden");
        selectedDrink = selectedElement;

    }

    if (selectedElementDesert === true){
        let boxes = document.querySelectorAll(".desert");

        for(let i=0; i<boxes.length; i++){
            boxes[i].classList.remove("selected-box");
            let selectedBoxes = boxes[i].querySelector(".check-icon");
            selectedBoxes.classList.add("hidden");
        }
        selectedElement.classList.toggle("selected-box");
        checkedIcon.classList.remove("hidden");
        selectedDesert = selectedElement;

    }
    enableButton()
}

function enableButton(){

const button = document.querySelector('.button');
const activeButton = document.querySelector('.close-order-button');

if (selectedPlate != undefined && selectedDrink != undefined && selectedDesert != undefined){
        button.classList.add("hidden");
        activeButton.classList.remove("hidden");
    }

}

function closeOrder(){
    
}
