document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackStatus = document.getElementById("feedbackStatus");

    feedbackForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(feedbackForm);
        const feedbackData = Object.fromEntries(formData);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(feedbackData),
            });

            if (response.ok) {
                feedbackStatus.style.display = "block";
                feedbackStatus.style.color = "green";
                feedbackStatus.textContent = "Feedback sent successfully!";
                feedbackForm.reset();
            } else {
                throw new Error("Failed to send feedback.");
            }
        } catch (error) {
            feedbackStatus.style.display = "block";
            feedbackStatus.style.color = "red";
            feedbackStatus.textContent = "Error: " + error.message;
        }
    });
});
