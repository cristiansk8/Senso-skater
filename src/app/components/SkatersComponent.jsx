'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { getUserProfiles } from '../services/userFake';

const SkatersComponent = () => {

  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    // Función para obtener los perfiles de usuarios
    const fetchUserProfiles = async () => {
      try {
        const profiles = await getUserProfiles(10);
        setUserProfiles(profiles);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchUserProfiles();
  }, []);

  return (
    <section id="skaters" className="h-screen flex flex-col m-5">
      <h2 className='m-auto mb-5 bt-5'>Skaters</h2>
      {
        userProfiles ?
          <div className='grid gap-4 grid-cols-5 grid-rows-3'>
            {userProfiles.map((profile) => (
              <div key={profile.login.uuid} className=''>                
                <img src={profile.picture.large} alt="Profile" />
                <h2>{`${profile.name.first} ${profile.name.last}`}</h2>
                {/* <p>Dirección: {`${profile.location.street.name}, ${profile.location.street.number}`}</p> */}
              </div>
            ))}
          </div> : <p>Loading</p>
      }

    </section>
  );

}

export default SkatersComponent