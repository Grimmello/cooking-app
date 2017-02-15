function gallonsLiter (gal) {
  return gal * 3.78;
};

function litersGal (lit) {
  return lit * 0.26;
};

function teaspoon (tab) {
  return tab * 3;
};

function tablespoon (tea) {
  return tea * 0.333333;
};

function oz (cup1) {
  return cup1 * 8;
};

function cup (oz1) {
  return oz1 * 0.125;
};

$(function(){
  $("form#gallonsLiter").submit(function(event) {
    //debugger;
    var gallon = parseInt($("input#gL").val());
    var result1 = gallonsLiter(gallon);
    $("#output1").text(result1);
    event.preventDefault();
  });

  $("form#litersGal").submit(function(event) {
    var liter = parseInt($("input#lG").val());
    var result2 = litersGal(liter);
    $("#output2").text(result2);
    event.preventDefault();
  });

  $("form#teaspoon").submit(function(event) {
    var teasp = parseInt($("input#tSpoon").val());
    var result3 = teaspoon(teasp);
    $("#output3").text(result3);
    event.preventDefault();
  });

  $("form#tablespoon").submit(function(event) {
    var tblsp = parseInt($("input#table").val());
    var result4 = tablespoon(tblsp);
    $("#output4").text(result4);
    event.preventDefault();
  });

  $("form#ounce").submit(function(event) {
    var ounce1 = parseInt($("input#oz").val());
    var result5 = oz(ounce1);
    $("#output5").text(result5);
    event.preventDefault();
  });

  $("form#cups").submit(function(event) {
    var cup1 = parseInt($("#cup").val());
    var result6 = cup(cup1);
    $("#output6").text(result6);
    event.preventDefault();

  });
});
