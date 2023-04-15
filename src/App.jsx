import { useRef, useState } from 'react';
import './App.css'
import LocationInfo from './componenst/LocationInfo';
import ResidentCard from './componenst/ResidentCard';
import ApiUrl from './hooks/ApiUrl'
import getRandomLocation from './utils/getRandomLocation';

function App() {

  const [inputValue, setInputValue] = useState(getRandomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`

  const location = ApiUrl(url)

const inputLocation = useRef()

  const handleSumit = event => {
    event.preventDefault()
    setInputValue(inputLocation.current.value)
  }

  return (
    <div className="App">
      <h2>Rick and Morty</h2>
      <form onSubmit={handleSumit}>
        <input ref={inputLocation} type="text" />
        <button>search</button>
      </form>
      <LocationInfo location={location} />
      <div className="">
        {
          location?.residents.map(url => (
            <ResidentCard key={url} url={url} />
          ))
        }
      </div>
    </div>

  )
}

export default App
