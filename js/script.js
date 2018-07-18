$(window).scroll(function(){
    var scrl_pos = $('html').scrollTop();
    var header = $('header').innerHeight();
    if(scrl_pos > header){
        $('body').addClass('on_scrl');
    }else{
        $('body').removeClass('on_scrl');
    }
});