'use client'

import Link from 'next/link'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    Avatar
} from '@nextui-org/react'

export default function Znakomye ({kith}:any){
    const itemClasses = {
        title: 'text-white font_family_Montserrat_Medium text-left pl-2 text-[20px]',
        content: 'text-white',
        indicator: 'pr-2',
    }
    return <div className="flex flex-col overflow-x-hidden w-full">
    <div className="flex place-items-center place-content-center">
        <p className="text-[#88BD4B] text-[30px] leading-[30px] font_family_DelaGothicOne_Regular my-2">
            Ваши знакомства
        </p>
    </div>
    <div>
        <Accordion selectionMode="single" itemClasses={itemClasses}>
            {kith.map((user, index) => {
                return (
                    <AccordionItem
                        key={index}
                        startContent={
                            <Avatar
                                isBordered
                                color="success"
                                radius="full"
                                size="lg"
                                src={user.photo_url}
                                className="ml-4"
                            />
                        }
                        title={user.name}
                    >
                        <div className="">
                            <div className="flex flex-col gap-1">
                                <Link
                                    className="flex flex-row  bg-gray-600 rounded-md w-full"
                                    href={`https://t.me/${user.tg_username}`}
                                    target="_blank"
                                >
                                    <p className="font_family_Montserrat_Regular px-4 py-1 w-1/3 text-left">
                                        Telegram:
                                    </p>
                                    <p className="font_family_Montserrat_Medium py-1">
                                        @{user.tg_username} 🔗
                                    </p>
                                </Link>
                                <Link
                                    className="flex flex-row bg-gray-600 rounded-md w-full"
                                    href={`tel:+${user.phone}`}
                                    target="_blank"
                                >
                                    <p className="font_family_Montserrat_Regular px-4 py-1 w-1/3 text-left">
                                        Телефон:
                                    </p>
                                    <p className="font_family_Montserrat_Medium py-1">
                                        {user.phone} ☎️
                                    </p>
                                </Link>
                                <Link
                                    className="flex flex-row bg-gray-600 rounded-md w-full"
                                    href={`mailto:${user.mail}`}
                                    target="_blank"
                                >
                                    <p className="font_family_Montserrat_Regular px-4 py-1 w-1/3 text-left">
                                        E-mail:
                                    </p>
                                    <p className="font_family_Montserrat_Medium py-1">
                                        {user.mail} 📬
                                    </p>
                                </Link>
                                <div className="flex flex-col bg-gray-600 rounded-md w-full py-1">
                                    <div className="flex flex-row">
                                        <p className="font_family_Montserrat_Regular px-4 w-1/3 text-left">
                                            Город:
                                        </p>
                                        <p className="font_family_Montserrat_Medium ">
                                            {user.city}
                                        </p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="font_family_Montserrat_Regular px-4 w-1/3 text-left">
                                            Компания:
                                        </p>
                                        <p className="font_family_Montserrat_Medium ">
                                            {user.company}
                                        </p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="font_family_Montserrat_Regular px-4 w-1/3 text-left">
                                            Должность:
                                        </p>
                                        <p className="font_family_Montserrat_Medium ">
                                            {user.job}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                )
            })}
        </Accordion>
    </div>
</div>
}