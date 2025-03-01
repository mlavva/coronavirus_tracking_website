import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(country);
    this.setState({data: fetchedData, country: country});
  }

  render() {
    const {data, country} = this.state;
    return (
    <div className={styles.container}>
      <Cards data ={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      {console.log(country)}
      <Chart data={data} country={country}/>
    </div>
    )
  }
}

export default App;
