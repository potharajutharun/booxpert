"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import SummaryCards from "../../components/SummaryCards";
import EmployeeTable from "../../components/EmployeeTable";
// import { mockEmployees } from "../../mockdata/mockEmployees";

export default function Dashboard() {
  const router = useRouter();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("auth") !== "true") {
      router.replace("/login");
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmployees(
      JSON.parse(localStorage.getItem("employees")) || mockEmployees
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="d-flex">
      <Sidebar active="employees" />

      <div className="flex-grow-1 p-4 bg-light">
        <h4 className="mb-3">Dashboard</h4>

        <SummaryCards employees={employees} />

        <EmployeeTable employees={employees} setEmployees={setEmployees} />
      </div>
    </div>
  );
}
