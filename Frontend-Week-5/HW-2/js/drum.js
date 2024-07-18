document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.querySelectorAll(".play-button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const soundId = this.getAttribute("data-sound");
            const sound = document.getElementById(soundId);
            sound.play();
        });
    });

    document.addEventListener("keydown", function(event) {
        const key = event.key.toUpperCase();
        const button = document.querySelector(`.play-button[data-key="${key}"]`);
        if (button) {
            const soundId = button.getAttribute("data-sound");
            const sound = document.getElementById(soundId);
            sound.play();
        }
    });
});
