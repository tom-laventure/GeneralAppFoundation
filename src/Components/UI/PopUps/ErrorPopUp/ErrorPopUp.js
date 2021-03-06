import React, { useContext } from 'react'
import classes from './ErrorPopUp.module.css'
import AuxBackground from '../../../../hoc/AuxBackground/AuxBackground'
import { StoreContext } from '../../../../Store/StoreContext'
import AuxDiv from '../../../../hoc/AuxDiv/AuxDiv'
import Header from '../../Header/Header'
const ErrorPopUp = (props) => {
    const { state, dispatch, actions, fire } = useContext(StoreContext)
    let hide = true;
    let message;
    const errorAcknowledge = () => {
        actions.setErrorState(null)
    }

    if (state.error) {
        hide = false
        message = state.error.error.message
    }



    return (
        <AuxDiv>
            <AuxBackground hide={hide} click={() => errorAcknowledge()} zIndex="high" >
                <div className={classes.Container}>
                    <Header headerType="h3" content="Error:" />
                    <div className={classes.content}>{message}</div>
                </div>
            </AuxBackground>
        </AuxDiv>
    )
}

export default ErrorPopUp