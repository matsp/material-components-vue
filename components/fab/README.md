## Fab

### Markup

#### Basic Usage

```html
<m-fab aria-label="Add">
    <m-icon icon="add" slot="icon"></m-icon>
</m-fab>
```

#### Extended FAB

```html
<m-fab aria-label="Create">
    <m-icon icon="add" slot="icon"></m-icon>
    Create
</m-fab>
```

#### Using Font Awesome

```html
<m-fab aria-label="Take photo">
    <i class="fas fa-camera" slot="icon"></i>
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
| icon | leading icon in extended fab |
| trailingIcon | trailing icon in extended fab |

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
  <m-icon icon="favorite" slot="icon"></m-icon>
</m-fab>
```

## Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab
