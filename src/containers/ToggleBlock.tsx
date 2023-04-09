import {useState} from "react";
import ShowContent from "../components/ShowContent";
import {useSelector} from "react-redux";
import Button from "../components/Button";


const ToggleBlock = () => {

    const firstReceivedText = useSelector((state: any) => state.firstReceivedText.firstText);
    const secondReceivedText = useSelector((state: any) => state.secondReceivedText.secondText);
    const isResetText = useSelector((state: any) => state.resetText.isResetText);

    const [isSecondText, setSecondText] = useState(false);
    const [isSecondColor, setSecondColor] = useState(false);

    const defaultFirstText: string = "Glory to Ukraine";
    const defaultSecondText: string = "Glory to Heroes";
    const firstText: string = firstReceivedText || defaultFirstText;
    const secondText: string = secondReceivedText || defaultSecondText;
    const toggle = () => {
        setSecondColor(!isSecondColor);
        setSecondText(!isSecondText);
    }

    return (
        <>
            <div className="main">
                <div className="container">
                    <ShowContent
                        isSecondColor={isSecondColor}
                        isSecondText={isSecondText}
                        firstText={isResetText ? defaultFirstText : firstText}
                        secondText={isResetText ? defaultSecondText : secondText}
                    />
                    <div className="pt-10">
                        <Button
                            text="Toggle"
                            className="btn underline hover:no-underline"
                            onClick={toggle}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToggleBlock;