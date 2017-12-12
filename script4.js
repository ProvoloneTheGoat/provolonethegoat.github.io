$( function() {
    $( "#dialog" ).dialog();
  } );
  
  
$( ".FrenchButton" ).dialog({
  buttons: [
    {
      text: "Ok",
      icon: "ui-icon-heart",
      click: function() {
        $( this ).dialog( "close" );
      }
 
      // Uncommenting the following line would hide the text,
      // resulting in the label being used as a tooltip
      //showText: false
    }
  ]
});
