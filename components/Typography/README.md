## Typography

### Markup

```html
<m-typography>
    <m-typo-display :level="4">Display 4</m-typo-display>
    <m-typo-headline>Headline</m-typo-headline>
    <m-typo-title>Title</m-typo-title>
    <m-typo-subheading :level="1">Subheading 1</m-typo-subheading>
    <m-typo-body :level="2">Body 2</m-typo-body>
    <m-typo-caption>Caption</m-typo-caption>
    <m-typo-button>Button</m-typo-button>
</m-typography>
```

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | typography content |

## Body

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | Number | - | body level could be 1 or 2 |
| adjustMargin | Boolean | false | adjust margins to other elements |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Button

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| adjustMargin | Boolean | false | adjust margins to other elements |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Caption

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| adjustMargin | Boolean | false | adjust margins to other elements |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Display

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | Number | - | display level could be between 1 and 4 |
| adjustMargin | Boolean | false | adjust margins to other elements |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Headline

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| adjustMargin | Boolean | false | adjust margins to other elements |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Subheading

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | Number | - | subheading level could be 1 or 2 |
| adjustMargin | Boolean | false | adjust margins to other elements |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

## Title

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| adjustMargin | Boolean | false | adjust margins to other elements |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar
