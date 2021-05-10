function showModal(e, t, s) {
    var a = '<div class="submenu"><div class="submenu_container" style="background: #fff;"><div class="submenu_inner animate ' + (t = t || "") + '">' + e + '</div><div class="modal_close" onclick="hideModal()"></div></div></div>';
    $(".open_menu").removeClass("open_menu"), $(".submenu").remove(), $("html").addClass("open_menu"), $(".header_2019").addClass("header-white"), $(".c_scroll").css("padding-right", sWidth), $("body").append(a), s && "function" == typeof s && s()
}

function hideModal(e) {
    $("html").removeClass("open_menu"), $(".c_scroll").css("padding-right", 0) || $("body > .header_2019").removeClass("header-white"), $(".submenu .submenu_inner").animate({opacity: 0}, 500, function () {
        $(this).closest(".submenu").remove(), e && "function" == typeof e && e()
    })
}


var isPhone = window.innerWidth <= 576, isMobile = window.innerWidth <= 812, sc_header = !1,
    sWidth = window.innerWidth - document.documentElement.clientWidth;
