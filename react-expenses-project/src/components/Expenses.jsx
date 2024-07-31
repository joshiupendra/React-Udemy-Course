import ExpenseItem from "./ExpenseItem";
import { EXPENSES } from "../store/Expenses";

export default function Expenses() {
  return (
    <div className="expenses">
      {EXPENSES.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
    </div>
  );
} 