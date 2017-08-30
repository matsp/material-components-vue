<template>
    <layout-grid-inner>
        <layout-grid-cell modifier="2 4-desktop">
            <fab modifier="absolute" icon="favorite" @click.native="openDialog" />
            <dlg :visible="dialogVisible" @accept="dialogAccepted" @cancel="dialogCanceled">
                <span slot="header"> Header </span>
                <span slot="body"> Body </span>
                <btn slot="footerAcceptButton" modifier="primary"> Accept </btn>
                <btn slot="footerCancelButton" modifier="primary"> Cancel </btn>
                <btn slot="footerButton" modifier="primary"> Anything </btn>
            </dlg>
        </layout-grid-cell>
    </layout-grid-inner>
</template>

<script>
import LayoutGridInner from 'components/LayoutGridInner'
import LayoutGridCell from 'components/LayoutGridCell'
import Fab from 'components/Fab'
import Dlg from 'components/Dialog'
import Btn from 'components/Button'

export default {
    components: { Fab, LayoutGridCell, LayoutGridInner, Dlg, Btn },
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
