import React from 'react';
import axios from 'axios';

export default class SpaceXList extends React.Component{

  state = {
    SpaceX:[],
    displayCall : false,
  };


  componentDidMount() {
    axios.get("https://api.spacexdata.com/v3/launches")
    .then(res => {
      this.setState({ SpaceX : res.data});
    })
  }

  render() {
    return (
      <ul>
      <br/>
      <table align="center" class="table">
      <th> Date </th>
      <th> Flight Number </th>
      <th> Launch Year </th>

        {this.state.SpaceX.map(SpaceX => <tr>

                                         <td> { SpaceX.launch_date_utc } </td>
                                         <td> { SpaceX.flight_number } </td>
                                         <td> { SpaceX.launch_year} </td> </tr> )}
      </table>
      </ul>
    )

  }

}
