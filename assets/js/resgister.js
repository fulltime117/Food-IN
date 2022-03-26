$(document).ready(function(){
    var val = 1
    $('#Registeform').submit(function(e){
        e.preventDefault();
        input_validate();

        if(val==1){
            var fullname=$('#name').val();
            var phone=$('#phone').val();
            var email=$('#email').val()
            var pin=$('#pin').val();
            var ttime = $('[name="role"]:checked').val();   
            
            $("#R_loading").slideToggle(); 

            $.ajax({
                url: 'assets/forms/contact.php',
                type: 'POST',
                data: {
                    flag:"register",
                    fullname:fullname,
                    phone:phone,
                    email:email,
                    pin:pin,
                    ttime:ttime
                },

                success: function(result) {
                    $("#R_loading").slideToggle(); 
                    $("#r-reply-message").slideToggle(); 
                    $('#Registeform')[0].reset();
                    setTimeout(function(){
                        $("#r-reply-message").slideToggle();
                    },5000);
                },
                erro: function(err) {
                    console.log(err);
                }
            });
            
        }else{
            $("#r-error-message").slideToggle();
            setTimeout(function(){
                $("#r-error-message").toggle('fast');
            },3000);           
        }        
    })
        

    $('.register-data-input').change(function(){
        console.log("change")
        input_validate();
    });

    $('.register-data-input').keyup(function(){
        console.log("keyup")
        input_validate();
    });

    
    function input_validate(){
        val=1;
        if($('#name').val().length<3||!isNaN($('#name').val())){
            $('#name').css({"color":'red'}); val = 0;
        } else{
            $('#name').css({"color":'green'});
        }

        if( $('#phone').val().length!=10||isNaN($('#phone').val())
                                        ||$('#phone').val()=='0000000000'
                                        ||$('#phone').val()=='1111111111'
                                        ||$('#phone').val()=='2222222222'
                                        ||$('#phone').val()=='3333333333'
                                        ||$('#phone').val()=='4444444444'
                                        ||$('#phone').val()=='5555555555'
                                        ||$('#phone').val()=='6666666666'
                                        ||$('#phone').val()=='7777777777'
                                        ||$('#phone').val()=='8888888888'
                                        ||$('#phone').val()=='9999999999')
                                                                                    
        {
            $('#phone').css({"color":'red'}); val = 0;           
        } else{
            $('#phone').css({"color":'green'});           
        } 

        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if($('#email').val()&&!pattern.test($('#email').val())){
            $('#email').css({"color":'red'}); val = 0;
        } else{
            $('#email').css({"color":'green'});           
        } 

        let pin = $('#pin').val();
        var upper_patt = new RegExp(/[A-Z]/);
        let digit_patt = new RegExp(/\d/);
        let any_patt = new RegExp(/[a-z]/);
        let upper_validate = upper_patt.test(pin);
        let digit_validate = digit_patt.test(pin);
        let any_validate = any_patt.test(pin);
        if(!(upper_validate && digit_validate && !any_validate)){
            $('#pin').css({"color":'red'}); val = 0;
        } else{
            $('#pin').css({"color":'green'});
        }        
    }
});


    