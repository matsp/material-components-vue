## Card

### Markup

```html
<m-card primaryAction>
  <m-typo-headline class="demo">
    Title
  </m-typo-headline>
  <m-typo-body
    class="demo"
    :level="1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </m-typo-body>
  <m-button
    interactive
    slot="actionButtons"
    href="https://github.com/matsp/material-components-vue/blob/master/components/Card">
    github
  </m-button>
</m-card>
```
### CSS

```css
 .demo {
   padding: 8px 16px;
 }
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| stroked | Boolean | false | renders a hairline stroke |
| fullBleedAction | Boolean | false | a single action will take up the entire space in the row |
| primaryAction | Boolean | false | visual support for a primary action on the card |

### Slots

| Slot | Description |
|------|-------------|
| default | card content |
| media | media content |
| actionButtons | button components |
| actionIcons | icon components |

## CardMedia

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| square | Boolean | true | square media |
| sixteenNine | Boolean | false | 16:9 media |

### Slots

| Slot | Description |
|------|-------------|
| default | media content |

### Reference
- https://github.com/material-components/material-components-web/tree/master/packages/mdc-card
