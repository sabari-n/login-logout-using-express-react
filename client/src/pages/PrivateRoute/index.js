import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export { PrivateRoute };

function PrivateRoute({ children }) {
    const { user: authUser } = useSelector(state => state);
    console.log('userData',authUser)
    if (!authUser) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" />
    }

    // authorized so return child components
    return children;
}