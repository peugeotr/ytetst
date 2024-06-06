'use client'

import React from 'react'

const Programms = () => {
    const programma = [
        {
            time: '10:00 - 10:30',
            color: 'bg-[#88BD4B]',
            thema: 'Сбор участников',
        },
        {
            time: '10:30 - 10:40',
            color: 'bg-white',
            thema: 'Приветствие ведущего',
        },
        {
            time: '10:40 - 11:00',
            color: 'bg-white',
            thema: '«Быстрый запуск эффективного мебельного производства»',
            underthema: 'Сергей Коночник',
            underthema2: 'Руководитель учебного центра «PRAKTIKA»',
        },
        {
            time: '11:00 - 11:20',
            color: 'bg-white',
            thema: '«Влияние примерки на эффективность AR продаж мебели»',
            underthema: 'Александр Ильин',
            underthema2: 'СЕО компании «ELARBIS»',
        },
        {
            time: '11:20 - 11:40',
            color: 'bg-white',
            thema: '«Системные инструменты для масштабирования бизнеса и роста доходов»',
            underthema: 'Роман Захаров',
            underthema2: 'Управляющий партнер компании DREVO',
        },
        {
            time: '11:40 - 12:00',
            color: 'bg-[#88BD4B]',
            thema: 'Перерыв',
        },
        {
            time: '12:00 - 12:20',
            color: 'bg-white',
            thema: '«Производство серийной мебели, за 14 дней на автоматизированном производстве, и продажи, как индивидуальных изделий»',
            underthema: 'Александр Шишонок',
            underthema2: 'Основатель мебельной фабрики Venta Mebel',
        },
        {
            time: '12:20 - 12:40',
            color: 'bg-white',
            thema: '«Секретный рецепт: Как заработать 50 миллионов тенге прибыли за год с одной диллерской студии Мария»',
            underthema: 'Людмила Демина',
            underthema2: 'Руководитель управления развития «Кухни Мария»',
        },
        {
            time: '12:40 - 13:00',
            color: 'bg-white',
            thema: '«Волшебство работы с клиентами или как влюбить покупателя в свой сервис»',
            underthema: 'Екатерина Уланова',
            underthema2: 'Основатель компании DREVO',
        },
        {
            time: '13:00 - 14:00',
            color: 'bg-[#88BD4B]',
            thema: 'Кофебрейк',
        },
        {
            time: '14:00 - 14:30',
            color: 'bg-white',
            thema: '«Реалистичная картинка интерьера как инструмент продаж мебели будущего»',
            underthema: 'Бережинский Александр',
            underthema2: 'Менеджер продукта AiHouseRussia.com, «ASAI SOFT»',
        },
        {
            time: '14:30 - 15:20',
            color: 'bg-white',
            thema: '«Объединение программы лояльности, сарафанного радио, чат-бота, CRM системы в одном приложении»',
            underthema: 'Виктор Орлов',
            underthema2: 'Организатор мебельной конференции «Conf-Fu»',
            underthema3: 'Основатель компании «В Центре»',
        },
        {
            time: '15:20 - 15:40',
            color: 'bg-[#88BD4B]',
            thema: 'Перерыв',
        },
        {
            time: '15:40 - 16:00',
            color: 'bg-white',
            thema: '«Комплексный подход к автоматизации обработки мебельного заказа от дизайна до производства»',
            underthema: 'Андрей Пронько',
            underthema2: 'Генеральный директор компании «bCAD»',
        },
        {
            time: '16:00 - 17:00',
            color: 'bg-white',
            thema: '«Маркетинг на основе данных»',
            underthema: 'Илья Балахнин',
            underthema2: 'Управляющий партер компании Paper Planes',
        },
        {
            time: '17:00 - 18:00',
            color: 'bg-[#88BD4B]',
            thema: 'Розыгрыш призов от спикеров и партнеров',
        },
    ]
    return (
        <>
            <div className="border-[#88BD4B] border-[2px] mt-2 flex place-items-center place-content-center mb-6">
                <p className="text-[#88BD4B] text-[30px] leading-[30px] font_family_DelaGothicOne_Regular my-2 pb-2">
                    Программа конференции
                </p>
            </div>
            {programma.map((prog, index) => {
                return (
                    <div className="flex flex-row mb-6" key={++index}>
                        <div className="flex flex-col mr-4 w-1/3">
                            <p className="text-white text-[14px] font_family_Montserrat_Medium leading-[16px]">
                                {prog.time}
                            </p>
                        </div>
                        <div
                            className={`flex flex-col place-items-center mt-[3px] after:w-[1.5px] after:absolute after:z-[-1] after:left-[43%] relative after:h-[calc(100%+2rem)] after:bg-white ${
                                index == programma.length - 1 &&
                                'after:content-none'
                            }`}
                        >
                            <div
                                className={`w-[10px] h-[10px] rounded-full ${prog.color} `}
                            ></div>
                        </div>
                        <div className="flex flex-col ml-4 mr-2 w-2/3">
                            <p className="text-white text-[14px] text-left font_family_Montserrat_Medium leading-[16px]">
                                {prog.thema}
                            </p>
                            <p className="text-white text-[12px] text-left font_family_Montserrat_Regular leading-[14px] mt-2">
                                {prog.underthema}
                            </p>
                            <p className="text-white text-[12px] text-left font_family_Montserrat_Light leading-[14px] w-3/4 mt-1">
                                {prog.underthema2}
                            </p>
                            <p className="text-white text-[12px] text-left font_family_Montserrat_Light leading-[14px] w-3/4 mt-1">
                                {prog.underthema3}
                            </p>
                        </div>
                    </div>
                )
            })}
           
        </>
    )
}

export default Programms
