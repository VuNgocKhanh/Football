import { ParamsKey } from "./paramkeys";

export class MatchEvent {
    
    private eventID: number = -1;
    
    private leagueID: number = -1;
    
    private playerID1: number = -1;
    
    private playerID2: number = -1;
    
    private name: string = "";
    
    private description: string = "";
    
    private type: number = -1;
    
    private state: number = -1;
    
    private time: number = 0;
    
    private timeCreated: number = 0;
    
    constructor(){}
    
    
    
    public fromSFSObject(object: any) {
        if ((object == null)) {
            return;
        }
        
        if (object.containsKey(ParamsKey.EVENT_ID)) {
            this.setEventID(object.getInt(ParamsKey.EVENT_ID));
        }
        
        if (object.containsKey(ParamsKey.LEAGUE_ID)) {
            this.setLeagueID(object.getInt(ParamsKey.LEAGUE_ID));
        }
        
        if (object.containsKey(ParamsKey.PLAYER_ID_1)) {
            this.setPlayerID1(object.getInt(ParamsKey.PLAYER_ID_1));
        }
        
        if (object.containsKey(ParamsKey.PLAYER_ID_2)) {
            this.setPlayerID2(object.getInt(ParamsKey.PLAYER_ID_2));
        }
        
        if (object.containsKey(ParamsKey.NAME)) {
            this.setName(object.getUtfString(ParamsKey.NAME));
        }
        
        if (object.containsKey(ParamsKey.DESCRIPTION)) {
            this.setDescription(object.getUtfString(ParamsKey.DESCRIPTION));
        }
        
        if (object.containsKey(ParamsKey.TYPE)) {
            this.setType(object.getInt(ParamsKey.TYPE));
        }
        
        if (object.containsKey(ParamsKey.STATE)) {
            this.setState(object.getInt(ParamsKey.STATE));
        }
        
        if (object.containsKey(ParamsKey.TIME_CREATED)) {
            this.setTimeCreated(object.getLong(ParamsKey.TIME_CREATED));
        }
        
    }
    
    public getEventID(): number {
        return this.eventID;
    }
    
    public setEventID(eventID: number) {
        this.eventID = this.eventID;
    }
    
    public getLeagueID(): number {
        return this.leagueID;
    }
    
    public setLeagueID(leagueID: number) {
        this.leagueID = this.leagueID;
    }
    
    public getPlayerID1(): number {
        return this.playerID1;
    }
    
    public setPlayerID1(playerID1: number) {
        this.playerID1 = this.playerID1;
    }
    
    public getPlayerID2(): number {
        return this.playerID2;
    }
    
    public setPlayerID2(playerID2: number) {
        this.playerID2 = this.playerID2;
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
    
    public getType(): number {
        return this.type;
    }
    
    public setType(type: number) {
        this.type = this.type;
    }
    
    public getState(): number {
        return this.state;
    }
    
    public setState(state: number) {
        this.state = this.state;
    }
    
    public getTime(): number {
        return this.time;
    }
    
    public setTime(time: number) {
        this.time = this.time;
    }
    
    public getTimeCreated(): number {
        return this.timeCreated;
    }
    
    public setTimeCreated(timeCreated: number) {
        this.timeCreated = this.timeCreated;
    }
}