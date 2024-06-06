import UserCard from "../../../components/UserCard"

async function getServerSideProps({ platformUserId }: any) {
    'use server'

    try {
        const response = await fetch(
            `${process.env.URL}/api/users/?platformUserId=${platformUserId}&params=${JSON.stringify({ platformUserId: 1, tg_username: 1, name: 1, phone: 1, city: 1, company: 1, job: 1, mail: 1, points: 1, referals: 1, referalsPlus: 1, photo_url: 1 })}`, { next: { tags: ['user', 'kith'] } }
        )
        let user = await response.json()
        user = JSON.parse(JSON.stringify(user))
        //console.log({ user })

        return {
            user
        }

    } catch (error: any) {
        console.log(error)
        return ({ error: error['response']?.data })
    }
}

export default async function Page(ctx: any) {

    const platformUserId = ctx.searchParams.platformUserId
    const props = await getServerSideProps({ platformUserId })
    //console.log(platformUserId)

    //console.log('CART', JSON.stringify({ cart, summ, adminUrl, ball }))

    return (
        <>
            <UserCard user={props.user}></UserCard>
        </>
    )
}



