import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
type Props = {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}
export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity}: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
               <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                />
            </Grid>
            <Grid size={5}>
                {selectedActivity && <ActivityDetail
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                />}
            </Grid>
        </Grid>
    )
}