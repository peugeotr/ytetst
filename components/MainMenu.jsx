'use client'

import { useEffect, useState } from "react"
import UserProfile from '../components/UserProfile'
import Label from '../components/Label'
import Znakomstva from '../components/Znakomstva'
import LogoText from '../components/LogoText'
import Programms from '../components/Programms'

export default function MainMenu({ getUser, setKith, revalidateKith }) {
    const [platformUserId, setPlatformUserId] = useState(0)
    const [user, setUser] = useState({ configProfile: {} })
    const [qrCode, setQrCode] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [loadUser, setLoadUser] = useState(false)

    const toggleLoad = () => {
        setIsLoaded(!isLoaded)
    }

    useEffect(() => {
        const fetchGet = async () => {
            try {
                if (tg) {
                    if (tgData.user) {
                        tg.BackButton.hide()

                        setPlatformUserId(tgData.user.id)
                        const dataUser = await getUser({ platformUserId: tgData.user.id })

                        setUser(dataUser.user)
                        console.log(dataUser.user)
                        setQrCode(dataUser.qrFile)
                        setLoadUser(true)
                    } else {
                        setPlatformUserId(0)
                        setUser({ configProfile: {} })
                    }
                    setTimeout(toggleLoad, 3000)
                }
            } catch (error) {
                alert(error)
            }
        }
        fetchGet()
    }, [])

    return (
        <>
            {isLoaded && loadUser && user.shortName ? (
                <div className="flex flex-col overflow-x-hidden w-full">
                    <UserProfile user={user} botConfig={{}} />
                    <Label />
                    <Znakomstva
                        points={user.points}
                        user={user}
                        setUser={setUser}
                        qrCode={qrCode}
                        setKith={setKith}
                        revalidateKith={revalidateKith}
                    />
                    <LogoText platformUserId={platformUserId}
                    />
                    <Programms/>
                </div>
            ) : (
                <>
                    <div className="conffudiv absolute top-0 left-0 right-0 bottom-0 m-auto">
                        <p className="conffuloader">{'CONF-FU DAY 2024'}</p>
                    </div>
                </>
            )}
        </>
    )
}