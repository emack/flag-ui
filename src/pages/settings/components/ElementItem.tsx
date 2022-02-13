import { Collapse, Row } from "antd";
import { ChildrenItemType } from "../types";
import ElementConfig from "./ElementConfig";
import Label from "./Label";

const { Panel } = Collapse

const getItemConfig = (item: ChildrenItemType) => 
    <Row key={item.label}>
        <Label label={item.label} />
        <ElementConfig {...item}/>
    </Row>

const CollapsibleElement = (item: ChildrenItemType) => 
    <Collapse ghost accordion expandIconPosition="right">
        <Panel header={getItemConfig(item)} key="1" collapsible="header">
            {item.children.map(getItemConfig)}
        </Panel>
    </Collapse>

const ElementItem = (item: ChildrenItemType) => {
    
    if (item.children) return CollapsibleElement(item)

    return getItemConfig(item)
}
export default ElementItem