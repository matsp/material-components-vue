<template>
    <div class="drawer-frame-root">
        <m-drawer>
            <m-drawer-header sub-title="email@material.io" title="Mail"/>
            <div class="mdc-drawer__content">
                <m-list>
                    <m-list-item activated tabindex="0">
                        <m-icon icon="inbox" slot="graphic"/>
                        Inbox
                    </m-list-item>
                    <m-list-item>
                        <m-icon icon="star" slot="graphic"/>
                        Star
                    </m-list-item>
                    <m-list-item>
                        <m-icon icon="send" slot="graphic"/>
                        Sent Mail
                    </m-list-item>
                    <m-list-item>
                        <m-icon icon="drafts" slot="graphic"/>
                        Drafts
                    </m-list-item>
                    <m-list-group-divider/>
                    <m-list-group-subheader>Labels</m-list-group-subheader>
                    <m-list-item>
                        <m-icon icon="bookmark" slot="graphic"/>
                        Family
                    </m-list-item>
                    <m-list-item>
                        <m-icon icon="bookmark" slot="graphic"/>
                        Friends
                    </m-list-item>
                    <m-list-item>
                        <m-icon icon="bookmark" slot="graphic"/>
                        Work
                    </m-list-item>
                    <m-list-group-divider/>
                    <m-list-item>
                        <m-icon icon="settings" slot="graphic"/>
                        Settings
                    </m-list-item>
                    <m-list-item>
                        <m-icon icon="announcement" slot="graphic"/>
                        Help & feedback
                    </m-list-item>
                </m-list>
            </div>
        </m-drawer>
        <div class="drawer-frame-app-content">
            <m-top-app-bar class="drawer-top-app-bar" title="Permanent Drawer"/>
            <div class="drawer-main-content">
                <m-top-app-bar-fixed-adjust/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'PermanentDrawerDemo'
  }
</script>

<style scoped>
    .drawer-frame-root {
        display: -ms-flexbox;
        display: flex;
        height: 100vh;
    }

    .drawer-main-content {
        overflow: auto;
        height: 100%;
        padding: 0 18px;
    }

    .drawer-top-app-bar {
        position: absolute;
    }

    .drawer-frame-app-content {
        position: relative;
    }
</style>
