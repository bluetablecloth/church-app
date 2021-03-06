import type { NextPage } from 'next'
import { useRecoilState } from 'recoil';
import { appwrite, userState } from "../store/global";
import { User } from "../store/types";
import { useEffect } from "react";
import { useRouter } from "next/router";



const Landing: NextPage = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
      appwrite.account.get().then((response: User) => {
        setUser(response);
        router.replace("/home");
      }, () => {
        console.log('no session found')
      })
  }, []);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">church-app</a>
        </div>
        <div className="flex-none">
          <a href="/login" className="btn btn-blue normal-case text-xl">login</a>
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

export default Landing
