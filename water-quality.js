/* =========================================
   AQUAFISHERIES
   WATER QUALITY JAVASCRIPT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const temperatureInput =
    document.getElementById("inputTemperature");

const phInput =
    document.getElementById("inputPH");

const oxygenInput =
    document.getElementById("inputOxygen");

const ammoniaInput =
    document.getElementById("inputAmmonia");

const nitriteInput =
    document.getElementById("inputNitrite");

const turbidityInput =
    document.getElementById("inputTurbidity");


/* =========================================
   STATUS CLASS
========================================= */

function setStatus(elementId, status) {

    const element =
        document.getElementById(elementId);

    element.classList.remove(
        "good",
        "warning",
        "critical"
    );

    element.classList.add(status);

    if (status === "good") {

        element.textContent = "Good";

    } else if (status === "warning") {

        element.textContent = "Watch";

    } else {

        element.textContent = "Critical";
    }
}


/* =========================================
   TEMPERATURE
========================================= */

function checkTemperature(value) {

    if (value >= 25 && value <= 30) {

        return "good";

    } else if (
        (value >= 23 && value < 25) ||
        (value > 30 && value <= 32)
    ) {

        return "warning";

    } else {

        return "critical";
    }
}


/* =========================================
   PH
========================================= */

function checkPH(value) {

    if (value >= 6.5 && value <= 8.5) {

        return "good";

    } else if (
        (value >= 6 && value < 6.5) ||
        (value > 8.5 && value <= 9)
    ) {

        return "warning";

    } else {

        return "critical";
    }
}


/* =========================================
   DISSOLVED OXYGEN
========================================= */

function checkOxygen(value) {

    if (value >= 5) {

        return "good";

    } else if (value >= 3) {

        return "warning";

    } else {

        return "critical";
    }
}


/* =========================================
   AMMONIA
========================================= */

function checkAmmonia(value) {

    if (value < 0.05) {

        return "good";

    } else if (value <= 0.2) {

        return "warning";

    } else {

        return "critical";
    }
}


/* =========================================
   NITRITE
========================================= */

function checkNitrite(value) {

    if (value < 0.1) {

        return "good";

    } else if (value <= 0.5) {

        return "warning";

    } else {

        return "critical";
    }
}


/* =========================================
   TURBIDITY
========================================= */

function checkTurbidity(value) {

    if (value < 50) {

        return "good";

    } else if (value <= 100) {

        return "warning";

    } else {

        return "critical";
    }
}


/* =========================================
   UPDATE WATER QUALITY
========================================= */

function updateWaterQuality() {

    const temperature =
        parseFloat(temperatureInput.value) || 0;

    const ph =
        parseFloat(phInput.value) || 0;

    const oxygen =
        parseFloat(oxygenInput.value) || 0;

    const ammonia =
        parseFloat(ammoniaInput.value) || 0;

    const nitrite =
        parseFloat(nitriteInput.value) || 0;

    const turbidity =
        parseFloat(turbidityInput.value) || 0;


    /* Update displayed values */

    document.getElementById(
        "temperatureValue"
    ).textContent = temperature.toFixed(1);


    document.getElementById(
        "phValue"
    ).textContent = ph.toFixed(1);


    document.getElementById(
        "oxygenValue"
    ).textContent = oxygen.toFixed(1);


    document.getElementById(
        "ammoniaValue"
    ).textContent = ammonia.toFixed(2);


    document.getElementById(
        "nitriteValue"
    ).textContent = nitrite.toFixed(2);


    document.getElementById(
        "turbidityValue"
    ).textContent = turbidity.toFixed(0);


    /* Determine statuses */

    const statuses = [

        checkTemperature(temperature),

        checkPH(ph),

        checkOxygen(oxygen),

        checkAmmonia(ammonia),

        checkNitrite(nitrite),

        checkTurbidity(turbidity)

    ];


    setStatus(
        "temperatureStatus",
        statuses[0]
    );

    setStatus(
        "phStatus",
        statuses[1]
    );

    setStatus(
        "oxygenStatus",
        statuses[2]
    );

    setStatus(
        "ammoniaStatus",
        statuses[3]
    );

    setStatus(
        "nitriteStatus",
        statuses[4]
    );

    setStatus(
        "turbidityStatus",
        statuses[5]
    );


    /* =====================================
       OVERALL STATUS
    ===================================== */

    let overall = "good";

    if (statuses.includes("critical")) {

        overall = "critical";

    } else if (statuses.includes("warning")) {

        overall = "warning";
    }


    const overallStatus =
        document.getElementById("overallStatus");

    const overallMessage =
        document.getElementById("overallMessage");

    const indicator =
        document.getElementById("statusIndicator");


    if (overall === "good") {

        overallStatus.textContent = "GOOD";

        overallStatus.style.color = "#28723e";

        overallMessage.textContent =
            "Your pond conditions are currently within the selected target ranges.";

        indicator.textContent = "✓";

        indicator.style.background = "#3b9653";

    }

    else if (overall === "warning") {

        overallStatus.textContent = "WATCH";

        overallStatus.style.color = "#9a6800";

        overallMessage.textContent =
            "One or more water parameters need attention. Monitor the pond closely.";

        indicator.textContent = "⚠";

        indicator.style.background = "#d99a1b";

    }

    else {

        overallStatus.textContent = "CRITICAL";

        overallStatus.style.color = "#b72d2d";

        overallMessage.textContent =
            "One or more water parameters are outside the acceptable range. Take corrective action.";

        indicator.textContent = "!";

        indicator.style.background = "#d64545";
    }
}


/* =========================================
   INPUT EVENTS
========================================= */

temperatureInput.addEventListener(
    "input",
    updateWaterQuality
);

phInput.addEventListener(
    "input",
    updateWaterQuality
);

oxygenInput.addEventListener(
    "input",
    updateWaterQuality
);

ammoniaInput.addEventListener(
    "input",
    updateWaterQuality
);

nitriteInput.addEventListener(
    "input",
    updateWaterQuality
);

turbidityInput.addEventListener(
    "input",
    updateWaterQuality
);


/* =========================================
   DATE
========================================= */

const dateInput =
    document.getElementById("measurementDate");

const today =
    new Date().toISOString().split("T")[0];

dateInput.value = today;


/* =========================================
   SAVE MEASUREMENT
========================================= */

document
    .getElementById("saveWaterBtn")
    .addEventListener("click", saveMeasurement);


function saveMeasurement() {

    const pond =
        document.getElementById("recordPond").value;

    const date =
        document.getElementById("measurementDate").value;

    const temperature =
        parseFloat(temperatureInput.value) || 0;

    const ph =
        parseFloat(phInput.value) || 0;

    const oxygen =
        parseFloat(oxygenInput.value) || 0;

    const ammonia =
        parseFloat(ammoniaInput.value) || 0;


    /* Determine overall status */

    const statuses = [

        checkTemperature(temperature),

        checkPH(ph),

        checkOxygen(oxygen),

        checkAmmonia(ammonia)

    ];


    let status = "Good";

    if (statuses.includes("critical")) {

        status = "Critical";

    } else if (statuses.includes("warning")) {

        status = "Watch";
    }


    /* Format date */

    const formattedDate =
        new Date(date).toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );


    /* Create table row */

    const row =
        document.createElement("tr");


    let statusClass = "table-good";

    if (status === "Watch") {

        statusClass = "table-warning";

    } else if (status === "Critical") {

        statusClass = "table-critical";
    }


    row.innerHTML = `

        <td>${formattedDate}</td>

        <td>${pond}</td>

        <td>${ph.toFixed(1)}</td>

        <td>${temperature.toFixed(1)} °C</td>

        <td>${oxygen.toFixed(1)}</td>

        <td>${ammonia.toFixed(2)}</td>

        <td>
            <span class="${statusClass}">
                ${status === "Good" ? "✓" :
                  status === "Watch" ? "⚠" : "!"}
                ${status}
            </span>
        </td>

    `;


    document
        .getElementById("historyTable")
        .prepend(row);


    /* Success message */

    const message =
        document.getElementById("saveMessage");

    message.textContent =
        "✓ Measurement saved successfully.";

    setTimeout(() => {

        message.textContent = "";

    }, 3000);
}


/* =========================================
   INITIAL LOAD
========================================= */

updateWaterQuality();
