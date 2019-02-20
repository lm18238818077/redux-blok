import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Homes</h1>
      </div>
    );
  }
}

export default Home;
