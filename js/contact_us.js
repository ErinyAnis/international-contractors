$(window).on("load", function () {
    $(".loader-container").fadeOut(2000);
});

$(document).ready(function () {

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
            $("nav").addClass("fixed-top");
            $("nav img").attr("src", "images/Navbar logo colored.svg");
            $("nav a").css("color", "#393939");
            $("nav .active-nav").addClass("active-color");
            $("nav ul li a").addClass("active-color");
            $("label #btn").css("color", "#393939");
        } else {
            $(".sticky").removeClass("stickyadd");
            $("nav").removeClass("fixed-top");
            $("nav a").css("color", "#ffff");
            $("nav img").attr("src", "images/Navbar logo white.svg");
            $("nav .active-nav").removeClass("active-color");
            $("nav ul li a").removeClass("active-color");
            $("label #btn").css("color", "#ffff");
        }
        
    });

    $("nav ul li a").click(function () {
        $(this).addClass(".nav-active")
    });


    // form

//    var form = document.getElementById("my-form");
//    
//    async function handleSubmit(event) {
//        event.preventDefault();
//        var status = document.getElementById("status");
//        var data = new FormData(event.target);
//        fetch(event.target.action, {
//            method: form.method,
//            body: data,
//            headers: {
//                'Accept': 'application/json'
//            }
//        }).then(response => {
//            if (response.ok) {
//            status.innerHTML = "Thanks!";
//            form.reset()
//            } else {
//            response.json().then(data => {
//                if (Object.hasOwn(data, 'errors')) {
//                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//                } else {
//                status.innerHTML = "Oops! There was a problem."
//                }
//            })
//            }
//        }).catch(error => {
//            status.innerHTML = "Oops! There was a problem."
//        });
//    }
//    form.addEventListener("submit", handleSubmit)


});