import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { connectToDatabase } from '@/helpers/Db/connect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleApi = async () => {
    connectToDatabase();
    // const res = await fetch("/api/auth/auth", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body:JSON.stringify({title:""})
    // });
    // const data = await res.json();
    // console.log(data);
  }
  return (
    <>
      <button onClick={handleApi}>Call Api</button>
    </>
  )
}
