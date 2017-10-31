## Menu

### Markup

```html
<m-menu-anchor>
    <m-button @click="showMenu"> open </m-button>
    <m-menu ref="menu" v-model="selectedMenuEntry">
        <m-menu-item @click="clicked">
            Entry 1
        </m-menu-item>
        <m-menu-divider />
        <m-menu-item>
            Entry 2
        </m-menu-item>
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

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| startOpen | Boolean | - | false | whether the menu should be open at start |
| openFromTopLeft | Boolean | - | false | opens the menu from top left |
| openFromTopRight | Boolean | - | false | opens the menu from bottom left |
| openFromBottomLeft | Boolean | - | false | opens the menu from bottom left |
| openFromBottomRight | Boolean | - | false | opens the menu from bottom right |
| dense | Boolean | - | false | whether the menu entries should be densed |
| twoline | Boolean | - | false | whether the menu entries should be twoline |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | menu content |

## MenuAnchor

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | should be the menu |

## MenuDivider

## MenuGroup

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | should be MenuItems |

## MenuGroupDivider

## MenuGroupSubheader

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | group subheader |

## MenuItem

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| disabled | Boolean | - | false | disabled menu items |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | menu item content |
| startDetail | - | menu start detail |
| primaryText | - | first row of content when twoline menu |
| secondaryText | - | second row of content when twoline menu |
| endDetail | - | menu end detail |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu