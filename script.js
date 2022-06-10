function selectBox(){
    let selectedElement = event.currentTarget;
    const selectedElementPlate = selectedElement.classList.contains("plate");
    const selectedElementDrink = selectedElement.classList.contains("drink");
    const selectedElementDesert = selectedElement.classList.contains("desert");

    if (selectedElementPlate === true){
        let caixas = document.querySelectorAll(".plate");

        for(let i=0; i<caixas.length; i++){
            caixas[i].classList.remove("selected-box");
        }
        selectedElement.classList.toggle("selected-box");

    }

    if (selectedElementDrink === true){
        let caixas = document.querySelectorAll(".drink");

        for(let i=0; i<caixas.length; i++){
            caixas[i].classList.remove("selected-box");
        }
        selectedElement.classList.toggle("selected-box");

    }

    if (selectedElementDesert === true){
        let caixas = document.querySelectorAll(".desert");

        for(let i=0; i<caixas.length; i++){
            caixas[i].classList.remove("selected-box");
        }
        selectedElement.classList.toggle("selected-box");

    }

}