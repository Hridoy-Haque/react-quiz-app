import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Buttton";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to Login");
    }
  }
  return (
    <>
      <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          required
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          required
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </>
  );
}
