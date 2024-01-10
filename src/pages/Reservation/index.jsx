import presidentPreview from './president.jpg';
import seaviewPreview from './seaview.jpg';
import affordablePreview from './affordable.png';
import './styles.css'
import { useState } from 'react';
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card';

const data = [
    {
        src: affordablePreview,
        title: 'Стандарт',
        description: 'Уютная атмосфера, необходимая мебель и удобное расположение делают этот номер отличным выбором для краткосрочного проживания',
        badges: [],
        features: ['2-х местный номер', '₽3700 за ночь'],
        price: '₽3700',
    },
    {
        src: seaviewPreview,
        title: "Люкс",
        description: "Идеальное решение для комфортного проживания двоих. Здест есть все необходимое для отдыха и работы: удобная двухспальная кровать, шкаф для одежды, тумбочки, стол, стул, телевизор.",
        badges: ['Вид на море', 'Душ в номере'],
        features: ['2-х местный номер', '₽15 000 за ночь'],
        price: '₽15 000',
    },
    {
        src: presidentPreview,
        title: "Президентский",
        description: "Настоящий шедевр роскоши и комфорта. С его просторных балконов открывается захватывающий вид на город, а интерьер поражает своим великолепием и изысканностью.",
        badges: ['Питание включено', "Душ в номере", "Трансфер", "Предоплата"],
        features: ['2-х местный номер', '₽99 999 за ночь'],
        price: '₽99 999',
    },
]

export const Reservation = () => {
    const [chosenRoom, chooseRoom] = useState(null);

    const handleOnRoomClick = () => chooseRoom(data[0])
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
                    {data.map(item => (
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
                        <input placeholder='Ваше имя' />
                        <input placeholder='Ваше номер телефона' />
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