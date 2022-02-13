import { createContext } from "react"
import { SettingsContextType } from "../types"

const SettingsContext = createContext<SettingsContextType>(null)

export default SettingsContext