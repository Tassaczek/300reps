import {Exercise} from "./classes/Exercise";
import {ListElement} from "./classes/ListElement";

let uid: number = 0;

const form = document.querySelector('#add-exercise') as HTMLFormElement;
const exerciseName = document.querySelector('#exercise-name') as HTMLInputElement;
const repCount = document.querySelector('#reps-count') as HTMLInputElement;
const exerciseDiv = document.querySelector('#exercises-list') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const exercise = new Exercise(exerciseName.value, repCount.valueAsNumber)
    const list = new ListElement(exerciseDiv);
    uid++
    list.render(exercise, uid);
    form.reset();
})

// let exerciseOne = new Exercise('Dips', 50);
// console.log(exerciseOne)
//
// let exerciseList = document.querySelector('#exercises-list')!;


function donothing () {
    console.log('sadasd');
}

console.log(typeof donothing());
