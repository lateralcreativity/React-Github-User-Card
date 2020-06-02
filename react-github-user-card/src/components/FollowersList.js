import React from 'react';
import Follower from './Follower';

const FollowersList = props => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Followers:</h2>
            {props.followerData.map(follower => {
                return (
                    <Follower key={follower.id} data={follower} />
                )
            })}
        </div>
    )
}

export default FollowersList