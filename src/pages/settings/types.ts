import { ElementType } from "./enums"

export type ConfigItemType = {
    defaultValue: boolean | string | number
    type: ElementType
    options?: string[] | number[]
}

export type ChildrenItemType = {
    label: string
    config: ConfigItemType[]
    children?: any
}

export type ChildrenItemsType = {
    items: ChildrenItemType[]
}

export type ChildrenType = { children: ChildrenItemsType[] }

export type SettingsType = Record<string, ChildrenType> 

export type SettingsContextType = SettingsType | null