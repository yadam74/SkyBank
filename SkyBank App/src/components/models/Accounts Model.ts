export interface IAccountModel {
    id:number;
    balance:number;
    nickname:string;
    fkAccountType:number;
    fkUsersId:number;
}