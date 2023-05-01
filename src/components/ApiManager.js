export const getPartyLevel = () => {
    return fetch(`http://localhost:8088/partyLevel`)
    .then(response => response.json())
}
export const getShopArea = () => {
    return fetch(`http://localhost:8088/shopArea`)
    .then(response => response.json())
}
export const getShopWealth = () => {
    return fetch(`http://localhost:8088/isItPoor`)
    .then(response => response.json())
}
export const getMagicItems = () => {
    return fetch(`http://localhost:8088/magicItems`)
    .then(response => response.json())
}