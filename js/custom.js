$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
});

$(function(){
  var coverflow = $("#coverflow").flipster({

       style:'coverflow',
       	  buttons: true,
       start:'center',


      
      
  });
    


});