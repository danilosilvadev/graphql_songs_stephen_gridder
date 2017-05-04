import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import fetchSongs from '../queries/fetchSongs'

function SongList(props){

  const { data } = props

  const renderSongs = () => data.loading ? <div>Loading...</div> : (
    <section className='container'>
      <br />
      <ul className='rows'>
        {data.songs.map(song => (
          <li className='row' key={song.id}>
            {song.title}
          </li>
        ))}
      </ul>
      <Link
        to="/song/new"
        className='button'
        >
        <i className='fas fa-add-circle'>Add</i>
      </Link>
    </section>
  )

  return <div>{renderSongs()}</div>
}

export default graphql(fetchSongs)(SongList);
