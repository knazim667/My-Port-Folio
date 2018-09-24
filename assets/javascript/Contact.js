
$(function (){

    var config = {
        apiKey: "AIzaSyAYQgUPxKDCha1EqNbbpyowQ8XVz69R1F4",
        authDomain: "contact-form-64ee1.firebaseapp.com",
        databaseURL: "https://contact-form-64ee1.firebaseio.com",
        projectId: "contact-form-64ee1",
        storageBucket: "contact-form-64ee1.appspot.com",
        messagingSenderId: "610304447329"
      };
      firebase.initializeApp(config);
      
      $("#submit").click(function(){

        var name = $("#name").val();
        console.log(name);
    
        var email = $("#email").val();
        console.log(email);

        var phone = $("#phone").val();
        console.log(phone);
    
        var message = $("#Message").val();
        console.log(message);

        firebase.database().ref('Message').push({
            name, email, phone, message,
      });

      $(".alert").show();

      setTimeout(function (){
          $(".alert").hide();
      },3000);
        $("#name").val('');
        $("#email").val('');
        $("#phone").val('');
        $("#Message").val('');

    });
});