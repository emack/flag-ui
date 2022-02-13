import { Switch } from "antd"
import { ConfigItemType } from "../types"


const SettingSwitch = ( { defaultValue }: ConfigItemType) => <Switch defaultChecked={defaultValue as boolean}/>

export default SettingSwitch