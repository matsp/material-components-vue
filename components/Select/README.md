## Select

### Markup

```html
<m-select v-model="selected">
  Select
  <m-menu slot="menu">
    <m-list>
      <m-list-item>Entry 1</m-list-item>
      <m-list-divider />
      <m-list-item>Entry 2</m-list-item>
    </m-list>
  </m-menu>
</m-select>
```

### Script

```javascript
data() {
    return {
        selected: null
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| disabled | Boolean | - | false | whether the select should be disabled |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | select label |
| menu | - | select menu |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-select
