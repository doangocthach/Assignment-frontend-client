import { useEffect } from "react";
// import $ from 'j'

const useScript = () => {
  const jqueryUrl = [
    "/vendor/jquery/jquery-3.2.1.min.js",
    "/vendor/animsition/js/animsition.min.js",
    "/vendor/bootstrap/js/popper.js",
    "/vendor/bootstrap/js/bootstrap.min.js",
    "/vendor/select2/select2.min.js",
    "/vendor/daterangepicker/moment.min.js",
    "vendor/daterangepicker/daterangepicker.js",
    "/vendor/slick/slick.min.js",
    "/js/slick-custom.js",
    "/vendor/parallax100/parallax100.js",
    "/vendor/MagnificPopup/jquery.magnific-popup.min.js",
    "/vendor/isotope/isotope.pkgd.min.js",
    "/vendor/sweetalert/sweetalert.min.js",
    "/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
    "/js/main.js",
  ];
  useEffect(() => {
    for (let i = 0; i < jqueryUrl.length; i++) {
      const vc = document.createElement("script");
      console.log(i);
      vc.src = jqueryUrl[i];
      vc.async = true;

      document.body.appendChild(vc);
      // return () => {
      //   document.body.removeChild(i);
      // };
    }
    const script = document.createElement("script");
    script.id = "vcl";
    document.body.appendChild(script);
    const selected = document.getElementById("vcl");
    //     selected.innerHTML  (`<script id="vcl>  $(".js-select2").each(function () {
    //         $(this).select2({
    //           minimumResultsForSearch: 20,
    //           dropdownParent: $(this).next(".dropDownSelect2"),
    //         });
    //       });
    //         $(".parallax100").parallax100();
    //        $(".gallery-lb").each(function () {
    //         // the containers for all your galleries
    //         $(this).magnificPopup({
    //           delegate: "a", // the selector for gallery item
    //           type: "image",
    //           gallery: {
    //             enabled: true,
    //           },
    //           mainClass: "mfp-fade",
    //         });
    //       });
    //         $(".js-addwish-b2").on("click", function (e) {
    //         e.preventDefault();
    //       });

    //       $(".js-addwish-b2").each(function () {
    //         var nameProduct = $(this).parent().parent().find(".js-name-b2").html();
    //         $(this).on("click", function () {
    //           swal(nameProduct, "is added to wishlist !", "success");

    //           $(this).addClass("js-addedwish-b2");
    //           $(this).off("click");
    //         });
    //       });

    //       $(".js-addwish-detail").each(function () {
    //         var nameProduct = $(this)
    //           .parent()
    //           .parent()
    //           .parent()
    //           .find(".js-name-detail")
    //           .html();

    //         $(this).on("click", function () {
    //           swal(nameProduct, "is added to wishlist !", "success");

    //           $(this).addClass("js-addedwish-detail");
    //           $(this).off("click");
    //         });
    //       });

    //       /*---------------------------------------------*/

    //       $(".js-addcart-detail").each(function () {
    //         var nameProduct = $(this)
    //           .parent()
    //           .parent()
    //           .parent()
    //           .parent()
    //           .find(".js-name-detail")
    //           .html();
    //         $(this).on("click", function () {
    //           swal(nameProduct, "is added to cart !", "success");
    //         });
    //       });
    //          $(".js-pscroll").each(function () {
    //         $(this).css("position", "relative");
    //         $(this).css("overflow", "hidden");
    //         var ps = new PerfectScrollbar(this, {
    //           wheelSpeed: 1,
    //           scrollingThreshold: 1000,
    //           wheelPropagation: false,
    //         });

    //         $(window).on("resize", function () {
    //           ps.update();
    //         });
    //       });

    // </script>`);
    //     script.text = `  $(".js-select2").each(function () {
    //         $(this).select2({
    //           minimumResultsForSearch: 20,
    //           dropdownParent: $(this).next(".dropDownSelect2"),
    //         });
    //       });
    //         $(".parallax100").parallax100();
    //        $(".gallery-lb").each(function () {
    //         // the containers for all your galleries
    //         $(this).magnificPopup({
    //           delegate: "a", // the selector for gallery item
    //           type: "image",
    //           gallery: {
    //             enabled: true,
    //           },
    //           mainClass: "mfp-fade",
    //         });
    //       });
    //         $(".js-addwish-b2").on("click", function (e) {
    //         e.preventDefault();
    //       });

    //       $(".js-addwish-b2").each(function () {
    //         var nameProduct = $(this).parent().parent().find(".js-name-b2").html();
    //         $(this).on("click", function () {
    //           swal(nameProduct, "is added to wishlist !", "success");

    //           $(this).addClass("js-addedwish-b2");
    //           $(this).off("click");
    //         });
    //       });

    //       $(".js-addwish-detail").each(function () {
    //         var nameProduct = $(this)
    //           .parent()
    //           .parent()
    //           .parent()
    //           .find(".js-name-detail")
    //           .html();

    //         $(this).on("click", function () {
    //           swal(nameProduct, "is added to wishlist !", "success");

    //           $(this).addClass("js-addedwish-detail");
    //           $(this).off("click");
    //         });
    //       });

    //       /*---------------------------------------------*/

    //       $(".js-addcart-detail").each(function () {
    //         var nameProduct = $(this)
    //           .parent()
    //           .parent()
    //           .parent()
    //           .parent()
    //           .find(".js-name-detail")
    //           .html();
    //         $(this).on("click", function () {
    //           swal(nameProduct, "is added to cart !", "success");
    //         });
    //       });
    //          $(".js-pscroll").each(function () {
    //         $(this).css("position", "relative");
    //         $(this).css("overflow", "hidden");
    //         var ps = new PerfectScrollbar(this, {
    //           wheelSpeed: 1,
    //           scrollingThreshold: 1000,
    //           wheelPropagation: false,
    //         });

    //         $(window).on("resize", function () {
    //           ps.update();
    //         });
    //       });
    //       `;

    selected.parentNode.insertBefore(script, selected);

    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);
};

export default useScript;
