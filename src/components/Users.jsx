import React, { useEffect } from 'react'
import User from './User'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../actions/user.js'

const styles = { 
  container: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 'max-content',
    margin: '10px auto'
  }
}

function Users() {
  const users = useSelector(store => store.userReducer.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div style={styles.container}>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Users