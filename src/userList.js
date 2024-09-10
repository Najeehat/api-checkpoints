import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUsers(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <>Loading...</>;
    }
        
    if (error) {
        return(
        <>
        Erreur: {error.message}
        </>); 
    }
    

return (
    <>
        Liste des Utilisateurs
        {listOfUsers.map(user => (
            <div key={user.id}>
                {user.name} - {user.email}
            </div>
        ))}
    </>
);
};

export default UserList;


