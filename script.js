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
        
    }

}