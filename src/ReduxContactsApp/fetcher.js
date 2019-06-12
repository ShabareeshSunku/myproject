//custom middleware which intercepts all the actions
//and check if any data fetch is required based on some flags and appropriately handles

const fetcher = (store) => (next) => action => {
    if (!action.async || !action.reqUrl) {
        return next(action)
    }

    fetch(action.reqUrl)
        .then((res) => res.json())
        .then((data) => {
            if (action.transform) {
                data = action.transform(data)
            }
            return next({ ...action, ...data })
        })
}

export default fetcher