"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./login.css";


export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Username required");
      return;
    }
    localStorage.setItem("auth", "true");
    router.replace("/dashboard");
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* LEFT IMAGE SECTION */}
        <div className="col-md-9 d-none d-md-block shadow-md">
          <div className="login-image">
            <Image
              src="/Just+Logo+BXP.webp"
              alt="Brand Background"
              fill
              priority

              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* RIGHT LOGIN SECTION */}
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <div className="login-card p-4 w-100 mx-3">
            <h5 className="text-center fw-bold mb-2">Welcome Back</h5>
            <p className="text-center text-muted small mb-4">
              Please sign in to continue
            </p>
            {/* Icon */}
            {/* AVATAR */}
            <div className="text-center mb-3">
              <div
                className="rounded-circle overflow-hidden shadow-sm mx-auto"
                style={{
                  width: "72px",
                  height: "72px",
                  border: "3px solid #e9ecef",
                }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="User Avatar"
                  width={72}
                  height={72}
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            <form onSubmit={handleLogin}>
              <input
                className="form-control login-input mb-3"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <button className="btn btn-primary login-btn w-100">Login</button>
            </form>

            <p className="text-center text-muted small mt-4">
              © 2026 Employee Management System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
