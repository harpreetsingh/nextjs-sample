import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/components/Layout'
import Posts from "../src/components/home/posts";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Harpreet - Nextjs Sample App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Posts/>
    </Layout>
  )
}