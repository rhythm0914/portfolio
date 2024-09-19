
function openModal() {
    document.getElementById('coffeeModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('coffeeModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('coffeeModal')) {
        closeModal();
    }
}

