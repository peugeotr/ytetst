const tg = typeof window !== 'undefined' ? window?.Telegram.WebApp : null

const HapticFeedback = async () => {
    tg?.HapticFeedback.impactOccurred('medium')
}

const tgData = tg.initDataUnsafe
tg.expand()
tg.enableClosingConfirmation()
tg.onEvent('viewportChanged', function () {
    tg.expand()
})
tg.setBackgroundColor('#2e2e2e')
tg.setHeaderColor('#2e2e2e')
tg.ready()
document.addEventListener(
    'DOMNodeInserted',
    function () {
        const taptic = document.getElementsByTagName('a')
        for (var i = 0; i < taptic.length; i++) {
            taptic[i].addEventListener('click', function (el) {
                HapticFeedback()
            })
        }
    },
    false
)
