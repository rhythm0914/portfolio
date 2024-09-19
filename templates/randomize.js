// JavaScript for Randomizing Input Values
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('randomizeBtn').addEventListener('click', function() {
        document.getElementById('recitation').value = (Math.random() * 100).toFixed(2);
        document.getElementById('quiz').value = (Math.random() * 100).toFixed(2);
        document.getElementById('requirements').value = (Math.random() * 100).toFixed(2);
        document.getElementById('prelim_exam').value = (Math.random() * 100).toFixed(2);
    });
});
