import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const Counter = observer(function Counter() {
    const { counterStore } = useStore();
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 5 }}>
            <Box sx={{ width: '60%' }}>
                <h2>{counterStore.title}</h2>
                <h3>Count: {counterStore.count}</h3>
                <ButtonGroup sx={{ mt: 3 }}>
                    <Button variant="contained" color="error" onClick={() => counterStore.decrement()}>
                        Decrement
                    </Button>
                    <Button variant="contained" color="success" onClick={() => counterStore.increment()}>
                        Increment
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => counterStore.increment(5)}>
                        Increment by 5
                    </Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ width: '40%' }}>
                <Typography variant="h6">Event Log (Total Events: {counterStore.eventCount})</Typography>
                <Box sx={{ maxHeight: 300, overflowY: 'auto', mt: 2, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
                    {counterStore.events.map((event, index) => (
                        <Typography key={index} variant="body2">{event}</Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    )
});

export default Counter;