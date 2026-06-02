import {
  LayoutDashboard,
  CalendarCheck2,
  BarChart3,
  ShoppingBag,
  Image,
  Settings,
} from "lucide-react"

export const navConfig = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
    group: "main",
  },
  {
    label: "Bookings",
    icon: CalendarCheck2,
    path: "/admin/bookings",
    group: "main",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/admin/analytics",
    group: "main",
  },

  {
    label: "Product Uploads",
    icon: ShoppingBag,
    path: "/admin/products",
    group: "uploads",
  },
  {
    label: "Gallery Uploads",
    icon: Image,
    path: "/admin/gallery",
    group: "uploads",
  },

  {
    label: "Settings",
    icon: Settings,
    path: "/admin/settings",
    group: "system",
  },
]