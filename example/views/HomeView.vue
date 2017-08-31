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
            <checkbox :checked="true" />
            <form-field>
                <checkbox slot="formFieldInput"/>
                <label slot="formFieldLabel">Checkbox</label>
            </form-field>
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

export default {
    components: { Fab, LayoutGridCell, LayoutGridInner, Dlg, Btn, Checkbox, FormField },
    data() {
        return {
            dialogVisible: false
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
    }
}
</script>
