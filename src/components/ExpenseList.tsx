export interface Expense {
  id: number;
  name: string;
  amount: number;
  dueDate: number;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({ expenses, onDelete }: Props) {
  if (expenses.length === 0) return null;

  return (
    <div className="rounded overflow-hidden">
      <table className="cell w-full">
        <thead className="bg-customMediumPurple text-center">
          <tr>
            <th className="cell">Name</th>
            <th className="cell">Amount</th>
            <th className="cell">Due Date</th>
            <th className="cell"></th>
          </tr>
        </thead>
        <tbody className="">
          {expenses.map((exp) => (
            <tr key={exp.id} className="odd:bg-customLightPurple">
              <td className="cell">{exp.name}</td>
              <td className="cell">${exp.amount}</td>
              <td className="cell">{exp.dueDate}</td>
              <td className="cell">
                <button
                  onClick={() => onDelete(exp.id)}
                  className="deleteButton"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="cell font-semibold text-customPurple">Total</td>
            <td className="cell font-semibold text-customPurple">
              ${expenses.reduce((acc, exp) => acc + exp.amount, 0)}
            </td>
            <td className="cell"></td>
            <td className="cell"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpenseList;
