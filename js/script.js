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

function menu_event(_this){
    var target = _this.data('target');
    var pos    = $('#'+target).position().top;

    scrl_event(pos);
}

$('#menu-event li a').click(function(e){
    e.preventDefault();
    menu_event( $(this) );

});

$(document).on('click','#side-menu-ul li a',function(e){
    e.preventDefault();
    $('body').removeClass('fixed_show');
    menu_event( $(this) );
})

$('#top-btn').click(function(){
    scrl_event(0);
});

$('#side-menu-show').click(function(e){
    e.preventDefault();
    $('body').addClass('fixed_show');

    if($('#side-menu-ul li').length == 0){
        var li = '';
        // var menu = $('#menu-event')[0].outerHTML;
    
        $('#menu-event li').each(function(){
            li += '<li><a href=""data-target="' + $(this).find('a').data('target') + '">' + $(this).text().toLowerCase() + '</a></li>';
        });

        $('#side-menu-ul').html(li);
    }
    
});

$('#side-menu-hide').click(function(e){
    e.preventDefault();
    $('body').removeClass('fixed_show');
});

 // var name_val = $('input#name').val

 $('#form-send').click(function(e){
    e.preventDefalt();
    // form 통쨰로 받는거                 $('form#mail_form').serialize();
    // form 통쨰로 배열로 만들어 받는거    $('form#mail_form').serializeArray();

    var name_val = $('#name').val();
    if(name_val.length < 3){
        alert('이름은 3자리 이상 입력해주세요')
        $('#name').focus();
        return false;
    }


    // 정규표현식, 정규식 정규식.test( 테스트할 값 )
 });