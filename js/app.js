

document.addEventListener("DOMContentLoaded", () => {
    // Navigation toggling (e.g. a mobile dropdown menu, if needed)
    const navToggleBtn = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Search or command functionality (e.g. the "Try your command here" input)
    const commandInput = document.querySelector(".command-input");
    const commandSubmitBtn = document.querySelector(".command-submit-btn");

    commandSubmitBtn.addEventListener("click", () => {
        let userCommand = commandInput.value;
        handleUserCommand(userCommand);
    });

    // Sample function to handle user command or search input
    function handleUserCommand(command) {
        // Based on the command, you can define actions or search functionalities
        if (command === "exampleCommand") {
            // Do something
        } else {
            // Handle other cases or show a message
            console.log("Unrecognized command:", command);
        }
    }

    // Example click event for one of the offerings (expand as needed for other sections)
    const aiSolutionBtn = document.querySelector(".ai-solution-btn");
    aiSolutionBtn.addEventListener("click", () => {
        // Redirect to a detailed page or open a modal, etc.
        window.location.href = "/ai-solution-details";
    });

    // Add more interactivity as per your design: modals, sliders, animations, etc.
});
