import { AccessTime, Place } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Divider, Typography } from "@mui/material";
import { Link } from "react-router";
import { formatDate } from "../../../lib/util/utils";

type Props = {
    activity: Activity;
}

export default function ActivityCard({ activity }: Props) {
    const isHost = false;
    const isGoing = false;
    const label = isHost ? 'You are hosting this activity' : 'You are going to this activity';
    const isCanceled = false;
    const color = isHost ? 'secondary' : isGoing ? 'warning' : 'default';

    return (
        <Card elevation={3}>
            <Box display="flex" alignItems="center" justifyContent="space-between" p={1}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ height: 80, width: 80 }}></Avatar>
                    }
                    title={activity.title}
                    titleTypographyProps={
                        { fontWeight: 'bold', fontSize: 20 }
                    }
                    subheader={
                        <>
                            Hosted by {' '} <Link to={'/profiles/bob'} style={{ fontWeight: 'bold', color: 'inherit' }}>Bob</Link>
                        </>
                    }
                />
                <Box display='flex' flexDirection='column' gap={2} mr={2}>
                    {(isHost || isGoing) &&
                        <Chip label={label} color={color} sx={{ borderRadius: 2 }} />
                    }
                    {isCanceled &&
                        <Chip label="Canceled" color="error" sx={{ borderRadius: 2 }} />
                    }
                </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <CardContent sx={{ padding: 0 }}>
                <Box display="flex" alignItems="center" px={2} mb={2}>
                    <Box display="flex" flexGrow={0} alignItems="center">
                        <AccessTime sx={{ mr: 1 }} />
                        <Typography variant="body2" noWrap>{formatDate(activity.date)}</Typography>
                    </Box>

                    <Place sx={{ ml: 3, mr: 1 }} />
                    <Typography variant="body2">{activity.city}</Typography>
                </Box>
                <Divider />
                <Box display="flex" gap={2} sx={{ backgroundColor: 'grey.200', py: 3, pl: 3 }}>
                    Attendees go here
                </Box>
            </CardContent>
            <CardContent sx={{ pb: 2 }}>
                <Typography variant="body2">
                    {activity.description}
                </Typography>
                <Button size="medium" variant="contained" component={Link} to={`/activities/${activity.id}`} sx={{ display: 'flex', justifySelf: 'self-end', borderRadius: 3 }}>View</Button>
            </CardContent>
        </Card>
    )
}