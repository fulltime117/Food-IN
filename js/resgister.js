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
            $("#submitRegiste").slideToggle();  
            
            
            $.ajax({
                url: 'forms/contact.php',
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
                        $("#submitRegiste").slideToggle();
                    },5000);
                },
                erro: function(err) {
                    console.log(err);
                }
            });
            
        }else{
            $("#submitRegiste").toggle('fast');  
            $("#r-error-message").slideToggle();
            setTimeout(function(){
                $("#r-error-message").toggle('fast');
                $("#submitRegiste").slideToggle();
            },3000);           
        }        
    })
        

    $('.register-data-input').change(function(){
        input_validate();
    });

    $('.register-data-input').keyup(function(){
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

        if( $('#pin').val().length!=6 || isNaN($('#pin').val()) ||$('#pin').val()==000000){
            $('#pin').css({"color":'red'}); val = 0;
        } else{
            $('#pin').css({"color":'green'});
        }        
    }
});


    