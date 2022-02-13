import { Space } from "antd";
import { FC } from "react";
import { ElementType } from "../enums";
import { ChildrenItemType, ConfigItemType } from "../types";
import SettingSelect from "./SettingSelect";
import SettingSwitch from "./SettingSwitch";

const element: Record<string, FC<ConfigItemType>> = {
    [ElementType.select]: SettingSelect,
    [ElementType.switch]: SettingSwitch,
}

const ElementConfig = ({ label, config }: ChildrenItemType): JSX.Element => {
    return <Space>
        {config.map(item => {
            const Element = element[item.type]
            return <Element key={label} {...item} />
            })
        }
    </Space>

}

export default ElementConfig