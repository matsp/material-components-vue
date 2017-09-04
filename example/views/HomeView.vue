<template>
    <layout-grid-inner>
        <fab modifier="absolute" icon="favorite" @click.native="openDialog" />
        <dlg :visible="dialogVisible" @accept="dialogAccepted" @cancel="dialogCanceled">
            <span slot="header"> Header </span>
            <span slot="body"> Body </span>
            <btn slot="footerAcceptButton" modifier="primary raised"> Accept </btn>
            <btn slot="footerCancelButton" modifier="primary"> Cancel </btn>
            <btn slot="footerButton" modifier="primary"> Anything </btn>
        </dlg>
        <layout-grid-cell modifier="4">
            <form-field modifier="align-end">
                <checkbox id="checkboxOne" v-model="checkboxOne" />
                <label for="checkboxOne">Checkbox</label>
            </form-field>
        </layout-grid-cell>
        <layout-grid-cell modifier="12">
            <icon-toggle icon="favorite"/>
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
            checkboxOne: false
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
