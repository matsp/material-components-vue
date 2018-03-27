## ImageList

### Markup

```html
<m-image-list
  :standardColumn="2"
  textProtection>
  <m-image-list-item src="assets/images/pic1.png">
    Pic 1
  </m-image-list-item>
  <m-image-list-item src="assets/images/pic2.png">
    Pic 2
  </m-image-list-item>
  <m-image-list-item src="assets/images/pic3.png">
    Pic 3
  </m-image-list-item>
  <m-image-list-item src="assets/images/pic4.png">
    Pic 4
  </m-image-list-item>
</m-image-list>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| standardColumn | Number | 0 | standard columns per line |
| masonryColumn | Number | 0 | masonry columns per line |
| textProtection | Boolean | false | label will be positioned in a scrim overlaying each image |

### Slots

| Slot | Description |
|------|-------------|
| default | should be ImageListItem(s) |

## ImageListItem

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | String | - | src url of the image |
| adjustAspectRatio | Boolean | true | adjusts the ratio of images for standard columns |

### Slots

| Slot |Description |
|------|-------------|
| default | image label |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list
