export interface ITransactionsModel {
    id:number;
    date: Date;
    fromAccountId: number;
    toAccountId: number;
    totalAmount: number;
    note: string;
}