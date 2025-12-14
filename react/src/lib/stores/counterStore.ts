import { makeAutoObservable } from "mobx";

export class CounterStore {
    title: string = "Counter Store Example";
    count: number = 42;
    events: string [] = [
        `Store initialized with count ${this.count}`
    ]

    constructor() {
        makeAutoObservable(this);
    }

    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`Incremented by ${amount}, new count is ${this.count}`);
    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`Decremented by ${amount}, new count is ${this.count}`);
    }

    get eventCount() {
        return this.events.length;
    }
}
