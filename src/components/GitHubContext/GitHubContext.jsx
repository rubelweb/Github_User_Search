import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { GitHubReducer } from '../GitHubReducer/GitHubReducer'
import { InitialState } from '../Constants/Constants'

export const GithubContext = createContext()

export const GitHubProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GitHubReducer, InitialState)

    return (
        <GithubContext.Provider value={{ state, dispatch }}>
            {children}
        </GithubContext.Provider>
    )
}

GitHubProvider.propTypes = {
    children: PropTypes.node.isRequired
}
