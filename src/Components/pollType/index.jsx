import React from 'react'
import './index.scss'

const PollType = ({ onPollSelect }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card-new" onClick={() => onPollSelect('Bar Chart')}>
                        Bar Chart
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-new" onClick={ () => onPollSelect('Option List')}>
                        Options List
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PollType
