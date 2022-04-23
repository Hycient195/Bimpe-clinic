import './TransactionList.css';
import TransactionItem from '../../../components/TransactionItem/TransactionItem';

export default function TransactionList(){
  return(
    <div className="transaction-list">

      {/*============*/}
      {/* Table Head */}
      {/*============*/}
      <div className="sort-section">
        <button>Most recent invoices</button>
        <button>Last Client</button>
        <a href="">All List</a>
      </div>

      <ul className="transactions-title">
      <li className="transaction">
            <p className="name shed-margin-padding">Client Name</p>
          <p className="issue-date">Issue Date</p>
          <p className="due-date">Due Date</p>
          <p className="amount">Amount</p>
          <p className="status">Status</p>
        </li>
        <hr className='divider'/>
      </ul>



      {/*===============*/}
      {/* Table Details */}
      {/*===============*/}
      <ul className="transactions">

        <TransactionItem
          name="Nadia Consulting PLC."
          invoiceNo="Invoice No RCG - 332"
          issueDate="1 hr ago"
          dueDate="Wed, 11th Feb, 2022"
          amount="2, 280.00"
          status="Sent"
        />

        <TransactionItem
          name="Nadia Consulting PLC."
          invoiceNo="Invoice No RCG - 332"
          issueDate="1 hr ago"
          dueDate="Wed, 11th Feb, 2022"
          amount="2, 280.00"
          status="Sent"
        />

        <TransactionItem
          name="Nadia Consulting PLC."
          invoiceNo="Invoice No RCG - 332"
          issueDate="1 hr ago"
          dueDate="Wed, 11th Feb, 2022"
          amount="2, 280.00"
          status="Sent"
        />

        <TransactionItem
          name="Nadia Consulting PLC."
          invoiceNo="Invoice No RCG - 332"
          issueDate="1 hr ago"
          dueDate="Wed, 11th Feb, 2022"
          amount="2, 280.00"
          status="Sent"
        />

        <TransactionItem
          name="Nadia Consulting PLC."
          invoiceNo="Invoice No RCG - 332"
          issueDate="1 hr ago"
          dueDate="Wed, 11th Feb, 2022"
          amount="2, 280.00"
          status="Sent"
        />

        <TransactionItem
          name="Nadia Consulting PLC."
          invoiceNo="Invoice No RCG - 332"
          issueDate="1 hr ago"
          dueDate="Wed, 11th Feb, 2022"
          amount="2, 280.00"
          status="Sent"
        />

        <TransactionItem
          name="Nadia Consulting PLC."
          invoiceNo="Invoice No RCG - 332"
          issueDate="1 hr ago"
          dueDate="Wed, 11th Feb, 2022"
          amount="2, 280.00"
          status="Sent"
        />
      </ul>
    </div>
  )
}