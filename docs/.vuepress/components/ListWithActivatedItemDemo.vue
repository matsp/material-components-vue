<template>
    <ComponentSection>
        <m-list class="demo-list">
            <m-list-item>
                <m-icon icon="inbox" slot="graphic"/>
                Inbox
            </m-list-item>
            <m-list-item activated>
                <m-icon icon="star" slot="graphic"/>
                Star
            </m-list-item>
            <m-list-item>
                <m-icon icon="send" slot="graphic"/>
                Send
            </m-list-item>
            <m-list-item>
                <m-icon icon="drafts" slot="graphic"/>
                Drafts
            </m-list-item>
        </m-list>
    </ComponentSection>
</template>

<script>
  export default {
    name: 'ListWithActivatedItemDemo'
  }
</script>

<style scoped>
    .demo-list {
        max-width: 600px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: white;
    }
</style>
