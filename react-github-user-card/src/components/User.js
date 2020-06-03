import React from 'react'

const User = props => {
    const user = {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        textAlign: 'center'
    }

    return (
        <div className="user" style={user}>
            <div>
                <img src={props.data.avatar_url} alt='User Avatar' />
            </div>

            <div>
                <h2>{props.data.name}</h2>
                <h3>{props.data.login}</h3>
                <p>Location: {props.data.location}</p>
                <p>Profile: <br/></p>
                <a href={props.data.html_url}>{props.data.html_url}</a>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
                <p>Bio: {props.data.bio}</p>
            </div>
        </div>
    )
}

export default User