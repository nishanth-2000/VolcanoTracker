
const OnClickInfo = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Details</h2>
            <ul>
                <ls> ID: <strong>{info.id}</strong></ls>
                <ls> TITLE: <strong>{info.title}</strong></ls>
            </ul>
        </div>
    )
}

export default OnClickInfo
