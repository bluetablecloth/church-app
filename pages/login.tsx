import type { NextPage } from 'next'
import { useState } from "react";
import type { FormEvent } from "react"
import { useRouter } from "next/router";
import { appwrite, userState } from "../store/global";
import { useRecoilState } from "recoil";
import { User } from '../store/types';

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  const login = async (e: FormEvent<EventTarget>) => {
      e.preventDefault();
      try {
          setUser(await appwrite.account.createEmailSession(email, password) as unknown as User);
          router.push("/home");
      } catch (error) {
          setAlert(error.message);
      }
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <form onSubmit={login}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input 
                    id="email"
                    type="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input 
                    id="password" 
                    type="password" 
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password" 
                    className="input input-bordered" 
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit" disabled={!email || !password}>Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Login
