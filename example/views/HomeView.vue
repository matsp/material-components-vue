<template>
    <m-layout-grid-inner>
        <m-fab :mini="true" :absoluteRight="true" icon="favorite" @click="openDialog" />
        <m-dialog :visible="dialogVisible" :heading="3" @accept="dialogAccepted" @cancel="dialogCanceled">
            <span slot="dialogHeader"> Header </span>
            <span slot="dialogBody"> Body </span>
            <m-button slot="dialogAcceptButton" text="Accept" />
            <m-button slot="dialogCancelButton" text="Cancel" />
            <m-button slot="dialogButton" text="Anything" />
        </m-dialog>
        <m-layout-grid-cell :span="4">
            <m-form-field :alignEnd="true">
                <m-checkbox id="checkboxOne" v-model="checkboxOne" :indeterminate="true" disabled/>
                <label for="checkboxOne">Checkbox</label>
            </m-form-field>
            <m-form-field :alignEnd="true">
                <m-checkbox id="checkboxTwo" v-model="checkboxOne"/>
                <label for="checkboxTwo">Checkbox</label>
            </m-form-field>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="4">
            <m-icon-toggle v-model="iconToggle" :accent="true" icon="favorite" />
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</template>

<script>

export default {
    data() {
        return {
            dialogVisible: false,
            checkboxOne: false,
            iconToggle: false
        }
    },
    methods: {
        openDialog() {
            this.dialogVisible = true
        },
        closeDialog() {
            this.dialogVisible = false
        },
        dialogAccepted() {
            // do something
            this.closeDialog()
        },
        dialogCanceled() {
            // do something
            this.closeDialog()
        }
    },
    computed: {

    }
}
</script>

<style>
@import '~material-components-vue/dist/material-components-vue.css';
</style>

