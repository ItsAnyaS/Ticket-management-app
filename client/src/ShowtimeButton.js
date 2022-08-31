const ShowtimeButton = ({ id, movieId, theaterId, startTime, endTime}) => {
    return (
        <div className='showtime-button'>
            <button>{startTime}</button>
        </div>
    )
}

export default ShowtimeButton