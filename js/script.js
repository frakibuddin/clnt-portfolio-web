$(document).ready(function () {
  $(".counter-value").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
  // testimonail
  var owl_testimonail = $("#owl-testimonail");

  owl_testimonail.owlCarousel({
    items: 1, //10 items above 1000px browser width
    itemsDesktop: [1000, 1], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 1], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
  });

  // Custom Navigation Events
  $(".next").click(function () {
    owl_testimonail.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl_testimonail.trigger("owl.prev");
  });

  // Brand slider
  var owl_brand = $("#owl-brand");

  owl_brand.owlCarousel({
    items: 5, //10 items above 1000px browser width
    itemsDesktop: [1000, 4], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 3], // betweem 900px and 601px
    itemsTablet: [600, 2], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
  });

  // Custom Navigation Events
  $(".next").click(function () {
    owl_brand.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl_brand.trigger("owl.prev");
  });

  //onload popup show
  // $(window).on("load", function () {
  //   setTimeout(() => {
  //     $(".modal").modal("show");
  //   }, 5000);
  // });
});

//stckey header
const header = document.querySelector("header");
const navbar_brand = document.querySelector(".navbar-brand img");

window.onscroll = function () {
  // let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;
  if (pos > 650) {
    navbar_brand.src = "img/White-Logo.png";
    header.classList.add("active");
  } else {
    header.classList.remove("active");
    navbar_brand.src = "img/blue-Logo.png";
  }
};

// dropdown-menu
// let dropdown_menu = document.querySelector(".dropdown-menu");
// let dropdown_toggle = document.querySelectorAll("#d-down")[0];

// dropdown_toggle.onmouseenter = () => {
//   dropdown_menu.classList.add("active");
// };

// dropdown_menu.onmouseleave = () => {
//   dropdown_menu.classList.remove("active");
// };

// document.querySelector("body").onclick = () => {
//   dropdown_menu.classList.remove("active");
// };
