import { ParamsKey } from "./paramkeys";

export class Clubs {

    private clubID: number = -1;
    
    private name: string = "";
    
    private slogan: string = "";
    
    private logo: string = "";
    
    private description: string = "";
    
    private cover: string = "";
    
    private state: number = -1;
    
    private numberPlayer: number = 0;
    
    private shirtColor: string = "";
    
    private timeCreated: number = 0;

    constructor() {
    }

     
    public fromSFSobject(object: any) {
        if ((object == null)) {
            return;
        }
        if (object.containsKey(ParamsKey.CLUB_ID)) {
            this.setClubID(object.getInt(ParamsKey.CLUB_ID));
        }
        
        if (object.containsKey(ParamsKey.NAME)) {
            this.setName(object.getUtfString(ParamsKey.NAME));
        }
        
        if (object.containsKey(ParamsKey.SLOGAN)) {
            this.setSlogan(object.getUtfString(ParamsKey.SLOGAN));
        }
        
        if (object.containsKey(ParamsKey.DESCRIPTION)) {
            this.setDescription(object.getUtfString(ParamsKey.DESCRIPTION));
        }
        
        if (object.containsKey(ParamsKey.COVER)) {
            this.setCover(object.getUtfString(ParamsKey.COVER));
        }
        
        if (object.containsKey(ParamsKey.STATE)) {
            this.setState(object.getInt(ParamsKey.STATE));
        }
        
        if (object.containsKey(ParamsKey.SHIRT_COLOR)) {
            this.setShirtColor(object.getUtfString(ParamsKey.SHIRT_COLOR));
        }
        
        if (object.containsKey(ParamsKey.NUMBER_PLAYER)) {
            this.setClubID(object.getInt(ParamsKey.NUMBER_PLAYER));
        }
        
        if (object.containsKey(ParamsKey.TIME_CREATED)) {
            this.setTimeCreated(object.getLong(ParamsKey.TIME_CREATED));
        }
    }

    public getClubID(): number {
        return this.clubID;
    }
    
    public setClubID(clubID: number) {
        this.clubID = this.clubID;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = this.name;
    }
    
    public getSlogan(): string {
        return this.slogan;
    }
    
    public setSlogan(slogan: string) {
        this.slogan = this.slogan;
    }
    
    public getLogo(): string {
        return this.logo;
    }
    
    public setLogo(logo: string) {
        this.logo = this.logo;
    }
    
    public getDescription(): string {
        return this.description;
    }
    
    public setDescription(description: string) {
        this.description = this.description;
    }
    
    public getCover(): string {
        return this.cover;
    }
    
    public setCover(cover: string) {
        this.cover = this.cover;
    }
    
    public getState(): number {
        return this.state;
    }
    
    public setState(state: number) {
        this.state = this.state;
    }
    
    public getNumberPlayer(): number {
        return this.numberPlayer;
    }
    
    public setNumberPlayer(numberPlayer: number) {
        this.numberPlayer = this.numberPlayer;
    }
    
    public getShirtColor(): string {
        return this.shirtColor;
    }
    
    public setShirtColor(shirtColor: string) {
        this.shirtColor = this.shirtColor;
    }
    
    public getTimeCreated(): number {
        return this.timeCreated;
    }
    
    public setTimeCreated(timeCreated: number) {
        this.timeCreated = this.timeCreated;
    }
}