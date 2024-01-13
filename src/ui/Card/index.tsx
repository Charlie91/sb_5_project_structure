import { Button } from "../Button";
import './styles.css';

type TProps = {
    img: string;
    features: string[];
    title: string;
    description: string;
    badges: string[];
    onChooseRoom: (roomName: string) => void;
};

export const Card = ({ img, features, title, description, badges, onChooseRoom }: TProps) => {
    const handleButtonClick = () => onChooseRoom(title);
    return (
        <div className='card'>
            <img src={img} />
            <ul className='features'>
                {features.map(feature => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='badges'>
                {badges.map(badge => <div key={badge} className='badge'>{badge}</div>)}
            </div>
            <Button onClick={handleButtonClick}>Выбрать</Button>
        </div>
    )
}
