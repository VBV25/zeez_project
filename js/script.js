$(document).ready(function(){$(".header__burger").click(function(e){$(".header__burger,.header__navigation").toggleClass("active"),$("body").toggleClass("lock")}),$("#header__phone-img2").click(function(e){$(".header-popup__phone-wrapper").addClass("visible"),$("body").addClass("lock")}),$(".header-popup__btn-close-phone").click(function(e){$(".header-popup__phone-wrapper").removeClass("visible"),$("body").removeClass("lock")})});