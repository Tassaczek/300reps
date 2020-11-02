import {Exercise} from './Exercise'

export class ListElement {
    constructor(private container: HTMLDivElement) {
    }

    render(exercise: Exercise, uid: number) {
        // Basic DIV structure
        const container = document.createElement('div')
        container.classList.add("row", "justify-content-md-center", "exercise-container");
        container.id = `div-container-${uid}`;
        const containerCol = document.createElement('div');
        containerCol.classList.add('col-8');
        const exerciseRow = document.createElement('div');
        exerciseRow.classList.add("row", "exercise");

        container.appendChild(containerCol);
        containerCol.appendChild(exerciseRow);

        // First Column with a name
        const nameCol = document.createElement('div');
        nameCol.classList.add("col", "d-flex", "align-items-center");
        const nameH3 = document.createElement('h3');
        nameH3.innerText = exercise.name;

        nameCol.appendChild(nameH3);
        exerciseRow.appendChild(nameCol);

        // Second column with a buttons and reps

        const repsCol = document.createElement('div');
        repsCol.classList.add("col", "d-flex", "justify-content-end", "align-items-center");
        exerciseRow.appendChild(repsCol);

        //first button group

        const firstButtonsGroup = document.createElement('div');
        firstButtonsGroup.classList.add("btn-group", "btn-group-lg", "mr-2");
        firstButtonsGroup.setAttribute('aria-label', 'First group');
        firstButtonsGroup.setAttribute('role', 'group');

        repsCol.appendChild(firstButtonsGroup);

        const addOneButton = document.createElement('button');
        addOneButton.classList.add("btn", "btn-secondary");
        addOneButton.type = 'button';
        addOneButton.innerText = '+1';
        addOneButton.setAttribute('data-id', uid.toString())
        addOneButton.addEventListener('click', function () {
            exercise.repsDone = exercise.repsDone + 1;
            let h3ToChange = document.querySelector(`#counter-${uid}`) as HTMLHRElement;
            h3ToChange.innerText = exercise.repsDone.toString();
        });

        firstButtonsGroup.appendChild(addOneButton);


        function addReps(e: Event, add: number) {

        }


        const addFiveButton = document.createElement('button');
        addFiveButton.classList.add("btn", "btn-secondary");
        addFiveButton.type = 'button';
        addFiveButton.innerText = '+5';
        addFiveButton.setAttribute('data-id', uid.toString())
        addFiveButton.addEventListener('click', function () {
            exercise.repsDone = exercise.repsDone + 5;
            let h3ToChange = document.querySelector(`#counter-${uid}`) as HTMLHRElement;
            h3ToChange.innerText = exercise.repsDone.toString();
        });

        firstButtonsGroup.appendChild(addFiveButton);

        const addTenButton = document.createElement('button');
        addTenButton.classList.add("btn", "btn-secondary");
        addTenButton.type = 'button';
        addTenButton.innerText = '+10';
        addTenButton.setAttribute('data-id', uid.toString())
        addTenButton.addEventListener('click', function () {
            exercise.repsDone = exercise.repsDone + 10;
            let h3ToChange = document.querySelector(`#counter-${uid}`) as HTMLHRElement;
            h3ToChange.innerText = exercise.repsDone.toString();
        });


        firstButtonsGroup.appendChild(addTenButton);

        const addTwentyButton = document.createElement('button');
        addTwentyButton.classList.add("btn", "btn-secondary");
        addTwentyButton.type = 'button';
        addTwentyButton.innerText = '+20'
        addTwentyButton.setAttribute('data-id', uid.toString())
        addTwentyButton.addEventListener('click', function () {
            exercise.repsDone = exercise.repsDone + 20;
            let h3ToChange = document.querySelector(`#counter-${uid}`) as HTMLHRElement;
            h3ToChange.innerText = exercise.repsDone.toString();
        });
        firstButtonsGroup.appendChild(addTwentyButton);

        // second button group

        const secondButtonsGroup = document.createElement('div');
        secondButtonsGroup.classList.add("btn-group", "btn-group-lg", "mr-2");
        secondButtonsGroup.setAttribute('aria-label', 'Second group');
        secondButtonsGroup.setAttribute('role', 'group');

        repsCol.appendChild(secondButtonsGroup);

        const subtractOneButton = document.createElement('button');
        subtractOneButton.classList.add("btn", "btn-secondary");
        subtractOneButton.type = 'button';
        subtractOneButton.innerText = '-1'
        subtractOneButton.setAttribute('data-id', uid.toString())
        subtractOneButton.addEventListener('click', function () {
            exercise.repsDone = exercise.repsDone - 1;
            let h3ToChange = document.querySelector(`#counter-${uid}`) as HTMLHRElement;
            h3ToChange.innerText = exercise.repsDone.toString();
        });
        secondButtonsGroup.appendChild(subtractOneButton);

        // reps
        const repsCountWrapper = document.createElement('div');
        repsCountWrapper.classList.add("col", "d-flex", "align-items-center");
        const repsH3Counter = document.createElement('H3');
        repsH3Counter.innerText = exercise.repsDone.toString();
        repsH3Counter.id = `counter-${uid}`;
        const repsH3Divider = document.createElement('H3');
        repsH3Divider.innerText = '/';
        const repsH3Total = document.createElement('H3');
        repsH3Total.innerText = exercise.reps.toString();

        repsCountWrapper.appendChild(repsH3Counter);
        repsCountWrapper.appendChild(repsH3Divider);
        repsCountWrapper.appendChild(repsH3Total);

        repsCol.appendChild(repsCountWrapper);

        this.container.append(container)
    }
}
