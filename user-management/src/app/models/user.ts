
type roleType = 'user' | 'admin'

export interface IUser extends IAuthUser{
    id?:string,
    fullName:string,
    age:number,
    role:roleType,   
}

export interface IAuthUser{
    email:string,
    password:string
}