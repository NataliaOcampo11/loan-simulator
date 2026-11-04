
"use strict";

/* =========================================
   1. TRADUCCIONES
========================================= */

const translations = {
    es: {
        languageLabel: "Idioma",
        eyebrow: "PLANIFICACIÓN FINANCIERA",
        mainTitle: "Simulador de Préstamos",
        mainSubtitle: "Calcula tus cuotas y conoce cómo evoluciona tu préstamo a lo largo del tiempo.",

        formTitle: "Información del préstamo",
        formSubtitle: "Ingresa los datos para calcular tu plan de pagos.",
        amountLabel: "Monto del préstamo",
        amountHint: "Ingresa el valor que deseas solicitar.",
        rateLabel: "Tasa de interés (%)",
        rateHint: "Ingresa la tasa de interés correspondiente.",
        rateTypeLabel: "Tipo de tasa",
        monthlyRate: "Efectiva Mensual (EM)",
        annualRate: "Efectiva Anual (EA)",
        rateTypeHint: "Selecciona cómo está expresada la tasa.",
        termLabel: "Plazo del préstamo",
        months: "meses",
        termHint: "Duración total del préstamo en meses.",
        calculateButton: "Calcular préstamo",

        resultsEyebrow: "RESUMEN FINANCIERO",
        resultsTitle: "Resultados de la simulación",
        resultsSubtitle: "Este es el resumen de tu préstamo y su plan de amortización.",
        monthlyPayment: "Cuota mensual",
        monthlyDescription: "Pago mensual estimado",
        totalInterest: "Intereses totales",
        interestDescription: "Costo total de los intereses",
        totalPayment: "Pago total",
        totalDescription: "Capital más intereses",

        detailsTitle: "Detalles del préstamo",
        detailAmount: "Monto solicitado",
        detailRate: "Tasa mensual equivalente",
        detailTerm: "Plazo",
        detailMethod: "Sistema de amortización",
        frenchMethod: "Francés (cuota fija)",

        scheduleTitle: "Tabla de amortización",
        scheduleSubtitle: "Desglose de cada pago durante la duración del préstamo.",
        thMonth: "Mes",
        thInitial: "Saldo inicial",
        thPayment: "Cuota",
        thInterest: "Interés",
        thPrincipal: "Capital",
        thFinal: "Saldo final",

        printButton: "Imprimir resultados",
        pdfButton: "Exportar a PDF",
        footerText: "Simulador de préstamos · Sistema de amortización francés",

        errorAmount: "Por favor, ingresa un monto de préstamo válido mayor que cero.",
        errorRate: "Por favor, ingresa una tasa de interés válida igual o mayor que cero.",
        errorTerm: "Por favor, ingresa un plazo válido en meses (número entero mayor que cero).",
        errorGeneral: "No fue posible calcular el préstamo. Verifica los datos ingresados.",
        errorPDF: "No se pudo generar el PDF. Verifica tu conexión a internet e inténtalo nuevamente.",
        pdfTitle: "Reporte de simulación de préstamo",
        pdfSubtitle: "Resumen financiero y tabla de amortización",
        pdfAmount: "Monto del préstamo",
        pdfOriginalRate: "Tasa de interés ingresada",
        pdfRateType: "Tipo de tasa",
        pdfMonthlyRate: "Tasa mensual equivalente",
        pdfTerm: "Plazo",
        pdfMethod: "Sistema de amortización",
        pdfPayment: "Cuota mensual",
        pdfInterest: "Intereses totales",
        pdfTotal: "Pago total",
        pdfMonths: "meses",
        pdfGenerated: "Documento generado por Loan Simulator"
    },

    en: {
        languageLabel: "Language",
        eyebrow: "FINANCIAL PLANNING",
        mainTitle: "Loan Simulator",
        mainSubtitle: "Calculate your installments and see how your loan evolves over time.",

        formTitle: "Loan Information",
        formSubtitle: "Enter your details to calculate your payment plan.",
        amountLabel: "Loan Amount",
        amountHint: "Enter the amount you wish to borrow.",
        rateLabel: "Interest Rate (%)",
        rateHint: "Enter the applicable interest rate.",
        rateTypeLabel: "Interest Rate Type",
        monthlyRate: "Effective Monthly (EM)",
        annualRate: "Effective Annual (EA)",
        rateTypeHint: "Select how the interest rate is expressed.",
        termLabel: "Loan Term",
        months: "months",
        termHint: "Total loan duration in months.",
        calculateButton: "Calculate Loan",

        resultsEyebrow: "FINANCIAL SUMMARY",
        resultsTitle: "Simulation Results",
        resultsSubtitle: "Here is your loan summary and amortization schedule.",
        monthlyPayment: "Monthly Payment",
        monthlyDescription: "Estimated monthly installment",
        totalInterest: "Total Interest",
        interestDescription: "Total cost of interest",
        totalPayment: "Total Payment",
        totalDescription: "Principal plus interest",

        detailsTitle: "Loan Details",
        detailAmount: "Loan Amount",
        detailRate: "Equivalent Monthly Rate",
        detailTerm: "Loan Term",
        detailMethod: "Amortization Method",
        frenchMethod: "French (fixed installments)",

        scheduleTitle: "Amortization Schedule",
        scheduleSubtitle: "Breakdown of each payment throughout the loan term.",
        thMonth: "Month",
        thInitial: "Opening Balance",
        thPayment: "Payment",
        thInterest: "Interest",
        thPrincipal: "Principal",
        thFinal: "Closing Balance",

        printButton: "Print Results",
        pdfButton: "Export to PDF",
        footerText: "Loan Simulator · French amortization system",

        errorAmount: "Please enter a valid loan amount greater than zero.",
        errorRate: "Please enter a valid interest rate equal to or greater than zero.",
        errorTerm: "Please enter a valid loan term in months (a positive whole number).",
        errorGeneral: "The loan could not be calculated. Please check the information entered.",
        errorPDF: "The PDF could not be generated. Check your internet connection and try again.",
        pdfTitle: "Loan Simulation Report",
        pdfSubtitle: "Financial Summary and Amortization Schedule",
        pdfAmount: "Loan Amount",
        pdfOriginalRate: "Entered Interest Rate",
        pdfRateType: "Interest Rate Type",
        pdfMonthlyRate: "Equivalent Monthly Rate",
        pdfTerm: "Loan Term",
        pdfMethod: "Amortization Method",
        pdfPayment: "Monthly Payment",
        pdfInterest: "Total Interest",
        pdfTotal: "Total Payment",
        pdfMonths: "months",
        pdfGenerated: "Document generated by Loan Simulator"
    }
};


/* =========================================
   2. VARIABLES Y REFERENCIAS
========================================= */

let currentLanguage = "es";
let currentSimulation = null;

const loanForm = document.getElementById("loanForm");
const languageSelector = document.getElementById("languageSelector");
const resultsSection = document.getElementById("results");
const messageBox = document.getElementById("messageBox");

const loanAmountInput = document.getElementById("loanAmount");
const interestRateInput = document.getElementById("interestRate");
const rateTypeInput = document.getElementById("rateType");
const loanTermInput = document.getElementById("loanTerm");

const amortizationBody = document.getElementById("amortizationBody");


/* =========================================
   3. FUNCIONES DE IDIOMA Y FORMATO
========================================= */

function translate(key) {
    return translations[currentLanguage][key] || key;
}

function formatNumber(value, decimals = 2) {
    return Number(value).toLocaleString(
        currentLanguage === "es" ? "es-CO" : "en-US",
        {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }
    );
}

function formatMoney(value) {
    return "$" + formatNumber(value);
}

function applyLanguage(language) {
    if (!translations[language]) return;

    currentLanguage = language;

    document.documentElement.lang = language;
    document.title = language === "es"
        ? "Simulador de Préstamos"
        : "Loan Simulator";

    // Actualizar todos los elementos con data-i18n.
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translate(key);
    });

    // Actualizar el texto accesible del selector.
    languageSelector.setAttribute(
        "aria-label",
        language === "es" ? "Seleccionar idioma" : "Select language"
    );

    // Si ya existe una simulación, actualizar su presentación.
    // No se realizan nuevamente los cálculos.
    if (currentSimulation) {
        renderResults();
    }
}


/* =========================================
   4. VALIDACIÓN DE DATOS
========================================= */

function validateInputs() {
    const amount = Number(loanAmountInput.value);
    const interestRate = Number(interestRateInput.value);
    const term = Number(loanTermInput.value);

    if (
        loanAmountInput.value.trim() === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        showMessage(translate("errorAmount"));
        loanAmountInput.focus();
        return null;
    }

    if (
        interestRateInput.value.trim() === "" ||
        !Number.isFinite(interestRate) ||
        interestRate < 0
    ) {
        showMessage(translate("errorRate"));
        interestRateInput.focus();
        return null;
    }

    if (
        loanTermInput.value.trim() === "" ||
        !Number.isFinite(term) ||
        !Number.isInteger(term) ||
        term <= 0
    ) {
        showMessage(translate("errorTerm"));
        loanTermInput.focus();
        return null;
    }

    return {
        amount,
        interestRate,
        rateType: rateTypeInput.value,
        term
    };
}

function showMessage(message) {
    messageBox.textContent = message;
    messageBox.hidden = false;
}

function clearMessage() {
    messageBox.textContent = "";
    messageBox.hidden = true;
}


/* =========================================
   5. CONVERSIÓN DE TASAS
========================================= */

function convertToMonthlyRate(rate, rateType) {
    // La tasa ingresada se expresa en porcentaje.
    const decimalRate = rate / 100;

    if (rateType === "EA") {
        // Conversión de tasa efectiva anual a mensual:
        // EM = (1 + EA)^(1/12) - 1
        return Math.pow(1 + decimalRate, 1 / 12) - 1;
    }

    // Si la tasa ya es efectiva mensual, no requiere conversión.
    return decimalRate;
}


/* =========================================
   6. CÁLCULO DE AMORTIZACIÓN FRANCESA
========================================= */

function calculateLoan(data) {
    const principal = data.amount;
    const monthlyRate = convertToMonthlyRate(
        data.interestRate,
        data.rateType
    );
    const term = data.term;

    let fixedPayment;

    // Fórmula de cuota fija del sistema francés.
    if (monthlyRate === 0) {
        fixedPayment = principal / term;
    } else {
        fixedPayment =
            principal *
            (monthlyRate * Math.pow(1 + monthlyRate, term)) /
            (Math.pow(1 + monthlyRate, term) - 1);
    }

    let balance = principal;
    let totalInterest = 0;
    let totalPayment = 0;

    const schedule = [];

    for (let month = 1; month <= term; month++) {
        const initialBalance = balance;

        const interest = initialBalance * monthlyRate;

        let payment = fixedPayment;
        let principalPayment = payment - interest;

        // Ajustar la última cuota para eliminar residuos
        // de redondeo y cancelar completamente el saldo.
        if (month === term || principalPayment > balance) {
            principalPayment = balance;
            payment = principalPayment + interest;
        }

        balance = Math.max(0, balance - principalPayment);

        // Redondear los valores mostrados y acumulados a dos decimales.
        const roundedInterest = Math.round(interest * 100) / 100;
        const roundedPrincipal = Math.round(principalPayment * 100) / 100;
        const roundedPayment = Math.round(payment * 100) / 100;

        totalInterest += roundedInterest;
        totalPayment += roundedPayment;

        schedule.push({
            month,
            initialBalance,
            payment: roundedPayment,
            interest: roundedInterest,
            principal: roundedPrincipal,
            finalBalance: balance
        });
    }

    return {
        amount: principal,
        originalRate: data.interestRate,
        rateType: data.rateType,
        monthlyRate,
        term,
        fixedPayment,
        totalInterest,
        totalPayment,
        schedule
    };
}


/* =========================================
   7. PRESENTACIÓN DE RESULTADOS
========================================= */

function renderResults() {
    if (!currentSimulation) return;

    const simulation = currentSimulation;

    // Resumen financiero.
    document.getElementById("monthlyPaymentValue").textContent =
        formatMoney(simulation.fixedPayment);

    document.getElementById("totalInterestValue").textContent =
        formatMoney(simulation.totalInterest);

    document.getElementById("totalPaymentValue").textContent =
        formatMoney(simulation.totalPayment);

    // Detalles del préstamo.
    document.getElementById("detailAmountValue").textContent =
        formatMoney(simulation.amount);

    document.getElementById("detailRateValue").textContent =
        formatNumber(simulation.monthlyRate * 100) + "%";

    document.getElementById("detailTermValue").textContent =
        simulation.term + " " + translate("months");

    // Contador de cuotas.
    document.getElementById("scheduleCount").textContent =
        simulation.term + " " + translate("months");

    // Reconstruir la tabla en el idioma seleccionado.
    amortizationBody.innerHTML = "";

    simulation.schedule.forEach(row => {
        const tr = document.createElement("tr");

        const values = [
            row.month,
            formatMoney(row.initialBalance),
            formatMoney(row.payment),
            formatMoney(row.interest),
            formatMoney(row.principal),
            formatMoney(row.finalBalance)
        ];

        values.forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });

        amortizationBody.appendChild(tr);
    });

    resultsSection.hidden = false;
}


/* =========================================
   8. EJECUTAR SIMULACIÓN
========================================= */

loanForm.addEventListener("submit", function(event) {
    event.preventDefault();

    clearMessage();

    const data = validateInputs();

    if (!data) return;

    try {
        currentSimulation = calculateLoan(data);
        renderResults();

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } catch (error) {
        console.error("Loan calculation error:", error);
        showMessage(translate("errorGeneral"));
    }
});


/* =========================================
   9. CAMBIAR IDIOMA
========================================= */

languageSelector.addEventListener("change", function() {
    applyLanguage(this.value);
});


/* =========================================
   10. IMPRESIÓN
========================================= */

document.getElementById("printButton").addEventListener("click", function() {
    if (!currentSimulation) return;

    window.print();
});


/* =========================================
   11. EXPORTACIÓN A PDF
========================================= */

document.getElementById("pdfButton").addEventListener("click", function() {
    if (!currentSimulation) return;

    try {
        if (
            !window.jspdf ||
            typeof window.jspdf.jsPDF !== "function"
        ) {
            throw new Error("jsPDF library is unavailable.");
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: "landscape",
            unit: "mm",
            format: "a4"
        });

        if (typeof doc.autoTable !== "function") {
            throw new Error("AutoTable plugin is unavailable.");
        }

        const simulation = currentSimulation;
        const t = translations[currentLanguage];

        const pageWidth = doc.internal.pageSize.getWidth();

        // Título del documento.
        doc.setFont("helvetica", "bold");
        doc.setFontSize(19);
        doc.setTextColor(22, 50, 79);
        doc.text(t.pdfTitle, 14, 18);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(100, 116, 139);
        doc.text(t.pdfSubtitle, 14, 25);

        // Información general del préstamo.
        doc.setFontSize(10);
        doc.setTextColor(38, 52, 69);

        const leftColumn = 14;
        const rightColumn = 145;

        const firstColumn = [
            `${t.pdfAmount}: ${formatMoney(simulation.amount)}`,
            `${t.pdfOriginalRate}: ${formatNumber(simulation.originalRate)}%`,
            `${t.pdfRateType}: ${simulation.rateType === "EA" ? t.annualRate : t.monthlyRate}`,
            `${t.pdfMonthlyRate}: ${formatNumber(simulation.monthlyRate * 100)}%`
        ];

        const secondColumn = [
            `${t.pdfTerm}: ${simulation.term} ${t.pdfMonths}`,
            `${t.pdfMethod}: ${t.frenchMethod}`,
            `${t.pdfPayment}: ${formatMoney(simulation.fixedPayment)}`,
            `${t.pdfInterest}: ${formatMoney(simulation.totalInterest)}`,
            `${t.pdfTotal}: ${formatMoney(simulation.totalPayment)}`
        ];

        let y = 37;

        firstColumn.forEach(line => {
            doc.text(line, leftColumn, y);
            y += 7;
        });

        y = 37;

        secondColumn.forEach(line => {
            doc.text(line, rightColumn, y);
            y += 7;
        });

        // Tabla de amortización.
        const tableHeaders = [
            t.thMonth,
            t.thInitial,
            t.thPayment,
            t.thInterest,
            t.thPrincipal,
            t.thFinal
        ];

        const tableRows = simulation.schedule.map(row => [
            String(row.month),
            formatMoney(row.initialBalance),
            formatMoney(row.payment),
            formatMoney(row.interest),
            formatMoney(row.principal),
            formatMoney(row.finalBalance)
        ]);

        doc.autoTable({
            startY: 77,
            head: [tableHeaders],
            body: tableRows,
            theme: "grid",
            styles: {
                font: "helvetica",
                fontSize: 8,
                cellPadding: 3,
                textColor: [55, 65, 81],
                lineColor: [226, 232, 240],
                lineWidth: 0.1
            },
            headStyles: {
                fillColor: [22, 50, 79],
                textColor: [255, 255, 255],
                fontStyle: "bold",
                halign: "center"
            },
            alternateRowStyles: {
                fillColor: [245, 248, 252]
            },
            columnStyles: {
                0: { halign: "center" }
            },
            margin: {
                left: 14,
                right: 14,
                bottom: 17
            },
            didDrawPage: function() {
                const pageHeight = doc.internal.pageSize.getHeight();

                doc.setFontSize(8);
                doc.setTextColor(130, 140, 150);
                doc.text(
                    t.pdfGenerated,
                    14,
                    pageHeight - 8
                );

                doc.text(
                    String(doc.internal.getNumberOfPages()),
                    pageWidth - 14,
                    pageHeight - 8,
                    { align: "right" }
                );
            }
        });

        const filename = currentLanguage === "es"
            ? "simulacion_prestamo.pdf"
            : "loan_simulation.pdf";

        doc.save(filename);

    } catch (error) {
        console.error("PDF generation error:", error);
        showMessage(translate("errorPDF"));
    }
});


/* =========================================
   12. INICIALIZACIÓN
========================================= */

// Español es el idioma predeterminado.
languageSelector.value = "es";
applyLanguage("es");
