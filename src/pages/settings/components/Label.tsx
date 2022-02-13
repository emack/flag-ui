import { Col } from "antd"

type LabelType = {
    label: string
}
const Label = ( { label }: LabelType): JSX.Element => <Col flex="auto">{label}</Col>

export default Label