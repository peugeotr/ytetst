'use client'

import {
    Avatar,
    Link,
} from '@nextui-org/react'

const UserProfile = ({ user }) => {

    return (
        <>
            <Link href={`/usercard?platformUserId=${user.platformUserId}`} className="flex flex-row mb-[1px]">
                <div className="bg-[#88BD4B] mr-[1px] h-[60px] w-3/4 flex flex-row place-items-center justify-center gap-4">
                    <Avatar
                        radius="full"
                        src={user.photo_url}
                        className="w-[50px] h-[50px] text-large border-2 border-white"
                    />
                    <div className="flex flex-col leading-5">
                        <p className="text-white text-[16px] font_family_Montserrat_Light">
                            Приветствуем вас,
                        </p>
                        <p className="text-white text-[20px] font_family_DelaGothicOne_Regular">
                            {user.shortName}
                        </p>
                    </div>
                </div>
                <div className="bg-[#88BD4B] ml-[1px] h-[60px] w-1/4 flex place-items-center place-content-center">
                    <p className="w-2/3 text-white text-[16px] font_family_Montserrat_Medium text_shadow_black leading-[18px]">
                        Моя анкета
                    </p>
                </div>
            </Link>
        </>
        
    )
}

export default UserProfile
