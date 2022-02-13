import SettingsProvider from "./Provider"
import SettingsPanel from "./SettingsPanel"

const Settings = (): JSX.Element => 
    <SettingsProvider>
      <SettingsPanel />
    </SettingsProvider>

export default Settings