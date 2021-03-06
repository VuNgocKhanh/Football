import { ParamsKey } from "./paramkeys";

export class League {
    
    private leagueID: number = -1;
    
    private name: string = "";
    
    private logo: string = "";
    
    private cover: string = "";
    
    private state: number = 0;
    
    private numberClub: number = 0;
    
    private timeStart: number = 0;
    
    private timeEnd: number = 0;
    
    private timeCreated: number = 0;
    
    private ruleID: number = -1;
    
   constructor(){}
    
    public fromSFSobject(object: any) {
        if ((object == null)) {
            return;
        }
        
        if (object.containsKey(ParamsKey.LEAGUE_ID)) {
            this.setLeagueID(object.getInt(ParamsKey.LEAGUE_ID));
        }
        
        if (object.containsKey(ParamsKey.NAME)) {
            this.setName(object.getUtfString(ParamsKey.NAME));
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
        
        if (object.containsKey(ParamsKey.NUMBER_CLUB)) {
            this.setNumberClub(object.getInt(ParamsKey.NUMBER_CLUB));
        }
        
        if (object.containsKey(ParamsKey.TIME_START)) {
            this.setTimeStart(object.getLong(ParamsKey.TIME_START));
        }
        
        if (object.containsKey(ParamsKey.TIME_END)) {
            this.setTimeEnd(object.getLong(ParamsKey.TIME_END));
        }
        
        if (object.containsKey(ParamsKey.TIME_CREATED)) {
            this.setTimeCreated(object.getLong(ParamsKey.TIME_CREATED));
        }
        
        if (object.containsKey(ParamsKey.RULE_ID)) {
            this.setRuleID(object.getInt(ParamsKey.RULE_ID));
        }
        
    }
    
    
    public getLeagueID(): number {
        return this.leagueID;
    }
    
    public setLeagueID(leagueID: number) {
        this.leagueID = this.leagueID;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = this.name;
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
    
    public getNumberClub(): number {
        return this.numberClub;
    }
    
    public setNumberClub(numberClub: number) {
        this.numberClub = this.numberClub;
    }
    
    public getTimeStart(): number {
        return this.timeStart;
    }
    
    public setTimeStart(timeStart: number) {
        this.timeStart = this.timeStart;
    }
    
    public getTimeEnd(): number {
        return this.timeEnd;
    }
    
    public setTimeEnd(timeEnd: number) {
        this.timeEnd = this.timeEnd;
    }
    
    public getTimeCreated(): number {
        return this.timeCreated;
    }
    
    public setTimeCreated(timeCreated: number) {
        this.timeCreated = this.timeCreated;
    }
    
    public getRuleID(): number {
        return this.ruleID;
    }
    
    public setRuleID(ruleID: number) {
        this.ruleID = this.ruleID;
    }
}