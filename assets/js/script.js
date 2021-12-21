function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        var postFilterList = $('.post-filter li');
        postFilterList.children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            postFilterList.children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
}

jQuery(window).on('load', function() {
    (function($) {
        galleryMasonaryLayout();
    })(jQuery);
});

$(window).enllax();