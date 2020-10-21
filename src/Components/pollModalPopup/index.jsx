/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useState } from 'react'
import ModalContainer from '../modalContainer'
import './index.scss'
import _ from 'lodash'

const PollModalPopups = ({ visible, toggleVisible, handleSubmit }) => {
	const [data, setData] = useState({
		question: '',
	  	options: [{ value: '' }],
	});
	
  const onQuestionChange = (e) => {
    data.question = e.target.value;
	setData({ ...data })
  };

  const verifyBlankOption = elem => elem.value === '';

  const addMoreOptions = () => {
	if (!data.options.some(verifyBlankOption)) {
		data.options.push({ value: '' });
	  }
	  setData({ ...data })
  }

  const onOptionChange = (e, index) => {
	  data.options[index].value = e.target.value
	  setData({ ...data })
  }

    return (
      <div className="popup-container">
        <ModalContainer visible={visible} closeModal={(e) => toggleVisible(e)}>
          <div className="modal-head">
			  <span className="text-uppercase primary-text fs-15">Add Poll</span>
          </div>
          <div className="plain-container no-full">
          <div className="overlay-container">
			<div className="row">
				<div className="col">
				<input placeholder="Add Question" type="text" value={data.question} onChange={(e) => onQuestionChange(e)} />
				</div>
			</div>
			{
				_.map(data.options, (option, idx) => (
     				<div className="row mt-15" key={idx}>
						<div className="col">
							<input placeholder={`Add Option ${idx + 1} `} id={idx} type="text" value={option.value} onChange={(e) => onOptionChange(e, idx)} />
						</div>
         </div>
   				))
			}
          </div>
		  <div className="container">
			<div className="row">
				<div className="col-md-6">
					<button type="button" className="btn btn-primary" onClick={() => handleSubmit(data)}>
					Submit
					</button>
				</div>
				<div className="col-md-6">
					<button type="button" className="btn btn-primary" onClick={() => addMoreOptions()}>
					Add Options
					</button>
    </div>
			</div>
		  </div>
          </div>
        </ModalContainer>
      </div>
    )
  }

export default PollModalPopups
