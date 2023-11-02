// import { knockout as ko } from "knockout";
import React, { Component } from "react";

class StaffViewModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("../src/staffDummy.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
        });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Staff Details</h1>
        <table>
          <tr>
            <th>StaffID</th>
            <th>Name</th>
          </tr>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.staffID}</td>
              <td>{item.name}</td>
              <a href={`/profile/${item.id}`}>View Profile</a>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default StaffViewModel;
