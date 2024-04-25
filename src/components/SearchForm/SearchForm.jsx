import { useState } from 'react'
import { FetchUserData } from '../Api/Api'
import UserList from '../UserList/UserList'

const SearchForm = () => {
    const [inputValue, setInputValue] = useState('')
    const [userData, setUserData] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fetchedUserData = await FetchUserData(inputValue)
        setUserData(fetchedUserData)
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter GitHub username"
                />{' '}
                <button type="submit">Search</button>
            </form>
            <div>
                <UserList userData={userData}></UserList>
            </div>
        </>
    )
}

export default SearchForm
