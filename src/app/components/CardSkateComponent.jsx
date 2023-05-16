import React from 'react'

const CardSkateComponent = (profile) => {
    {console.log(profile);}
    return (
        <div>
            <div key={profile.login.uuid}>
                <h2>{`${profile.name.first} ${profile.name.last}`}</h2>
                <p>Dirección: {`${profile.location.street.name}, ${profile.location.street.number}`}</p>
                <img src={profile.picture.large} alt="Profile" />
            </div>
        </div>
    )
}

export default CardSkateComponent