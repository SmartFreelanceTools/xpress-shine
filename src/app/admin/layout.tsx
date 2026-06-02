'use client'

import Sidebar from "../../components/admin/Sidebar"
import Topbar from "../../components/admin/Topbar"
import AdminBackground from "../../components/admin/AdminBackground"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminBackground>

      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN AREA */}
        <div className="flex-1 flex flex-col relative z-10">

          {/* TOPBAR */}
          <Topbar />

          {/* PAGE CONTENT */}
          <div className="p-6 md:p-10 flex-1">
            {children}
          </div>

        </div>

      </div>

    </AdminBackground>
  )
}