import { Card } from 'antd'
import styled from "styled-components"

const CardStyled = styled(Card)`
    .ant-card-grid {
        width: 25%;

        .ant-collapse-item .ant-collapse-header-text {
            width: 100%;
        }
    }
`

export default CardStyled