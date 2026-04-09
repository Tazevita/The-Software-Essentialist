import { useToast } from "@/components/toast/toast";
import { ToastContainer } from "@/components/toast/toastContainer";
import { useUser } from "@/context/userContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { setUser } = useUser();

  const { toasts, showToast, dismiss } = useToast();
  const navigate = useNavigate();

  const createAccount = async () => {
    const params = new URLSearchParams({
      email,
      username,
      firstName,
      lastName,
    });
    const res = await fetch(`http://localhost:3009/users/new?${params}`, {
      method: "POST",
    });
    const data = await res.json();

    if (!res.ok) {
      showToast(
        "error",
        "Request failed",
        data.error ?? "Something went wrong",
        res.status,
      );
    } else {
      setUser({ username });
      showToast("success", "Account created", "Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <>
      <ToastContainer toasts={toasts} dismiss={dismiss} />
      <div className="content-container">
        <div className="registration-form">
          <div>Create Account</div>
          <input
            className="registration email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="registatation-input username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="registatation-input username"
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="registatation-input username"
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <div>
            <div className="to-login">
              <div>Already have an account?</div>
              <a href="/login">Login</a>
            </div>
            <button className="submit-button" onClick={createAccount}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
