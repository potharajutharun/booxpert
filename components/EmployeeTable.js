"use client";

import { useState, useMemo } from "react";
import EmployeeFormModal from "./EmployeeFormModal";
import Filters from "./Filters";

export default function EmployeeTable({ employees, setEmployees }) {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  // 🔹 FILTER STATE
  const [filters, setFilters] = useState({
    search: "",
    gender: "",
    status: ""
  });

  const openAdd = () => {
    setEditData(null);
    setShowModal(true);
  };

  const openEdit = (emp) => {
    setEditData(emp);
    setShowModal(true);
  };

  const remove = (id) => {
    if (confirm("Delete employee?")) {
      setEmployees(employees.filter(e => e.id !== id));
    }
  };

  // 🔹 APPLY COMBINED FILTERS
  const filteredEmployees = useMemo(() => {
    return employees.filter(emp =>
      (!filters.search ||
        emp.name.toLowerCase().includes(filters.search.toLowerCase())) &&
      (!filters.gender || emp.gender === filters.gender) &&
      (!filters.status || String(emp.active) === filters.status)
    );
  }, [employees, filters]);

  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <h5>Employees</h5>
        <button className="btn btn-sm btn-primary" onClick={openAdd}>
          + Add Employee
        </button>
      </div>

      {/* 🔹 FILTERS */}
      <Filters filters={filters} setFilters={setFilters} />

      <table className="table table-bordered table-hover bg-white">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>State</th>
            <th>Status</th>
            <th width="160">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center text-muted">
                No employees found
              </td>
            </tr>
          )}

          {filteredEmployees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>

              <td>
                {emp.image && (
                  <img
                    src={emp.image}
                    alt="profile"
                    width="40"
                    height="40"
                    style={{ borderRadius: "50%" }}
                  />
                )}
              </td>

              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.dob}</td>
              <td>{emp.state}</td>
              <td>
                <span className={`badge ${emp.active ? "bg-success" : "bg-danger"}`}>
                  {emp.active ? "Active" : "Inactive"}
                </span>
              </td>

              <td className="d-flex">
                <button
                  className="btn btn-sm btn-outline-primary me-1"
                  onClick={() => openEdit(emp)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-outline-danger me-1"
                  onClick={() => remove(emp.id)}
                >
                  Delete
                </button>

                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => window.print()}
                >
                  Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <EmployeeFormModal
          employees={employees}
          setEmployees={setEmployees}
          editData={editData}
          close={() => setShowModal(false)}
        />
      )}
    </>
  );
}
