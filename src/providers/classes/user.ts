import { ParamsKey } from "./paramkeys";

export class User {
    
    private userID: number = -1;
    
    private username: string = "";
    
    private name: string = "";
    
    private birthday: string = "";
    
    private avatar: string = "";
    
    private phone: string = "";
    
    private state: number = -1;
    
    private cover: string = "";
    
    private money: number = 0;
    
    private point: number = 0;
    
    private description: string = "";
    
    private slogan: string = "";
    
   constructor(){}

   
    
    public fromSFSObject(object: any) {
        if ((object == null)) {
            return;
        }
        
        if (object.containsKey(ParamsKey.USER_ID)) {
            this.setUserID(object.getInt(ParamsKey.USER_ID));
        }
        
        if (object.containsKey(ParamsKey.USERNAME)) {
            this.setUsername(object.getUtfString(ParamsKey.USERNAME));
        }
        
        if (object.containsKey(ParamsKey.NAME)) {
            this.setName(object.getUtfString(ParamsKey.NAME));
        }
        
        if (object.containsKey(ParamsKey.BIRTHDAY)) {
            this.setBirthday(object.getUtfString(ParamsKey.BIRTHDAY));
        }
        
        if (object.containsKey(ParamsKey.AVATAR)) {
            this.setAvatar(object.getUtfString(ParamsKey.AVATAR));
        }
        
        if (object.containsKey(ParamsKey.PHONE)) {
            this.setPhone(object.getUtfString(ParamsKey.PHONE));
        }
        
        if (object.containsKey(ParamsKey.STATE)) {
            this.setState(object.getInt(ParamsKey.STATE));
        }
        
        if (object.containsKey(ParamsKey.COVER)) {
            this.setCover(object.getUtfString(ParamsKey.COVER));
        }
        
        if (object.containsKey(ParamsKey.MONEY)) {
            this.setMoney(object.getInt(ParamsKey.MONEY));
        }
        
        if (object.containsKey(ParamsKey.POINT)) {
            this.setPoint(object.getInt(ParamsKey.POINT));
        }
        
        if (object.containsKey(ParamsKey.DESCRIPTION)) {
            this.setDescription(object.getUtfString(ParamsKey.DESCRIPTION));
        }
        
        if (object.containsKey(ParamsKey.SLOGAN)) {
            this.setSlogan(object.getUtfString(ParamsKey.SLOGAN));
        }
        
    }
    
    public getUserID(): number {
        return this.userID;
    }
    
    public setUserID(userID: number) {
        this.userID = this.userID;
    }
    
    public getUsername(): string {
        return this.username;
    }
    
    public setUsername(username: string) {
        this.username = this.username;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = this.name;
    }
    
    public getBirthday(): string {
        return this.birthday;
    }
    
    public setBirthday(birthday: string) {
        this.birthday = this.birthday;
    }
    
    public getAvatar(): string {
        return this.avatar;
    }
    
    public setAvatar(avatar: string) {
        this.avatar = this.avatar;
    }
    
    public getPhone(): string {
        return this.phone;
    }
    
    public setPhone(phone: string) {
        this.phone = this.phone;
    }
    
    public getState(): number {
        return this.state;
    }
    
    public setState(state: number) {
        this.state = this.state;
    }
    
    public getCover(): string {
        return this.cover;
    }
    
    public setCover(cover: string) {
        this.cover = this.cover;
    }
    
    public getMoney(): number {
        return this.money;
    }
    
    public setMoney(money: number) {
        this.money = this.money;
    }
    
    public getPoint(): number {
        return this.point;
    }
    
    public setPoint(point: number) {
        this.point = this.point;
    }
    
    public getDescription(): string {
        return this.description;
    }
    
    public setDescription(description: string) {
        this.description = this.description;
    }
    
    public getSlogan(): string {
        return this.slogan;
    }
    
    public setSlogan(slogan: string) {
        this.slogan = this.slogan;
    }
}