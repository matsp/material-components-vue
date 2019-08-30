## Elevation

Material Components Vue provides a customized directive `v-elevation` to provide any components with elevation or shadow.

### Minimal Usage

```html
<m-button raised :v-elevation="1">Button</my-button>
```

### Add transition between different elevations

```html
<m-button raised v-elevation.transition="elevation">Button</my-button>
```

```js
data () {
  return {
    elevation: 1 // change this value to see the transition
  }
}
```

Or you can use a component.

### Markup

```html
<m-elevation :level="20" transition>
    <span>elevated</span>
</m-elevation>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| level | Number | - | true | level of elevation between 1 and 24 |
| transition | Boolean | - | false | whether there should be transition between elevation levels |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | elevation content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation
