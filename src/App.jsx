import SearchForm from './components/SearchForm/SearchForm'
import UserList from './components/UserList/UserList'
import { GitHubProvider } from './components/GitHubContext/GitHubContext'

function App() {
    return (
        <GitHubProvider>
            {' '}
            <div>
                <h1>Github User Search</h1>
                <SearchForm />
                <UserList />
            </div>
        </GitHubProvider>
    )
}

export default App
