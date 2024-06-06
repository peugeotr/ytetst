import api from '../../axiosClient'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic';


export const GET = async (req: NextRequest) => {
    try {
        const platformUserId = req.nextUrl.searchParams.get('platformUserId')
       
        const { data } = await api.get(`user/kith/${platformUserId}`)
        
        return new Response(JSON.stringify(data), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response('Failed to order create', { status: 500 })
    }
} //if not creator