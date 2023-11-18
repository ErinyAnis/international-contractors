$(window).on("load", function () {
    $(".loader-container").fadeOut(2000);
});

$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("nav").addClass("shadow");
    }
    else {
        $("nav").removeClass("shadow");
    }

});