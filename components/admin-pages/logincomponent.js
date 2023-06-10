import { useRouter } from "next/router";
import Image from "next/image";
import React, {useState} from 'react';
import {setCookie} from '../../libs/cookie.lib';
import Swl from 'sweetalert2';
export default function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter();

  const handleLogin = (e) =>{
    e.preventDefault();
    setLoading(true);
    fetch('api/auth/login', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.message === "Login success" && data.user.token){
        Swl.fire("Login Success!", "Login Success Redirected in 3 second!", "success");
        setCookie("token", data.user.token, 1);
        router.push("/admin");
      } else {
        setError(data.message);
      }
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      Swl.fire("Login Failed!", "Login Failed Redirected in 3 secon!" + err, "error");
      setLoading(false)
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
              {/* <Image
                src="dist/img/logo/logos.png"
                alt="logo"
                width={200}
                className="shadow-light"
              /> */}
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
                      onClick={handleLogin}
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
