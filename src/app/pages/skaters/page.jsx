'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { getUserProfiles } from '../../services/userFake';

const page = () => {

  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    // Función para obtener los perfiles de usuarios
    const fetchUserProfiles = async () => {
      try {
        const profiles = await getUserProfiles(5);
        setUserProfiles(profiles);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchUserProfiles();
  }, []);

  return (
    <div>
      {userProfiles.map((profile) => (
        <div key={profile.login.uuid}>
          <h2>{`${profile.name.first} ${profile.name.last}`}</h2>
          <p>Dirección: {`${profile.location.street.name}, ${profile.location.street.number}`}</p>
          <img src={profile.picture.large} alt="Profile" />
        </div>
      ))}
    </div>
  );

}

export default page