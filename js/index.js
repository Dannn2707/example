const input = document.getElementById("input_num");
const errorMessage = document.getElementById("errorMessage");

// Listen for input events
input.addEventListener("input", () => {
    const value = input.value;

    // Limit to 3 digits and less than 200
    if (value.length > 3 || parseInt(value) >= 200) {
        errorMessage.style.display = "block";
        input.value = value.slice(0, 3); // Truncate to 3 digits
    } else {
        errorMessage.style.display = "none";
    }

    // Ensure only numbers are allowed
    input.value = input.value.replace(/[^0-9]/g, "");
});
