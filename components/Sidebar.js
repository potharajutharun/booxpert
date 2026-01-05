"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div
      className="bg-dark text-white d-flex flex-column p-3"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      {/* BRAND */}
      <h5 className="mb-4 text-center">Admin Panel</h5>

      {/* NAV LINKS */}
      <ul className="nav nav-pills flex-column gap-2 mb-auto">
        <li className="nav-item">
          <button
            className={`nav-link text-start w-100 ${
              isActive("/dashboard") ? "active" : "text-white"
            }`}
            onClick={() => router.push("/dashboard")}
          >
            Employees
          </button>
        </li>
      </ul>

      {/* LOGOUT */}
      <button
        className="btn btn-outline-danger btn-sm mt-3"
        onClick={() => {
          localStorage.removeItem("auth");
          router.replace("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
