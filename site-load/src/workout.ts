import * as $ from 'jquery';

export class Choice {
    text: string;
}


export class WorkoutSession {
    choices: Choice[] = [];
    
    init() {
        return $.when(
            $.getJSON("/workout/choices").done( data => {
                this.choices = data;
            })
        );
    }

    drawChoices(){
        $("#workout-choices").html(
            this.choices.map(x=> `<li class="list-group-item">${x.text}</li>`).join("")
        );
    }
}

//Controller
const session = new WorkoutSession();
session.init().done(()=>{  
    session.drawChoices();

});


$("#workout-choices").click(function(e){
    
})