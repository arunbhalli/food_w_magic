// Main js file
function showMap() {
  $("#map").toggleClass("d-none", "d-block");
}

$(document).ready(function () {
  $(".navbar .nav-link").on("click", function () {
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  $(".add .carousel").carousel({
    interval: 1200,
  });
});


$(document).ready(function () {

  /************Calculate Menu START****************/
  $("#menu .addsign ").click(function () {
    $(this).parent().addClass('active-item');

    //add 1 to quantity
    let qty = Number($(this).parent().find('.qty').text()) + 1;
    $(this).parent().find('.qty').text(qty);
    calculateTotal();
  });

  $("#menu .subtract ").click(function () {

    let qty = Number($(this).parent().find('.qty').text());
    qty = qty > 0 ? qty - 1 : 0;  //Subtract only if qty is larger than zero, otherwise set zero

    if (qty < 1) {
      $(this).parent().removeClass('active-item');
    }

    $(this).parent().find('.qty').text(qty);
    calculateTotal();
  });

  function calculateTotal() {

    let sum = 0;

    $("#menu .active-item").each(function () {

      let price = Number($(this).find('.price').text());
      let qty = Number($(this).find('.qty').text());

      sum = sum + price * qty;
    });

    $("#amount").text(sum);
  }
  /************Calculate Menu END*****************/

});
