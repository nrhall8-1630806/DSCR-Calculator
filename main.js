function calc() {
  var a = parseFloat(document.querySelector("#value1").value);
  var b = parseFloat(document.querySelector("#value2").value);
  var c = parseFloat(document.querySelector("#value3").value);
  var d = parseFloat(document.querySelector("#value4").value);
  var percent = c/100;
  var interest = percent/12;
  var interestP1 = interest + 1;
  var terms = d*12;
  var pow = Math.pow(interestP1, terms);
  var middle = pow - 1;
  var bottom = interest * pow;
  var calc1 = b/middle;
  var calc2 = calc1*bottom;
  var calc3 = calc2*12;
  var finalcalc = a/calc3;
  var finalratio = Math.round(finalcalc * 10) / 10;

  document.querySelector("#result").innerHTML = finalratio;
}
