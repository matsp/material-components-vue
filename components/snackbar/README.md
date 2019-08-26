## Snackbar

### Markup

```html
<m-button
  raised
  interactive
  @click="isSnackbarOpen=true">open</m-button>
<m-snackbar v-model="isSnackbarOpen" action-button-text="Retry" label-text="Can't send photo. Retry in 5 seconds."></m-snackbar>
```

### Script

```javascript
data () {
  return {
    isSnackbarOpen: false
  }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| timeoutMs | Number | 5000 | - |   Sets the automatic dismiss timeout in milliseconds. Value must be between 4000 and 10000 or an error will be thrown.  |
| closeOnEscape | Boolean | true | - | Sets whether the snackbar closes when it is focused and the user presses the ESC key. |
| labelText | String | - | true | Sets the text content of the label element. |
| open | Boolean | false | - | Set the snackbar's state. Can be `v-model` |
| actionButtonText | String | '' | false | Sets the text content of the action button element. |
| leading | Boolean | false | - | Positions the snackbar on the leading edge of the screen (left in LTR, right in RTL) instead of centered. |
| stacked | Boolean | false | - | Positions the action button/icon below the label instead of alongside it. |
| hasDismiss | Boolean | false | - | Weather the snackbar has the dismiss (“X”) icon. |
| dismissClass | String | 'material-icons' | false | Class for dismiss icon button. You can place class from other library, for example, Font Awesome's `fa` here. |

### Slots 

| Slot | Description |
|------|-------------|
| default | The text content of the label element. Same as the `labelText` prop. |
| dismiss | Content of the dismiss icon. |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar
