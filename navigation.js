$(function(){
    
    $("#header-placeholder").load("_header.html", function(){
        $(".nav-link").removeClass("active");
        $(".nav-link[href=signup.html]").addClass("active");
        //placing this code inside this function allows for proper loading
    });
     
    $(".btn-primary").click(function(){
        $(this).closest(".col-md-4").css({ 'max-width': 'none'}).animate({ 'flex-basis' : '100%' })
    })
    
    });