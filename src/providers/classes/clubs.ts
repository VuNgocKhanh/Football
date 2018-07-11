export class Clubs {
    id: string;
    name: string;
    logo: string;
    time_create: string;
    member: number;
    constructor(data?: any) {
        this.reset();
        if (data) this.parseData(data);
    }

    reset() {
        this.id = "";
        this.name = "";
        this.logo = "";
        this.time_create = "";
        this.member = 0;
    }

    parseData(data: any) {
        if (data.id) this.id = data.id;
        if (data.name) this.name = data.name;
        if (data.logo) this.logo = data.logo;
        if (data.time_create) this.time_create = data.time_create;
        if (data.member) this.member = data.member;
    }
}