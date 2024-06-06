'use client'

const Label = () => {
   
    return (
        <>
            <div className="mt-[1px]">
                <div className="bg-white">
                    <p className="text-[#88BD4B] text-[60px] font_family_DelaGothicOne_Regular leading-[55px] pb-2 text_shadow_green">
                        CONF-FU
                    </p>
                </div>
                <div
                    className="flex flex-row place-content-center"
                    style={{
                        background:
                            'linear-gradient(90deg, #88BD4B 50%, transparent 50%)',
                    }}
                >
                    <div className="bg-[#88BD4B] w-auto px-4">
                        <p className="text-white text-[55px] font_family_DelaGothicOne_Regular leading-[55px] pb-2 text_shadow_3d">
                            2024
                        </p>
                    </div>
                    <div className="bg-white border-[2px] border-[#88BD4B] flex origin-top-left rotate-[7deg] mt-[-8px]">
                        <p className="text-[#88BD4B] text-[60px] font_family_DelaGothicOne_Regular leading-[55px] pb-2 text_shadow_green">
                            DAY
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Label
