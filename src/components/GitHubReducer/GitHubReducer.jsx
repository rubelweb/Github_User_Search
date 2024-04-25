export const GitHubReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return { ...state, loading: true, error: null }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                users: [action.payload],
                loading: false,
                error: null
            }
        case 'FETCH_USERS_FAILURE':
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
