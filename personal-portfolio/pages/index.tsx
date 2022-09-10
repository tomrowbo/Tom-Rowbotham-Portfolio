import type {NextPage} from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import UnderConstructionBody from "../components/construction/UnderConstructionBody";
import Image from "next/image";
import {Box, Typography} from "@mui/material";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
    return (
        <Box className={styles.container}>
            <main className={styles.main}>
                <div className={styles.imageDiv}>
                    <img
                        src="/TomRowbotham.png"
                        alt="Tom Rowbotham smiling and holding a drink"
                        id={styles.portrait}
                    />
                </div>
                <div>
                    <Typography variant="h2" color="#EA4492">Hello, my name is</Typography>
                    <Typography variant="h1" color="white"><b>Tom Rowbotham</b></Typography>
                    <div className={styles.typewriter}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.changeDelay(30)
                                    .typeString("I am a <b>21</b> year old Software Engineer with experience on multiple projects, technology stacks and teams." +
                                        " I have a passion for creating applications and always eager to work with the latest technologies.")
                                    .start();
                            }}
                        />

                    </div>
                </div>
            </main>
        </Box>
    );
};

export default Home;
