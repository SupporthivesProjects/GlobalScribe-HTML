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

$(document).ready(function () {
    if (screen.width < 700) {
        const device_width = screen.width - 24;
        const slider_width = screen.width - 50;
        const slider_width2 = screen.width - 24;
        $(".dash_tab_scrollable").css('width', device_width + 'px');
        $("#oh_body_box_sub_main").css('width', slider_width + 'px');
        $("#order_history_body_box").css('width', slider_width2 + 'px');
    }
});

const radioButtons = document.querySelectorAll('.chek_inpoot');

    radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', (event) => {
      const frm = event.target.closest('.frm');
      frm.classList.add('active');
      const siblings = frm.parentNode.children;
      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] !== frm) {
          siblings[i].classList.remove('active');
        }
      }
    });
});

function field_box_file() {
    console.log('me');
    document.getElementById('document').click();
}
$("#document").on("change", function(e){
    document.getElementById('upload_placeholder').innerHTML = e.target.files[0].name;
})
  

function toggleActive(button) {
    const buttons = document.querySelectorAll('.btn.btn_new_trans');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin: 28,
        nav:false,
        dots: false,
        responsive:{
            0:{
                loop: true,
                items:1,
                nav: true,
                navText: [
                    "<span class='btn btn_owl'><img src='./assets/img/owl_icon_left.png'/></span>",
                    "<span class='btn btn_owl'><img src='./assets/img/owl_icon_right.png'/></span>"
                ],
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
})