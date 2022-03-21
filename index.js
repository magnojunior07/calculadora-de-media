function media() {
    let notaSomada = parseFloat(document.getElementById("b1Note1 + b1Note2 + b2Note1 + b2Note2 + b3Note1 + b3Note2 + b4Note1 + b4Note2").value);
    let media = notaSomada/8;
    let notaFixada = media.toFixed(1);

    console.log("Sua média é: " + notaFixada)

    let aprove = notaFixada >= 7 ? "aprovado" : "reprovado";

    console.log("Você está: " + aprove);

    document.getElementById("mediaFinal").innerText = "Sua média é: " + notaFixada;;
    document.getElementById("aprove").innerText = "Você está: " + aprove;

}