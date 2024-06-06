'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Partners() {
    return (
        <div className="flex flex-col overflow-x-hidden w-full">
            <p className="text-[#88BD4B] text-[22px] leading-[30px] font_family_DelaGothicOne_Regular my-2 pb-2">
                Партнеры конференции
            </p>
            <p className="text-[#88BD4B] text-[30px] leading-[30px] font_family_DelaGothicOne_Regular my-2 pb-2">
                Генеральные партнеры
            </p>
            <p className="text-[#88BD4B] text-[30px] leading-[30px] font_family_DelaGothicOne_Regular pt-10 pb-6">
                Стратегические партнеры
            </p>
            <Link
                href="https://asai-soft.com/?utm_source=conffukz"
                target="_blank"
            >
                <Image
                    src="/images/conffu/asai.png"
                    alt="close icon"
                    width={150}
                    height={55}
                    className="m-auto"
                    unoptimized={true}
                    priority={true}
                />
            </Link>
            <Link
                href="https://praktika.best/?utm_source=conffukz"
                target="_blank"
                className="mt-8"
            >
                <Image
                    src="/images/conffu/praktika.png"
                    alt="close icon"
                    width={240}
                    height={55}
                    className="m-auto"
                    unoptimized={true}
                    priority={true}
                />
            </Link>
            <Link
                href="https://ligamac.ru/?utm_source=conffukz"
                target="_blank"
                className="mt-8"
            >
                <Image
                    src="/images/conffu/lliga.png"
                    alt="close icon"
                    width={230}
                    height={55}
                    className="m-auto"
                    unoptimized={true}
                    priority={true}
                />
            </Link>
            <p className="text-[#88BD4B] text-[30px] leading-[30px] font_family_DelaGothicOne_Regular my-2 pt-10 pb-6">
                Золотые партнеры
            </p>
            <Link
                href="https://www.marya.ru/?utm_source=conffukz"
                target="_blank"
            >
                <Image
                    src="/images/conffu/maria.png"
                    alt="close icon"
                    width={240}
                    height={55}
                    className="m-auto"
                    unoptimized={true}
                    priority={true}
                />
            </Link>
            <Link
                href="https://ventamebel.com/?utm_source=conffukz"
                target="_blank"
                className="mt-8"
            >
                <Image
                    src="/images/conffu/vventa.png"
                    alt="close icon"
                    width={240}
                    height={55}
                    className="m-auto"
                    unoptimized={true}
                    priority={true}
                />
            </Link>
            <Link
                href="https://elarbis.com/?utm_source=conffukz"
                target="_blank"
                className="mt-8 mb-6"
            >
                <Image
                    src="/images/conffu/Elarbis.png"
                    alt="close icon"
                    width={240}
                    height={55}
                    className="m-auto"
                    unoptimized={true}
                    priority={true}
                />
            </Link>
        </div>
    )
}
