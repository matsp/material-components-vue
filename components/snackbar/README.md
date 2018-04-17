## Snackbar

### Markup

```html
<m-button
  raised
  interactive
  @click="isSnackbarOpen=true">open</m-button>
<m-snackbar
  :options="options"
  v-model="isSnackbarOpen"/>
```

### Script

```javascript
data () {
  return {
    isSnackbarOpen: false,
    options: {
      message: 'I am a snackbar!',
      timeout: 3000,
      actionHandler: () => console.log('snackbar action'),
      actionText: 'ok',
      multiline: false,
      actionOnBottom: false
    }
  }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| alignStart | Boolean | false | - | start-aligned snackbar |
| dismissesOnAction | Boolean | true | - | keep snackbar when action button is pressed |
| options | Object | - | true | snackbar options (see script section)|

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar
