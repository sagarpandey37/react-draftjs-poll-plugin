import React from "react";
import "./index.scss";

class DraftJSPoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedValue: null,
        };
    }

    handleChange = (event) => {
        this.setState({selectedValue: event.target.value});
    }

    render() {
    const { contentState } = this.props
    const data = contentState.getEntity(contentState.getLastCreatedEntityKey()).getData()
    return (
        <>
        <div className="poll-box">
            <p className="poll-head">{data.question}</p>
            <div className="options">
                {
                    data.options.map((elem, idx) => (
                    <ul key={idx}>
                        <div className="mask">
                            <input type="radio" name="poll" value={elem.value} onChange={this.handleChange} /> 
                            <span className="option pl-10">{elem.value}</span>
                        </div>
                    </ul>
                    ) )
                }
            </div>
        </div>
        </>
     )
    }
}

export default DraftJSPoll
