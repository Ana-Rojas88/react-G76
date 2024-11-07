import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token_jwt = localStorage.getItem("token");
    if (token_jwt) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token_jwt}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, []);
  return (
    <div>
      {user ? (
        <div>
              <p>Email: {user.email}</p>
              <button>Cerrar sesión</button>
        </div>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
};
export default Profile;
