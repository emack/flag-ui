import { Select } from "antd"
import { ConfigItemType } from "../types"

const { Option } = Select

const buildOption = (value: (string | number)): JSX.Element => <Option key={value}>{value}</Option>

const SettingSelect = ({ defaultValue, options = [] }: ConfigItemType) => {
    const selectOptions = options.map(buildOption)
    return (
        <Select size="small" defaultValue={defaultValue}>{selectOptions}</Select>
    )
}
export default SettingSelect