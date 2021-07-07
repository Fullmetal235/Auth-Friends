import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

 class FriendsList extends React.Component {
    state = {
        friends: {
            id: null,
            name: '',
            age: 0,
            email: ''
        }
      };

   componentDidMount() {
    this.getData();
  }

   getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log("get friends response", res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err.res));
  };

   render() {
      console.log(this.state.friends)
    return (
        <>
            <h1>My Friends List</h1>
            <div>
            {this.state.friends.length > 0 ? this.state.friends.map(n => 
                <p>{n.name}</p>
            ): null}
            </div>
        </>
    );
  }
}

 export default FriendsList;