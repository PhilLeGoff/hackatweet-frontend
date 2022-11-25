import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/user'
import { useRouter } from 'next/router'

function ShowUser() {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const firstname = useSelector((state) => state.user.value.firstname)
    const username = useSelector((state) => state.user.value.username)

    const handleLogout = () => {
        dispatch(logout())
        router.push('/')
    }

    return (
        <div>
            <p>ICON//</p>
            <p>{`${firstname}`}</p>
            <p>{`${username}`}</p>
            <button onClick={() => handleLogout()}/>
        </div> 
    )
}

export default ShowUser