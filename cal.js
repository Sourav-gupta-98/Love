function love() {
  var a = document.getElementById("name").value;
  console.log(a);
  var b = document.getElementById("other").value;
  console.log(b);
  if (a == false || b == false) {
    document.getElementById("par").innerHTML = ("Please inter your name");
  } else {
    var n = Math.random();
    var k = (n * 100);
    var l = Math.floor(k) + 1;
    console.log(l);
    document.getElementById("par").innerHTML = (a + " love " + b + " with " + l + "%");
  }

  myform.onsubmit = function() {
    //agar tum yaa paad raha hoo too matlab, tum Seekana chahataho good
    return false
  }
}
