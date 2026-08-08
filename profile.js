/* =========================================
   AQUAFISHERIES
   PROFILE JAVASCRIPT
========================================= */


const editButton =
    document.getElementById("editProfileBtn");

const modal =
    document.getElementById("profileModal");

const closeButton =
    document.getElementById("closeProfileModal");

const profileForm =
    document.getElementById("profileForm");


/* Open modal */

editButton.addEventListener("click", () => {

    modal.classList.add("show");

});


/* Close modal */

closeButton.addEventListener("click", () => {

    modal.classList.remove("show");

});


/* Close when clicking outside */

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/* =========================================
   SAVE PROFILE
========================================= */

profileForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("nameInput")
                .value.trim();


        const role =
            document.getElementById("roleInput")
                .value.trim();


        const country =
            document.getElementById("countryInput")
                .value.trim();


        const about =
            document.getElementById("aboutInput")
                .value.trim();


        if (!name || !role || !country) {

            alert(
                "Please complete the required fields."
            );

            return;

        }


        /* Update profile */

        document.getElementById(
            "profileName"
        ).textContent = name;


        document.getElementById(
            "displayName"
        ).textContent = name;


        document.getElementById(
            "headerName"
        ).textContent = name;


        document.getElementById(
            "profileRole"
        ).textContent = role;


        document.querySelector(
            ".profile-location"
        ).textContent = "📍 " + country;


        document.querySelector(
            ".about-text"
        ).textContent = about;


        /* Close modal */

        modal.classList.remove("show");


        alert(
            "Profile updated successfully!"
        );

    }
);
