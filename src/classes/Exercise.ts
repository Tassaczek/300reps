export class Exercise {
    readonly name: string;
    readonly reps: number;
    public repsDone: number;
    constructor(name: string, reps: number) {
        this.name = name;
        this.reps = reps;
        this.repsDone = 0;
    }
}
