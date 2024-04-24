import axios from 'axios'

export const FetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    if (!response.data) {
        throw new Error('User not found')
    }
    return response.data
}
