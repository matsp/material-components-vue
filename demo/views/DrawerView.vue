<template>
    <m-layout-grid-inner>
        <m-layout-grid-cell :span="12">
            <m-typo-display :level="1">Drawer</m-typo-display>
            <m-typo-body :level="2">
                <a href="https://github.com/matsp/material-components-vue/blob/master/components/Drawer">
                    https://github.com/matsp/material-components-vue/blob/master/components/Drawer
                </a>
            </m-typo-body>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="12">
            <m-typo-headline>PermanentDrawer</m-typo-headline>
            <m-permanent-drawer>
                <span slot="toolbarSpacer" />
                <m-permanent-drawer-item interactive>
                    Item
                </m-permanent-drawer-item>
                <m-drawer-item-divider />
                <m-permanent-drawer-item interactive>
                    Item 2
                </m-permanent-drawer-item>
            </m-permanent-drawer>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="12">
            <m-typo-headline>PersistentDrawer</m-typo-headline>
            <m-button interactive raised @click="$refs.persistentDrawer.toggle()">toggle</m-button>
            <m-persistent-drawer ref="persistentDrawer">
                <span slot="toolbarSpacer" />
                <m-persistent-drawer-item interactive>
                    Item
                </m-persistent-drawer-item>
                <m-persistent-drawer-item interactive>
                    Item 2
                </m-persistent-drawer-item>
            </m-persistent-drawer>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="12">
            <m-typo-headline>TemporaryDrawer</m-typo-headline>
            <m-button interactive raised @click="$refs.temporaryDrawer.toggle()">toggle</m-button>
            <m-temporary-drawer ref="temporaryDrawer">
                <m-temporary-drawer-item interactive>
                    Item
                </m-temporary-drawer-item>
                <m-temporary-drawer-item interactive>
                    Item 2
                </m-temporary-drawer-item>
            </m-temporary-drawer>
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</template>
