//= jquery-3.2.1.min.js

//= jquery-ui.min.js

//= slick.js

jQuery(document).ready(function($) {
	$('.slider-item').slick({
   dots: true,
   nextArrow: '<button type="button" class="slick-next"></button>',
   prevArrow: '<button type="button" class="slick-prev"></button>'
 });


  $('.weather-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipeToSlide: false,
    arrows: false,
    fade: false,
    touchMove: false,
    asNavFor: '.weather-nav'
  });
  $('.weather-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    asNavFor: '.weather-for',
    dots: false,
    swipeToSlide: false,
    centerMode: false,
    focusOnSelect: true,
    touchMove: false,
    infinite: false
  });

  $( "#accordion" ).accordion();

  $( "#datepicker" ).datepicker();

  $( "#dropdown" ).selectmenu();

  $( "#slider_range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {

    }
  });
  $( "#slider_one" ).slider({
   value: 60,
   orientation: "horizontal",
   range: "min",
   animate: true
 });
  $(".error").click(function(event) {
    $(this).closest('.alert').hide(400).remove();
  });

  $(".weather_deg li").click(function(event) {
    if(!$(this).hasClass('weather_deg_active')){
      $(".weather_deg li").removeClass('weather_deg_active');
      $(this).addClass('weather_deg_active');

      if($(".weather_deg_active").text() == "°C"){
       $(".weather-for .temperature").each(function(index, el) {
        var new_deg = 5/9*($(this).text()-32);

        console.log($(this).text()+"==>"+new_deg.toFixed(0));
        $(this).text(new_deg.toFixed(0));
      });
     }else{
      $(".weather-for .temperature").each(function(index, el) {
        var new_deg = 9/5*$(this).text()+32;
        console.log($(this).text()+"==>"+new_deg.toFixed(1));
        $(this).text(new_deg.toFixed(1));
      });
    }
  }
});

  $('#email').blur(function() {
    if($(this).val() != '') {
      var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
      if(pattern.test($(this).val())){
        $(this).css({'border' : '1px solid #79ab66', 'background-color' : '#d9f1d9'});
      } else {
        $(this).css({'border' : '1px solid #d7919c', 'background-color' : '#f9dfe0'});
        $(this).attr("placeholder", "Please use correct email format");
      }
    } else {
      $(this).css({'border' : '1px solid #ff0000', 'background-color' : '#f9dfe0'});
      $(this).attr("placeholder", "Please use correct email format");
    }
  });

});