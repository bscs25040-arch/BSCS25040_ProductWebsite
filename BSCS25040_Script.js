window.addEventListener("load", function () {

    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        alert("👕 Welcome to PUCCI - Where Style Meets Comfort!");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

function checkStock(productId) {
    const productBox = document.getElementById(productId);
    const availability = productBox.querySelector(".availability");

    if (availability.classList.contains("in-stock")) {
        alert("✅ " + productBox.querySelector("h2").textContent + " is In Stock!");
    } else {
        alert("❌ " + productBox.querySelector("h2").textContent + " is Out of Stock!");
    }
}



function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    

    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return false;
    }

    alert("✅ Form submitted successfully!");
    return true;
}



function sendMessage() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let chatLog = document.getElementById("chat-log");

    let userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input;
    chatLog.appendChild(userMsg);
  
    let botResponse = document.createElement("p");
    botResponse.textContent = "Bot: " + getBotResponse(input);
    chatLog.appendChild(botResponse);
    
    chatLog.scrollTop = chatLog.scrollHeight;
   
    document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (input.includes("products")) {
        return "You can explore our T-shirt collection on the Products page.";
    } else if (input.includes("contact")) {
        return "You can reach us at bscs25040@itu.edu.pk or call +92 300 1234567.";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else if (input.includes("ceo")) {
        return "BSCS25040 is the CEO of PUCCI.";
    } else {
        return "Sorry, I didn’t understand that. Try asking about products or contact info.";
    }
}

