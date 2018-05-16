## ChipSet

### Markup

```html
<m-chip-set>
  <m-chip>Chip content</m-chip>
  <m-chip v-model="selected">
    <m-icon
      icon="event"
      slot="leadingIcon"/>
    Add to calendar
  </m-chip>
</m-chip-set>
```

### Script

```javascript
data() {
  return {
    selected: false
  }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| choice | Boolean | false | single selection chips in set |
| filter | Boolean | false | multiple selection chips in set |
| input | Boolean | false | indicates that the chips in the set are input chips (for converting text in a chip) |

## Chip

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| selected | Boolean | false | state of chip (could be v-modeled) |

### Slots

| Slot | Description |
|------|-------------|
| default | chip content |
| leadingIcon | leading icon |
| trailingIcon | trailing icon |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips
