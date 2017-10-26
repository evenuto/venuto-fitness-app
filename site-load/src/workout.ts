import * as $ from 'jquery';

export class Choice {
    text: string = "Running";
}

export class WorkoutList {
    choices: Choice[] = [new Choice(), new Choice()];

    drawChoices(){
        $("#workout-choices").html(
            this.choices.map(x=> `<li class="list-group-item">${x.text}</li>`).join("")
        );
    }

}

export class Session {
    choices: Choice[] = [];
    
    init() {
        return $.when(
            $.getJSON("/workout/choices").done( data => {
                this.choices = data;
            })
        );
    }

    
}

//Controller
const session = new Session();
const wL = new WorkoutList();
session.init().done(()=>{  
    wL.drawChoices();

});


$("#workout-choices").click(function(e){
    
})