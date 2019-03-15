## Dialog

### Markup

```html
<m-button raised @click="isDialogOpen=true">Dialog</m-button>
<m-dialog
  v-model="isDialogOpen"
  @closed="onDialogClosed">
  <m-typo-headline :level="5" slot="header">Header</m-typo-headline>
  <m-typo-body :level="1" slot="body">Body</m-typo-body>
  <m-button 
    class="mdc-dialog__button"
    data-mdc-dialog-action="Cancel"
    slot="cancelButton">
    Cancel
  </m-button>
  <m-button
    class="mdc-dialog__button"
    data-mdc-dialog-action="OK"
    slot="acceptButton">
    OK
  </m-button>
</m-dialog>
```

### Script
```javascript
data () {
  return {
    isDialogOpen: false
  }
},
methods: {
  onDialogClosed (value) {
    console.log(value)
  }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| scrollable | Boolean | false | scrollable body |
| open | Boolean | false | dialog starts in open state |
| stacked | Boolean | true | whether the buttons are stacked vertically automatically |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| closed | { action: value } | emitted when dialog is closed |

### Slots

| Slot | Description |
|------|-------------|
| header | header of dialog |
| body | body of dialog |
| acceptButton | accept button |
| cancelButton | cancel button |
| dialogButton | additional button(s) |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog
