$('#shop, #about, #contact').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'up' ? $('#shop') : $('#about');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});
