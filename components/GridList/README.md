## GridList

### Markup

```html
<m-grid-list startIcon twolineCaption>
    <m-grid-tile icon="edit">
        Edit
        <span slot="supporttext"> Supporttext </span>
    </m-grid-tile>
    <m-grid-tile> 
        Like you
        <m-button slot="primary"> Like </m-button>
        <m-icon slot="icon" icon="favorite"/>
    </m-grid-tile>
</m-grid-list>
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| headerCaption | Boolean | - | false | header instead of footer caption |
| twoLineCaption | Boolean | - | false | twoline instead of oneline caption |
| smallGutter | Boolean | - | false | 1px instead of 4px padding |
| startIcon | Boolean | - | false | caption with start icon |
| endIcon | Boolean | - | false | caption with end icon |
| ratio | String | '1x1' | false | grid tile ratio can be '1x1', '16x9', '2x3', '3x2', '4x3' and '3x4' |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | grid tiles |

## GridListTile

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| imgSrc | String | false | image source |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | grid tile title section |
| primary | imgSrc | primary content if image is not provided as source url |
| supporttext | - | supporting text for the caption |
| icon | - | icon component |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-grid-list
