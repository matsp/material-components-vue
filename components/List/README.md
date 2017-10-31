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
| avatar | Boolean | - | false | avatar list (large, circular start detail) |
| darkTheme | Boolean | - | false | dark theming |
| dense | Boolean | - | false | densed list |
| twoLine | Boolean | - | false | twoline list |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | list content |

## ListDivider

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| inset | Boolean | - | false | inset instead full-width divider |

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

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| interactive | Boolean | - | false | ripple effect |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | list item content |
| startDetail | - | start detail of content e.g. an icon |
| primaryText | - | first row of content when twoline list |
| secondaryText | - | second row of content when twoline list |
| endDetail | - | end detail of content e.g. an icon |



### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-list