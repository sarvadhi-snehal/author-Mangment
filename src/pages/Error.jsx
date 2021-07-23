import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
    return (
        <div>
            <h1>Wrong Request</h1>
            <p>Go to Home</p>
            <button><Link to="/home">Home</Link> </button>
        </div>
    )
}

export default Error
