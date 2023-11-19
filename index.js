const clock = document.getElementById("clock")



setInterval( function(){
    const time = new Date();
    const showTime = time.toLocaleTimeString();
    clock.innerHTML = "Current time is " + showTime;
} , 1000)



