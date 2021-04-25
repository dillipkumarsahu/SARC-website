
// control menubar 
$(document).ready(function(){
    if($(window).width() >= 768)
    {
        $("#desktop-menu").removeClass('d-none');
    }
    else{
        $("#mobile-menu").removeClass('d-none');
        //open menu
        $('#mobile-menu-btn').click(function(){
            if($("#mobile-menu ul").attr('class').match('d-none'))
            {
                $("#mobile-menu ul").removeClass('d-none');
            }
            else{
                // $("#mobile-menu ul").addClass('animate__slideOutUp');
                $("#mobile-menu ul").addClass('d-none');
            }
        });
    }
});