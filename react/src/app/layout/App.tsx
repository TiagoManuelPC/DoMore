import { CssBaseline, Container, Box } from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/activities')

            .then(res => setActivities(res.data))
            .catch(error => console.error('Error fetching activities:', error));

        return () => { };
    }, []);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.find(x => x.id === id));
    };

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    }

    const handleOpenForm = (id?: string) => {
        if(id) handleSelectActivity(id);
        else handleCancelSelectActivity();
        setEditMode(true);
    }

    const handleCloseForm = () => {
        setEditMode(false);
    }

    const handleSubmitForm = (activity: Activity) => {
        if(activity.id) {
            // setActivities([...activities.filter(a => a.id !== activity.id), activity]);
            setActivities(activities.map(x => x.id === activity.id ? activity : x));
        } else {
            const newActivity = {...activity};
            newActivity.id = crypto.randomUUID();
            setSelectedActivity(newActivity);
            setActivities([...activities, newActivity]);
        }
        setEditMode(false);
    }

    const handleDeleteActivity = (id: string) => {
        setActivities(activities.filter(x => x.id !== id));
        if (selectedActivity?.id === id) setSelectedActivity(undefined);
    }

    return (
        <Box sx={{bgcolor: '#eeeeee'}}>
            <CssBaseline /> {/* Reset CSS styles */}
            <NavBar openForm={handleOpenForm} />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <ActivityDashboard 
                    activities={activities}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    selectedActivity={selectedActivity}
                    editMode={editMode}
                    openForm={handleOpenForm}
                    closeForm={handleCloseForm}
                    submitForm={handleSubmitForm}
                    deleteActivity={handleDeleteActivity}
                />  
            </Container>

        </Box>
    )
}

export default App
