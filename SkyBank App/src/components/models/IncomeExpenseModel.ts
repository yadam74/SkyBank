export interface IExpenseIncomeModel {
    id: number;
    date: Date;
    entity: string;
    totalAmount: number;
    fkAccountId: number;
}