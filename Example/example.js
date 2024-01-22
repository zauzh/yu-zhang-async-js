function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, num3, myCallback) {
  let sum = num1 + num2 + num3;
  myCallback(sum);
}
myCalculator(5, 5, 6, myDisplayer);

setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "Welcome to the website";
}

setInterval(myInterval, 1000);
function myInterval() {
  let d = new Date();
  document.getElementById("demo").innerHTML =
    d.getHours() + ":" + d.getUTCMinutes + ":" + d.getSeconds();
}
