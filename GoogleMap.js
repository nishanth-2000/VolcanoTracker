import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import VocanoMarker from './VocanoMarker'
import OnClickInfo from './OnClickInfo'

const GoogleMap = ({ eventInfo, center, zoom }) => {

    const [OnclickInfo, setOnClickInfo] = useState()

    const markers = eventInfo.events != undefined ? eventInfo.events.map((vol => {
        return <VocanoMarker lat={(vol.geometries[0].coordinates.length) == 2 ? vol.geometries[0].coordinates[1] : (vol.geometries[0].coordinates[0][0][1])}
            lng={(vol.geometries[0].coordinates.length) == 2 ? vol.geometries[0].coordinates[0] : vol.geometries[0].coordinates[0][0][0]}
            onClick={() => setOnClickInfo({ id: vol.id, title: vol.title })} />
        // }) : eventInfo.events[29].geometries[0].coordinates.map( volca => {return <VocanoMarker lat={volca[1]} lng={volca[0]} onClick={() => setOnClickInfo({ id: volca.id, title: volca.title })} />}))
        // }) :  () => {<VocanoMarker lat={center.lat} lng={center.lng} /> 
    })) : null

    return (
        <div className='map'>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: 'AIzaSyAhbbrhp2yMJY2yb-nnUwosQ1fsQZIi494' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
                {/* <VocanoMarker lat={center.lat} lng={center.lng} /> */}
            </GoogleMapReact>
            {OnclickInfo && <OnClickInfo info={OnclickInfo} />}
        </div>
    )
}

GoogleMap.defaultProps = {
    center: {
        lat: 31.593,
        lng: 130.657
    },
    zoom: 6
}

export default GoogleMap;