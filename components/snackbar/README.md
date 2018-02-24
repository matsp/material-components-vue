## Snackbar

### Markup

```html
<m-snackbar ref="snackbar" />
```

### Script

```javascript
let options = {
  message: 'snackbar message'
}

this.$refs.snackbar.show(options)
```

### Props & methods

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| alignStart | Boolean | - | false | start-aligned snackbar |
| dismissesOnAction | Boolean | true | false | keep snackbar when action button is pressed |

| Method | Description |
|--------|-------------|
| show | show the snackbar with given options |

The show() function takes a object as parameter to configure the snackbar. The benefit is that you don't have to add more than one snackbar in your template to show different snackbars. Have a look at the [reference](https://github.com/material-components/material-components-web/blob/master/packages/mdc-snackbar/README.md#showing-a-message-and-action) for details of the options object.

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar
