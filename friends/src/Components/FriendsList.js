import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendList extends React.Component {
  state = {
   friendList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/data')
      .then(res => {
        this.setState({
         FriendList: res.data.data.filter(
            price =>
              price.type === 'Gasoline - Regular' &&
              (price.location === 'US' || price.location === 'State of Hawaii')
          )
        });
      })
      .catch(err => console.log(err.response));
  };

  formatData = () => {
    const formattedData = [];
    console.log(this.state.gasPrices);
    this.state.gasPrices.forEach((price, index, arr) => {
      if (price.location === 'US') {
        formattedData.push({
          date: moment(price.date).format('MMM'),
          USPrice: price.price,
          HawaiiPrice: arr[index + 1].price
        });
      }
    });
    return formattedData;
  };

  render() {
    constFriendList = this.formatData();
    console.log(gasPrices);