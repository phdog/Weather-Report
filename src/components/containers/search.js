import './search.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchCity } from '../../actions';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { input: ''};
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchCity(this.state.input);
    this.setState({ input: '' })
  }

  render() {
    const { loading } = this.props;
    const placeholder = loading ? 'Загружаю...' : 'Введите название города';
    return (
      <form
        onSubmit={this.handleSubmit}
        >
        <input
          type='text'
          placeholder={placeholder}
          onChange={this.handleChange}
          value={this.state.input}
          disabled={loading}
        />
      </form>
    );
  }

}

const mapStateToProps = (state) => ({
  loading: state.ui.loading
})

const mapDispatchToProps = (dispatch) => ({
  searchCity: (input) => { dispatch(searchCity(input)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
