var options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
var dateOutput = new Date().toLocaleDateString('en-US', options);
document.getElementById("todays-date").innerHTML = dateOutput.fontcolor("black");
