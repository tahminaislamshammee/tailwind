 $(document).ready(function(){
    $('.header-area ul li').on('click', function(event) {
        $(this).addClass('active-nav').siblings('.active-nav').removeClass('active-nav');
        $('.header-area').addClass('active-nav');
    });

    $('.toggle-btn').on('click',function(){
       $('.nav').toggleClass('show');
    });

})
