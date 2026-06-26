import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Login.css"

function Login() {
  const [userid, setUserid] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleRegister() {
    const newUser = {
      userid,
      password,
    }

    await fetch(
      "http://localhost:5000/register",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(newUser),
      }
    )

    alert("User Registered")
  }

  async function handleLogin() {
    const response = await fetch(
      "http://localhost:5000/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          userid,
          password,
        }),
      }
    )

    const data = await response.json()

    if (data.success) {
      localStorage.setItem(
        "loggedIn",
        "true"
      )

      navigate("/home")
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>🏢 PropertyHub</h1>

        <p>
          Property Rental &
          Management System
        </p>

        <input
          type="text"
          placeholder="User ID"
          value={userid}
          onChange={(e) =>
            setUserid(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <div className="login-buttons">

          <button
            onClick={handleRegister}
          >
            Register
          </button>

          <button
            onClick={handleLogin}
          >
            Login
          </button>

        </div>

      </div>
    </div>
  )
}

export default Login