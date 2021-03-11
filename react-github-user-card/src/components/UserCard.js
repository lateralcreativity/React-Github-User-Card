import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
       super(props); 
    }

    render() {
        return (
            <div>
                {this.props.user.login}
                {this.props.user.location}
                {this.props.user.bio}
            </div>
        )
    }
}

export default UserCard;