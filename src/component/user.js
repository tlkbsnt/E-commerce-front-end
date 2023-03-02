import { Component } from "react";
import { getAllUsers } from "../client";

class User extends Component {
  state = {
    user: []
  };
  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    getAllUsers().then((res) =>
      res.json().then((user) => {
        //console.log(user);
        this.setState({
          user,
        });
      })
    );
  };
  render() {
    const {user} = this.state;
    if (user && user.length) {
       return user.map((user, index) => {
            return (
                <div key = {index}>
                    <h2>{user.id}</h2>
                    <h2>{user.first_name}</h2>
                    <h2>{user.last_name}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.contact}</h2>
                </div>
            )
        }) 

    }else{
        return <div><h1>Data not found</h1></div>
    }
        
  }
  /*
  render() {
    getAllUsers().then((res) =>
      res.json().then((student) => {
        console.log(student);
      })
    );
    return <h1>Tilak Basnet</h1>;
  }
id
first_name
last_name
email
contact

*/
}

export default User;
