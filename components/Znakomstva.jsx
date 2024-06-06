'use client'

import React from 'react'
import {
    Modal,
    ModalContent,
    useDisclosure,
} from '@nextui-org/react'

import Image from 'next/image'

const Znakomstva = ({ user, setUser, qrCode, setKith, revalidateKith }) => {
    function openCamera() {
        var WebApp = window.Telegram.WebApp
        var resultContainer = document.getElementById('qr-reader-results')
        WebApp.onEvent('qrTextReceived', async function (eventHandler) {
            WebApp.closeScanQrPopup()
            const answer = eventHandler.data
            if (answer.indexOf('t.me') >= 0 && answer.indexOf('ref_') >= 0) {
                const newUser = await setKith(user._id, answer.split('ref_')[1], user.platformUserId)
                setUser({...user, ...newUser})
            } else {
                resultContainer.innerHTML += `<div><a href="${eventHandler.data}" style="font-size: 12.2vw;background-color: #635656;color: #67D572;text-decoration: none;text-transform: uppercase;display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;font-weight: 900;font-family: system-ui;" id="clickButton">Нажми меня</a></div>`
            }
        })
        WebApp.showScanQrPopup({ text: 'Scan QR' })
    }
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [modalPlacement, setModalPlacement] = React.useState('auto')

    return (
        <>
            <div className="flex flex-row mt-4 bg-[#2e2e2e]">
                <div className="flex flex-col place-items-center w-1/2 origin-top-left rotate-[-2deg]" onClick={(e) => openCamera(e)}>
                    <div>
                        <Image
                            src="/images/conffu/pandabutton2.png"
                            alt="close icon"
                            width={180}
                            height={55}
                            className="m-auto"
                            unoptimized={true}
                            priority={true}
                        />
                    </div>
                    <div className="bg-[#88BD4B] w-3/4 rounded-[2px] mt-[-10px]">
                        <p className="text-white text-[14px] font_family_Montserrat_Medium leading-[16px] px-2 py-2">
                            Нажми на меня, чтобы отсканировать визитку
                        </p>
                    </div>
                </div>
                <div className="flex flex-col place-items-center w-1/2 origin-top-left rotate-[7deg]" onClick={onOpen}>
                    <div>
                        <Image
                            src="/images/conffu/pandabutton1.png"
                            alt="close icon"
                            width={180}
                            height={55}
                            className="m-auto"
                            unoptimized={true}
                            priority={true}
                        />
                    </div>
                    <div className="bg-[#88BD4B] w-3/4 rounded-[2px]">
                        <p className="text-white text-[14px] font_family_Montserrat_Medium leading-[16px] px-2 py-2">
                            Нажми на меня, чтобы показать визитку
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-6">
                <div className="border-[#88BD4B] border-[2px] border-r-[1px] h-[60px] w-[53%] flex place-items-center justify-evenly">
                    <p className="text-white text-[36px] text-center font_family_CodaCaption_ExtraBold tracking-[-0.08em]">
                       {/* {user.points} */}{user.referals.length * 10}
                    </p>
                    <div className="flex flex-col place-items-center">
                        <Image
                            src="/images/conffu/bonuss.png"
                            alt="close icon"
                            width={30}
                            height={55}
                            unoptimized={true}
                            priority={true}
                        />
                        <p className="text-white text-[14px] font_family_Montserrat_Medium leading-[16px]">
                            Баллов
                        </p>
                    </div>
                </div>
                <div className="border-[#88BD4B] border-[2px] border-l-[1px] h-[60px] w-[47%] flex place-items-center justify-evenly">
                    <p className="text-white text-[36px] text-center font_family_CodaCaption_ExtraBold tracking-[-0.08em]">
                        {user.referals.length}
                    </p>
                    <div className="flex flex-col place-items-center">
                        <Image
                            src="/images/conffu/people.png"
                            alt="close icon"
                            width={30}
                            height={55}
                            unoptimized={true}
                            priority={true}
                        />
                        <p className="text-white text-[14px] font_family_Montserrat_Medium leading-[16px]">
                            Знакомств
                        </p>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={async () => {
                    const newUser = await revalidateKith(user.platformUserId)
                    setUser({...user, ...newUser})
                }}
                placement={modalPlacement}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className="flex flex-col  bg-gray-800 rounded-xl py-4">
                                <div className="flex flex-col mx-4">
                                    <p
                                        className={`text-white text-left leading-tight font_family_Monda font-normal m-auto pb-2`}
                                    >
                                        Твой QR-код для приглашения:
                                    </p>
                                    <p
                                        className="text-sky-400	text-left leading-tight font_family_Montserrat font-normal"
                                        id="linkreferal"
                                    ></p>
                                </div>
                                <div className="grid items-center w-full">
                                    <Image
                                        src={qrCode}
                                        alt="close icon"
                                        width={300}
                                        height={300}
                                        unoptimized={true}
                                        className="m-auto rounded-2xl"
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Znakomstva
