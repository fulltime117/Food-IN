$(document).ready(function(){
    var c_val = 1
    $('#ContactForm').submit(function(e){
        e.preventDefault();
        c_validate();
        if(c_val==1){
            var cName=$('#c_name').val();
            var cPhone=$('#c_mobile').val();
            var cEmail=$('#c_email').val()
            var cMessage=$('#c_message').val();  
            
            $("#C_loading").slideToggle();
         
            $.ajax({
                url: 'assets/forms/contact.php',
                type: 'POST',
                data: {
                    flag:"contact",
                    cName:cName,
                    cPhone:cPhone,
                    cEmail:cEmail,
                    cMessage:cMessage
                    
                },

                success: function(result) {
                    $("#C_loading").slideToggle(); 
                    $("#c-reply-message").slideToggle(); 
                    $('#ContactForm')[0].reset();
                    setTimeout(function(){
                        $("#c-reply-message").slideToggle();
                        $("#contactSubmit").slideToggle();
                    },5000);
                },
                erro: function(err) {
                    console.log(err);
                }
            });
            
        }else{
            $("#c-error-message").slideToggle();
            setTimeout(function(){
                $("#c-error-message").toggle('fast');
            },3000);  
        }       
        
    })
        
 
 
 

    $('.contact-data-input').change(function(){
        c_validate();
    });

    $('.contact-data-input').keyup(function(){
        c_validate();
    });

    
    function c_validate(){
        c_val = 1;
        if($('#c_name').val().length<3||!isNaN($('#c_name').val())){
            $('#c_name').css({"color":'red'}); c_val = 0;
        } else{
            $('#c_name').css({"color":'green'});           
        }

        if( $('#c_mobile').val().length!=10||isNaN($('#c_mobile').val())
                                           ||$('#c_mobile').val()=='0000000000'
                                           ||$('#c_mobile').val()=='1111111111'
                                           ||$('#c_mobile').val()=='2222222222'
                                           ||$('#c_mobile').val()=='3333333333'
                                           ||$('#c_mobile').val()=='4444444444'
                                           ||$('#c_mobile').val()=='5555555555'
                                           ||$('#c_mobile').val()=='6666666666'
                                           ||$('#c_mobile').val()=='7777777777'
                                           ||$('#c_mobile').val()=='8888888888'
                                           ||$('#c_mobile').val()=='9999999999')
        {
            $('#c_mobile').css({"color":'red'}); c_val = 0;
        } else{
            $('#c_mobile').css({"color":'green'});            
        } 

        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if($('#c_email').val()&&!pattern.test($('#c_email').val())){
            $('#c_email').css({"color":'red'}); c_val = 0;
        } else{
            $('#c_email').css({"color":'green'});           
        } 

        if( $('#c_message').val().length < 10){
            $('#c_message').css({"color":'red'}); c_val = 0;
        } else{
            $('#c_message').css({"color":'green'});           
        }
    }
});