import { FC } from "react"
import backgroundImage from "../../images/background.jpg"

const BackgroundComponent : FC = () => {
    return (
        <div className="background">
            <img src={backgroundImage} alt="" />
        </div>
    )
}

export default BackgroundComponent