import { ParamsKey } from "./paramkeys";

export class Dornor {
    
    private name: string = "";
    
    private description: string = "";
    
    private logo: string = "";
    
    private cover: string = "";
    
    private state: number = 0;
    
    private website: string = "";
    
    private facebook: string = "";
    
    private youtube: string = "";
    
    private timeCreated: number = 0;
    
    constructor(){}

    public fromSFSobject(object: any) {
        if ((object == null)) {
            return;
        }
        
        if (object.containsKey(ParamsKey.NAME)) {
            this.setName(object.getUtfString(ParamsKey.NAME));
        }
        
        if (object.containsKey(ParamsKey.DESCRIPTION)) {
            this.setDescription(object.getUtfString(ParamsKey.DESCRIPTION));
        }
        
        if (object.containsKey(ParamsKey.LOGO)) {
            this.setLogo(object.getUtfString(ParamsKey.LOGO));
        }
        
        if (object.containsKey(ParamsKey.COVER)) {
            this.setCover(object.getUtfString(ParamsKey.COVER));
        }
        
        if (object.containsKey(ParamsKey.STATE)) {
            this.setState(object.getInt(ParamsKey.STATE));
        }
        
        if (object.containsKey(ParamsKey.WEBSITE)) {
            this.setWebsite(object.getUtfString(ParamsKey.WEBSITE));
        }
        
        if (object.containsKey(ParamsKey.FACEBOOK)) {
            this.setFacebook(object.getUtfString(ParamsKey.FACEBOOK));
        }
        
        if (object.containsKey(ParamsKey.YOUTUBE)) {
            this.setYoutube(object.getUtfString(ParamsKey.YOUTUBE));
        }
        
        if (object.containsKey(ParamsKey.TIME_CREATED)) {
            this.setTimeCreated(object.getLong(ParamsKey.TIME_CREATED));
        }
        
    }
    
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = this.name;
    }
    
    public getDescription(): string {
        return this.description;
    }
    
    public setDescription(description: string) {
        this.description = this.description;
    }
    
    public getLogo(): string {
        return this.logo;
    }
    
    public setLogo(logo: string) {
        this.logo = this.logo;
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
    
    public getWebsite(): string {
        return this.website;
    }
    
    public setWebsite(website: string) {
        this.website = this.website;
    }
    
    public getFacebook(): string {
        return this.facebook;
    }
    
    public setFacebook(facebook: string) {
        this.facebook = this.facebook;
    }
    
    public getYoutube(): string {
        return this.youtube;
    }
    
    public setYoutube(youtube: string) {
        this.youtube = this.youtube;
    }
    
    public getTimeCreated(): number {
        return this.timeCreated;
    }
    
    public setTimeCreated(timeCreated: number) {
        this.timeCreated = this.timeCreated;
    }
}