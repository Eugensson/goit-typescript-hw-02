// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

type CBFunc = (a: number) => number;

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialized: unknown;
let callback: CBFunc = (a: number): number => {
    return 100 + a;
};

export {};
