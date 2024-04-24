import { useState } from 'react'

import { FetchUserData } from '../Api/Api'

const SearchForm = () => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = await FetchUserData(inputValue)
        console.log(JSON.stringify(userData))
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
