<template>
    <layout-grid-inner>
        <fab :mini="true" :absoluteRight="true" icon="favorite" @click.native="openDialog" />
        <dlg :visible="dialogVisible" :heading="3" @accept="dialogAccepted" @cancel="dialogCanceled">
            <span slot="dialogHeader"> Header </span>
            <span slot="dialogBody"> Body </span>
            <btn slot="dialogAcceptButton" text="Accept" />
            <btn slot="dialogCancelButton" text="Cancel" />
            <btn slot="dialogButton" text="Anything" />
        </dlg>
        <layout-grid-cell :span="4">
            <form-field :alignEnd="true">
                <checkbox id="checkboxOne" v-model="checkboxOne" :indeterminate="true" disabled/>
                <label for="checkboxOne">Checkbox</label>
            </form-field>
            <form-field :alignEnd="true">
                <checkbox id="checkboxTwo" v-model="checkboxOne"/>
                <label for="checkboxTwo">Checkbox</label>
            </form-field>
        </layout-grid-cell>
        <layout-grid-cell :span="4">
            <icon-toggle v-model="iconToggle" :accent="true" icon="favorite" />
        </layout-grid-cell>
    </layout-grid-inner>
</template>

<script>
import LayoutGridInner from 'components/LayoutGrid/LayoutGridInner'
import LayoutGridCell from 'components/LayoutGrid/LayoutGridCell'
import Fab from 'components/Fab'
import Dlg from 'components/Dialog'
import Btn from 'components/Button'
import Checkbox from 'components/Checkbox'
import FormField from 'components/FormField'
import IconToggle from 'components/IconToggle'

export default {
    components: { Fab, LayoutGridCell, LayoutGridInner, Dlg, Btn, Checkbox, FormField, IconToggle },
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
