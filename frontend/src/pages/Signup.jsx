import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-white">

      <div className="bg-zinc-900 p-8 rounded-lg w-96">

        <h1 className="text-3xl font-bold mb-6">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleSignup}
          className="w-full bg-red-600 py-3 rounded"
        >
          Signup
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Signup;