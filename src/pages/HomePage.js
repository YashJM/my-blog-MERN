import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

function HomePage() {
    return (
        <Container maxWidth="sm" text>
            <Typography variant="h3" component="h2">
                Welcome to "my blog"
            </Typography>

            <Typography variant="subtitle1">
                I've created this blog to simply learn MERN stack technologies, Front-End of This Simple WebApp is hosted on Netlify and Back-end is hosted on Heroku. 
            </Typography>
            <Box p={2}>
            </Box>
            <Typography variant="h6" component="h6">
                Learning Objectives
            </Typography>
            <List component="nav">
                <ListItem >
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Creating the React app components" />
                </ListItem>
                <ListItem >
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Using React-Router links" />
                </ListItem>
                <ListItem >
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Setting up Node.js Express Server" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="CRUD operations in MongoDb" />
                </ListItem>
                <Button  to="/ArticlesPage" variant="contained" color="primary">
                    <Link className='links' to="/ArticlesPage">Browse the Articles</Link>
                </Button>
            </List>
        </Container>
    )
}

export default HomePage
