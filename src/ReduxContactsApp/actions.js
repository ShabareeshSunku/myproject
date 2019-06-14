
const action_types = {
    FETCH_CONTACTS: 'FETCH_CONTACTS',
    FETCH_CONTACTS_SUCEEDED : 'FETCH_CONTACTS_SUCEEDED'
}
//example having asyncflow in the action creator itself
// function fetchContacts(dispatch) {
//     fetch('https://api.randomuser.me/?results=200&seed=abc')
//         .then((res) => res.json())
//         .then((data) => {
//             const results = data.results || []
//             const resultsLen = results.length
//             const users = []
//             for (let i = 0; i < resultsLen; i++) {
//                 let ithResult = results[i]
//                 let fullName = `${ithResult.name.title}. ${ithResult.name.first}  ${ithResult.name.last}`
//                 let email = ithResult.email
//                 let thumbnail = ithResult.picture.large
//                 let address = `${ithResult.location.street} ${ithResult.location.city} ${ithResult.location.state} -${ithResult.location.postcode}`
//                 let id = ithResult.login.uuid
//                 users.push({
//                     name: fullName,
//                     email,
//                     thumbnail,
//                     address,
//                     id
//                 })
//             }
//             dispatch({ type: action_types.FETCH_CONTACTS, contacts: users })
//         })
//         .catch((err) => console.error(err))

// }

function parseData(data) {
    const results = data.results || []
    const resultsLen = results.length
    const contacts = []
    for (let i = 0; i < resultsLen; i++) {
        let ithResult = results[i]
        let fullName = `${ithResult.name.title}. ${ithResult.name.first}  ${ithResult.name.last}`
        let email = ithResult.email
        let thumbnail = ithResult.picture.large
        let address = `${ithResult.location.street} ${ithResult.location.city} ${ithResult.location.state} -${ithResult.location.postcode}`
        let id = ithResult.login.uuid
        contacts.push({
            name: fullName,
            email,
            thumbnail,
            address,
            id
        })
    }
    return { contacts }
}
function fetchContacts() {
    return {
        type: action_types.FETCH_CONTACTS,
        async: true,
        transform: parseData,
        reqUrl: 'https://api.randomuser.me/?results=100&seed=abc'
    }
}
export {
    action_types,
    fetchContacts
}