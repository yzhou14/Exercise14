
$(document).ready(function(){
  $( ".menu3" ).children().draggable();

  $("#menuitem1").click(function(){
    $("#container1").html("<p>Helloo0ooo0o0o</p>");
  });

  $("#menuitem2").click(function(){
    $("#container1").append("Hey! I told you not to click! <（￣ ﹌ ￣）>");
  });

  $("#menuitem3").click(function(){
    $("#container1").text("You've found me! Σ(° △ °|||)︴");
  });

  $("#container1").hover(function(){
    $(this).html("<p>Byebye---!!</p>");
    $(this).fadeToggle();
    $(this).animate({
         opacity: '0.2',
         height: '100%',
         width: '100%',},2000,function(){
       });
  });

  $(".menu2").children().click(function(){
    $(this).toggleClass("menuitems");
    $(this).toggleClass("menuitems2");
    $("#container2").slideToggle();
    //$("#container2").fadeToggle();
    // $("#container2").animate({
    //     opacity: '0.2',
    //     height: '60%',
    //     width: '60%',},2000,function(){
    //       alert("The paragraph is now hidden");
    //   });
  });

  $("#menuitem6").click(function(){
    scrollTo(0,5000);
});




    
});

    // $("#menuitem1").click(function(){
    //       $("#container1").html("<p>hello this is an html<br>paragraph element</p>");
    //   })

    // $("#menuitem2").click(function(){
    //     $("#container1").append("this is append");
    // })

    // $("#menuitem3").click(function(){
    //   $("#container1").text("this is text");
    // })

    //   $(".menu2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     console.log("click")
    //     $("#container2").slideToggle(1000, "swing");
    //     $("#container2").fadeToggle();
       
    //     })
    //   $("#menuitem6").click(function(){
    //       scrollTo(0,5000)
    //   })




