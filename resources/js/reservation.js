document.addEventListener("DOMContentLoaded", () => {
    const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

function toggleForbidden(userId) {
    // AJAX call to toggle forbidden status
}

function deleteUser(userId) {
    if (confirm("Are you sure you want to delete this user?")) {
        // AJAX call to delete the user
    }
}
