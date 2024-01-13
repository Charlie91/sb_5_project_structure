import './styles.css'
import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { getAvailableRooms } from '../../api/reservation';
import { Room  } from "./types";
import { ReservationForm } from './ReservationForm';
import { AvailableRooms } from './AvailableRooms';

export const ReservationPage = () => {
    const [chosenRoom, chooseRoom] = useState<Room | null>(null);

    const { data, request, isLoading } = useFetch<Room[]>(getAvailableRooms);

    const handleOnRoomClick = (roomName: Room['title']) => {
        if (data) {
            const chosenRoom = data.find(room => room.title === roomName);
            chosenRoom && chooseRoom(chosenRoom);    
        }
    }

    useEffect(() => {
        request();
    }, []);

    if (isLoading) {
        return <div>
            <p>Пожалуйста, подождите</p>
            <p>Номера доступные для бронирования скоро появятся здесь</p>
        </div>
    }

    return (
        <>
            <div className='steps'>
                <div className={`step ${!chosenRoom ? 'active' : ''}`}>
                    <div className='step_count'>1</div>
                    <span>Выбор номера</span>
                </div>
                <div className='divider'></div>
                <div className={`step ${chosenRoom ? 'active' : ''}`}>
                    <div className='step_count'>2</div>
                    <span>Подтверждение бронирования</span>
                </div>
            </div>
            {!chosenRoom ? (
                <div className='card_wrapper'>
                    <AvailableRooms onChooseRoom={handleOnRoomClick} rooms={data || []} />
                </div>
            ) : (
                <ReservationForm room={chosenRoom} onBack={chooseRoom} />
            )}
        </>
    )
}
