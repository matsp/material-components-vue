## LayoutGrid

### Markup

```html
<m-layout-grid>
    <m-layout-grid-inner>
        <m-layout-grid-cell :span="4">
            <span> Cell 1 </span>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="4">
            <span> Cell 2 </span>
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</m-layout-grid>
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| align | String | - | false | alignment of grid: 'left' or 'right' |
| fixedColumnWidth | Boolean | - | false | fixed column width |

### Slots

| Slot | Description |
|------|-------------|
| default | should be LayoutInnerGrid |

## LayoutGridCell

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| span | Number | - | false | cell span from 1 to 12 |
| spanDesktop | Number | - | false | cell span from 1 to 12 on desktop |
| spanTablet | Number | - | false | cell span from 1 to 12 on tablet |
| span Phone | Number | - | false | cell span from 1 to 12 on phone |
| order | Number | - | false | cell order from 1 to 12 |
| align | String | - | false | cell alignment could be 'top', 'middle' and 'bottom' |

### Slots

| Slot | Description |
|------|-------------|
| default | content of GridCell |

## LayoutGridInner

### Slots

| Slot | Description |
|------|-------------|
| default | should be GridCells |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid
