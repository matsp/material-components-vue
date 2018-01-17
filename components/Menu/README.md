## Menu

### Markup

```html
<m-menu-anchor>
    <m-button @click="showMenu">open</m-button>
    <m-menu ref="menu" v-model="selectedMenuEntry">
      <m-list>
        <m-list-item @click="clicked">
            Entry 1
        </m-list-item>
        <m-list-divider />
        <m-list-item>
            Entry 2
        </m-list-item>
      </m-list>
    </m-menu>
</m-menu-anchor>
```

### Script

```javascript
methods: {
    clicked() {
        // do something
    },
    showMenu() {
        this.$refs.menu.show()
    }
},
data() {
    return {
        selectedMenuEntry: null
    }
}

```

### Props & methods

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| startOpen | Boolean | - | false | whether the menu should be open at start |
| dense | Boolean | - | false | whether the menu entries should be densed |
| twoline | Boolean | - | false | whether the menu entries should be twoline |

| Method | Description |
|--------|-------------|
| show | show the menu |
| hide | hide the menu |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | menu content (list) |

## MenuAnchor

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | should be the menu |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu