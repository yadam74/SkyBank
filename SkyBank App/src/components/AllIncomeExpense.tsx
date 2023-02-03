import { IExpenseIncomeModel } from "./models/IncomeExpenseModel";

function getAllEI(a:IExpenseIncomeModel[], b:IExpenseIncomeModel[]) {
   
    const income = b.map((b) => {
        let date = new Date(b.date);
    return(
    <tr key={b.id} className='data'>
    <td className='date'>{date.toUTCString()}</td>
    <td className='income'> ${b.totalAmount}</td>
    <td className='entity'>{b.entity}</td>
    <td className="acc">Account Id:{b.fkAccountId}</td>
    </tr>
    )});

    const expenses = a.map((a) => {
        let date = new Date(a.date);
    return(
    <tr key={a.id} className='data'>
    <td className='date'>{date.toUTCString()}</td>
    <td className='expense'> ${a.totalAmount}</td>
    <td className='entity'>{a.entity}</td>
    <td className="acc">Account Id:{a.fkAccountId}</td>
    </tr>
    )});
    return (<tbody>
        {income}
        {expenses}
        </tbody>)
}
export default getAllEI;