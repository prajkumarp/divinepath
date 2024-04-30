import { useEffect, useState } from "react"
import InfoViewModel from "../ViewModels/InfoViewModel"


const InfoViewController = () => {


    const [statusText, setStatusText] = useState('Start')

    const handleLogin = () => {
        console.log('Login Button Pressed');
    };
    const {
        clickState,
        buttonPressed
    } = InfoViewModel();

    useEffect(() => {
        if (clickState) {
            setStatusText('Button pressed')
        } else {
            setStatusText('Normal')
        }
        return () => {
        };
    });



    return {
        statusText,
        buttonPressed,
        handleLogin,
    }

}

export default InfoViewController;


