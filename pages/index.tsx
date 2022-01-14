import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { useEffect } from 'react';
import github from "../public/static/img/github.png"
import linkedin from "../public/static/img/linkedin.png"
import react from "../public/static/img/react.png"
import shiftlog from "../public/static/img/shiftlog.png"
import SocialLink from '../components/SocialLink';
import TechnologyLink from '../components/TechnologyLink';
export default function Home({ isConnected }) {
	return (
    <div className="container" style={{display:"Flex",alignItems:"center",justifyContent:"center", height:"100%"}}>
      <SocialLink image={github} title='GitHub' url='https://github.com/Konseyy'/>
      <SocialLink image={linkedin} title='LinkedIn' url='https://www.linkedin.com/in/valdis-g-bukalders-a0b9a2168/'/>
      <TechnologyLink image={react} title='React.js' url='https://reactjs.org/'/>
      <TechnologyLink image={react} title='React Native' url='https://reactnative.dev/'/>
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
