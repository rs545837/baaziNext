// pages/[username]/index.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

function UserDashboard() {
  const router = useRouter();
  
  useEffect(() => {
    // Fetch user-specific data here
    const username = router.query.username; // Get the username from the route parameter
    // Customize the dashboard route based on user data
    const customizedDashboardRoute = `/dashboard/${username}`;
    
    // Redirect to the customized dashboard route
    router.push(customizedDashboardRoute);
  }, []);

  return null; // You can return any loading indicator or component here
}

export default UserDashboard;
