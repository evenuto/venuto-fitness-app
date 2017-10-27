var workoutArray = Array();
$(document).ready(function() {
    $("#submit").click(function(){
        if(document.getElementById("cardio").value != "" && document.getElementById("duration").value != "")
        {
            workoutArray.push(document.getElementById("cardio").value + " for " 
                + document.getElementById("duration").value + " minutes" + "<br>");
            $("#output").append('<span>' + workoutArray[workoutArray.length - 1] + '</span>');
            cardio.value = "";
            duration.value = "";
        }
    });
});

$(document).ready(function() {
        $("#submit2").click(function(){
            if(document.getElementById("lift").value != "" && document.getElementById("weight").value != "" && document.getElementById("set").value != "")
            {
                workoutArray.push(document.getElementById("lift").value + " at " 
                    + document.getElementById("weight").value + " for " +  + document.getElementById("set").value + "<br>");
                $("#output").append('<span>' + workoutArray[workoutArray.length - 1] + '</span>');
                lift.value = "";
                weight.value = "";
                set.value = "";

            }
        });
    });
   
