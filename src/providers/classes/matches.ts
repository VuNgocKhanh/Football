import { ParamsKey } from "./paramkeys";

export class Match {
    
    private matchID: number = -1;
    
    private leagueID: number = -1;
    
    private stadiumID: number = -1;
    
    private homeID: number = -1;
    
    private homeName: string = "";
    
    private homeGoal: number = 0;
    
    private awayID: number = -1;
    
    private awayName: string = "";
    
    private awayGoal: number = 0;
    
    private name: string = "";
    
    private state: number = -1;
    
    private timeStart: number = 0;
    
    private duration: number = 90;
    
    private timeCreated: number = 0;
    
   constructor(){}
    
    public fromSFSobject(object: any) {
        if ((object == null)) {
            return;
        }
        
        if (object.containsKey(ParamsKey.MATCH_ID)) {
            this.setMatchID(object.getInt(ParamsKey.MATCH_ID));
        }
        
        if (object.containsKey(ParamsKey.LEAGUE_ID)) {
            this.setLeagueID(object.getInt(ParamsKey.LEAGUE_ID));
        }
        
        if (object.containsKey(ParamsKey.STADIUM_ID)) {
            this.setStadiumID(object.getInt(ParamsKey.STADIUM_ID));
        }
        
        if (object.containsKey(ParamsKey.HOME_ID)) {
            this.setHomeID(object.getInt(ParamsKey.HOME_ID));
        }
        
        if (object.containsKey(ParamsKey.HOME_NAME)) {
            this.setHomeName(object.getUtfString(ParamsKey.HOME_NAME));
        }
        
        if (object.containsKey(ParamsKey.HOME_GOAL)) {
            this.setHomeGoal(object.getInt(ParamsKey.HOME_GOAL));
        }
        
        if (object.containsKey(ParamsKey.AWAY_ID)) {
            this.setAwayID(object.getInt(ParamsKey.AWAY_ID));
        }
        
        if (object.containsKey(ParamsKey.AWAY_NAME)) {
            this.setAwayName(object.getUtfString(ParamsKey.AWAY_NAME));
        }
        
        if (object.containsKey(ParamsKey.AWAY_GOAL)) {
            this.setAwayGoal(object.getInt(ParamsKey.AWAY_GOAL));
        }
        
        if (object.containsKey(ParamsKey.NAME)) {
            this.setName(object.getUtfString(ParamsKey.NAME));
        }
        
        if (object.containsKey(ParamsKey.TIME_START)) {
            this.setTimeStart(object.getLong(ParamsKey.TIME_START));
        }
        
        if (object.containsKey(ParamsKey.DURATION)) {
            this.setDuration(object.getInt(ParamsKey.DURATION));
        }
        
        if (object.containsKey(ParamsKey.TIME_CREATED)) {
            this.setTimeCreated(object.getLong(ParamsKey.TIME_CREATED));
        }
        
    }
    
   
    
    public getMatchID(): number {
        return this.matchID;
    }
    
    public setMatchID(matchID: number) {
        this.matchID = this.matchID;
    }
    
    public getLeagueID(): number {
        return this.leagueID;
    }
    
    public setLeagueID(leagueID: number) {
        this.leagueID = this.leagueID;
    }
    
    public getStadiumID(): number {
        return this.stadiumID;
    }
    
    public setStadiumID(stadiumID: number) {
        this.stadiumID = this.stadiumID;
    }
    
    public getHomeID(): number {
        return this.homeID;
    }
    
    public setHomeID(homeID: number) {
        this.homeID = this.homeID;
    }
    
    public getHomeName(): string {
        return this.homeName;
    }
    
    public setHomeName(homeName: string) {
        this.homeName = this.homeName;
    }
    
    public getHomeGoal(): number {
        return this.homeGoal;
    }
    
    public setHomeGoal(homeGoal: number) {
        this.homeGoal = this.homeGoal;
    }
    
    public getAwayID(): number {
        return this.awayID;
    }
    
    public setAwayID(awayID: number) {
        this.awayID = this.awayID;
    }
    
    public getAwayName(): string {
        return this.awayName;
    }
    
    public setAwayName(awayName: string) {
        this.awayName = this.awayName;
    }
    
    public getAwayGoal(): number {
        return this.awayGoal;
    }
    
    public setAwayGoal(awayGoal: number) {
        this.awayGoal = this.awayGoal;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = this.name;
    }
    
    public getState(): number {
        return this.state;
    }
    
    public setState(state: number) {
        this.state = this.state;
    }
    
    public getTimeStart(): number {
        return this.timeStart;
    }
    
    public setTimeStart(timeStart: number) {
        this.timeStart = this.timeStart;
    }
    
    public getDuration(): number {
        return this.duration;
    }
    
    public setDuration(duration: number) {
        this.duration = this.duration;
    }
    
    public getTimeCreated(): number {
        return this.timeCreated;
    }
    
    public setTimeCreated(timeCreated: number) {
        this.timeCreated = this.timeCreated;
    }
}