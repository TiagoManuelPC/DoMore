import { CssBaseline, Container, Box } from '@mui/material';
import NavBar from './NavBar';
import { Outlet, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';

function App() {

    const location = useLocation();
    return (
        <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
            <CssBaseline /> {/* Reset CSS styles */}
            {location.pathname === '/' ? <HomePage /> : (
                <>
                    <NavBar />
                    <Container maxWidth="xl" sx={{ mt: 3 }}>
                        <Outlet />
                    </Container>
                </>
            )}

        </Box>
    )
}

export default App
