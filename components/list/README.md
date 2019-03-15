## List

### Markup

```html
<m-list>
    <m-list-group>
        <m-list-group-subheader>
            Group 1
        </m-list-group-subheader>
        <m-list-item>
            Item X
        </m-list-item>
    </m-list-group>
    <m-list-group-divider />
    <m-list-group>
        <m-list-group-subheader>
            Group 2
        </m-list-group-subheader>
        <m-list-item>
            Item Y
        </m-list-item>
    </m-list-group>
</m-list>
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| avatar | Boolean | false | false | avatar list (large, circular start detail) |
| dense | Boolean | false | false | densed list |
| twoLine | Boolean | false | false | twoline list |
| nonInteractive | Boolean | false | false | disables interactivity |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | list content |

## ListDivider

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| inset | Boolean | false | false | inset instead full-width divider |
| padded | Boolean | false | false | padded instead full-width divider |

## ListGroup

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | content of ListGroup |

## ListGroupDivider

## ListGroupSubheader

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | group subheader |

## ListItem

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activated | Boolean | false | activated item |
| selected | Boolean | false | selected item |

### Slots

| Slot | Description |
|------|-------------|
| graphic | first tile |
| text | content when single-line list |
| primaryText | first row of content when twoline list |
| secondaryText | second row of content when twoline list |
| meta | end tile |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-list
