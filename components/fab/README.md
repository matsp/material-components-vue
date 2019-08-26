## Fab

### Markup

```html
<m-fab aria-label="Favorite">
    <m-fab-icon class="material-icons">favorite</m-fab-icon>
</m-fab>
```

### Extended FAB

```html
<m-fab>
    <m-fab-icon class="material-icons">add</m-fab-icon>
    <m-fab-label>Create</m-fab-label>
</m-fab>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mini | Boolean | false | modifies the FAB to a smaller size |
| absoluteRight | Boolean | false | **Might be deprecated in future version and not recommended.** Whether the fab should be rendered on the bottom right |
| exited | Boolean | false | animates the fab out of view |
| ripple | Boolean | true | use js ripple or not |
| href | String | '' | render as `<a class="m-fab">` if presented |

Events and attributes are mapped to the inner button element.

### Slots

| Slot | Description |
|------|-------------|
| default | fab content |

### Additional Information

#### Positioning

Developers must position `<m-fab>` as needed within their application’s design.

```html
<style>
.app-fab--absolute {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

@media(min-width: 1024px) {
   .app-fab--absolute {
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>
<m-fab class="app-fab--absolute" aria-label="Favorite">
  <m-fab-icon class="material-icons">favorite</m-fab-icon>
</m-fab>
```

## Fab Icon

```html
<m-fab-icon class="material-icons">favorite</m-fab-icon>
```

or use SVG, Font Awesome or any other icon library you wish.

```html
<m-fab-icon tag="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z"/>
    <!-- other path -->
</m-fab-icon>
```

```html
<m-fab-icon tag="i" class="far fa-heart"></m-fab-icon>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| tag | String | 'span' | specify which tag to render to, can be `span`, `i`, `img`, or `svg` |

### Slots 

| Slot | Description |
|------|-------------|
| default | icon content |

## Fab Label

Applicable only for Extended FAB. A FAB will be automatically extended if includes a FAB label. 

```html
<m-fab-label>create</m-fab-label>
```

### Slots

| Slot | Description |
|------|-------------|
| default | label content |

## Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab
