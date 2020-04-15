## Auto Init

### Markup

```html
<m-auto-init @end="textField = $event" ref="component">
  <label class="mdc-text-field" data-mdc-auto-init="MDCTextField">
    <span class="mdc-text-field__ripple"></span>
    <input class="mdc-text-field__input" type="text" aria-labelledby="label">
    <span id="label" class="mdc-floating-label">Input Label</span>
    <span class="mdc-line-ripple"></span>
  </label>
</m-auto-init>
```

### Script

```javascript
data () {
  return {
    textField: undefined // after initialization, it will be an MDCTextField instance
  }
}
```

### Re-Initialize

```javascript
this.$refs.component.destroy()
this.$refs.component.$el.removeAttribute('data-mdc-auto-init-state')
```

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| end | `MDCComponent` | emitted when the component being initialized |

### Methods

| Method | Description |
|-------|-------------|
| destroy | calling `MDCComponent.destroy`, useful in re-initialization |

### Slots

| Slot | Description |
|------|-------------|
| default | a material component dom. **Can only contain one element** |


### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-auto-init
