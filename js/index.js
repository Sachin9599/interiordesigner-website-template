(function () {
    "use strict";
  
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
  
    var fullHeight = function () {
      if (!isMobile.any()) {
        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(function () {
          $(".js-fullheight").css("height", $(window).height());
        });
      }
    };
  
    var counter = function () {
      $(".js-counter").countTo({
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        },
      });
    };
  
    var counterWayPoint = function () {
      if ($("#colorlib-counter").length > 0) {
        $("#colorlib-counter").waypoint(
          function (direction) {
            if (direction === "down" && !$(this.element).hasClass("animated")) {
              setTimeout(counter, 400);
              $(this.element).addClass("animated");
            }
          },
          { offset: "90%" }
        );
      }
    };
  
    // Animations
    var contentWayPoint = function () {
      var i = 0;
      $(".animate-box").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            i++;
  
            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .animate-box.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(
                  function () {
                    var effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight animated");
                    } else {
                      el.addClass("fadeInUp animated");
                    }
  
                    el.removeClass("item-animate");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        { offset: "85%" }
      );
    };
  
    var burgerMenu = function () {
      $(".js-colorlib-nav-toggle").on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
  
        if ($("body").hasClass("offcanvas")) {
          $this.removeClass("active");
          $("body").removeClass("offcanvas");
        } else {
          $this.addClass("active");
          $("body").addClass("offcanvas");
        }
      });
    };
  
    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
      $(document).click(function (e) {
        var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("offcanvas")) {
            $("body").removeClass("offcanvas");
            $(".js-colorlib-nav-toggle").removeClass("active");
          }
        }
      });
  
      $(window).scroll(function () {
        if ($("body").hasClass("offcanvas")) {
          $("body").removeClass("offcanvas");
          $(".js-colorlib-nav-toggle").removeClass("active");
        }
      });
    };
  
    var sliderMain = function () {
      $("#colorlib-hero .flexslider").flexslider({
        animation: "fade",
        slideshowSpeed: 5000,
        directionNav: true,
        start: function () {
          setTimeout(function () {
            $(".slider-text").removeClass("animated fadeInUp");
            $(".flex-active-slide")
              .find(".slider-text")
              .addClass("animated fadeInUp");
          }, 500);
        },
        before: function () {
          setTimeout(function () {
            $(".slider-text").removeClass("animated fadeInUp");
            $(".flex-active-slide")
              .find(".slider-text")
              .addClass("animated fadeInUp");
          }, 500);
        },
      });
    };
  
    var stickyFunction = function () {
      var h = $(".image-content").outerHeight();
  
      if ($(window).width() <= 992) {
        $("#sticky_item").trigger("sticky_kit:detach");
      } else {
        $(".sticky-parent").removeClass("stick-detach");
        $("#sticky_item").trigger("sticky_kit:detach");
        $("#sticky_item").trigger("sticky_kit:unstick");
      }
  
      $(window).resize(function () {
        var h = $(".image-content").outerHeight();
        $(".sticky-parent").css("height", h);
  
        if ($(window).width() <= 992) {
          $("#sticky_item").trigger("sticky_kit:detach");
        } else {
          $(".sticky-parent").removeClass("stick-detach");
          $("#sticky_item").trigger("sticky_kit:detach");
          $("#sticky_item").trigger("sticky_kit:unstick");
  
          $("#sticky_item").stick_in_parent();
        }
      });
  
      $(".sticky-parent").css("height", h);
  
      $("#sticky_item").stick_in_parent();
    };
  
    var owlCrouselFeatureSlide = function () {
      $(".owl-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoHeight: true,
        items: 1,
        navText: [
          "<i class='icon-arrow-left3 owl-direction'></i>",
          "<i class='icon-arrow-right3 owl-direction'></i>",
        ],
      });
    };
  
    // Document on load.
    $(function () {
      fullHeight();
      counter();
      counterWayPoint();
      contentWayPoint();
      burgerMenu();
      mobileMenuOutsideClick();
      sliderMain();
      stickyFunction();
      owlCrouselFeatureSlide();
    });
  })();
  
  // old slider 
  
  // (function ($) {
  //   $(function () {
  //     $(".before-wrapper").on("mousemove", function (e) {
  //       var offsets = $(this).offset();
  //       var fullWidth = $(this).width();
  //       var mouseX = e.pageX - offsets.left;
  
  //       if (mouseX < 0) {
  //         mouseX = 0;
  //       } else if (mouseX > fullWidth) {
  //         mouseX = fullWidth;
  //       }
  
  //       $(this).parent().find(".comparison-slider").css({
  //         left: mouseX,
  //         transition: "none",
  //       });
  //       $(this)
  //         .find(".after-wrapper")
  //         .css({
  //           transform: "translateX(" + mouseX + "px)",
  //           transition: "none",
  //         });
  //       $(this)
  //         .find(".after-image")
  //         .css({
  //           transform: "translateX(" + -1 * mouseX + "px)",
  //           transition: "none",
  //         });
  //     });
  //     $(".slider-wrapper").on("mouseleave", function () {
  //       $(this).parent().find(".comparison-slider").css({
  //         left: "50%",
  //         transition: "all .3s",
  //       });
  //       $(this).find(".after-wrapper").css({
  //         transform: "translateX(50%)",
  //         transition: "all .3s",
  //       });
  //       $(this).find(".after-image").css({
  //         transform: "translateX(-50%)",
  //         transition: "all .3s",
  //       });
  //     });
  //   });
  // })(jQuery);
  // old slider end 
  
  // new slider 
  
  $(document).ready(function () {
  
    // If the comparison slider is present on the page lets initialise it, this is good you will include this in the main js to prevent the code from running when not needed
    if ($(".comparison-slider")[0]) {
      let compSlider = $(".comparison-slider");
  
      //  loop through the sliders and initialise each of them
      compSlider.each(function () {
        let compSliderWidth = $(this).width() + "px";
        $(this).find(".resize img").css({ width: compSliderWidth });
        drags($(this).find(".divider"), $(this).find(".resize"), $(this));
      });
  
      //if the user resizes the windows lets update our variables and resize our images
      $(window).on("resize", function () {
        let compSliderWidth = compSlider.width() + "px";
        compSlider.find(".resize img").css({ width: compSliderWidth });
      });
    }
  });
  
  
  function drags(dragElement, resizeElement, container) {
  
    // This creates a variable that detects if the user is using touch input insted of the mouse.
    let touched = false;
    window.addEventListener('touchstart', function () {
      touched = true;
    });
    window.addEventListener('touchend', function () {
      touched = false;
    });
  
    // clicp the image and move the slider on interaction with the mouse or the touch input
    dragElement.on("mousedown touchstart", function (e) {
  
      //add classes to the emelents - good for css animations if you need it to
      dragElement.addClass("draggable");
      resizeElement.addClass("resizable");
      //create vars
      let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
      let dragWidth = dragElement.outerWidth();
      let posX = dragElement.offset().left + dragWidth - startX;
      let containerOffset = container.offset().left;
      let containerWidth = container.outerWidth();
      let minLeft = containerOffset + 10;
      let maxLeft = containerOffset + containerWidth - dragWidth - 10;
  
      //add event listner on the divider emelent
      dragElement.parents().on("mousemove touchmove", function (e) {
  
        // if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
        if (touched === false) {
          e.preventDefault();
        }
  
        let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let leftValue = moveX + posX - dragWidth;
  
        // stop the divider from going over the limits of the container
        if (leftValue < minLeft) {
          leftValue = minLeft;
        } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
        }
  
        let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";
  
        $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
          $(this).removeClass("draggable");
          resizeElement.removeClass("resizable");
        });
  
        $(".resizable").css("width", widthValue);
  
      }).on("mouseup touchend touchcancel", function () {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
  
      });
  
    }).on("mouseup touchend touchcancel", function (e) {
      // stop clicking the image and move the slider
      dragElement.removeClass("draggable");
      resizeElement.removeClass("resizable");
  
    });
  
  }