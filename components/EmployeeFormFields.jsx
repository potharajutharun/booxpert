"use client";

import { STATES } from "./constants";

export default function EmployeeFormFields({ form, errors, setForm }) {
  return (
    <div className="row g-3">
      {/* Name */}
      <div className="col-md-6">
        <input
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <div className="invalid-feedback">{errors.name}</div>
      </div>

      {/* Gender */}
      <div className="col-md-6">
        <select
          className={`form-select ${errors.gender ? "is-invalid" : ""}`}
          value={form.gender}
          onChange={(e) =>
            setForm({ ...form, gender: e.target.value })
          }
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <div className="invalid-feedback">{errors.gender}</div>
      </div>

      {/* DOB */}
      <div className="col-md-6">
        <input
          type="date"
          className={`form-control ${errors.dob ? "is-invalid" : ""}`}
          value={form.dob}
          onChange={(e) =>
            setForm({ ...form, dob: e.target.value })
          }
        />
        <div className="invalid-feedback">{errors.dob}</div>
      </div>

      {/* State */}
      <div className="col-md-6">
        <select
          className={`form-select ${errors.state ? "is-invalid" : ""}`}
          value={form.state}
          onChange={(e) =>
            setForm({ ...form, state: e.target.value })
          }
        >
          <option value="">Select State</option>
          {STATES.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
        <div className="invalid-feedback">{errors.state}</div>
      </div>

      {/* Active */}
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={form.active}
            onChange={(e) =>
              setForm({ ...form, active: e.target.checked })
            }
          />
          <label className="form-check-label">Active</label>
        </div>
      </div>
    </div>
  );
}
