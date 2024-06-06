'use client'

export default function Catalog({ children }) {
    if (typeof window !== 'undefined') {
        const tg = window['Telegram'].WebApp
        //console.log(tg)

        tg.BackButton.show()
        tg.BackButton.onClick(function () {
            window.history.back()
        })
    }
    return <>{children}</>
}
