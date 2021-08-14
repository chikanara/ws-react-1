import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../js/action'
import UserCard from '../UserCard/UserCard'

const UserList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])
    const users = useSelector(state => state.userReducer.users)
    const isLoading = useSelector(state => state.userReducer.isLoading)
    console.log(users)
    return (
       <>
       {
           isLoading ? <Spinner className="mt-5" animation="border" /> :
           <div className="d-flex flex-wrap justify-content-around">
           {
               users.map(user => (<UserCard user={user}/>))
           }
       </div>
       }
       </>
    )
}

export default UserList
