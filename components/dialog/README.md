## Dialog

[Codepen example](https://codepen.io/chankcccc/pen/aeYpBJ)

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

Close via setting `isDialogOpen` to false will emit `closing` and `closed` event without the `action` value in its payload.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| scrollable | Boolean | false | scrollable body |
| open | Boolean | false | dialog starts in open state |
| stacked | Boolean | true | whether the buttons are stacked vertically automatically |
| escapeKeyAction | String | 'close' | Sets the action reflected when the Escape key is pressed. Setting to '' disables closing the dialog via Escape key. |
| scrimClickAction | String | 'close' | Sets the action reflected when the scrim is clicked. Setting to '' disables closing the dialog via scrim click. |
| ariaDescribedby | String | `${id}-content` or 'my-dialog-content' | `aria-describedby` of the dialog element and the `id` of the content element |
| ariaLabelledby | String | `${id}-title` or 'my-dialog-title' | `aria-labelledby` of the dialog element and the `id` of the title element |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| opening | {} | emitted when dialog is opening |
| opened | {} | emitted when dialog is opened |
| closing | { action?: value } | emitted when dialog is closing |
| closed | { action?: value } | emitted when dialog is closed |

The complete order of events emitted in the open and close process is `opening`, `opened`, `closing`, `change` and `closed`


### Slots

| Slot | Description |
|------|-------------|
| header | header/title of dialog |
| body | body/content of dialog |
| acceptButton | accept button and the default button |
| cancelButton | cancel button |
| dialogButton | additional button(s) |

### Accessibility Concerns

Dialog should have at least one focusable element, e.g. buttons in dialogButton slots. For providing messages, use `<m-snackbar>` instead.

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog
