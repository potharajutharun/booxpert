"use client";

import { useEffect, useState } from "react";

export default function EmployeeFormModal({ employees, setEmployees, editData, close }) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: ""
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (editData) setForm(editData);
  }, [editData]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const save = () => {
    if (!form.name || !form.gender || !form.dob || !form.state) {
      alert("All fields are required");
      return;
    }

    if (editData) {
      setEmployees(
        employees.map(e => e.id === form.id ? form : e)
      );
    } else {
      setEmployees([
        ...employees,
        { ...form, id: Date.now() }
      ]);
    }
    close();
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
          <h5 className="mb-3">
            {editData ? "Edit Employee" : "Add Employee"}
          </h5>

          <div className="row g-3">
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Full Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <select
                className="form-select"
                value={form.gender}
                onChange={e => setForm({ ...form, gender: e.target.value })}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-md-6">
              <input
                type="date"
                className="form-control"
                value={form.dob}
                onChange={e => setForm({ ...form, dob: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="State"
                value={form.state}
                onChange={e => setForm({ ...form, state: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <input
                type="file"
                className="form-control"
                onChange={handleImage}
              />
            </div>

            <div className="col-md-6 d-flex align-items-center">
              {form.image && (
                <img
                  src={form.image}
                  alt="preview"
                  width="60"
                  height="60"
                  style={{ borderRadius: "50%" }}
                />
              )}
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={form.active}
                  onChange={e => setForm({ ...form, active: e.target.checked })}
                />
                <label className="form-check-label">Active</label>
              </div>
            </div>
          </div>

          <div className="text-end mt-4">
            <button className="btn btn-secondary me-2" onClick={close}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={save}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
