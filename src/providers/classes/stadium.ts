import { ParamsKey } from "./paramkeys";

export class Stadium {
    
    private stadiumID: number = -1;
    
    private name: string = "";
    
    private address: string = "";
    
    private type: number = -1;
    
    private state: number = -1;
    
    private logo: string = "";
    
    private cover: string = "";
    
    private hotlines: string = "";
    
    private districtID: number = -1;
    
    private lat: number = 0;
    
    private lng: number = 0;
    
    private openTime: number = 0;
    
    private closeTime: number = 0;
    
    private timeCreated: number = 0;
    
    public constructor () {}
    
    
    
    public fromSFSobject(object: any) {
        if ((object == null)) {
            return;
        }
        
        if (object.containsKey(ParamsKey.STADIUM_ID)) {
            this.setStadiumID(object.getInt(ParamsKey.STADIUM_ID));
        }
        
        if (object.containsKey(ParamsKey.NAME)) {
            this.setName(object.getUtfString(ParamsKey.NAME));
        }
        
        if (object.containsKey(ParamsKey.ADDRESS)) {
            this.setAddress(object.getUtfString(ParamsKey.ADDRESS));
        }
        
        if (object.containsKey(ParamsKey.TYPE)) {
            this.setType(object.getInt(ParamsKey.TYPE));
        }
        
        if (object.containsKey(ParamsKey.STATE)) {
            this.setState(object.getInt(ParamsKey.STATE));
        }
        
        if (object.containsKey(ParamsKey.LOGO)) {
            this.setLogo(object.getUtfString(ParamsKey.LOGO));
        }
        
        if (object.containsKey(ParamsKey.COVER)) {
            this.setCover(object.getUtfString(ParamsKey.COVER));
        }
        
        if (object.containsKey(ParamsKey.HOTLINES)) {
            this.setHotlines(object.getUtfString(ParamsKey.HOTLINES));
        }
        
        if (object.containsKey(ParamsKey.DISTRICT_ID)) {
            this.setDistrictID(object.getInt(ParamsKey.DISTRICT_ID));
        }
        
        if (object.containsKey(ParamsKey.LAT)) {
            this.setLat(object.getDouble(ParamsKey.LAT));
        }
        
        if (object.containsKey(ParamsKey.LNG)) {
            this.setLng(object.getDouble(ParamsKey.LNG));
        }
        
        if (object.containsKey(ParamsKey.OPEN_TIME)) {
            this.setOpenTime(object.getInt(ParamsKey.OPEN_TIME));
        }
        
        if (object.containsKey(ParamsKey.CLOSE_TIME)) {
            this.setCloseTime(object.getInt(ParamsKey.CLOSE_TIME));
        }
        
        if (object.containsKey(ParamsKey.TIME_CREATED)) {
            this.setTimeCreated(object.getLong(ParamsKey.TIME_CREATED));
        }
        
    }
    
    public getStadiumID(): number {
        return this.stadiumID;
    }
    
    public setStadiumID(stadiumID: number) {
        this.stadiumID = this.stadiumID;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = this.name;
    }
    
    public getAddress(): string {
        return this.address;
    }
    
    public setAddress(address: string) {
        this.address = this.address;
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
    
    public getHotlines(): string {
        return this.hotlines;
    }
    
    public setHotlines(hotlines: string) {
        this.hotlines = this.hotlines;
    }
    
    public getDistrictID(): number {
        return this.districtID;
    }
    
    public setDistrictID(districtID: number) {
        this.districtID = this.districtID;
    }
    
    public getLat(): number {
        return this.lat;
    }
    
    public setLat(lat: number) {
        this.lat = this.lat;
    }
    
    public getLng(): number {
        return this.lng;
    }
    
    public setLng(lng: number) {
        this.lng = this.lng;
    }
    
    public getOpenTime(): number {
        return this.openTime;
    }
    
    public setOpenTime(openTime: number) {
        this.openTime = this.openTime;
    }
    
    public getCloseTime(): number {
        return this.closeTime;
    }
    
    public setCloseTime(closeTime: number) {
        this.closeTime = this.closeTime;
    }
    
    public getTimeCreated(): number {
        return this.timeCreated;
    }
    
    public setTimeCreated(timeCreated: number) {
        this.timeCreated = this.timeCreated;
    }
}