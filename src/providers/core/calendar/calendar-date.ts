
export class CalendarDate {
    public dd: number = -1;
    public mm: number = -1;
    public yy: number = -1;
    constructor() {

    }

    public setDate(dd: number, mm: number, yy: number): void {
        this.dd = dd;
        this.mm = mm;
        this.yy = yy;
    }
    public getDay(): number {
        return this.dd;
    }
    public getMonth(): number {
        return this.mm;
    }
    public getYear(): number {
        return this.yy;
    }

    getId(): string {
        return this.dd + "" + this.mm + "" + this.yy;
    }
}