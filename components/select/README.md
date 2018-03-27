## Select

### Markup

```html
<m-select v-model="selected">
  Select
  <m-menu slot="menu">
    <m-list>
      <m-list-item id="entry-1">
        Entry 1
      </m-list-item>
      <m-list-divider />
      <m-list-item id="entry-2">
        Entry 2
      </m-list-item>
    </m-list>
  </m-menu>
</m-select>
```

### Script

```javascript
data() {
    return {
        selected: ''
    }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| selected | String | '' | selected item id if available - when not the string of the selected item - otherwise empty string |
| disabled | Boolean | false | whether the select should be disabled |
| box | Boolean | false | renders a select box |

### Slots

| Slot | Description |
|------|-------------|
| default | select label |
| menu | select menu |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-select
