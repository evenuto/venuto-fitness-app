var workoutArray = Array();
$(document).ready(function() {
    $("#submit").click(function(){
        if(document.getElementById("workout").value != "" && document.getElementById("duration").value != "")
        {
            workoutArray.push(document.getElementById("workout").value + " for " + document.getElementById("duration").value + "<br>");
            $("#output").append('<span>' + workoutArray[workoutArray.length - 1] + '</span>');
            workout.value = "";
            duration.value = "";
        }
    });
   
});