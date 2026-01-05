"use client";
import { useEffect, useState } from "react";

export default function EmployeeForm({
  employees,
  setEmployees,
  editData,
  setEditData,
}) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: "",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (editData) setForm(editData);
  }, [editData]);

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(e.target.files[0]);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.gender) return alert("Required fields");

    if (editData) {
      setEmployees(employees.map((e) => (e.id === form.id ? form : e)));
      setEditData(null);
    } else {
      setEmployees([...employees, { ...form, id: Date.now() }]);
    }
    setForm({
      name: "",
      gender: "",
      dob: "",
      state: "",
      active: true,
      image: "",
    });
  };

  return (
    <form className="card p-3 mb-3" onSubmit={submit}>
      <h5>{editData ? "Edit Employee" : "Add Employee"}</h5>
      <input
        className="form-control mb-2"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <select
        className="form-select mb-2"
        value={form.gender}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      >
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input
        type="date"
        className="form-control mb-2"
        value={form.dob}
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="State"
        value={form.state}
        onChange={(e) => setForm({ ...form, state: e.target.value })}
      />
      <input type="file" className="form-control mb-2" onChange={handleImage} />
      {form.image && <img src={form.image} width="60" />}
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={form.active}
          onChange={(e) => setForm({ ...form, active: e.target.checked })}
        />
        <label className="form-check-label">Active</label>
      </div>
      <button className="btn btn-success mt-2">Save</button>
    </form>
  );
}
