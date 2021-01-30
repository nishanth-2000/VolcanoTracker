import {Icon} from '@iconify/react'
import locationIcon from '@iconify-icons/maki/volcano-11';

import React from 'react'

const VocanoMarker = ({ onClick }) => {
    return (
        <div className="location-marker" >
            <Icon icon={locationIcon} className="location-icon" onClick={onClick}/>
        </div>
    )
}

export default VocanoMarker
