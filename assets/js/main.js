function generateNum() {
  let _max = document.getElementById("max").value;
  let _min = document.getElementById("min").value;
  let max = parseInt(_max);
  let min = parseInt(_min);
  let preRes = Math.random() * (max - min) + min + 1;
  const res = preRes.toFixed("0");
  {
    !isNaN(res)
      ? (document.getElementById("show_budget").innerHTML =
          "Your Budget is: " + res)
      : (document.getElementById("show_budget").innerHTML =
          "Please Enter Values First");
  }
}
