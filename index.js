const res_container = document.getElementById("res-container");

let calculate_btn = document.getElementById("calculate-btn");
let inputs = document.querySelectorAll("input");
let anualNotes = [];
let averageNote = 0;
let res = 0;

calculate_btn.addEventListener("click", () => {
    anualNotes = [];

    inputs.forEach((value) => {
        
        if (value.value != "") {
            if (value.type == "number") {

                anualNotes.push(parseFloat(value.value))

            }
        }

    });

    calculateAverage();

    res = `<h2> Sua média anual: ${averageNote.toFixed(2)} </h2?`;
    res_container.innerHTML = res;
});


function calculateAverage() {
    
    let sumOfAllNotes = 0;
    for (let i = 0; i < anualNotes.length; i++) {

        sumOfAllNotes += anualNotes[i];
        
    };
    averageNote = sumOfAllNotes / anualNotes.length;


}
