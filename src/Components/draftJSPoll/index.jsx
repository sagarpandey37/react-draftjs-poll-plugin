/* eslint-disable react/no-array-index-key */
/* eslint-disable no-tabs */
import React, { useState } from "react";
import "./index.scss";

const DraftJSPoll = ({ contentState, block }) => {
    const [data, setData] = useState({
		selectedValue: null,
	});

    const handleChange = (event) => {
        data.selectedValue = event.target.value
        setData({ ...data });
    }

    const entityKey = contentState.getLastCreatedEntityKey();
    const [currData] = useState(contentState.getEntity(entityKey).getData());

    return (
        <>
        <div className="poll-box">
            <p className="poll-head">{currData.question}</p>
            <div className="options">
                {
                    currData.options.map((elem, idx) => (
                    <ul key={idx}>
                        <div className="mask">
                            <input type="radio" name={`poll-${block.getKey()}`} value={elem.value} onChange={(e) => handleChange(e)} /> 
                            <span className="option pl-10">{elem.value}</span>
                        </div>
                    </ul>
                    ))
                }
            </div>
        </div>
        </>
     )
    }

export default DraftJSPoll
