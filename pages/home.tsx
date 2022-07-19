import type { NextPage } from 'next'
import { useRecoilState } from 'recoil';
import { appwrite, userState } from "../store/global";
import { User } from "../store/types";
import { useEffect } from "react";
import { useRouter } from "next/router";



const Home: NextPage = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
        if (user) return;
        const fetchData = async () => {
            const response = await appwrite.account.get();
            setUser(response as User);
        }
        fetchData()
    }, [])
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">church-app</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen styles.main" style={{backgroundImage: `url('https://placeimg.com/1000/800/arch')`,}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
  </>
  )
}

export default Home
