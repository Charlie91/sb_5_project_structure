import { Room  } from "./types";
import { TextField } from '../../ui/TextField';
import { Button } from '../../ui/Button'
import { useEffect, useState } from "react";
import { validateByPhone } from "../../utils/validate";
import { useFetch } from "../../hooks/useFetch";
import { getPostRequestForRoomReservation } from "../../api/reservation";

type TProps = {
    room: Room;
    onBack: (a: null) => void; 
}

export const ReservationForm = ({ room, onBack }: TProps) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const { data, request, isLoading, error } = useFetch(getPostRequestForRoomReservation);

    const submitForm = () => {
        if (!name || !validateByPhone(phone)) {
            alert('Введите имя или правильный номер телефона')
        } else {
            const response = request({ name, phone });
        }
    }

    useEffect(() => {
        if (data && !error) {
            alert('Спасибо! Наши менеджеры скоро свяжутся с Вами.')
        }
    }, [data, error]);

    if (isLoading) {
        <div>Заявка отправляется...</div>
    }

    return (
        <div className='form_wrapper'>
            <div>Вы бронируете {room.title}. 
            <br/> Оставьте ваши контактные данные для связи с оператором</div>
            <form>
                <TextField
                     placeholder='Ваше имя'
                     value={name}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e?.target?.value)}
                />
                <TextField
                     placeholder='Ваш номер телефона'
                     value={phone}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e?.target?.value)}
                />
            </form>
            <div className='button_wrapper'>
                <Button type='outline' onClick={() => onBack(null)}>Назад</Button>
                <Button 
                    disabled={!name || !phone} 
                    onClick={submitForm}
                >
                    Отправить заявку на бронирование
                </Button>
            </div>
        </div>
    );
}
