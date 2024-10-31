$(function() {
    $("#imgGallery img").click(function(event) {
        event.stopPropagation(); // Prevent click event from bubbling up to the document

        var $gallery = $(this).closest("#imgGallery");

        // Toggle the 'grow' class on the clicked image
        $(this).toggleClass("grow");

        // Toggle the 'shrink' class on other images
        $gallery.find("img").not(this).toggleClass("shrink");

        // If the clicked image is now grown, add a listener to the document to reset
        if ($(this).hasClass("grow")) {
            $(document).one("click", function() {
                // Reset all images
                $gallery.find("img").removeClass("grow shrink");
            });
        }
    });
});
