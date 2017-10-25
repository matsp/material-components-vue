## Card

### Markup

```html
<m-card>
    <m-card-media-item slot="media" :height="1" src="..." />
    <m-typo-title slot="title">Title</m-typo-title>
    <m-typo-subheading :level="1" slot="subtitle">
        Subtitle
    </m-typo-subheading>
    <m-typo-body :level="1" slot="supportingText">
        Text
    </m-typo-body>
    <m-button slot="actions">Action</m-button>
</m-card>
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| verticalActions | Boolean | - | false | renders actions vertical |
| largeTitle | Boolean | - | false | larger title (without typography component)| 
| horizontal | Boolean | -| false | renders media, title & subtitle horizontal

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| horizontalMedia | horizontal | horizontal card media item |
| horizontalTitle | horizontal, largeTitle | horizontal card title |
| horizontalSubtitle | horizontal | horizontal card subtitle |
| media | - | card media item |
| title | largeTitle | card title |
| subtitle | - | card subtitle |
| supportingText | - | card text |
| actions | verticalActions | card actions

## CardMediaItem

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| height | Number | - | false | image scale between 1 and 3


### Reference
- https://github.com/material-components/material-components-web/tree/master/packages/mdc-card
