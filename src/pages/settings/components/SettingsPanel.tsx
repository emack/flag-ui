import { keys } from "ramda"
import { useContext } from "react"
import SettingsContext from "../context"
import Cards from "./Card"

const SettingsPanel = (): JSX.Element => {
    const data = useContext(SettingsContext)
    const settingKeys = keys(data)
    
    return <>{settingKeys.map(setting => <Cards key={setting} header={setting}/>)}</>
}
export default SettingsPanel