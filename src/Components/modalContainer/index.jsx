import React from 'react'
import cx from 'classnames'
import './index.scss'

const ModalContainer = ({ visible, children, closeModal }) => {
    const handleClose = (e) => {
        if (e.target.className === 'group-modal visible') {
            closeModal(e)
        }
    }
    return (
        <div className={cx("group-modal", { visible })} onClick={e => handleClose(e)}>
            <div className="group-modal-container">
                {children}
            </div>
        </div>
    )
}
export default ModalContainer
