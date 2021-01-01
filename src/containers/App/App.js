import React, { Component } from 'react';

import { MoonLoader } from 'react-spinners';

import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SneakerDetails from '../../components/SneakerDetails/SneakerDetails';
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';

class App extends Component {

  state = {
    dataStatus: null,
    sneakerDetails: [],
    loading: false,
    error: false
  }

  componentDidMount() {
    this.setSneakers();
  }

  // Fetch sneaker information and update state
  setSneakers = () => {
    const targetUrl = 'https://api.thesneakerdatabase.com/v1/sneakers?limit=10';
    this.setState({
      loading: true,
      error: false
    }, () => {
      let status;
      // Executed as callback function
      fetch(targetUrl)
        .then(res => {
          status = res.status;
          return res.json();
        })
        .then(data => {
          // If data can be retrieved update sneakerdetails
          if(status === 200) {
            this.setState({
              sneakerDetails: data.results,
              loading: false
            });
          } else {
            console.log(this.state)
            // If data doesn't exist, throw error
            throw data.status
          }
        })
        .catch(err => {
          console.log("error: ", err)
          this.setState({
            loading: false,
            error: true
          });
        });
    });
  }

  render() {
    // Conditionally render card content
    let cardContent = <Preview />;
    if (this.state.loading) {
      cardContent = <MoonLoader />;
    } else if (this.state.error) {
      cardContent = <ErrorNotice/>;
    } else if (this.state.sneakerDetails.length > 0) {
      cardContent = <div>
          {this.state.sneakerDetails.map(sneakerInfo => {
          return <SneakerDetails key={sneakerInfo.id} info={sneakerInfo} />
          })}
      </div>
    }

   return (
      <div className={classes.AppWrapper}>
        <Header
          color={assetMapping.colors[
            // Set header color based on weather condition; if error, set color to red
            (this.state.error) ? "error" : null
          ]} />
        <main className={classes.AppMain}>
          {cardContent}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
