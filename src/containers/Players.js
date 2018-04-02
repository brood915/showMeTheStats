import React, { Component } from 'react';
import EPL_Players from '../components/EPL_Players';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayers } from '../actions/players';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            }
        }	

    componentDidMount() {
            this.props.getPlayers();
    }

    render() {
      return (
        <div className="Players">
          <EPL_Players players={this.props.players} teams = {this.props.teams} errors = {this.props.error} loading = {this.props.loading} />
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return { //to access state data as props
        players: state.playersData.players,
        teams: state.playersData.teams,
        error: state.playersHasErrors,
        loading: state.playersIsLoading
    };
};

const mapDispatchToProps = (dispatch) => { //
    return bindActionCreators({ getPlayers }, dispatch); 
 };
  
export default connect(mapStateToProps, mapDispatchToProps)(Players);