import { useNavigate } from "react-router-dom"


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
export const getOrdersWithDetails = () => {
    return fetch(`http://localhost:8088/orders?_expand=magicItem`)
    .then(response => response.json())
}
export const createNewOrderData = (itemToSendToAPI) => {
    return fetch(`http://localhost:8088/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itemToSendToAPI)
    })
    .then(response => response.json())
}

export const deleteAllOrders = (orders) => {
    const fetchArray = []
    orders.forEach((order) => {
        fetchArray.push(
            fetch(`http://localhost:8088/orders/${order.id}`, {
                method: "DELETE"
            })
            )
        })
        Promise.all(fetchArray)
        .then()
    }

    export const getSpecificMagicItem = (item) => {
        return fetch(`http://localhost:8088/magicItems/${item.id}`)
        .then(response => response.json)
    }
    export const editItem = (propItem) => {
        return fetch(`http://localhost:8088/magicItems/${propItem.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(propItem)
        })
        .then(response => response.json())
    }