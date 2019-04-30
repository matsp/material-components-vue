## Menu

### Markup

```html
<m-menu-anchor>
  <m-button raised @click="isMenuOpen=true">open</m-button>
  <m-menu v-model="isMenuOpen">
    <m-list>
      <m-list-item>Entry 1</m-list-item>
      <m-list-divider/>
      <m-list-item>Entry 2</m-list-item>
    </m-list>
  </m-menu>
</m-menu-anchor>
```

### Script

```javascript
data() {
    return {
        isMenuOpen: false
    }
}

```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| quickOpen | Boolean | false | Deactivates menu animation. |
| open | Boolean | false | Open the menu (could be v-modeled). |
| anchorCorner | String | `TOP_START` | Sets the corner that the menu surface will be anchored to. Can be one of the following: `TOP_LEFT`, `TOP_RIGHT`, `BOTTOM_LEFT`, `BOTTOM_RIGHT`, `TOP_START`, `TOP_END`, `BOTTOM_START`, `BOTTOM_END` |
| absolutePositionX | Number | null | Sets the absolute x position of the menu. Should only be used when the menu is hoisted or using fixed positioning. |
| absolutePositionY | Number | null | Sets the absolute y position of the menu. Should only be used when the menu is hoisted or using fixed positioning. |
| hoistToBody | Boolean | false | Removes the menu-surface element from the DOM and appends it to the body element. Should be used to overcome overflow: hidden issues. |
| fixed | Boolean | false | Sets whether the menu surface is using fixed positioning. |
| wrapFocus| Boolean| true | Sets the list to allow the up arrow on the first element to focus the last element of the list and vice versa. |
| defaultFocusState | [Number, String] | null | Sets default focus state where the menu should focus every time when menu is opened. Focuses the list root (`LIST_ROOT`) element by default. Can be one of the following: `NONE`, `LIST_ROOT`, `FIRST_ITEM`, `LAST_ITEM` |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| select | { index: Number, item: HTMLElement } | emitted when menu item is selected |
| cancel | - | emitted when menu interaction is cancelled |

### Slots

| Slot |  Description |
|------|--------------|
| default | menu content (list) |

## MenuAnchor

### Slots

| Slot | Description |
|------|-------------|
| default | should be the menu |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu
