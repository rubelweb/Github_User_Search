import { useState, useContext } from 'react'
import { GithubContext } from '../GitHubContext/GitHubContext'
import { FetchUserData } from '../Api/Api'

const SearchForm = () => {
    const [inputValue, setInputValue] = useState('')
    const { dispatch } = useContext(GithubContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: 'FETCH_USERS_REQUEST' })
        try {
            const userData = await FetchUserData(inputValue)
            dispatch({ type: 'FETCH_USERS_SUCCESS', payload: userData })
        } catch (error) {
            dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message })
        }
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter GitHub username"
            />{' '}
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm
