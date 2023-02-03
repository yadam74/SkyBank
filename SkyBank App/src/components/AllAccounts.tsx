import { IAccountModel } from './models/Accounts Model';
import { ITransactionsModel } from './models/TransactionsModel';

function MakeAll(a: IAccountModel[]) {
  const list = a.map((a) => (
    <div className='all' key={a.id}>
      <div className='name'>
        {a.nickname} acct:{a.id.toString()}
      </div>
      <div className='balance'>Available Balance: ${a.balance}</div>
    </div>
  ));
  return <div className='accounts'>{list}</div>;
}

export default MakeAll;
