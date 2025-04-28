$(document).ready(function () {
    $(".hamburger_menu").click(function () {
        $(".header_mobo_main_slide").fadeIn("slow");
        $(".hamburger_menu").fadeOut("slow");
        $(".hamburger_menu_close").fadeIn("slow");
        $(".header_cart_mobo_main_slide").fadeOut("slow");
    });
    $(".hamburger_menu_close").click(function () {

        if ($(".header_cart_mobo_main_slide").css("display") != "none") {
            $(".header_cart_mobo_main_slide").fadeOut("slow");
            $(".hamburger_menu").fadeIn("slow");
            $(".hamburger_menu_close").fadeOut("slow");
        } else {
            $(".hamburger_menu").fadeIn("slow");
            $(".header_mobo_main_slide").fadeOut("slow");
            $(".hamburger_menu_close").fadeOut("slow");
        }
    });
    $(".cart_menu").click(function () {
        $(".header_cart_mobo_main_slide").fadeIn("slow");
        $(".header_mobo_main_slide").fadeOut("slow");
        $(".hamburger_menu_close").fadeIn("slow");
        $(".hamburger_menu").fadeOut("slow");
    });
});

function closeMobileCart() {
    if ($(".header_cart_mobo_main_slide").css("display") != "none") {
        $(".header_cart_mobo_main_slide").fadeOut("slow");
        $(".header_mobo_main_slide").fadeIn("slow");
    } else {
        $(".header_mobo_main_slide").fadeOut("slow");
        $(".hamburger_menu").fadeIn("slow");
        $(".hamburger_menu_close").fadeOut("slow");
    }
}
function justDrop(droperId, roterId, element) {
    const theId = document.getElementById(droperId);
    const theId2 = document.getElementById(roterId);

    
    if (theId.classList.contains('d-none')) {
        theId.classList.remove('d-none');
        theId2.style.rotate = '180deg';
        element.classList.add("active")
    } else {
        theId.classList.add('d-none');
        theId2.style.rotate = '0deg';
        element.classList.remove("active")
    }
}



document.addEventListener("DOMContentLoaded", () => {
    // On load: fix styling for already open items
    document.querySelectorAll(".accordion-collapse.show").forEach(openItem => {
      const button = openItem.previousElementSibling.querySelector(".accordion-button");
      button.classList.remove("collapsed");
      button.classList.add("open");
    });

    // Add event listeners for Bootstrap's collapse events
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
      const collapse = item.querySelector(".accordion-collapse");
      const button = item.querySelector(".accordion-button");

      collapse.addEventListener("shown.bs.collapse", () => {
        button.classList.remove("collapsed");
        button.classList.add("open");
      });

      collapse.addEventListener("hidden.bs.collapse", () => {
        button.classList.remove("open");
        button.classList.add("collapsed");
      });
    });
  });