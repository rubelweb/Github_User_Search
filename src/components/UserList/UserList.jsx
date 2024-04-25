import UserCard from '../UserCard/UserCard'
import PropTypes from 'prop-types'

function UserList({ userData }) {
    console.log({ userData })
    return (
        <div>
            {userData.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}

UserList.propTypes = {
    userData: PropTypes.array.isRequired
}

export default UserList
