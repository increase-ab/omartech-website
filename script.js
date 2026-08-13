
// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// ===============================
// CLOSE MOBILE MENU AFTER CLICK
// ===============================

const menuLinks =
    document.querySelectorAll("#navLinks a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


// ===============================
// CONTACT FORM → WHATSAPP
// ===============================

function sendMessage(event) {

    event.preventDefault();


    // Get information from the form

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Check that all fields are filled

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all the fields.");

        return;

    }


    // YOUR WHATSAPP NUMBER
    // Replace this with your real number

    const phoneNumber =
        "2348000000000";


    // Create WhatsApp message

    const whatsappMessage =
        `Hello Omartech,

Name: ${name}

Email: ${email}

Service Required: ${subject}

Message:
${message}`;


    // Create WhatsApp URL

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    // Open WhatsApp

    window.open(
        whatsappURL,
        "_blank"
    );

}


// ===============================
// SCROLL ANIMATION
// ===============================

const sections =
    document.querySelectorAll("section");


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(function(section) {

    observer.observe(section);

});

