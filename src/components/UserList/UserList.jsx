import { useContext } from 'react'
import UserCard from '../UserCard/UserCard'
import { GithubContext } from '../GitHubContext/GitHubContext'
import { List } from '../Styles/Styles'

const UserList = () => {
    const { state } = useContext(GithubContext)
    const { users, loading, error } = state

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <List>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </List>
    )
}

export default UserList
