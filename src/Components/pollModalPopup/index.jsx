/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react'
import ModalContainer from '../modalContainer'
import './index.scss'
import _ from 'lodash'

class PollModalPopups extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
	  question: '',
	  options: [{'value':''}],
    }
  }

  onQuestionChange = (e) => {
    let ques = e.target.value;
	this.setState({question:ques})
  };

  verifyBlankOption = elem => elem.value === '';

  addMoreOptions = (e) => {
	const { options } = this.state
	if (!options.some(this.verifyBlankOption)) {
		options.push({'value' : ''});
	  }
	  this.setState({ ...options})
  }

  onOptionChange = (e, index) => {
	  const { options } = this.state
	  const data = e.target.value
	  options[index].value = data
	  this.setState({...options})
  }


  render() {
	const { visible, toggleVisible, handleSubmit } = this.props
	const { question, options } = this.state
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
				<input placeholder="Add Question" type="text" value={question} onChange={(e) => this.onQuestionChange(e)} />
				</div>
			</div>
			{
				_.map(options, (option, idx) => 
					<div className="row mt-15" key={idx} >
						<div className="col">
							<input placeholder={`Add Option ${idx + 1} `} id ={idx} type="text" value={option.value} onChange={(e) => this.onOptionChange(e, idx)} />
						</div>
					</div>   
				)
			}
          </div>
		  <div className="container">
			<div className="row">
				<div className="col-md-6">
					<button type="button" className="btn btn-primary" onClick={() => handleSubmit({question:question,options:options})}>
					Submit
					</button>
				</div>
				<div className="col-md-6">
					<button type="button" className="btn btn-primary" onClick={() => this.addMoreOptions()}>
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
}

export default PollModalPopups
