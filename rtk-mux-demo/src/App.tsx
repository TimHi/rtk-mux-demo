
import './App.css'
import localBackend from './api/local-backend'

function App() {
  const { data } = localBackend.useUrlEndpointQuery("https://www.wikipedia.de/")
  return (
    <>
      <h1>Response from Backend: {data}</h1>
    </>
  )
}

export default App
