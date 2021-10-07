import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Trains from './components/trains';

class Board extends React.Component {

  state = {
    trains: []
};

  componentDidMount() { 
    this.update() // init
    this.intervalId = setInterval(this.update.bind(this), 10000);
  }

  update() {

    fetch('https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=TKL&sta=TKO')
    .then(res => res.json())
    .then((jsondata) => {
      
      console.log(jsondata);

      var up_schedules = jsondata.data["TKL-TKO"].UP;         
      console.log(up_schedules);
      console.log(Array.isArray(this.state.up_schedules));

      //this.setState({ttnt: up_schedules[0].ttnt, dest: up_schedules[0].dest});

      var res = up_schedules.map(function(item) {
        return Object.values(item);
      });

      this.setState({trains: up_schedules});

      console.log(this.state.trains);

      this.state.trains.map((train) =>  console.log(train));
      

    })
    .catch(console.log)


  }



  render() {

    return (
      //<h1>test</h1>
      <Trains trains={this.state.trains} />
    )
  }

}

  ReactDOM.render(
    <Board />,
    document.getElementById('root')
  );


//export default index
