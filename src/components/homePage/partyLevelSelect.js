import { MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"
import { getPartyLevel } from "../ApiManager"

export const Levels = ({levelInfo, setLevelSelect}) => {
   
 const [partyLevels, setPartyLevel] = useState([])

    useEffect(
        () => {
            getPartyLevel()
            .then(data => {
                setPartyLevel(data)
            })
        },[]
    )

    return (
        <>
            <select
                label="Average Party Level"
                value={levelInfo.partyLevel}
                onChange={event => setLevelSelect(event)}
                required>
                   <option value="">Select an Average Party Level</option>
                    {   
                        partyLevels.map(partyLevel => {
                            return <option key={partyLevel.id} value={partyLevel.id}>
                                {partyLevel.level}
                            </option>
                        })
                    }
                    
                </select>      
        </>
    )
}