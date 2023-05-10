import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { setCookie } from "../../utils/cookie.util";
export default function LoginComponent() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = { username: username, password: password };
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.token) {
          setError(data.message);
          setLoading(false);
        } else {
          setLoading(false);
          setCookie("username", data.data.username, 1);
          setCookie("id", data.data.id, 1);
          setCookie("token", data.token, 1);
          setError(data.message + " Redirecting in 3 seconds...")
          setTimeout(() => {
            router.push("/admin");
          }, 3000);
        }
      })
      .catch((err) => {
        alert("Error occured, please contact admin for more information.");
        setError(err.message);
        console.error(err);
        setLoading(false);
      });
  };
  return (
    <section className="section">
      <div className="container mt-5">
        <div className={`alert alert-${error.includes("successfully")?'success':'danger'} alert-dismissible fade ${error == '' ? '': 'show'}`} role="alert">
          {error}
        </div>
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="login-brand">
              <Image
                src="dist/img/logo/logos.png"
                alt="logo"
                width={200}
                className="shadow-light"
              />
            </div>
            <div className="card card-primary">
              <div className="card-header">
                <h4>Login Administrator</h4>
              </div>
              <div className="card-body">
                <div
                  className="needs-validation"
                  noValidate
                >
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      name="username"
                      tabIndex={1}
                      required
                      autoFocus
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      Please fill in your username
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-block">
                      <label htmlFor="password" className="control-label">
                        Password
                      </label>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      tabIndex={2}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      please fill in your password
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      tabIndex={4}
                      href="#"
                      onClick={handleSubmit}
                    >
                      {loading ? "Loading..." : "Login"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="simple-footer">Copyright © Power Digital Technology</div>
          </div>
        </div>
      </div>
    </section>
  );
}
