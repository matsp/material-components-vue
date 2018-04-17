## LinearProgress

### Markup

```html
<m-linear-progress
  :open="isProgressOpen"
  :progress="0.5"
  :buffer="0.5"
  indeterminate/>
```

### Script 

```javascript
data () {
  return {
    isProgressOpen: true
  }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| open | Boolean | false | - | linear progress starts in open state |
| indeterminate | Boolean | false | - | indeterminate state |
| reverse | Boolean | false | - | reverse direction of progress |
| progress | Number | - | false | progress value between 0 and 1 |
| buffer | Number | - | false | buffer value between 0 and 1 |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress
