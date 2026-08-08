/* =========================================
   AQUAFISHERIES
   FISH-FARM CALCULATOR
   JAVASCRIPT
========================================= */


/* =========================================
   1. HELPER FUNCTION
========================================= */

function getNumber(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}


/* =========================================
   2. STOCKING CALCULATOR
========================================= */

function calculateStocking() {

    const pondArea = getNumber("pondArea");
    const stockingDensity = getNumber("stockingDensity");
    const fishSize = getNumber("fishSize");

    const numberOfFish = pondArea * stockingDensity;

    document.getElementById("stockingResult").textContent =
        numberOfFish.toLocaleString();

    document.getElementById("stockingMessage").textContent =
        `You can stock ${numberOfFish.toLocaleString()} fish of average size ${fishSize} cm in your ${pondArea.toLocaleString()} m² pond.`;
}


/* =========================================
   3. FEED CALCULATOR
========================================= */

function calculateFeed() {

    const numberFish = getNumber("numberFish");
    const averageWeight = getNumber("averageWeight");
    const feedingRate = getNumber("feedingRate");

    /*
        Biomass calculation:

        Number of fish × Average weight

        Example:

        2,500 × 50g
        = 125,000g
        = 125kg
    */

    const biomassKg =
        (numberFish * averageWeight) / 1000;


    /*
        Daily feed:

        Biomass × Feeding rate / 100
    */

    const dailyFeed =
        biomassKg * (feedingRate / 100);


    /*
        Monthly feed:

        Daily feed × 30
    */

    const monthlyFeed =
        dailyFeed * 30;


    document.getElementById("dailyFeed").textContent =
        dailyFeed.toFixed(2);

    document.getElementById("monthlyFeed").textContent =
        monthlyFeed.toFixed(2);
}


/* =========================================
   4. SURVIVAL CALCULATOR
========================================= */

function calculateSurvival() {

    const fishStocked = getNumber("fishStocked");
    const fishHarvested = getNumber("fishHarvested");

    let survivalRate = 0;

    if (fishStocked > 0) {

        survivalRate =
            (fishHarvested / fishStocked) * 100;
    }

    document.getElementById("survivalResult").textContent =
        survivalRate.toFixed(2);
}


/* =========================================
   5. GROWTH CALCULATOR
========================================= */

function calculateGrowth() {

    const initialWeight = getNumber("initialWeight");
    const finalWeight = getNumber("finalWeight");
    const culturePeriod = getNumber("culturePeriod");

    let averageWeightGain = 0;

    if (culturePeriod > 0) {

        const weightGain =
            finalWeight - initialWeight;

        averageWeightGain =
            weightGain / culturePeriod;
    }

    document.getElementById("growthResult").textContent =
        averageWeightGain.toFixed(2);
}


/* =========================================
   6. PROFIT CALCULATOR
========================================= */

function calculateProfit() {

    const totalCost = getNumber("totalCost");
    const expectedSales = getNumber("expectedSales");

    const profit =
        expectedSales - totalCost;

    const result =
        document.getElementById("profitResult");


    /*
        Format Nigerian Naira
    */

    result.textContent =
        `₦${Math.abs(profit).toLocaleString()}`;


    /*
        Show negative profit
    */

    if (profit < 0) {

        result.textContent =
            `-₦${Math.abs(profit).toLocaleString()}`;

        result.style.color = "#d64545";

    } else {

        result.style.color = "";
    }
}


/* =========================================
   7. CALCULATOR TAB SWITCHING
========================================= */

const calculatorTabs =
    document.querySelectorAll(".calculator-tab");


calculatorTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        /*
            Remove active class
            from all tabs
        */

        calculatorTabs.forEach(item => {

            item.classList.remove("active");

        });


        /*
            Activate clicked tab
        */

        tab.classList.add("active");


        /*
            Get calculator target
        */

        const target =
            tab.getAttribute("data-target");


        /*
            Scroll to calculator
        */

        const targetElement =
            document.getElementById(target);


        if (targetElement) {

            targetElement.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* =========================================
   8. AUTOMATIC CALCULATIONS
========================================= */


/*
    Stocking inputs
*/

document.getElementById("pondArea")
    .addEventListener("input", calculateStocking);

document.getElementById("stockingDensity")
    .addEventListener("input", calculateStocking);

document.getElementById("fishSize")
    .addEventListener("input", calculateStocking);


/*
    Feed inputs
*/

document.getElementById("numberFish")
    .addEventListener("input", calculateFeed);

document.getElementById("averageWeight")
    .addEventListener("input", calculateFeed);

document.getElementById("feedingRate")
    .addEventListener("input", calculateFeed);

document.getElementById("fcr")
    .addEventListener("input", calculateFeed);


/*
    Survival inputs
*/

document.getElementById("fishStocked")
    .addEventListener("input", calculateSurvival);

document.getElementById("fishHarvested")
    .addEventListener("input", calculateSurvival);


/*
    Growth inputs
*/

document.getElementById("initialWeight")
    .addEventListener("input", calculateGrowth);

document.getElementById("finalWeight")
    .addEventListener("input", calculateGrowth);

document.getElementById("culturePeriod")
    .addEventListener("input", calculateGrowth);


/*
    Profit inputs
*/

document.getElementById("totalCost")
    .addEventListener("input", calculateProfit);

document.getElementById("expectedSales")
    .addEventListener("input", calculateProfit);


/* =========================================
   9. RESET FUNCTIONS
========================================= */


/* STOCKING RESET */

function resetStocking() {

    document.getElementById("pondArea").value = 500;

    document.getElementById("stockingDensity").value = 5;

    document.getElementById("fishSize").value = 10;

    calculateStocking();
}


/* FEED RESET */

function resetFeed() {

    document.getElementById("numberFish").value = 2500;

    document.getElementById("averageWeight").value = 50;

    document.getElementById("feedingRate").value = 3;

    document.getElementById("fcr").value = 1.5;

    calculateFeed();
}


/* SURVIVAL RESET */

function resetSurvival() {

    document.getElementById("fishStocked").value = 2500;

    document.getElementById("fishHarvested").value = 2000;

    calculateSurvival();
}


/* GROWTH RESET */

function resetGrowth() {

    document.getElementById("initialWeight").value = 10;

    document.getElementById("finalWeight").value = 250;

    document.getElementById("culturePeriod").value = 120;

    calculateGrowth();
}


/* PROFIT RESET */

function resetProfit() {

    document.getElementById("totalCost").value = 350000;

    document.getElementById("expectedSales").value = 600000;

    calculateProfit();
}


/* =========================================
   10. INITIAL CALCULATIONS
========================================= */

calculateStocking();

calculateFeed();

calculateSurvival();

calculateGrowth();

calculateProfit();
