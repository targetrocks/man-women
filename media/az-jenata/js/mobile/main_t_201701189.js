$(document).ready(function () {

    // Responsive Video Fix
    var responsivevideo = $('.article-text').find('iframe');
    responsivevideo.wrap('<div class="responsive-video-container"></div>');


    $(function () {
        var buttonsWidth = $(".owl-pagination").width() + 160;
        $(".owl-buttons").css('width', buttonsWidth);
    });

    $(".menu-icon").on("click", function () {
        $(".mainnav").toggleClass("show hide");
        $(".close-icon").toggleClass("show2 hide2");
        $(".search-form").removeClass("show").addClass("hide");
        $(".search").removeClass("show-search").addClass("hide-search");
        $(".recipes-nav ul").removeClass("show").addClass("hide");
        $(".recipes-nav span i").removeClass("fa-angle-up").addClass("fa-angle-down");
    });

    $("section, footer").on("click", function () {
        $(".mainnav").removeClass("show").addClass("hide");
        $(".close-icon").removeClass("show2").addClass("hide2");
    });

    $(".search").on("click", function () {
        $(this).toggleClass("show-search hide-search");
        $(".search-form").toggleClass("show hide");
        $(".mainnav").removeClass("show").addClass("hide");
        $(".close-icon").removeClass("show2").addClass("hide2");
        $(".recipes-nav ul").removeClass("show").addClass("hide");
        $(".recipes-nav span i").removeClass("fa-angle-up").addClass("fa-angle-down");
        var input = document.getElementById('mainsearch');

        input.focus();
        input.select();
    });

    $(".recipes-nav span").on("click", function () {
        $(".recipes-nav ul").toggleClass("show hide");
        $(".recipes-nav span i").toggleClass("fa-angle-up fa-angle-down");
        // $(".sub-menu ul").removeClass("show").addClass("hide");
        $( ".sub-menu ul.sub-nav" ).each(function( index ) {
            if (!$(this).hasClass("show")) {
                $(this).removeClass("hide").addClass("show");
            } else {
                $(this).removeClass("show").addClass("hide");
            }
      });
    });

    $(".sub-menu ins").on("click", function () {
                            $(this).parent().find(".sub-nav").toggleClass("show hide");
        $(this).find(".fa").toggleClass("fa-angle-up fa-angle-down");
    });

    $(".expandable-list").on("click", function () {
        $(this).toggleClass("expanded");
        $(this).find(".fa").toggleClass("fa-angle-up fa-angle-down");
    });

    $(".has-children .arrow-down").on("click", function () {
        $(this).parent().find(".sub-nav").toggleClass("show hide");
        $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
    });

    $(".gallery-items ul li").on("click", function () {
        $(".gallery-popup").toggleClass("gallery-show gallery-hide");
    });
    $(".close-btn").on("click", function () {
        $(".gallery-popup").removeClass("gallery-show").addClass("gallery-hide");
    });

    var owl = $(".owl-example");
    owl.owlCarousel({
        itemsCustom: [
            [0, 2],
            [300, 2],
            [750, 3],
            [1000, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
        ],
        navigation: true
    });

    var owl = $(".owl-horoscope");
    owl.owlCarousel({
        itemsCustom: [
            [0, 2],
            [300, 2],
            [330, 3],
            [750, 4],
            [1000, 5],
            [1200, 5],
            [1400, 5],
            [1600, 5]
        ],
        navigation: false
    });

    var owl = $(".topslider");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [300, 1],
            [330, 1],
            [750, 1],
            [1000, 1],
            [1200, 1],
            [1400, 1],
            [1600, 1]
        ],
        navigation: false,
        singleItem: true
    });

    var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function (e, opts) {
        // advance the other slideshow
        slideshows.not(this).cycle('goto', opts.currSlide);
    });

    $('.cycle-slideshow').click(function () {
        var index = $('.cycle-slideshow').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });

    $(".sanovnik .extend-content").on("click", function () {
        $(this).toggleClass("arr-down arr-up");
        $(".sanovnik .hidden-content").toggleClass("show hide");
    });

});