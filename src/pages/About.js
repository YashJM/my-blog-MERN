import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function About() {
    return (
        <Container maxWidth="sm" text>
            <Typography variant="h3" component="h2">
                About me
            </Typography>

            <Typography variant="subtitle1">
                I am a Web Developer, Programmer, Designer and a Gamer!
            </Typography>
            <Box p={2}></Box>
            <Typography variant="h4" component="h2">
                Find out more about me
            </Typography>

            <List component="nav">
                <ListItem button component="a" href="https://yashmistry.me/" target="blak" target="_blank">
                    <ListItemIcon>
                        <DesktopWindowsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Personal Website" />
                </ListItem>
                <ListItem button component="a" href="https://github.com/YashJM" target="_blank">
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                </ListItem>
                <ListItem button component="a" href="https://www.linkedin.com/in/yashjmistry/" target="_blank">
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                </ListItem>
            </List>



        </Container>
    )
}

export default About
