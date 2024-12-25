function addMessageToPage(name, email, message) {
    const messagesContainer = document.getElementById("messagesContainer");
    const newMessageDiv = document.createElement("div");
    newMessageDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
    `;
    messagesContainer.appendChild(newMessageDiv);
}


function displayMessages(messages) {
    const messagesContainer = document.getElementById("messagesContainer");
    messagesContainer.innerHTML = ""; 
    messages.forEach((msg) => {
        const newMessageDiv = document.createElement("div");
        newMessageDiv.innerHTML = `
            <p><strong>Name:</strong> ${msg.name}</p>
            <p><strong>Email:</strong> ${msg.email}</p>
            <p><strong>Message:</strong> ${msg.message}</p>
            <hr>
        `;
        messagesContainer.appendChild(newMessageDiv);
    });
}


function loadMessages() {
    fetch("messages.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch messages");
            }
            return response.json();
        })
        .then((data) => {
            displayMessages(data);
        })
        .catch((error) => {
            console.error("Error:", error);
            const messagesContainer = document.getElementById("messagesContainer");
            messagesContainer.innerHTML = "<p style='color: red;'>Error loading messages</p>";
        });
}


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        addMessageToPage(name, email, message); 
        document.getElementById("contactForm").reset(); 
    } else {
        alert("All fields are required!");
    }
});


document.addEventListener("DOMContentLoaded", loadMessages);
