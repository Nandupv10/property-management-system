import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Login from "./pages/login"
import Home from "./pages/home"
import Maintenance from "./pages/Maintenance"
import OwnerDashboard from "./pages/OwnerDashboard"
import TenantDashboard from "./pages/TenantDashboard"
import Amenities from "./pages/Amenities"
import Bookings from "./pages/Bookings"

function Layout() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== "/" && (
        <Navbar />
      )}

      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/maintenance"
          element={<Maintenance />}
        />

        <Route
          path="/owner"
          element={<OwnerDashboard />}
        />

        <Route
          path="/tenant"
          element={<TenantDashboard />}
        />

        <Route
          path="/amenities"
          element={<Amenities />}
        />

        <Route
          path="/bookings"
          element={<Bookings />}
        />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App