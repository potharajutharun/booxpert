"use client";

import { useEffect, useState } from "react";
import EmployeeFormFields from "./EmployeeFormFields";
import ImageUpload from "./ImageUpload";

export default function EmployeeFormModal({
  employees,
  setEmployees,
  editData,
  close,
}) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (editData) setForm(editData);
  }, [editData]);

  // ✅ Validation Logic
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.dob) newErrors.dob = "Date of birth is required";
    if (!form.state) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () =>
      setForm((prev) => ({ ...prev, image: reader.result }));
    reader.readAsDataURL(file);
  };

  const save = () => {
    if (!validate()) return;

    if (editData) {
      setEmployees(
        employees.map((e) => (e.id === form.id ? form : e))
      );
    } else {
      setEmployees([...employees, { ...form, id: Date.now() }]);
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

          <EmployeeFormFields
            form={form}
            setForm={setForm}
            errors={errors}
          />

          <div className="row mt-3">
            <div className="col-md-6">
              <ImageUpload
                image={form.image}
                onChange={handleImage}
              />
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
