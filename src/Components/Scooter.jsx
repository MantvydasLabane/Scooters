function Scooter({ scooter, deleteScooter, modal }) {

    // paspaudus showEdit turi išlysti modalas
    const showEdit = () => {
        modal(scooter)
    }

    // Day format 
    const d = new Date(scooter.last_use_time);
    let month = "00" + (d.getMonth() + 1);
    month = month.substring(month.length - 2);
    let day = "00" + d.getDate();
    day = day.substring(day.length - 2);
    scooter.last_use_time = `${d.getFullYear()}-${month}-${day}`;

    // TINYINTI VALIDATION (IS BUSSY)
    const busy = (b) => {
        if (b === 1) {
            return 'Not-available';
        } else {
            return 'Available';
        }
    }

    return (
        <>
   
        <div className='list'>
        <h2>List</h2>
            <span>Registration code: </span>
            <div className='each-item'>
                <div>{scooter.registration_code}</div>
            </div>
            <span>Availability: </span>
            <div className='each-item'>
                <div>{busy(scooter.is_busy)}</div>
            </div>
            <span>Last use time: </span>
            <div className='each-item'>
                <div>{scooter.last_use_time}</div>
            </div>
            <span>Total ride kilometers: </span>
            <div className='each-item'>
                <div>{scooter.total_ride_kilometers}</div>
            </div>
            <div className='each-item'>
                <span>One day ride: </span>
                <div>{scooter.one_day_ride}</div>
            </div>
            <button onClick={() => deleteScooter(scooter.id)}>Delete</button>
            <button onClick={showEdit}>Edit</button>
        </div>
        </>
    );

}
export default Scooter;