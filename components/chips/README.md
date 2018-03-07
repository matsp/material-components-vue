## ChipSet

### Markup

```html
<m-chip-set>
  <m-chip>Chip content</m-chip>
  <m-chip>
    <m-icon
      icon="event"
      slot="leadingIcon"/>
    Add to calendar
  </m-chip>
</m-chip-set>
```

### Props & methods

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| choice | Boolean | false | single selection chips in set |
| filter | Boolean | false | multiple selection chips in set |

| Method | Description |
|--------|-------------|
| getSelectedChips | returns all selected chips of the set as array |

## Chip

### Slots

| Slot | Description |
|------|-------------|
| default | chip content |
| leadingIcon | leading icon |
| trailingIcon | trailingIcon |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips
