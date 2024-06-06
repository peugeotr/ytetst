import { NextRequest } from 'next/server'
import api from '../axiosClient'

export const dynamic = 'force-dynamic';

export const GET = async (req: NextRequest) => {
    try {
        console.log('GET USER', { req: req.nextUrl.searchParams })
        const platformUserId = req.nextUrl.searchParams.get('platformUserId')
        const params = JSON.parse(req.nextUrl.searchParams.get('params') as string)
        let dataParams = { ...params }
        if (params.shortName) dataParams['name'] = 1
        if (params.userStatus) dataParams['orders'] = 1

        const { data } = await api.get(`user/${platformUserId}/?params=${JSON.stringify(dataParams)}`)
        //console.log({ data })

        let user = {
            /*_id: data._id,
            tgUsername: data.tg_username,
            phone: data.phone,
            birthday: data.birthday,
            referals: data.referals,
            orders: data.orders,
            configProfile: configProfile*/
        }
        if (params._id) user['_id'] = data._id
        if (params.platformUserId) user['platformUserId'] = data.platformUserId
        if (params.photo_url) user['photo_url'] = data.photo_url
        if (params.name) user['name'] = data.name
        if (params.tg_username) user['tg_username'] = data.tg_username
        if (params.birthday) user['birthday'] = data.birthday
        if (params.phone) user['phone'] = data.phone

        if (params.city) user['city'] = data.city
        if (params.company) user['company'] = data.company
        if (params.job) user['job'] = data.job
        if (params.mail) user['mail'] = data.mail

        if (params.referals) user['referals'] = data.referals
        if (params.orders) user['orders'] = data.orders
        if (params.points) user['points'] = data.points || 0
        if (params.shortName) user['shortName'] = data.name ?
            data.name
                .split(' ')
                .map((element, index) => {
                    if (index == 0) {
                        return element
                    } else {
                        return element[0]
                    }
                })
                .join(' ')
            :
            ''
        return new Response(JSON.stringify(user), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response('Failed to find all bot messages', { status: 500 })
    }
}