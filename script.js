let selectedPlate;
let selectedDrink;
let selectedDesert;
let totalCost;

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


function showScreen(){

    const confirmationScreen = document.querySelector(".confirmation-screen");

    // INSERT CHOSEN PLATE NAME

    const plateName = selectedPlate.querySelector(".product-title").innerHTML;

    const plateNameText = document.querySelector(".plate-confirm-text");

    plateNameText.innerHTML = plateName;

    // INSERT CHOSEN PLATE PRICE

    const platePrice = selectedPlate.querySelector(".product-price").innerHTML;

    const platePriceText = document.querySelector(".plate-confirm-price");

    platePriceText.innerHTML = platePrice;

    // INSERT CHOSEN DRINK NAME

    const drinkName = selectedDrink.querySelector(".product-title").innerHTML;

    const drinkNameText = document.querySelector(".drink-confirm-text");

    drinkNameText.innerHTML = drinkName;

    // INSERT CHOSEN PLATE PRICE

    const drinkPrice = selectedDrink.querySelector(".product-price").innerHTML;

    const drinkPriceText = document.querySelector(".drink-confirm-price");

    drinkPriceText.innerHTML = drinkPrice;

    // INSERT CHOSEN DESERT NAME

    const desertName = selectedDesert.querySelector(".product-title").innerHTML;

    const desertNameText = document.querySelector(".desert-confirm-text");

    desertNameText.innerHTML = desertName;

    // INSERT CHOSEN DESERT PRICE

    const desertPrice = selectedDesert.querySelector(".product-price").innerHTML;

    const desertPriceText = document.querySelector(".desert-confirm-price");

    desertPriceText.innerHTML = desertPrice;

    // SHOW TOTAL PRICE

    const plateValue = selectedPlate.querySelector(".product-price").innerHTML.replace('R$ ','').replace(',','.');

    const drinkValue = selectedDrink.querySelector(".product-price").innerHTML.replace('R$ ','').replace(',','.');

    const desertValue = selectedDesert.querySelector(".product-price").innerHTML.replace('R$ ','').replace(',','.');

    totalCost = (Number(plateValue) + Number(drinkValue) + Number(desertValue)).toFixed(2);

    const displayTotalTag = document.querySelector(".total-cost-number")

    displayTotalTag.innerHTML = `R$ ${totalCost}`

    // SHOW SCREEN

    confirmationScreen.classList.remove("hide-confirmation");

}

function closeOrder(){

    const name = prompt("Digite aqui o seu nome");

    const address = prompt("Agora digite o seu endereço");

    const chosenPlate = selectedPlate.querySelector(".product-title");

    const chosenDrink = selectedDrink.querySelector(".product-title");

    const chosenDesert = selectedDesert.querySelector(".product-title");

    
    const message = `Olá, gostaria de fazer o pedido:
    - Prato: ${chosenPlate.innerHTML}
    - Bebida: ${chosenDrink.innerHTML}
    - Sobremesa: ${chosenDesert.innerHTML}
    Total: ${totalCost}

    Nome: ${name}
    Endereço: ${address}` 

    window.open(`https://wa.me/5535991597374?text=${encodeURIComponent(message)}`)

}