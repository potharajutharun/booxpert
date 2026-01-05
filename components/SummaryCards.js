export default function SummaryCards({ employees }) {
  const active = employees.filter(e => e.active).length;

  return (
    <div className="row mb-4">
      <div className="col">
        <div className="card p-3">Total: {employees.length}</div>
      </div>
      <div className="col">
        <div className="card p-3 text-success">Active: {active}</div>
      </div>
      <div className="col">
        <div className="card p-3 text-danger">Inactive: {employees.length - active}</div>
      </div>
    </div>
  );
}
