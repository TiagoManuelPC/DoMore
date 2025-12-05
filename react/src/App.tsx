import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from 'axios';

const title = 'Do More';
function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/activities')
        
            .then(res => setActivities(res.data))
            .catch(error => console.error('Error fetching activities:', error));

        return () => { };
    }, []);

    return (
        <>
            <Typography variant='h3'>{title} </Typography>
            <List>
                {activities.map((activity) => (
                    <ListItem key={activity.id}>
                        <ListItemText primary={activity.title} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default App
