function calculatePersonalSolvency() {
    const income = Number(document.getElementById("monthlyIncome").value);
    const expenses = Number(document.getElementById("livingExpenses").value);
    const debts = Number(document.getElementById("debtPayments").value);

    if (income <= 0) return alert("Ingresa tus ingresos mensuales.");

    const solvencia = income - (expenses + debts);
    const porcentajeDeuda = (debts / income) * 100;

    document.getElementById("resultContainer").classList.remove("d-none");
    document.getElementById("resultValue").innerHTML = `$${solvencia.toFixed(2)}`;

    const bar = document.getElementById("debtProgressBar");
    bar.style.width = porcentajeDeuda.toFixed(0) + "%";

    let mensaje = "";

    if (porcentajeDeuda < 30) {
        bar.style.background = "green";
        mensaje = "Excelente solvencia. Manejo financiero saludable.";
    } else if (porcentajeDeuda < 50) {
        bar.style.background = "orange";
        mensaje = "Cuidar el nivel de deuda, aún manejable.";
    } else {
        bar.style.background = "red";
        mensaje = "Alerta. Nivel de deuda alto, considera ajustes financieros.";
    }

    document.getElementById("resultAnalysis").innerHTML = mensaje;
}
