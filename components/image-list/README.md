## ImageList

### Markup

```html
  <m-image-list
    :standardColumn="2"
    textProtection>
    <m-image-list-item>
      <img slot="image" src="../assets/images/cat.jpg">
      Cat
    </m-image-list-item>
    <m-image-list-item> 
      <img slot="image" src="../assets/images/cat.jpg">
      Cat
    </m-image-list-item>
    <m-image-list-item>
      <img slot="image" src="../assets/images/cat.jpg">
      Cat
    </m-image-list-item>
    <m-image-list-item>
      <img slot="image" src="../assets/images/cat.jpg">
      Cat
    </m-image-list-item>
  </m-image-list>
</m-image-list>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| standardColumn | Number | - | standard columns per line |
| masonryColumn | Number | - | masonry columns per line |
| textProtection | Boolean | false | label will be positioned in a scrim overlaying each image |

### Slots

| Slot | Description |
|------|-------------|
| default | should be ImageListItem(s) |

## ImageListItem

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| adjustAspectRatio | Boolean | true | adjusts the ratio of images for standard columns |

### Slots

| Slot |Description |
|------|-------------|
| default | image label |
| image | img element |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list
