function gallonsLiter (gallon) {
  return gallon * 3.78;
};

function litersGal (liter) {
  return liter * 0.26;
};

function teaspoon (tablespoon) {
  return tablespoon * 3;
};

function tablespoon (teaspoon) {
  return teaspoon * 0.333333;
};

function oz (cup) {
  return cup * 8;
};

function cup (oz) {
  return oz * 0.125;
};

$(function(){
  $("form#gallonsLiter").submit(function(event) {
    //debugger;
    var gallon = parseInt($("input#gL").val());
    var result1 = gallonsLiter("gallon");
    $("#output1").text(result1);
    event.preventDefault();
    console.log(result1);
  });

  $("form#litersGal").submit(function(event) {
    var number = parseInt($("#lG").val());
    var result2 = litersGal("input#lG");
    $("#output2").text(result2);
    event.preventDefault();
  });

  $("form#teaspoon").submit(function(event) {
    var number = parseInt($("#tSpoon").val());
    var result3 = teaspoon("input#tSpoon");
    $("#output3").text(result3);
    event.preventDefault();
  });

  $("form#tablespoon").submit(function(event) {
    var number = parseInt($("#table").val());
    var result4 = tablespoon("input#table");
    $("#output4").text(result4);
    event.preventDefault();
  });

  $("form#ounce").submit(function(event) {
    var number = parseInt($("#oz").val());
    var result5 = oz("input#oz");
    $("#output5").text(result5);
    event.preventDefault();
  });

  $("form#cups").submit(function(event) {
    var number = parseInt($("#cup").val());
    var result6 = cup("input#cup");
    $("#output6").text(result6);
    event.preventDefault();

  });
});
