var section_pos = {};

var display_h   = 0;

function section_pos_set(){
    $('.section_max').each(function(){
        var id = $(this).attr('id');
        section_pos[id] = $('#' + id).position().top;
    });
    display_h = $(window).height()/2;
    
}

section_pos_set();

$(window).resize(function(){
    section_pos_set();
});

function section_scrl_chk(pos){
    $.map(section_pos, function(value, id) {
        var new_pos = value - display_h;
        if(new_pos < pos){
            $('#' + id).addClass('active');
            
        }
    });
}


$(window).scroll(function(){
    var scrl_pos = $('html').scrollTop();
    var header = $('header').innerHeight();
    if(scrl_pos > header){
        $('body').addClass('on_scrl');
    }else{
        $('body').removeClass('on_scrl');
    }

    var height = $(document).height() - $(window).height() - 140;
    if(scrl_pos > height){
        $('#top-btn').addClass('end_point');
    }else{
        $('#top-btn').removeClass('end_point');
    }

    // scroll animation
    section_scrl_chk(scrl_pos);
});

function scrl_event(pos){
    $('html').animate({
        scrollTop : pos + 'px'
    }, 1000)
}

$('#menu-event li a').click(function(e){
    e.preventDefault();
     var target = $(this).data('target');
    var pos    = $('#'+target).position().top;

    scrl_event(pos);
});

$('#top-btn').click(function(){
    scrl_event(0);
});