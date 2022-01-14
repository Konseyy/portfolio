import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { useEffect } from 'react';
import github from "../public/static/img/github.png"
import react from "../public/static/img/react.png"
import shiftlog from "../public/static/img/shiftlog.png"
import SocialLink from '../components/SocialLink';
export default function Home({ isConnected }) {
	return (
    <div className="container" style={{display:"Flex",alignItems:"center",justifyContent:"center", height:"100%"}}>
      <SocialLink image={github} title='GitHub' backgroundColor='black' foregroundColor='white' url='https://github.com/Konseyy'/>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
