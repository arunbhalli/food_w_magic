// Main js file
function showMap() {
  $('#map').toggleClass('d-none', 'd-block');
}

$(document).ready(function () {
  $('.navbar .nav-link').on('click', function () {
    $('.navbar').find('.active').removeClass('active');
    $(this).addClass('active');
  });
  $('.add .carousel').carousel({
    interval: 1200,
  });
});

/*********************Comment functionality START *************************/

  $(document).ready(function () {
    var lista = [];
    $("select#emojis").change(function () {
      var emo = $(this).children("option:selected").val();
      lista.push(emo);
    });

    $(".yo").click(function () {
      var name = $("#name").val();
      var date = new Date();
      const hoursAndMinutes =
        padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());
      var comment = $("#texta").val();
      var line = document.createElement("hr");
      var emo = $("select#emojis").children("option:selected").val();
      $("#milk").append(
        `<div class= mt-3><h4><i class="bi bi-person-fill"></i>&nbsp;${name}</h4><p><small>Commented at ${hoursAndMinutes} on ${date.toDateString()}</small></p><hr>${comment} ${lista.join(
          ""
        )}`
      );
      $("#name,#texta").val("");
      lista = [];
      $("select#emojis").val("");
    });
  });
  function padTo2Digits(num) {
    return String(num).padStart(2, "0");
  }

/*********************Comment Functionality  ENDS *************************/ 

$(document).ready(function () {

  $("#placeOrder").on("click", function () {

    let sum = 0;

    let container = $("#modal-order-container").text("");

    $("#menu .active-item").each(function () {

      let rowdiv = document.createElement("div")
      rowdiv.className = "row";

      let qty = Number($(this).find('.qty').text());
      let price = Number($(this).find('.price').text());
      sum = sum + price * qty;

      for (let i = 0; i < 3; i++) {

        let coldiv = document.createElement("div");

        if (i == 0) {
          coldiv.className = "col-3 text-start";
          coldiv.innerText = qty + " x " + price + ":-";
        }
        if (i == 1) {
          coldiv.className = "col-7 text-start";
          coldiv.innerText =  $(this).text().slice(0, 30);
        }
        if (i == 2) {
          coldiv.className = "col-2 text-end";
          coldiv.innerText = qty * price + ":-";
        }
        
        rowdiv.appendChild(coldiv);
      }

      container.append(rowdiv);

    });

    //add the summary div
    let sumdiv = document.createElement("div");
    sumdiv.className = "row";
    container.append(document.createElement("hr"));

    for (let i = 0; i < 3; i++) {
      let coldiv = document.createElement("div");
      if (i == 0) {
        coldiv.className = "col-3";
      }
      if (i == 1) {
        coldiv.className = "col-7";
        coldiv.innerText = "Total Amount";
      }
      if (i == 2) {
        coldiv.className = "col-2 text-end";
        coldiv.innerText = sum + ":-";
      }
      sumdiv.appendChild(coldiv);
    }

    container.append(sumdiv);

  });

  /************Calculate Menu START****************/
  $('#menu .addsign ').click(function () {
    $(this).parent().addClass('active-item');

    //add 1 to quantity
    let qty = Number($(this).parent().find('.qty').text()) + 1;
    $(this).parent().find('.qty').text(qty);
    calculateTotal();
  });

  $('#menu .subtract ').click(function () {
    let qty = Number($(this).parent().find('.qty').text());
    qty = qty > 0 ? qty - 1 : 0; //Subtract only if qty is larger than zero, otherwise set zero

    if (qty < 1) {
      $(this).parent().removeClass('active-item');
    }

    $(this).parent().find('.qty').text(qty);
    calculateTotal();
  });

  function calculateTotal() {
    let sum = 0;

    $('#menu .active-item').each(function () {
      let price = Number($(this).find('.price').text());
      let qty = Number($(this).find('.qty').text());

      sum = sum + price * qty;
    });

    $('#amount').text('Total Amount: ' + sum + ' kr');
  }
  /************Calculate Menu END*****************/
});
