import { ParamsKey } from "./paramkeys";

export class Rule {
    
    private ruleID: number = -1;
    
    private wonPoint: number = 3;
    
    private drawnPoint: number = 1;
    
    private lostPoint: number = 0;
    
    private pointPriority: number = 10;
    
    private gdPriority: number = 9;
    
    private namePriority: number = 8;
    
    private againstPriority: number = 7;
    
    private fairplayPriority: number = 6;
    
    private duration: number = 90;
    
    private maxPlayerPerClub: number = 24;
    
    private numberPlayPlayer: number = 11;
    
    constructor(){}

    
    
    public fromSFSObject(object: any) {
        if ((object == null)) {
            return;
        }
        
        if (object.containsKey(ParamsKey.RULE_ID)) {
            this.setRuleID(object.getInt(ParamsKey.RULE_ID));
        }
        
        if (object.containsKey(ParamsKey.WON_POINT)) {
            this.setWonPoint(object.getInt(ParamsKey.WON_POINT));
        }
        
        if (object.containsKey(ParamsKey.DRAWN_POINT)) {
            this.setDrawnPoint(object.getInt(ParamsKey.DRAWN_POINT));
        }
        
        if (object.containsKey(ParamsKey.LOST_POINT)) {
            this.setLostPoint(object.getInt(ParamsKey.LOST_POINT));
        }
        
        if (object.containsKey(ParamsKey.POINT_PRIORITY)) {
            this.setPointPriority(object.getInt(ParamsKey.POINT_PRIORITY));
        }
        
        if (object.containsKey(ParamsKey.GD_PRIORITY)) {
            this.setGdPriority(object.getInt(ParamsKey.GD_PRIORITY));
        }
        
        if (object.containsKey(ParamsKey.NAME_PRIORITY)) {
            this.setNamePriority(object.getInt(ParamsKey.NAME_PRIORITY));
        }
        
        if (object.containsKey(ParamsKey.AGAINST_PRIORITY)) {
            this.setAgainstPriority(object.getInt(ParamsKey.AGAINST_PRIORITY));
        }
        
        if (object.containsKey(ParamsKey.FAIRPLAY_PRIORITY)) {
            this.setFairplayPriority(object.getInt(ParamsKey.FAIRPLAY_PRIORITY));
        }
        
        if (object.containsKey(ParamsKey.DURATION)) {
            this.setDuration(object.getInt(ParamsKey.DURATION));
        }
        
        if (object.containsKey(ParamsKey.MAX_PLAYER_PER_CLUB)) {
            this.setMaxPlayerPerClub(object.getInt(ParamsKey.MAX_PLAYER_PER_CLUB));
        }
        
        if (object.containsKey(ParamsKey.NUMBER_PLAY_PLAYER)) {
            this.setNumberPlayPlayer(object.getInt(ParamsKey.NUMBER_PLAY_PLAYER));
        }
        
    }
    
    public getRuleID(): number {
        return this.ruleID;
    }
    
    public setRuleID(ruleID: number) {
        this.ruleID = this.ruleID;
    }
    
    public getWonPoint(): number {
        return this.wonPoint;
    }
    
    public setWonPoint(wonPoint: number) {
        this.wonPoint = this.wonPoint;
    }
    
    public getDrawnPoint(): number {
        return this.drawnPoint;
    }
    
    public setDrawnPoint(drawnPoint: number) {
        this.drawnPoint = this.drawnPoint;
    }
    
    public getLostPoint(): number {
        return this.lostPoint;
    }
    
    public setLostPoint(lostPoint: number) {
        this.lostPoint = this.lostPoint;
    }
    
    public getPointPriority(): number {
        return this.pointPriority;
    }
    
    public setPointPriority(pointPriority: number) {
        this.pointPriority = this.pointPriority;
    }
    
    public getGdPriority(): number {
        return this.gdPriority;
    }
    
    public setGdPriority(gdPriority: number) {
        this.gdPriority = this.gdPriority;
    }
    
    public getNamePriority(): number {
        return this.namePriority;
    }
    
    public setNamePriority(namePriority: number) {
        this.namePriority = this.namePriority;
    }
    
    public getAgainstPriority(): number {
        return this.againstPriority;
    }
    
    public setAgainstPriority(againstPriority: number) {
        this.againstPriority = this.againstPriority;
    }
    
    public getFairplayPriority(): number {
        return this.fairplayPriority;
    }
    
    public setFairplayPriority(fairplayPriority: number) {
        this.fairplayPriority = this.fairplayPriority;
    }
    
    public getDuration(): number {
        return this.duration;
    }
    
    public setDuration(duration: number) {
        this.duration = this.duration;
    }
    
    public getMaxPlayerPerClub(): number {
        return this.maxPlayerPerClub;
    }
    
    public setMaxPlayerPerClub(maxPlayerPerClub: number) {
        this.maxPlayerPerClub = this.maxPlayerPerClub;
    }
    
    public getNumberPlayPlayer(): number {
        return this.numberPlayPlayer;
    }
    
    public setNumberPlayPlayer(numberPlayPlayer: number) {
        this.numberPlayPlayer = this.numberPlayPlayer;
    }
}