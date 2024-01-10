import { Button } from "../Button";
import './styles.css';

export const Card = ({ img, features, title, description, badges, onChooseRoom }) => (
    <div className='card'>
        <img src={img} />
        <ul className='features'>
            {features.map(feature => (
                <li>{feature}</li>
            ))}
        </ul>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='badges'>
            {badges.map(badge => <div className='badge'>{badge}</div>)}
        </div>
        <Button onClick={onChooseRoom}>Выбрать</Button>
    </div>
);
