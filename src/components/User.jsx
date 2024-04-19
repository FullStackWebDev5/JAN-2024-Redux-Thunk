import React from 'react'

const styles = {
  card: {
    width: '220px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    padding: '10px',
    margin: '10px',
  }
}

function User({ user }) {
  const { first_name, last_name, email, avatar } = user

  return (
    <div style={styles.card}>
      <img src={avatar} alt='avatar' />
      <h1>{first_name + ' ' + last_name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default User