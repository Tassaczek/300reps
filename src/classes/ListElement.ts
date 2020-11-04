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

        // First Column in row with a exercise name
        const nameCol = document.createElement('div');
        nameCol.classList.add("col", "d-flex", "align-items-center");
        const nameH3 = document.createElement('h3');
        nameH3.innerText = exercise.name;

        nameCol.appendChild(nameH3);
        exerciseRow.appendChild(nameCol);

        // Second column in row with  buttons
        const buttonCol = document.createElement('div');
        buttonCol.classList.add("col-6", "d-flex", "justify-content-center", "align-items-center");
        exerciseRow.appendChild(buttonCol);

        // Third column in row with reps

        const repsCol = document.createElement('div');
        repsCol.classList.add("col", "d-flex", "justify-content-end", "align-items-center");
        exerciseRow.appendChild(repsCol);

        //help function tu create button and button group div.

        function createButtonGroup(ariaLabel: string) {
            let buttonGroup = document.createElement('div');
            buttonGroup.classList.add("btn-group", "btn-group-lg", "mr-2");
            buttonGroup.setAttribute('aria-label', ariaLabel);
            buttonGroup.setAttribute('role', 'group');
            return buttonGroup;
        }

        function createButton(innerText: string, uid: number) {
            let button = document.createElement('button');
            button.classList.add("btn", "btn-secondary");
            button.type = 'button';
            button.innerText = innerText;
            button.setAttribute('data-id', uid.toString())
            return button;
        }

        // function to change done reps
        function addReps(exercise: Exercise, uid: number, add: number) {
            exercise.repsDone = exercise.repsDone + add;
            let h3ToChange = document.querySelector(`#counter-${uid}`) as HTMLHRElement;
            h3ToChange.innerText = exercise.repsDone.toString();
        }

        //create first button group
        const firstButtonsGroup = createButtonGroup('First group');
        buttonCol.appendChild(firstButtonsGroup);

        const addOneButton = createButton('+1', uid);
        addOneButton.addEventListener('click', function () {
            addReps(exercise, uid, 1);
        });
        firstButtonsGroup.appendChild(addOneButton);

        const addFiveButton = createButton('+5', uid);
        addFiveButton.addEventListener('click', function () {
            addReps(exercise, uid, 5);
        });

        firstButtonsGroup.appendChild(addFiveButton);

        const addTenButton = createButton('+10', uid);
        addTenButton.addEventListener('click', function () {
            addReps(exercise, uid, 10);
        });

        firstButtonsGroup.appendChild(addTenButton);

        const addTwentyButton = createButton('+20', uid);
        addTwentyButton.addEventListener('click', function () {
            addReps(exercise, uid, 20);
        });

        firstButtonsGroup.appendChild(addTwentyButton);

        // second button group

        const secondButtonsGroup = createButtonGroup('Second group');
        buttonCol.appendChild(secondButtonsGroup);

        const subtractOneButton = createButton('-1', uid);
        subtractOneButton.addEventListener('click', function () {
            addReps(exercise, uid, -1);
        });
        secondButtonsGroup.appendChild(subtractOneButton);

        // reps column
        const repsH3Counter = document.createElement('H3');
        repsH3Counter.innerText = exercise.repsDone.toString();
        repsH3Counter.id = `counter-${uid}`;
        const repsH3Divider = document.createElement('H3');
        repsH3Divider.innerText = '/';
        const repsH3Total = document.createElement('H3');
        repsH3Total.innerText = exercise.reps.toString();

        repsCol.appendChild(repsH3Counter);
        repsCol.appendChild(repsH3Divider);
        repsCol.appendChild(repsH3Total);

        this.container.append(container)
    }
}
