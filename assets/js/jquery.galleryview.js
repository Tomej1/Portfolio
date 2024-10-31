$(function() {
    $("#imgGallery img").click(function() {
        var $gallery = $(this).closest("#imgGallery");

        $(this).toggleClass("grow");

        $gallery.find("img").not(this).toggleClass("shrink");
        
    });
})(jQuery);