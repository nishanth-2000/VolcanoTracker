import { useState, useEffect } from 'react'
import GoogleMap from './Components/GoogleMap'
import Loading from './Components/Loading'

function App() {
  const [eventInfo, setEventInfo] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/12')
      const events = await res.json()
  
      setEventInfo(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  return (
    <div >
      { !loading ? <GoogleMap eventInfo={ eventInfo } /> : <Loading />}
    </div>
  );
}

export default App;
