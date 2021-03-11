import React from 'react';

class FollowerCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.follower.login}
                {this.props.follower.html_url}
                <img src={this.props.follower.avatar_url} alt="followers image"/>
            </div>
        )
    }
}

export default FollowerCard;