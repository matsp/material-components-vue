## Dialog

### Markup

```html
<m-dialog ref="dialog" @accepted="dialogAccepted" @canceled="dialogCanceled">
    <m-typo-headline slot="header">Header</m-typo-headline>
    <span slot="body"> Body </span>
    <m-button slot="acceptButton"> Accept </m-button>
    <m-button slot="cancelButton"> Cancel </m-button>
    <m-button slot="dialogButton"> Anything </m-button>
</m-dialog>
```

### Script
```javascript
this.$refs.dialog.show()
```

### Props & events & methods

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| scrollable | Boolean | - | false | scrollable body |

| Event | Description |
|------|------|
| accepted | will be dispatched when the accept button will be clicked |
| canceled | will be dispatched when the cancel button will be clicked |


| Method | Description |
|------|------|
| show | show the dialog

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| header | - | header of dialog |
| body | - | body of dialog |
| acceptButton | - | accept button |
| cancelButton | - | cancel button |
| dialogButton | - | additional button(s) |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog
