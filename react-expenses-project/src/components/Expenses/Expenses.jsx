import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { EXPENSES } from "../../store/Expenses";
import './Expenses.css';

export default function Expenses() {
  return (
    <Card className="expenses">
      {EXPENSES.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
    </Card>
  );
} 