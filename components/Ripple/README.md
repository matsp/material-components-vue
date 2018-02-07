## Ripple

### Markup

```html
<m-ripple accent ref="r">
    Ripple
</m-ripple>
```

### Script

```javascript
this.$refs.r.activate()
```

### Props & methods

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| unbounded | Boolean | false | unbounded ripple |
| accent | Boolean | false | ripple with secondary theme color |

| Method | Description |
|--------|-------------|
| activate() | activate the ripple |
| deactivate() | deactivate the ripple |
| layout() | recomputes all dimensions and positions |

### Slots

| Slot | Description |
|------|-------------|
| default | - | ripple content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple