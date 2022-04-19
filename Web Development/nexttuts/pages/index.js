import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import about from "./about";
import userInfo from "./songsName/userInfo";


export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Home</h1>
        <Link href="/about">About</Link>
        <Link href="/songsName/userInfo">Users</Link>
    </div>
  )
}

