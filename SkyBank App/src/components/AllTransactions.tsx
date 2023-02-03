import { ITransactionsModel } from "./models/TransactionsModel";



function getAll(a:ITransactionsModel[]) {
   
    const list = a.map((a) => {
        let date = new Date(a.date);
    return(
    <tr key={a.id} className='data'>
    <td className='date'>{date.toUTCString()}</td>
    <td className='amt'> ${a.totalAmount}</td>
    <td className='person'>From:{a.fromAccountId} To:{a.toAccountId}</td>
    <td className='msg'>{a.note}</td>
    </tr>
    )
    }
    
    )
    return (<tbody>{list}</tbody>)
}
export default getAll;