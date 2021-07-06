window.onload = function(){
    console.log('hi');
    $(window).scroll(function(){

        var topContentPos =$(window).scrollTop();
        
        // the corresponding section should be animated on
        $(".reveal-ele").each(function(){
            var botEle =$(this).offset().top + $(this).innerHeight();
            var botWin = topContentPos+$(window).height()+75;
            if(botEle<botWin)
            {
                $(this).addClass('animated');
            }
            
        });

    })
}