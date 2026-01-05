export default function Filters({ setFilters }) {
  return (
    <div className="row mb-3">
      <div className="col">
        <input className="form-control" placeholder="Search name"
          onChange={e => setFilters(f => ({...f,search:e.target.value}))} />
      </div>
      <div className="col">
        <select className="form-select"
          onChange={e => setFilters(f => ({...f,gender:e.target.value}))}>
          <option value="">All Genders</option><option>Male</option><option>Female</option>
        </select>
      </div>
      <div className="col">
        <select className="form-select"
          onChange={e => setFilters(f => ({...f,status:e.target.value}))}>
          <option value="">All Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>
    </div>
  );
}
