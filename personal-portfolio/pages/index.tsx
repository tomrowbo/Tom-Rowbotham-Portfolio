import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UnderConstructionBody from "../components/construction/UnderConstructionBody";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tom Rowbotham Portfolio</title>
                <meta name="description" content="Tom Rowbotham, Software Engineer"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <UnderConstructionBody/>
        </div>
    )
}

export default Home
