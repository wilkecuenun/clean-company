document.addEventListener("DOMContentLoaded", function () {
    const cardPaymentBtn = document.getElementById("card-payment-btn");
    const cashPaymentBtn = document.getElementById("cash-payment-btn");
    const cardDetails = document.getElementById("card-details-container");
    const cardCombinedInput = document.getElementById("card-combined");
    const expiryInput = document.getElementById("expiry-date");
    const cvcInput = document.getElementById("cvc");
    const cardTypeDisplay = document.getElementById("card-type-display");
    const cardIcon = document.getElementById("card-icon");
    const cardIcons = document.querySelectorAll(".card-icons img");
    const submitPaymentBtn = document.getElementById("submit-payment");
    const priceInput = document.getElementById("price");

    // Card patterns for US-based card types
    const cardPatterns = {
        Visa: /^4[0-9]{0,15}/, // Visa: Starts with 4
        MasterCard: /^5[1-5][0-9]{0,14}/, // MasterCard: Starts with 51-55
        Amex: /^3[47][0-9]{0,13}/, // Amex: Starts with 34 or 37
        Discover: /^6(?:011|5[0-9]{0,2})[0-9]{0,12}/, // Discover: Starts with 6011 or 65
    };

    const maxLengths = {
        Visa: 16,
        MasterCard: 16,
        Amex: 15,
        Discover: 16,
    };

    // Function to show card details
    function showCardDetails() {
        cardDetails.style.display = "block";
        cardPaymentBtn.classList.add("btn--active");
        cashPaymentBtn.classList.remove("btn--active");
    }

    // Function to hide card details
    function hideCardDetails() {
        cardDetails.style.display = "none";
        cashPaymentBtn.classList.add("btn--active");
        cardPaymentBtn.classList.remove("btn--active");
    }

    // Add event listeners
    cardPaymentBtn.addEventListener("click", showCardDetails);
    cashPaymentBtn.addEventListener("click", hideCardDetails);

    // Set initial state
    hideCardDetails();

    // Function to format card number input and ensure 16 digits
    function formatCardNumber(input) {
        // Remove non-digits and limit to 16 digits
        input = input.replace(/\D/g, "").slice(0, 16);

        // Format with spaces every 4 digits
        return input.match(/.{1,4}/g)?.join(" ") || input;
    }

    // Input handling for Card Number
    cardCombinedInput.addEventListener("input", (e) => {
        let input = e.target.value;
        input = formatCardNumber(input); // Format card number
        e.target.value = input;

        // Detect card type based on input
        let cardType = "Unknown"; // Default card type
        let cardImageSrc = "/images/cards/default.png"; // Default image
        for (const [type, pattern] of Object.entries(cardPatterns)) {
            if (pattern.test(input.replace(/\s+/g, ""))) {
                cardType = type;
                cardImageSrc = `/images/cards/${type.toLowerCase()}.png`; // Dynamic image path
                break;
            }
        }

        cardIcons.forEach((icon) => {
            if (icon.alt.includes(cardType)) {
                icon.classList.add("active");
            } else {
                icon.classList.remove("active");
            }
        });

        // Adjust maxlength based on card type
        if (maxLengths[cardType]) {
            e.target.maxLength = maxLengths[cardType] + 3; // Add space for spaces
        }
    });

    // Input handling for Expiry Date (MM/YY)
    expiryInput.addEventListener("input", (e) => {
        let input = e.target.value.replace(/\D/g, ""); // Remove non-digits
        if (input.length > 2) {
            input = `${input.slice(0, 2)}/${input.slice(2, 4)}`; // Format MM/YY
        }
        e.target.value = input;
    });

    // Input handling for CVC
    cvcInput.addEventListener("input", (e) => {
        let input = e.target.value.replace(/\D/g, ""); // Remove non-digits
        e.target.value = input.slice(0, 3); // CVC is max 3 digits
    });

    // Function to validate payment details
    function validatePaymentDetails() {
        const cardNumber = cardCombinedInput.value.trim();
        const expiryDate = expiryInput.value.trim();
        const cvc = cvcInput.value.trim();
        const price = priceInput.value.trim();

        if (!cardNumber || !expiryDate || !cvc || !price) {
            alert("Please fill in all payment details.");
            return false;
        }

        if (isNaN(price) || parseFloat(price) <= 0) {
            alert("Please enter a valid amount.");
            return false;
        }

        return { cardNumber, expiryDate, cvc, price };
    }

    // Pre-fill the "Enter Amount" field when order details are saved
    submitPaymentBtn.addEventListener("click", () => {
        const paymentDetails = validatePaymentDetails();
        if (paymentDetails) {
            const enterAmountField = document.getElementById("price"); // Assuming "price" is the field
            if (enterAmountField) {
                // Ensure total value is pre-filled
                paymentDetails.price = enterAmountField.value.trim();
            }
            processPayment(paymentDetails);
        }
    });

    function processPayment({ cardNumber, expiryDate, cvc, price }) {
        // Example integration with a payment gateway API
        const paymentData = {
            cardNumber,
            expiryDate,
            cvc,
            amount: price,
        };

        fetch("/api/process-payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(paymentData),
        })
            .then((response) => response.json()) // Return the parsed JSON
            .then((data) => {
                if (data.success) {
                    // Display the payment details
                    alert(`
                        Payment successful!
                        Amount with Tax: $${data.totalAmountWithTax}
                        Tax Amount: $${data.taxAmount}
                        Bank Fee: $${data.bankFee}
                        Total Amount After Fee: $${data.totalAmountAfterFee}
                    `);
                    // Redirect to the success page
                    window.location.href = "/pass";
                } else {
                    alert("Payment failed: " + data.error);
                }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            });
    }
});
