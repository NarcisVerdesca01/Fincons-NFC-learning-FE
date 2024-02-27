interface UserDetailModels {
    firstName?: string,
    lastName?: string,
    email?:string,
    password?: string;
    id?: number;
    role?: Roles;
    ability?: Ability[];
}

interface Roles{
    id?: number;
    name? : string;
}

interface Ability{
    id?: number;
    name?: string;
}

export default UserDetailModels;