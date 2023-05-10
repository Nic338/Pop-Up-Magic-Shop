import { useEffect, useState } from "react"
import { HomePage } from "./homePage/HomePage"
import { ShopList } from "./shop/ShopList"
import { getMagicItems } from "./ApiManager"

export const ShopContainer = () => {

    const [levelInfo, setLevelInfo] = useState({
        partyLevel: ""
    })
    const [areaInfo, setAreaInfo] = useState({
        shopArea: ""
    })
    const [wealthInfo, setWealthInfo] = useState({
        shopWealth: ""
    })

    const levelSelectList = (event) => {
        const copy = { ...levelInfo }
        copy.partyLevel = parseInt(event.target.value)

        setLevelInfo(copy)
    }
    const shopAreaList = (event) => {
        const copy = { ...areaInfo }
        copy.shopArea = parseInt(event.target.value)

        setAreaInfo(copy)
    }
    const shopWealthList = (event) => {
        const copy = { ...wealthInfo }
        copy.shopWealth = parseInt(event.target.value)
        setWealthInfo(copy)
    }


    const [magicItems, setMagicItems] = useState([])
    const [showList, setShowList] = useState(false)

    useEffect(() => {
        getMagicItems()

            .then((itemsArray) => setMagicItems(itemsArray))
    }, [])

    return (
        !showList ?
            <>
                <HomePage levelInfo={levelInfo}
                    setLevelInfo={setLevelInfo}
                    levelSelectList={levelSelectList}
                    areaInfo={areaInfo}
                    etAreaInfo={setAreaInfo}
                    shopAreaList={shopAreaList}
                    wealthInfo={wealthInfo}
                    setWealthInfo={setWealthInfo}
                    shopWealthList={shopWealthList}
                    setShowList={setShowList} />
            </>
            : <>
                <ShopList levelInfo={levelInfo}
                    areaInfo={areaInfo}
                    wealthInfo={wealthInfo}
                    magicItems={magicItems}
                    setMagicItems={setMagicItems}
                    setShowList={setShowList} />
            </>
    )
}
