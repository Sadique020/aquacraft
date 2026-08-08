/* =========================================
   AQUAFISHERIES
   CERTIFICATES JAVASCRIPT
========================================= */


/* =========================================
   CERTIFICATE DATABASE
========================================= */

const certificates = {

    "AFS-2026-00001": {

        title: "Aquaculture Fundamentals",

        recipient: "Abumeenat",

        date: "08 August 2026",

        status: "Valid"

    },


    "AFS-2026-00002": {

        title: "Fish Farm Management",

        recipient: "Abumeenat",

        date: "25 July 2026",

        status: "Valid"

    },


    "AFS-2026-00003": {

        title: "Fish Nutrition Basics",

        recipient: "Abumeenat",

        date: "12 July 2026",

        status: "Valid"

    }

};


/* =========================================
   VIEW CERTIFICATE
========================================= */

const viewButtons =
    document.querySelectorAll(".view-certificate");


const modal =
    document.getElementById("certificateModal");


const closeModal =
    document.getElementById("closeModal");


const modalTitle =
    document.getElementById("modalCertificateTitle");


const modalId =
    document.getElementById("modalCertificateId");


const modalDate =
    document.getElementById("modalCertificateDate");


viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        const title =
            button.dataset.title;

        const id =
            button.dataset.id;

        const date =
            button.dataset.date;


        modalTitle.textContent = title;

        modalId.textContent = id;

        modalDate.textContent = date;


        modal.classList.add("show");

    });

});


/* =========================================
   CLOSE MODAL
========================================= */

closeModal.addEventListener(
    "click",
    () => {

        modal.classList.remove("show");

    }
);


/* Close when clicking outside */

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            modal.classList.remove("show");

        }

    }
);


/* =========================================
   VERIFY CERTIFICATE
========================================= */

const verificationInput =
    document.getElementById(
        "verificationInput"
    );


const verifyButton =
    document.getElementById(
        "verifyButton"
    );


const verificationResult =
    document.getElementById(
        "verificationResult"
    );


verifyButton.addEventListener(
    "click",
    verifyCertificate
);


verificationInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            verifyCertificate();

        }

    }
);


function verifyCertificate() {

    const id =
        verificationInput.value
            .trim()
            .toUpperCase();


    if (id === "") {

        verificationResult.textContent =
            "Please enter a certificate ID.";

        verificationResult.style.color =
            "#ffd166";

        return;
    }


    const certificate =
        certificates[id];


    if (certificate) {

        verificationResult.innerHTML = `

            ✓ VERIFIED — Certificate is valid.<br>

            Certificate:
            ${certificate.title}<br>

            Recipient:
            ${certificate.recipient}<br>

            Issued:
            ${certificate.date}

        `;

        verificationResult.style.color =
            "#9df2b0";

    }

    else {

        verificationResult.textContent =
            "✕ Certificate not found. Please check the certificate ID.";

        verificationResult.style.color =
            "#ff9b9b";
    }

}


/* =========================================
   INDIVIDUAL VERIFY BUTTONS
========================================= */

const individualVerifyButtons =
    document.querySelectorAll(
        ".verify-certificate"
    );


individualVerifyButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const id =
                button.dataset.id;


            verificationInput.value = id;


            verifyCertificate();


            document
                .querySelector(".verification-card")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});


/* =========================================
   PRINT CERTIFICATE
========================================= */

document
    .getElementById("printCertificate")
    .addEventListener(
        "click",
        () => {

            window.print();

        }
    );
