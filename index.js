// Main js file// Main js file
function showMap()
{
    $("#map").toggleClass("d-none", "d-block");
}

$(document).ready(function () {

    $(".navbar .nav-link").on("click", function () {
        $(".navbar").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});

