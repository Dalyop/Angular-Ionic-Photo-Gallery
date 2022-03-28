export class PhotoService {
    public photos: UserPhoto[] = [];
    //Other code goes here
}

export interface UserPhoto {
    filepath: string;
    webviewpath: string;
}
