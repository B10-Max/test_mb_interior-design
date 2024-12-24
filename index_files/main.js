(function (n) { "use strict"; if (n(window).scroll(function () { n(this).scrollTop() > 100 ? n(".back-to-top").fadeIn("slow") : n(".back-to-top").fadeOut("slow") }), n(".back-to-top").click(function () { return n("html, body").animate({ scrollTop: 0 }, "slow"), !1 }), n(".main-nav").length) { var t = n(".main-nav").clone().prop({ "class": "mobile-nav d-lg-none" }); n("body").append(t); n("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"><\/i><\/button>'); n("body").append('<div class="mobile-nav-overly"><\/div>'); n(document).on("click", ".mobile-nav-toggle", function () { n("body").toggleClass("mobile-nav-active"); n(".mobile-nav-toggle i").toggleClass("fa-times fa-bars"); n(".mobile-nav-overly").toggle() }); n(document).on("click", ".mobile-nav .drop-down > a", function (t) { t.preventDefault(); n(this).next().slideToggle(300); n(this).parent().toggleClass("active") }); n(document).click(function (t) { var i = n(".mobile-nav, .mobile-nav-toggle"); i.is(t.target) || i.has(t.target).length !== 0 || n("body").hasClass("mobile-nav-active") && (n("body").removeClass("mobile-nav-active"), n(".mobile-nav-toggle i").toggleClass("fa-times fa-bars"), n(".mobile-nav-overly").fadeOut()) }) } else n(".mobile-nav, .mobile-nav-toggle").length && n(".mobile-nav, .mobile-nav-toggle").hide() })(jQuery); 
$(document).ready(function ()
{
    $('.slider-gallery').slick({
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });
});
$(document).ready(function () { $(".scroll-link").click(function (n) { n.preventDefault(); $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 800) }) })