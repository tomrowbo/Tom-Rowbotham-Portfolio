import {NextPage} from "next";
import {Box, Typography} from "@mui/material";
import styles from "../styles/Projects.module.css";

const Projects: NextPage = () => {
    return (
        <Box className={styles.container}>
            <div>
                <Typography variant="h3" align="center">My Projects</Typography>
                <Typography variant="body1" align="center">During my career I have been privileged enough to work both individually and
                    with some fantastic teams, on a range of different projects - all with successful outcomes and new
                    learnings each time. I became passionate about all of these projects, understanding our clients
                    visions
                    and stories. In this showcase, I hope you can see the progression I have made from my most recent
                    projects (top) to my very first projects (bottom).</Typography>
            </div>
        </Box>
    );
};

export default Projects;
