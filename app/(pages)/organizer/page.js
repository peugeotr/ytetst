'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Organizer() {
    return (
        <div className="flex flex-col overflow-x-hidden w-full place-items-center">
            <div className="flex place-items-center place-content-center mb-6">
                <p className="text-[#88BD4B] text-[30px] leading-[30px] font_family_DelaGothicOne_Regular my-2 pb-2">
                    Организаторы конференции
                </p>
            </div>
            <Link
                href="https://vcentre.pro/?utm_source=conffukz"
                target="_blank"
            >
                <Image
                    src="/images/conffu/vcentr.png"
                    alt="close icon"
                    width={240}
                    height={55}
                    className="m-auto"
                    unoptimized={true}
                    priority={true}
                />
            </Link>
            <p className="text-white text-left leading-5 font_family_Montserrat_Medium pt-6 px-4">
                Группа компаний «В Центре» в мебельной отрасли с 2012 года.
                Ключевое направление - продажа мебельной фурнитуры и
                оборудования для производства мебели по всей России. Содержит в
                себе 4 направления для мебельного рынка:
            </p>
            <p className="text-white text-left leading-5 font_family_Montserrat_Medium pt-4 px-4">
                ⁃ Складская программа - поставка мебельной фурнитуры по
                Санкт-Петербургу и Лен. области;
                <span>
                    <br />
                </span>
                ⁃ Внешнеэкономическая деятельность - поставка мебельной
                фурнитуры из Китая по всей России, услуги ВЭД.
                <span>
                    <br />
                </span>
                ⁃ Организаторы Мебельной Конференции Conf-Fu в Санкт-Петербурге
                на 4000 человек;
                <span>
                    <br />
                </span>
                ⁃ Разработка iT решений для мебельного бизнеса.
            </p>
            <div className="flex flex-col">
                <Link
                    href="https://vcentre.pro/?utm_source=conffukz"
                    target="_blank"
                >
                    <p className="font_family_Montserrat_Medium pt-2 text-left text-[#88BD4B]">
                        ⮑ Сайт «Conf-Fu»
                    </p>
                </Link>
                <Link
                    href="https://vcentre.pro/?utm_source=conffukz"
                    target="_blank"
                >
                    <p className="font_family_Montserrat_Medium pt-2 text-left text-[#88BD4B]">
                        ⮑ Сайт «В Центре»
                    </p>
                </Link>
                <Link
                    href="https://vcentre.pro/?utm_source=conffukz"
                    target="_blank"
                >
                    <p className="font_family_Montserrat_Medium pt-2 text-left text-[#88BD4B]">
                        ⮑ Сайт «В Центре IT»
                    </p>
                </Link>
            </div>
            <Link
                href="https://shkolamebeli.kz/?utm_source=conffukz"
                target="_blank"
                className="mt-8"
            >
                <Image
                    src="/images/conffu/kz.png"
                    alt="close icon"
                    width={240}
                    height={55}
                    className="m-auto"
                    unoptimized={true}
                    priority={true}
                />
            </Link>
            <p className="text-white text-left leading-5 font_family_Montserrat_Medium pt-6 px-4">
                Школа Мебели организована для всех, кто желает научиться,
                повысить квалификацию или организовать мебельный бизнес.
            </p>
            <p className="text-white text-left leading-5 font_family_Montserrat_Medium pt-4 px-4">
                Открылось заведение в 2012 году, и за эти годы количество
                учеников превысило 1700 человек. Опыт, репутация,
                профессионализм и сотрудничество с ведущими зарубежными
                компаниями выводит Школу Мебели на самые высокие позиции
                профессиональных учебных центров. Подобного учебного центра с
                набором курсов нет не только в Казахстане, но и в России,
                Кыргызстане, Узбекистане. Школа Мебели располагается только в
                Алматы.
            </p>
            <Link
                href="https://shkolamebeli.kz/?utm_source=conffukz"
                target="_blank"
            >
                <p className="font_family_Montserrat_Medium pt-2 text-left text-[#88BD4B]">
                    ⮑ Сайт компании
                </p>
            </Link>
            <Link
                href="https://www.instagram.com/shkolamebeli.kz?igsh=dWwzbTVlNWUwYmtv&utm_source=conffukz"
                target="_blank"
            >
                <p className="font_family_Montserrat_Medium pt-2 pb-8 text-left text-[#88BD4B]">
                    ⮑ Instagram
                </p>
            </Link>
        </div>
    )
}
