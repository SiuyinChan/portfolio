window.addEventListener('load', function () {

let app = document.getElementById('typewriter');
console.log(app);
let typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
});

typewriter
    .pauseFor(50)
    .typeString('<span class="hobby">traveling</span>')
    .pauseFor(600)
    .deleteChars(20)
    .typeString('<span class="hobby">listening to music</span>')
    .pauseFor(600)
    .deleteChars(20)
    .typeString('<span class="hobby">playing the piano</span>')
    .pauseFor(600)
    .deleteChars(20)
    .typeString('<span class="hobby">playing the cello</span>')
    .pauseFor(600)
    .deleteChars(20)
    .typeString('<span class="hobby">taking pictures</span>')
    .pauseFor(600)
    .deleteChars(20)
    .start();

});