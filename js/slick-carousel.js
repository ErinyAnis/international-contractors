$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
                dots: false,
                arrows: false,
            }
        },
        
        
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1.5,
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                arrows: false,
                
            }
        }
    ]
});

$('.multiple-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            infinite: false,
            
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.5,
                dots: true,
            }
        },
    ]
});

