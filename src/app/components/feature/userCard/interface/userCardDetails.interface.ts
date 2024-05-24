export interface IUserDetails {
    name?:string | null |undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}

export interface IUserCard{
    user: IUserDetails | undefined;
    pageType:string;
}