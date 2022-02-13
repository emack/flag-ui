import { useContext } from "react"
import { pathOr } from "ramda"
import SettingsContext from "../context"
import { ChildrenItemsType } from "../types"
import ElementItem from "./ElementItem"
import CardStyled from "./CardStyled"

type CardsType = {
    header: string
}

const Cards = ({ header }: CardsType) => {
    const data  = useContext(SettingsContext)
    const children = pathOr([] as ChildrenItemsType[], [header, 'children'], data)

    return (
        <CardStyled title={header}>
            {children.map(({ items }, index) => 
                <CardStyled.Grid key={index}>
                    {items.map(item => <ElementItem key={item.label} {...item} />)}
                </CardStyled.Grid>
            )}
        </CardStyled>
    )
}
export default Cards