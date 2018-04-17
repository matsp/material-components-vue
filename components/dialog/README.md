## Dialog

### Markup

```html
<m-dialog
  v-model="isDialogOpen"
  @accept="accepted = true"
  @cancel="canceled = true">
  <m-typo-headline slot="header">Header</m-typo-headline>
  <m-typo-body slot="body">Body</m-typo-body>
  <m-button slot="acceptButton">Accept</m-button>
  <m-button slot="cancelButton">Cancel</m-button>
  <m-button slot="dialogButton">Anything</m-button>
</m-dialog>
```

### Script
```javascript
data () {
  return {
    isDialogOpen: false,
    accepted: false,
    canceled: false
  }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| scrollable | Boolean | false | scrollable body |
| open | Boolean | false | dialog starts in open state |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| accept | - | emitted when accept button will be clicked |
| cancel | - | emitted when cancel button will be clicked |

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
