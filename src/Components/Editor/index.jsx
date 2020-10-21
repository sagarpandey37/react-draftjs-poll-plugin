import React from 'react';
import {Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw } from 'draft-js';
// import Editor from 'draft-js-plugins-editor'
import './index.scss'
import PollModalPopups from '../pollModalPopup'
import DraftJSPoll from '../draftJSPoll'

class PollEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      showPollModal: false,
    };
    this.onChange = (editorState) => this.setState({ editorState })
  }

  focus = () => this.refs.editor.focus()

  togglePopup = () => {
    const { showPollModal} = this.state
    this.setState({ showPollModal: !showPollModal })
  }

  pollSubmitHandler = (data) => {
    let newEditorState;
    const editorState = this.state.editorState
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity('DRAFT-JS-POLL', 'IMMUTABLE' , data);
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    newEditorState = EditorState.set(editorState,{currentContent: contentWithEntity});
    newEditorState = RichUtils.toggleBlockType(newEditorState, 'DRAFT-JS-POLL-BLOCK');
    this.onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ''))
    this.setState({ showPollModal: false})
  };

  getBlockRender = (block) => {
    if( block.getType() === 'DRAFT-JS-POLL-BLOCK' ){
      return {
        component: DraftJSPoll,
        editable: false,
      };
    }
    return null;
  }

  render() {
    const { showPollModal } = this.state

    return (
      <>
        {showPollModal && (
          <PollModalPopups
            visible={showPollModal}
            toggleVisible={(e) => this.togglePopup(e)}
            handleSubmit={this.pollSubmitHandler}
          />
        )}
        <div className="container">
          <div className="row mt-15">
            <div className="col text-align-center">
              <button className="btn btn-dark" onClick={() => this.togglePopup()}>Create A Poll</button>              
            </div>
          </div>
          <div className="row mt-15">
          <div className="col">
            <div className="editor-section">
              <div className="container">
                <div onClick={this.focus}>
                  <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    blockRendererFn={this.getBlockRender}
                    ref="editor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          
        </div>
      </>
    )
  }

}

export default PollEditor
