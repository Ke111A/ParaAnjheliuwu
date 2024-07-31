document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll('.heart');
    const surpriseButton = document.getElementById('surpriseButton');
    const messageBox = document.getElementById('messageBox');

    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            alert(heart.getAttribute('data-message'));
        });
    });

    surpriseButton.addEventListener('click', () => {
        messageBox.classList.toggle('hidden');
    });
});