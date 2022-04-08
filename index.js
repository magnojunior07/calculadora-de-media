const res_container = document.getElementById("res-container");

let calculate_btn = document.getElementById("calculate-btn");
let inputs = document.querySelectorAll("input");
let anualNotes = [];
let res = 0;
let isAprove = false;
let averageUserNote = 0;


calculate_btn.addEventListener("click", () => {
    anualNotes = [];

    inputs.forEach((value) => {
        
        if (value.value != "") {
            if (value.type == "number") {

                anualNotes.push(parseFloat(value.value))

            }
        }

    });

    averageUserNote = calculateAverage();


    if (isAprove) {
        res = `
        <h2> Sua média anual: ${averageUserNote} </h2>
        <br>
        <div class="aprove-conteiner">
        <p id="aprove"> Você está aprovado(a)!</p>
        </div>
        `;
    } else {
        res = `
        <h2> Sua média anual: ${averageUserNote} </h2>
        <br>
        <div class="reprove-conteiner">
        <p id="reprove"> Você está reprovado(a)!</p>
        </div>
        `;
    }

    res_container.innerHTML = res;
});


function calculateAverage() {
    
    let sumOfAllNotes = 0;
    let averageNote = 0;

    for (let i = 0; i < anualNotes.length; i++) {

        sumOfAllNotes += anualNotes[i];
        
    };
    averageNote = sumOfAllNotes / anualNotes.length;

    

    if (averageNote >= 7.0) {
        isAprove = true;
    };

    if (!averageNote) {
        return 0.0;
    } else {
        return averageNote.toFixed(1); 
    };
};
