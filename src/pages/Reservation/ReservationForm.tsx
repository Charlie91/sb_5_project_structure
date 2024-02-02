import { Room  } from "./types";
import { TextField } from '../../ui/TextField';
import { Button } from '../../ui/Button'
import { useEffect, useState } from "react";
import { validateByPhone } from "../../utils/validate";
import { getPostRequestForRoomReservation } from "../../api/reservation";
import { useMutation } from "@tanstack/react-query";

type TProps = {
    room: Room;
    onBack: () => void; 
}

export const ReservationForm = ({ room, onBack }: TProps) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const { isSuccess, mutate, isPending } = useMutation({
        mutationFn: getPostRequestForRoomReservation,
    })

    const submitForm = () => {
        if (!name || !validateByPhone(phone)) {
            alert('Введите имя или правильный номер телефона')
        } else {
            const response = mutate({ name, phone });
        }
    }

    useEffect(() => {
        if (isSuccess) {
            alert('Спасибо! Наши менеджеры скоро свяжутся с Вами.')
        }
    }, [isSuccess]);

    if (isPending) {
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
                <Button type='outline' onClick={onBack}>Назад</Button>
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
