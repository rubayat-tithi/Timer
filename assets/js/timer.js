// The data/time we want to countdown to
    var countDownDate = new Date("April 2, 2021 21:00:00").getTime();
    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    //var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    // document.getElementById("days").innerHTML = days + "d "
   // document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
   // document.getElementById("hours").style.color = "white";
   // document.getElementById("hours").style.textAlign = "center";
    document.getElementById("mins").style.color = "white";
    //document.getElementById("mins").style.textAlign = "center";
    document.getElementById("secs").style.color = "white";
    //document.getElementById("secs").style.textAlign = "center";
	document.getElementById("end").style.color = "white";
	document.getElementById("end").style.textAlign = "center";

	// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });