
import Znakomye from '../../../components/Znakomye'

async function getServerSideProps({ platformUserId }) {
    'use server'

    try {
        const response = await fetch(
            `${process.env.URL}/api/users/getkith/?platformUserId=${platformUserId}`, { next: { tags: ['kith'] } }
        )
        let kith = await response.json()
        kith = JSON.parse(JSON.stringify(kith))
    console.log({ kith })

        return {
            kith
        }

    } catch (error) {
        console.log(error)
        return ({ error: error['response']?.data })
    }
}

export default async function Myznakomstva(ctx) {
    const platformUserId = ctx.searchParams.platformUserId
    const props = await getServerSideProps({ platformUserId })
    return (
        <Znakomye kith={props.kith}/>
    )
}
