import { SettingsType } from "../../pages/settings/types"

const schema = {
    General: {
        children: [
            {
                items: [
                    {
                        label: 'CASE MANAGEMENT',
                        config: [{type: 'select', defaultValue: 4, options: [1, 2, 3, 4, 5]}, {type: 'switch', defaultValue: true}],
                    }
                ]
            },
            {
                items: [
                    {
                        label: 'NOTIFICATIONS',
                        config: [{type: 'switch', defaultValue: true}],
                    }
                ]
            },
            {
                items: [
                    {
                        label: 'MAP TIMELINE',
                        config: [{type: 'switch', defaultValue: true}],
                    }
                ]
            },
            {
                items: [
                    {
                        label: 'MASS COMMUNICATION',
                        config: [{type: 'switch', defaultValue: false}],
                    }
                ]
            },
            {
                items: [
                    {
                        label: 'TRAFFIC CAMERAS',
                        config: [{type: 'switch', defaultValue: false}],
                    }
                ]
            },
        ],
    },
    Settings: {
        children:[
            {
                items: [
                    {
                        label: 'Audit Log',
                        config: [{type: 'switch', defaultValue: true}],
                    },
                    {
                        label: 'USERS',
                        config: [{type: 'switch', defaultValue: false}],
                        children: [
                            {
                                label: 'USERS ADD',
                                config: [{type: 'switch', defaultValue: true}],
                            },
                            {
                                label: 'USERS DELETE',
                                config: [{type: 'switch', defaultValue: false}],
                            },
                            {
                                label: 'MAX USERS',
                                config: [{type: 'select', defaultValue: 2, options: [1, 2, 3, 4]}, {type: 'switch', defaultValue: true}],
                            }
                        ]
                    },
                ]
            },
        ],
    },
    Alerts: {
        children:[
            {
                items: [
                    {
                        label: 'ALERT MANAGER',
                        config: [{type: 'switch', defaultValue: true}],
                    },
                    {
                        label: 'ALERT RULES',
                        config: [{type: 'switch', defaultValue: false}],
                    },
                ]
            },
        ],
    },
} as SettingsType

export default schema