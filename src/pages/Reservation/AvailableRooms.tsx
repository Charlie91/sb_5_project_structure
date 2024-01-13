import { Room  } from "./types";
import { Card } from '../../ui/Card';

type TProps = {
    rooms: Room[];
    onChooseRoom: (roomname: string) => void;
}

export const AvailableRooms = ({ rooms, onChooseRoom }: TProps) => {
    return (rooms || []).map(item => (
            <Card
                key={item.title}
                img={item.src}
                features={item.features}
                title={item.title}
                description={item.description}
                badges={item.badges}
                onChooseRoom={onChooseRoom}
            />
        ))
}