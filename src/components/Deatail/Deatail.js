import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../js/action'

const Deatail = ({match}) => {
    const user = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUserById(match.params.id))
    }, [])
    return (
        <div>
           {user && user.name}
        </div>
    )
}

export default Deatail
