window.addEventListener('load', function () {

    let app = document.getElementById('typewriter');

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

    document.getElementsByClassName('hamburger')[0].addEventListener('click', function () {
        document.querySelector(".hamburger").classList.toggle("active");
        document.querySelector(".navbar-nav").classList.toggle("active");
    })

    document.getElementsByClassName('navbar-nav-item')[0].addEventListener('click', function () {
        document.querySelector(".hamburger").classList.remove("active");
        document.querySelector(".navbar-nav").classList.remove("active");
    })

    document.getElementsByClassName('navbar-nav-item')[1].addEventListener('click', function () {
        document.querySelector(".hamburger").classList.remove("active");
        document.querySelector(".navbar-nav").classList.remove("active");
    })

    document.getElementsByClassName('navbar-nav-item')[2].addEventListener('click', function () {
        document.querySelector(".hamburger").classList.remove("active");
        document.querySelector(".navbar-nav").classList.remove("active");
    })
    //
    // document.getElementsByClassName('flip-card-back')[0].addEventListener('click', function () {
    //     document.getElementsByClassName("flip-card-inner")[0].style.transform = "rotateY(180deg)";
    // })

});