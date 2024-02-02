'use client'
import { useState } from "react";


export default function ComplexDashboardLayout({ children, users, revenue, notifications, login, }: {
  children: React.ReactNode, users: React.ReactNode, revenue: React.ReactNode, notifications: React.ReactNode, login: React.ReactNode,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <>
    <button onClick={() => { setIsLoggedIn(!isLoggedIn); }}>toggle is isLoggedIn</button>
    {isLoggedIn ? (
      <div>
        <h1>{children}</h1>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    ) : (login)}
  </>
}
