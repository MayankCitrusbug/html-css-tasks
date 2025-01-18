let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("uke__carousel__slides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}

$(document).ready(function () {
    $(".accordion").click(function () {
        var $this = $(this);
        console.log($this);
        var $answer = $this.parent().siblings('.testimonial__faq__content__box__answer');

        $answer.toggle();

        if ($answer.is(':visible')) {
            $this.addClass('accordion-open').removeClass('accordion-close');
        } else {
            $this.addClass('accordion-close').removeClass('accordion-open');
        }
    });
});
