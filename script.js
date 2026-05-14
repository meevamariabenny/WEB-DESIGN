function handleSubmission() {
    const item = document.getElementById('item-select').value;
    const desc = document.getElementById('issue-desc').value;

    // Check if the description is empty
    if (!desc.trim()) {
        alert("Error: Please provide details about the issue before submitting.");
        return;
    }

    // Success message
    alert("Success! Your complaint regarding the '" + item + "' has been logged.");
    
    // Clear the text area
    document.getElementById('issue-desc').value = "";
}