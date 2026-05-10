declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    static register(core: any): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(vars?: any): void;
    paused(value: boolean): void;
    scrollTop(value: number): number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    // Add other methods as needed
  }
}
