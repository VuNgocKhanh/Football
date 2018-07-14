export class Player {
    id: string;
    name: string;
    position: string;
    number: string;
    lead: number;
    manage: number;
    cover: "";

    constructor(data?: any) {
        this.reset();
        if (data) this.parse(data);
    }

    reset() {
        this.id = "";
        this.name = "";
        this.position = "";
        this.position = "";
        this.number = "";
        this.lead = 0;
        this.manage = 0;
        this.cover = "";
    }

    parse(data) {
        if (data.id) this.id = data.id;
        if (data.name) this.name = data.name;
        if (data.position) this.position = data.position;
        if (data.number) this.number = data.number;
        if (data.lead) this.lead = data.lead;
        if (data.manage) this.manage = data.manage;
        if (data.cover) this.cover = data.cover;
    }

    setLead(lead: number) {
        this.lead = lead;
    }

    setManage(manage: number){
        this.manage = manage;
    }
}