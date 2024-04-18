import { useState } from "react"


const InfoViewModel = () => {

    const [clickState, setClickState] = useState(false)

    // Capture the press event for Privacy policy
    const buttonPressed = () => {
        // TODO: this need to be replaced with approciate action
        setClickState(true)
        console.log('Button pressed')
    };

    return {
        clickState,
        setClickState,
        buttonPressed
    }
}

export default InfoViewModel