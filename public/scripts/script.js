
console.log("script.js linked");

function returnedValue(newNumber){
  console.log("returnedValue() triggered");
  $('#screen').val(newNumber);
};

$(document).ready(function() {

  $('.calcButton, .operatorButton').click(function(){ // .operatorButton
    console.log(this.value.toString() + " clicked");
    console.log($('#screen').val() + " current screen value");
    $('#screen').val($('#screen').val() + this.value.toString());
    console.log("screen .val(): " + $('#screen').val());

  });

  $('#calculatorForm').submit(function(e){
    e.preventDefault();

    $.post('/calculate', $(this).serialize(), function(data){
          console.log("Returned Data: " + data);
          $('#screen').val(data);
        });
      });

});
