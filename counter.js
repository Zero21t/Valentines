 // Set the date and time you want to count down to
 var countDownDate = new Date("Feb 14, 2024 00:00:01").getTime();

 // Update the countdown every 1 second
 var x = setInterval(function() {

   // Get the current date and time
   var now = new Date().getTime();

   // Calculate the distance between now and the countdown date
   var distance = countDownDate - now;

   // Calculate days, hours, minutes, and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element with id="countdown"
   document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

   // If the countdown is over, display a message
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("countdown").innerHTML = "EXPIRED";
   }
 }, 1000);