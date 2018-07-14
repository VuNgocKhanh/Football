import { ParamsKey } from "./paramkeys";

export class CubInLeague {
    
    private clubID: number = -1;
    
    private leagueID: number = -1;
    
    private groupID: number = -1;
    
    private won: number = 0;
    
    private drawn: number = 0;
    
    private lost: number = 0;
    
    private goalsFor: number = 0;
    
    private goalsAgainst: number = 0;
    
    private yellowCardNumber: number = 0;
    
    private redCardNumber: number = 0;
    
    private played: number = 0;
    
    private points: number = 0;
    
    constructor (){}
    
    fromSFSobject(object: any) {
        
        if (object.containsKey(ParamsKey.CLUB_ID)) {
            this.setClubID(object.getInt(ParamsKey.CLUB_ID));
        }
        
        if (object.containsKey(ParamsKey.LEAGUE_ID)) {
            this.setLeagueID(object.getInt(ParamsKey.LEAGUE_ID));
        }
        
        if (object.containsKey(ParamsKey.GROUP_ID)) {
            this.setGroupID(object.getInt(ParamsKey.GROUP_ID));
        }
        
        if (object.containsKey(ParamsKey.WON)) {
            this.setWon(object.getInt(ParamsKey.WON));
        }
        
        if (object.containsKey(ParamsKey.DRAWN)) {
            this.setDrawn(object.getInt(ParamsKey.DRAWN));
        }
        
        if (object.containsKey(ParamsKey.LOST)) {
            this.setLost(object.getInt(ParamsKey.LOST));
        }
        
        if (object.containsKey(ParamsKey.GOALS_FOR)) {
            this.setLost(object.getInt(ParamsKey.GOALS_FOR));
        }
        
        if (object.containsKey(ParamsKey.GOALS_AGAINST)) {
            this.setLost(object.getInt(ParamsKey.GOALS_AGAINST));
        }
        
        if (object.containsKey(ParamsKey.YELLOW_CARD_NUMBER)) {
            this.setYellowCardNumber(object.getInt(ParamsKey.YELLOW_CARD_NUMBER));
        }
        
        if (object.containsKey(ParamsKey.RED_CARD_NUMBER)) {
            this.setRedCardNumber(object.getInt(ParamsKey.RED_CARD_NUMBER));
        }
        
        if (object.containsKey(ParamsKey.PLAYED)) {
            this.setPlayed(object.getInt(ParamsKey.PLAYED));
        }
        
        if (object.containsKey(ParamsKey.POINTS)) {
            this.setPoints(object.getInt(ParamsKey.POINTS));
        }
        
    }
    
    public getClubID(): number {
        return this.clubID;
    }
    
    public setClubID(clubID: number) {
        this.clubID = this.clubID;
    }
    
    public getLeagueID(): number {
        return this.leagueID;
    }
    
    public setLeagueID(leagueID: number) {
        this.leagueID = this.leagueID;
    }
    
    public getGroupID(): number {
        return this.groupID;
    }
    
    public setGroupID(groupID: number) {
        this.groupID = this.groupID;
    }
    
    public getWon(): number {
        return this.won;
    }
    
    public setWon(won: number) {
        this.won = this.won;
    }
    
    public getDrawn(): number {
        return this.drawn;
    }
    
    public setDrawn(drawn: number) {
        this.drawn = this.drawn;
    }
    
    public getLost(): number {
        return this.lost;
    }
    
    public setLost(lost: number) {
        this.lost = this.lost;
    }
    
    public getGoalsFor(): number {
        return this.goalsFor;
    }
    
    public setGoalsFor(goalsFor: number) {
        this.goalsFor = this.goalsFor;
    }
    
    public getGoalsAgainst(): number {
        return this.goalsAgainst;
    }
    
    public setGoalsAgainst(goalsAgainst: number) {
        this.goalsAgainst = this.goalsAgainst;
    }
    
    public getYellowCardNumber(): number {
        return this.yellowCardNumber;
    }
    
    public setYellowCardNumber(yellowCardNumber: number) {
        this.yellowCardNumber = this.yellowCardNumber;
    }
    
    public getRedCardNumber(): number {
        return this.redCardNumber;
    }
    
    public setRedCardNumber(redCardNumber: number) {
        this.redCardNumber = this.redCardNumber;
    }
    
    public getPlayed(): number {
        return this.played;
    }
    
    public setPlayed(played: number) {
        this.played = this.played;
    }
    
    public getPoints(): number {
        return this.points;
    }
    
    public setPoints(points: number) {
        this.points = this.points;
    }
}