AOS.init({
    offset: 200,
    duration: 900
});
$('#search').on('click', function(){
    $('#search-area').toggle();
});
$('#burger').on('click', function(){
    $(this).toggleClass('active');
    $('.main-title-area').toggle();
    $('#search').toggle();
    $('.nav-ul').toggleClass('none');
    $('.nav').toggleClass('burger-button');
    $('.nav-ul').toggleClass('column');
    $('.nav-li').toggleClass('margin-20px');
    $('.nav-a').toggleClass('burger-list');
});
    