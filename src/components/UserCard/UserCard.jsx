import PropTypes from 'prop-types'

function UserCard({ user }) {
    const { avatar_url, login, followers, following } = user
    return (
        <article>
            <img src={avatar_url} alt={login} />
            <h3>{login}</h3>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
        </article>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserCard
