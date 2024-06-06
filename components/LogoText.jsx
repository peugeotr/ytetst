'use client'

import { Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const LogoText = ({platformUserId}) => {
    return (
        <>
            <div className="flex flex-row mx-1 mt-2">
                <div className="flex flex-col w-1/3">
                    <Link
                        className="box_shadow flex place-items-center place-content-center"
                        href="/organizer"
                    >
                        <Image
                            src="/images/conffu/logovcentre.png"
                            alt="close icon"
                            width={45}
                            height={55}
                            className="my-[8px]"
                            unoptimized={true}
                            priority={true}
                        />
                    </Link>
                    <p className="text-white text-[14px] font_family_Montserrat_Medium leading-[16px] mt-2">
                        Организатор
                    </p>
                </div>
                <div className="flex flex-col w-1/3 mx-[4px]">
                    <Link
                        className="box_shadow flex place-items-center place-content-center"
                        href="/partners"
                    >
                        <Image
                            src="/images/conffu/partner.png"
                            alt="close icon"
                            width={45}
                            height={55}
                            className="my-[8px]"
                            unoptimized={true}
                            priority={true}
                        />
                    </Link>
                    <p className="text-white text-[14px] font_family_Montserrat_Medium leading-[16px] mt-2">
                        Партнеры
                    </p>
                </div>
                <div className="flex flex-col w-1/3">
                    <Link
                        className="box_shadow flex place-items-center place-content-center"
                        href={`/myznakomstva?platformUserId=${platformUserId}`}
                    >
                        <Image
                            src="/images/conffu/friend.png"
                            alt="close icon"
                            width={45}
                            height={55}
                            className="my-[8px]"
                            unoptimized={true}
                            priority={true}
                        />
                    </Link>
                    <p className="text-white text-[14px] font_family_Montserrat_Medium leading-[16px] mt-2">
                        Мои знакомства
                    </p>
                </div>
            </div>
          
            {/*<div className="w-full flex">
            <div class="w-full grid grid-cols-4 gap-4 place-items-center mt-[30px] mx-2">
                {listo4ek.map((svoya, index) => {
                    return (
                        <Link
                            href="/testsuper"
                            onClick={() => {
                                tg.BackButton.show()
                                tg.BackButton.onClick(function () {
                                    window.href('/')
                                })
                            }}
                            key={++index}
                            className="flex flex-col place-items-center w-[70px]"
                        >
                            <div
                                className={`bg-[${svoya.color}] shadow-[${svoya.shadow}] rounded-[20px] w-[70px] h-[70px] grid items-center shadow-lg press_button_by_byfonicle`}
                            >
                                <Image
                                    src={svoya.src}
                                    alt="close icon"
                                    width={55}
                                    height={55}
                                    className="m-auto"
                                    unoptimized={true}
                                    priority={true}
                                />
                            </div>
                            <p className="text-xs text-white font_family_Montserrat leading-none pt-[4px]">
                                {svoya.title}
                            </p>
                        </Link>
                    )
                })}
            </div>
            </div>*/}
        </>
    )
}

export default LogoText
