<template>
    <ul id = "nav-menu" class = "page-header-nav-menu">
        <MenuItem 
        v-for="arrItem in menuArr" 
        :key="arrItem.href"
        :href="arrItem.href"
        :label="arrItem.label"
        :category="arrItem.category"
        :submenu="arrItem.submenu"
        :className="'page-header-nav-item'"
        />
    </ul>
</template>

<script>

import MenuItem from './MenuItem';

export default {
    components: {
        MenuItem,
    },
    data(){
        return {
            menuArr: [{
                    href: "controllers",
                    label: "Controllers",
                    category: "Controllers",
                    submenu: [{
                            href: "controllers/esp",
                            label: "ESP",
                            category: "ESP",
                            submenu: [],
                        },
                        {
                            href: "controllers/arduino",
                            label: "Arduino",
                            category: "Arduino",
                            submenu: [],
                        },
                        {
                            href: "controllers/raspberry",
                            label: "Raspberry",
                            category: "Raspberry",
                            submenu: [],
                        },
                        {
                            href: "controllers/stm",
                            label: "STM",
                            category: "STM",
                            submenu: [],
                        },
                    ],
                },
                {
                    href: "periferals",
                    label: "Periferals",
                    category: "Periferals",
                    submenu: [{
                            href: "periferals/thermosensors",
                            label: "Thermosensors",
                            category: "Thermosensors",
                            submenu: [],
                        },
                        {
                            href: "periferals/air-quality",
                            label: "Air quality",
                            category: "Air quality",
                            submenu: [],
                        },
                        {
                            href: "periferals/relay",
                            label: "Relay",
                            category: "Relay",
                            submenu: [],
                        },
                    ],
                },
                {
                    href: "about",
                    label: "About",
                    category: "About",
                    submenu: [],
                },
                {
                    href: "blog",
                    label: "Blog",
                    category: "Blog",
                    submenu: [],
                },
                {
                    href: "support",
                    label: "Support",
                    category: "Support",
                    submenu: [],
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    

</style>