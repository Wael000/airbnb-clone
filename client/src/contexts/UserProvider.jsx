import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get('http://localhost:5000/user', { withCredentials: true });
                setUser(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
    );
};

export default UserProvider;