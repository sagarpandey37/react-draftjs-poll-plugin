/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-tabs */
import React, { useState } from "react";
import "./index.scss";

const DraftJSPoll = ({ contentState, block }) => {

    const entityKey = contentState.getLastCreatedEntityKey();
    const [currData, setData] = useState({ ...contentState.getEntity(entityKey).getData(), selectedValue: '' });

    const handleChange = (event) => {
        currData.selectedValue = event.target.value
        setData({ ...currData });
    }

    return (
        <>
        { currData.pollTheme === 'Bar Chart' 
            && (<div className="poll-progress-box">
                <p className="poll-head text-align-center">{currData.question}</p>
                <div className="options">
                    {
                        currData.options.map((elem, idx) => (
                        <div className="bar" value={elem.value} onClick={(e) => handleChange(e)}>
                            <div className="bar-fill" style={{'width' : '20%'}}>
                                <span className="bar-label">{`${20}%  `}{elem.value}</span>
                            </div>
                        </div>
                        ))
                    }
                </div>
             </div>
            )}
        { currData.pollTheme === 'Option List' 
            && (<div className="poll-box">
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
            )}
        </>
     )
    }

export default DraftJSPoll
