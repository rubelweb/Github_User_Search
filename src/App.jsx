import SearchForm from './components/SearchForm/SearchForm'
import UserList from './components/UserList/UserList'
import { GitHubProvider } from './components/GitHubContext/GitHubContext'
import { Container } from './components/Styles/Styles'

function App() {
    return (
        <>
            <h1>Github User Search</h1>
            <GitHubProvider>
                <Container>
                    <SearchForm />
                    <UserList />
                </Container>
            </GitHubProvider>
        </>
    )
}

export default App
