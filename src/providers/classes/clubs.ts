export class Clubs {
    id: number;
    name: string;
    logo: string;
    time_create: string;
    member: number;
    leage_attend: string;
    constructor(data?: any) {
        this.reset();
        if (data) this.parseData(data);
    }

    reset() {
        this.id = -1;
        this.name = "FC Lorem";
        this.logo = "../assets/imgs/logo.png";
        this.time_create = "";
        this.member = 0;
        this.leage_attend = "Ha Noi Elevent Cup"
    }

    parseData(data: any) {
        if (data.id) this.id = data.id;
        if (data.name) this.name = data.name;
        if (data.logo) this.logo = data.logo;
        if (data.time_create) this.time_create = data.time_create;
        if (data.member) this.member = data.member;
        if(data.leage_attend) this.leage_attend = data.leage_attend;
    }

    setName(name: string){
        this.name = name;
    }

    setLogo(logo: string){
        this.logo = logo;
    }

}