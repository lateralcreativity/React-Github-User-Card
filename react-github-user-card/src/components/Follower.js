import React from 'react'

const Follower = props => {
    const follower = {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        textAlign: 'center'
    }

    return (
        <div style={follower}>
            <div>
                <img src={props.data.avatar_url} alt="Follower Avatar" style={{width: '50%'}}/>
            </div>

            <div>
                <p>{props.data.login}</p>
                <p>{props.data.html_url}</p>
            </div>
        </div>
    )
}

export default Follower