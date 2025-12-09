import { CssBaseline, Container, Box } from '@mui/material';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

function App() {

    return (
        <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
            <CssBaseline /> {/* Reset CSS styles */}
            <NavBar />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <Outlet />
            </Container>
        </Box>
    )
}

export default App
