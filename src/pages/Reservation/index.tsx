import './styles.css'
import { useState } from 'react';
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card';
import { TextField } from '../../ui/TextField';
import { useFetch } from '../../hooks/useFetch';
import { getAvailableRoomsUrl } from '../../api/reservation';

export const Reservation = () => {
    const [chosenRoom, chooseRoom] = useState(null);

    const { data = [], isLoading } = useFetch('http://localhost:3000/rooms');

    const handleOnRoomClick = () => {
        if (!data) return;

        chooseRoom(data[0]);
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
                    {(data || []).map(item => (
                        <Card
                            key={item.title}
                            img={item.src}
                            features={item.features}
                            title={item.title}
                            description={item.description}
                            badges={item.badges}
                            onChooseRoom={handleOnRoomClick}
                        />
                    ))}
                </div>
            ) : (
                <div className='form_wrapper'>
                    <div>Вы бронируете {chosenRoom.title} за {chosenRoom.price}. <br/> Оставьте ваши контактные данные для связи с оператором</div>
                    <form>
                        <TextField placeholder='Ваше имя' value="" />
                        <TextField placeholder='Ваш номер телефона' value="" />
                    </form>
                    <div className='button_wrapper'>
                        <Button type='outline' onClick={() => chooseRoom(null)}>Назад</Button>
                        <Button disabled>Отправить заявку на бронирование</Button>
                    </div>
                </div>
            )}
        </>
    )
}
