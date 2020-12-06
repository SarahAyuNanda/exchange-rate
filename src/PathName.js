const PathName = {
    ROOT: '/',
    HOME: {
        BASEURL: '/home',
        DATE: {
            BASEURL: '/home/rate-by-date'
        },
        LATEST: {
            BASEURL: '/home/latest',
            LATEST_BASE: '/home/latest/rate-by-base',
            LATEST_SYMBOL: '/home/latest/rate-by-symbol'
        },
        HISTORY: {
            BASEURL: '/home/history',
            HISTORY_PERIODE: '/home/history/rate-by-periode',
            HISTORY_PERIODE_SYMBOL: '/home/history/rate-by-periode-symbol'
        }
    }
}

export default PathName