$('.main-slide').slick(
    {   autoplay: false,
        autoplaySpeed: 5000,
        nextArrow: '<img src="img/arrow-slide.png">',
        asNavFor: '.list-dots'
    }
);
$('.list-dots').slick(
    {
        dots: true,
        asNavFor: '.main-slide'

    }
);





function subNumber() {
  var  oneslide = document.getElementById('slick-slide10')
  var  twoslide = document.getElementById('slick-slide11')
  var  threeslide = document.getElementById('slick-slide12')
  var  fourslide = document.getElementById('slick-slide13')
  var  fiveslide = document.getElementById('slick-slide14')


  oneslide.innerHTML = '<span class="number-slide"> 1 </span>'
  twoslide.innerHTML = '<span class="number-slide"> 2</span>'
  threeslide.innerHTML = '<span class="number-slide">3</span>'
  fourslide.innerHTML = '<span class="number-slide"> 4</span>'
  fiveslide.innerHTML = '<span class="number-slide"> 5</span>'

}
subNumber()


$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 1000);
return false;
});
});
