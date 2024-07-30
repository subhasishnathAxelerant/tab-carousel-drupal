(function ($, Drupal, once) {
  // global variables;
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();

  // Our Plugin Behavior
  Drupal.behaviors.custom_scripts = {
    attach: function (context) {
      once("adminJs", "html").forEach(function (element) {
        $(".slider").slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScrolls: 3,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
        // Fix slick slider using multitabs
        $('.nav-tabs a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
          $(".slider").slick("setPosition");
        });
      });
    },
  };
})(jQuery, Drupal, once);
