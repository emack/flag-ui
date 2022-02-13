import { ReactNode } from "react"
import schema from "../../../../common/services/schema"
import SettingsContext from "../../context"

const { Provider } = SettingsContext

type SettingsProviderType = {
    children: ReactNode
}
const SettingsProvider = ({ children }: SettingsProviderType) => {

    return <Provider value={schema}>{children}</Provider>
}

export default SettingsProvider