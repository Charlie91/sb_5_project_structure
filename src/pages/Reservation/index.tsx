import './styles.css'
import { useState } from 'react';
import { Room  } from "./types";
import { ReservationForm } from './ReservationForm';
import { AvailableRooms } from './AvailableRooms';

const data = [
    {
      "src": "/affordable.png",
      "title": "Стандарт",
      "description": "Уютная атмосфера, необходимая мебель и удобное расположение делают этот номер отличным выбором для краткосрочного проживания",
      "badges": [],
      "features": [
        "2-х местный номер",
        "₽3700 за ночь"
      ],
      "price": "₽3700",
      "id": "4a2b"
    },
    {
      "src": "/seaview.jpg",
      "title": "Люкс",
      "description": "Идеальное решение для комфортного проживания двоих. Здест есть все необходимое для отдыха и работы: удобная двухспальная кровать, шкаф для одежды, тумбочки, стол, стул, телевизор.",
      "badges": [
        "Вид на море",
        "Душ в номере"
      ],
      "features": [
        "2-х местный номер",
        "₽15 000 за ночь"
      ],
      "price": "₽15 000",
      "id": "04a3"
    },
    {
      "src": "/president.jpg",
      "title": "Президентский",
      "description": "Настоящий шедевр роскоши и комфорта. С его просторных балконов открывается захватывающий вид на город, а интерьер поражает своим великолепием и изысканностью.",
      "badges": [
        "Питание включено",
        "Душ в номере",
        "Трансфер",
        "Предоплата"
      ],
      "features": [
        "2-х местный номер",
        "₽99 999 за ночь"
      ],
      "price": "₽99 999",
      "id": "059b"
    }
  ];

export const ReservationPage = () => {
    const [chosenRoom, chooseRoom] = useState<Room | null>(null);

    const handleOnRoomClick = (roomId: Room['id']) => {
        const chosenRoom = data.find(room => room.id === roomId);
        chosenRoom && chooseRoom(chosenRoom);    
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
