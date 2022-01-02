export interface IUsers {
    id: number,
    name:string,
    phone:string,
    avatar:string,
    username:string,
    website:string,
    address:IUserAddress
    company:IUserCompany
}

export interface IUserAddress {
    city: string,
    street:string,
    suite:string,
    zipcode:string
    geo:{
        lat:string,
        lng:string
    }
}

export interface IUserCompany {
    bs:string,
    catchPhrase:string,
    name:string
}
