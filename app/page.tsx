import * as React from 'react'
import MainMenu from '../components/MainMenu'
import { revalidateTag } from 'next/cache'
import qr from 'qrcode'
import { createCanvas } from 'canvas';
import axios from 'axios';

async function getUser({ platformUserId }) {
    'use server'
    //console.log('getUser', platformUserId)

    revalidateTag('user')
    const response = await fetch(
        `${process.env.URL}/api/users/?platformUserId=${platformUserId}&params=${JSON.stringify({ _id: 1, platformUserId: 1, photo_url: 1, points: 1, shortName: 1, referals: 1, referalsPlus: 1 })}`, { next: { tags: ['user', 'kith'] } }
    )
    let user = await response.json()
    user = JSON.parse(JSON.stringify(user))
    //console.log({user})

    const response2 = await fetch(`https://api.telegram.org/bot${process.env.BOT_API_TOKEN}/getMe`)
    const botInfo = await response2.json()

    const qrFile = await qrCreate(user._id, botInfo)

    return { user, qrFile }
}

async function qrCreate(platformUserId, botInfo) {
    'use server'

    //console.log(`https://t.me/${botInfo.result.username}/?start=ref_firstaction`)
    const canvas = createCanvas(500, 500)
    //console.log({ canvas })
    qr.toCanvas(
        canvas,
        `https://t.me/${botInfo.result.username}/?start=ref_${platformUserId}`,
        {
            errorCorrectionLevel: "H",
            margin: 1,
            color: {
                dark: "#000000",
                light: "#ffffff",
            },
            width: 500
        }
    )
    return canvas.toDataURL("image/png")
}

async function setKith(userId, refUserId, platformUserId) {
    'use server'

    console.log(userId, refUserId, platformUserId)
    await axios.post(`${process.env.URL}/api/users/setkith`, {
        body: JSON.stringify({userId, refUserId})
    })
    
    revalidateTag('user')
    revalidateTag('kith')

    const response = await fetch(
        `${process.env.URL}/api/users/?platformUserId=${platformUserId}&params=${JSON.stringify({ referals: 1, referalsPlus: 1 })}`, { next: { tags: ['user', 'kith'] } }
    )
    let user = await response.json()
    user = JSON.parse(JSON.stringify(user))
    //console.log({user})

    return user
}

async function revalidateKith(platformUserId) {
    'use server'

    revalidateTag('user')
    revalidateTag('kith') 

    const response = await fetch(
        `${process.env.URL}/api/users/?platformUserId=${platformUserId}&params=${JSON.stringify({ referals: 1, referalsPlus: 1 })}`, { next: { tags: ['user', 'kith'] } }
    )
    let user = await response.json()
    user = JSON.parse(JSON.stringify(user))
    //console.log({user})

    return user
}

export default function Home() {
    return (
        <MainMenu getUser={getUser} setKith={setKith} revalidateKith={revalidateKith}></MainMenu>
    )
}
