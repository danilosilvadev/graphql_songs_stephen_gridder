import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link, withRouter } from 'react-router-dom'
import fetchSongs from '../queries/fetchSongs'

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query: fetchSongs }]
    }).then(() => this.props.history.push('/songs'))
  }

  render(){
    return (
      <div className='container'>
        <br />
        <Link
          to="/songs"
          className='button'
          >
          <i className='fas fa-add-circle'>Back</i>
        </Link>
        <br /><br />
        <h2>Create a new song</h2>
        <form className='container' onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            type="text"
            className="input"
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
            />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title ) {
      title
    }
  }
`;

export default graphql(mutation)(withRouter(SongCreate));
