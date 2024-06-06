import api from '../../axiosClient'

export const POST = async (req: any) => {
    try {
        const { body } = await req.json()
        console.log('POST CREATE KITH', body)
        await api.post(`user/kith`, {
            kith: body
        })
        return new Response(JSON.stringify({ success: true }), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response('Failed to order create', { status: 500 })
    }
} //if not creator