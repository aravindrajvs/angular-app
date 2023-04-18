export class User{
    id:number;
    name:string;
    email:string;
    phoneNumber:number;
}

export class UserCreate{
    name:string;
    email:string;
    phoneNumber:number;
    password:string;
    confirmPassword:string;
}