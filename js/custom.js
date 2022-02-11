$(document).ready(function() {
    AOS.init();
    
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    var bande = 0;

    /*$("#hide_navbar").click(function(){
        $(".topNavBar").hide(1000);
        $(".topArrow").show(1000);
        bande = 1;
    });*/
    $("#showNavMob").click(function(){
        $('#showNavMobText').hide();
        $('#showNavMob').hide();
        $('#navMob').show(400);
        $('#hideNavMobText').fadeIn(500);
        $('#hideNavMob').fadeIn(500);
        bande = 0;
    });
    $("#hideNavMob").click(function(){
        $('#hideNavMobText').hide();
        $('#hideNavMob').hide();
        $('#navMob').hide(400);
        $('#showNavMobText').fadeIn(500);
        $('#showNavMob').fadeIn(500);
        bande = 0;
    });

    $('#lightgallery').lightGallery({
        controls: false,
        share: false,
        actualSize: false,
        fullScreen: false,
        getCaptionFromTitleOrAlt: false
    });
    
    $("#sendContact").click(function () {

        var inputName = $("#inputName").val();
        var inputTel = $("#inputTel").val();
        var inputMail = $("#inputMail").val();
        var inputSub = $("#inputSub").val();
        var inputMsg = $("#inputMsg").val();

        var valid01 = 1;
        var valid02 = 1;
        var valid03 = 1;
        var valid04 = 1;
        
        if(inputName.length != 0){
            $('#inputName').css("border-color", "#a6a6a6");
            $('#inputName').css("border-width", "1px");
            valid01 = 1;
        } else{
            $('#inputName').css("border-color", "#FF4542");
            $('#inputName').css("border-width", "3px");
            valid01 = 0;
        }
        
        if(inputTel.length != 0){
            $('#inputTel').css("border-color", "#a6a6a6");
            $('#inputTel').css("border-width", "1px");
            valid02 = 1;
        } else{
            $('#inputTel').css("border-color", "#FF4542");
            $('#inputTel').css("border-width", "3px");
            valid02 = 0;
        }
        
        if(inputMail.length != 0){
            $('#inputMail').css("border-color", "#a6a6a6");
            $('#inputMail').css("border-width", "1px");
            valid03 = 1;
        } else{
            $('#inputMail').css("border-color", "#FF4542");
            $('#inputMail').css("border-width", "3px");
            valid03 = 0;
        }
        
        if(inputSub.length != 0){
            $('#inputSub').css("border-color", "#a6a6a6");
            $('#inputSub').css("border-width", "1px");
            valid04 = 1;
        } else{
            $('#inputSub').css("border-color", "#FF4542");
            $('#inputSub').css("border-width", "3px");
            valid04 = 0;
        }
        
        if(inputMsg.length != 0){
            $('#inputMsg').css("border-color", "#a6a6a6");
            $('#inputMsg').css("border-width", "1px");
            valid05 = 1;
        } else{
            $('#inputMsg').css("border-color", "#FF4542");
            $('#inputMsg').css("border-width", "3px");
            valid05 = 0;
        }
        
        /*
        swal({
            title: '¡Muchas gracias!',
            text: 'En breve analizaremos tu información..',
            timer: 9000
        }).then(
            function () {
                window.location.href = "https://elborregonava.com/";
            }, function (dismiss) {
                window.location.href = "https://elborregonava.com/";
            }
        );

        */
    });

    $('.wh-widget-send-button-get-button').css("display", "none");

});
