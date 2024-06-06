'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ContactUser = ({ points, user, botConfig, platformUserId }) => {
    const j = 6
    const znakomstva = [
        {
            title: 'Наши новости',
            src: '/images/conffu/news.png',
        },
        {
            title: 'Программа мероприятия',
            src: '/images/conffu/programms.png',
        },
        {
            title: 'Схема арены',
            src: '/images/conffu/mapsd.png',
        },
        {
            title: 'Conf-fu SHOP',
            src: '/images/conffu/shop.png',
        },
        {
            title: 'Организатор',
            src: '/images/conffu/logovcentre.png',
        },
        {
            title: 'Партнеры',
            src: '/images/conffu/partner.png',
        },
        {
            title: 'Помощь',
            src: '/images/conffu/help.png',
        },
        {
            title: 'Игры',
            src: '/images/conffu/games.png',
        },
    ]
    const NavSquareStyleImage = 'absolute bottom-1 '
    const ReferalText =
        'font_family_Montserrat text-[#88BD4B] font-bold text-center text-[20px]'
    return (
        <div className="w-full flex flex-col ">
            <div className="mx-2 my-1 press_button_by_byfonicle">
                <div className="grid items-center bg-[#] h-10 rounded-xl">
                    <p className={`${ReferalText} indent-2`}>Мои знакомства</p>
                </div>
            </div>
            
            
            <div class="grid w-full grid-cols-6 place-items-center">
                {[...Array(131)]
                    .map((_, i) => i)
                    .map((kartinle, index) => {
                        return (
                            kartinle > 124 && (
                                <div
                                    key={++index}
                                    className="flex flex-col items-center"
                                >
                                    <div
                                        className={`rounded-[20px] grid items-center`}
                                    >
                                        <Image
                                            src={`/images/photouser/${kartinle}.jpeg`}
                                            alt="close icon"
                                            width={52}
                                            height={55}
                                            className="m-auto rounded-[45px]"
                                            unoptimized={true}
                                        />
                                    </div>
                                </div>
                            )
                        )
                    })}
            </div>
            <div class="grid w-full grid-cols-7 place-items-center">
                {[...Array(118)]
                    .map((_, i) => i)
                    .map((kartinle, index) => {
                        return (
                            kartinle > 110 && (
                                <div
                                    key={++index}
                                    className="flex flex-col items-center"
                                >
                                    <div
                                        className={`rounded-[20px] grid items-center`}
                                    >
                                        <Image
                                            src={`/images/photouser/${kartinle}.jpeg`}
                                            alt="close icon"
                                            width={45}
                                            height={55}
                                            className="m-auto rounded-[45px]"
                                            unoptimized={true}
                                        />
                                    </div>
                                </div>
                            )
                        )
                    })}
            </div>
        </div>
    )
}

export default ContactUser
