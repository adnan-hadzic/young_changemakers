
function deleteMessage(id) {
    const messageElement = document.getElementById(id);
    if (messageElement) {
        messageElement.remove(); 
        toastr.success("Message deleted successfully."); 
    } else {
        toastr.error("Message not found.");
    }
}


function editMessage(id) {
    const messageElement = document.getElementById(id);
    if (messageElement) {
        
        const name = messageElement.querySelector(".message-name").textContent.split(": ")[1];
        const email = messageElement.querySelector(".message-email").textContent.split(": ")[1];
        const message = messageElement.querySelector(".message-text").textContent.split(": ")[1];

        
        messageElement.innerHTML = `
            <input type="text" id="edit-name" value="${name}">
            <input type="email" id="edit-email" value="${email}">
            <textarea id="edit-message">${message}</textarea>
            <button onclick="saveMessage('${id}')">Save</button>
            <button onclick="cancelEdit('${id}', '${name}', '${email}', '${message}')">Cancel</button>
        `;
        toastr.info("Editing message.");
    } else {
        toastr.error("Message not found.");
    }
}


function saveMessage(id) {
    const name = document.getElementById("edit-name").value;
    const email = document.getElementById("edit-email").value;
    const message = document.getElementById("edit-message").value;

    const messageElement = document.getElementById(id);
    if (messageElement) {
        
        messageElement.innerHTML = `
            <span class="message-name"><strong>Name:</strong> ${name}</span><br>
            <span class="message-email"><strong>Email:</strong> ${email}</span><br>
            <span class="message-text"><strong>Message:</strong> ${message}</span><br>
            <button onclick="editMessage('${id}')">Edit</button>
            <button onclick="deleteMessage('${id}')">Delete</button>
        `;
        toastr.success("Message updated successfully.");
    } else {
        toastr.error("Failed to save message.");
    }
}


function cancelEdit(id, name, email, message) {
    const messageElement = document.getElementById(id);
    if (messageElement) {
        
        messageElement.innerHTML = `
            <span class="message-name"><strong>Name:</strong> ${name}</span><br>
            <span class="message-email"><strong>Email:</strong> ${email}</span><br>
            <span class="message-text"><strong>Message:</strong> ${message}</span><br>
            <button onclick="editMessage('${id}')">Edit</button>
            <button onclick="deleteMessage('${id}')">Delete</button>
        `;
        toastr.info("Edit canceled.");
    } else {
        toastr.error("Failed to cancel edit.");
    }
}
