## Image List

### Markup

```html
  <m-image-list
    :column="2"
    text-protection>
    <m-image-list-item>
      <img slot="image" src="../assets/images/cat.jpg" alt="Cat">
      Cat
    </m-image-list-item>
    <m-image-list-item> 
      <img slot="image" src="../assets/images/cat.jpg" alt="Cat">
      Cat
    </m-image-list-item>
    <m-image-list-item>
      <img slot="image" src="../assets/images/cat.jpg" alt="Cat">
      Cat
    </m-image-list-item>
    <m-image-list-item>
      <img slot="image" src="../assets/images/cat.jpg" alt="Cat">
      Cat
    </m-image-list-item>
  </m-image-list>
</m-image-list>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| column | Number | 0 | columns per line, `0` means not to shrink or grow |
| masonry | Boolean | false | masonry if `true`, standard if `false` |
| textProtection | Boolean | false | label will be positioned in a scrim overlaying each image |

### Slots

| Slot | Description |
|------|-------------|
| default | should be `<m-image-list-item>` |

## Image List Item

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| adjustAspectRatio | Boolean | true | adjusts the ratio of images for standard columns |

### Slots

| Slot | Description |
|------|-------------|
| default | image label |
| image | img element |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list
