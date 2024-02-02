import './styles.css'
import { useState } from 'react';
import { useRoomList } from '../../hooks/useRoomList';
import { Room  } from "./types";
import { Card } from '../../ui/Card';

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

    const { data, isLoading } = useRoomList();

    const handleOnRoomClick = (roomId: Room['id']) => {}

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
            <div className='card_wrapper'>
                {data.map(item => (
                    <Card
                        id={item.id}
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
        </>
    )
}
