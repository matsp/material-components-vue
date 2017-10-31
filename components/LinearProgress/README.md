## LinearProgress

### Markup

```html
<m-linear-progress ref="progress" open :progress="0.5" :buffer="0.5" indeterminate />
```

### Script 

```javascript
this.$refs.progress.show()
this.$refs.progress.hide()
```

### Props & methods

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| open | Boolean | - | false | initial state |
| indeterminate | Boolean | - | false | indeterminate state |
| reverse | Boolean | - | false | reverse direction of progress |
| accent | Boolean | - | false | secondary theme color |
| progress | Number | - | false | progress value between 0 and 1 |
| buffer | Number | - | false | buffer value between 0 and 1 |

| Method | Description |
|--------|-------------|
| show | show the progress |
| hide | hide the progress |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress