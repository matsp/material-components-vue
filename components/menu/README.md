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

#### Selection Group Menu

```html
<m-menu>
  <m-list>
    <li>
      <m-menu-selection-group>
        <m-list-item>
          <m-icon slot="graphic" icon="refresh"></m-icon>
          <template slot="text">Refresh</template>
        </m-list-item>
        <m-list-item>
          <m-icon slot="graphic" icon="favorite"></m-icon>
          <template slot="text">Favorite</template>
        </m-list-item>
      </m-menu-selection-group>
    </li>
    <m-list-divider></m-list-divider>
    <m-list-item><!-- some other list items --></m-list-item>
  </m-list>
</m-menu>
```

#### Disabled Menu Items

Disabled menu items will be excluded from keyboard navigation.

```html
<m-menu>
  <m-list>
    <m-list-item disabled></m-list-item>
  </m-list>
</m-menu>
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
| anchorCorner | [Number, String] | `TOP_LEFT` | Sets the corner that the menu surface will be anchored to. Can be one of the following: `TOP_LEFT`, `TOP_RIGHT`, `BOTTOM_LEFT`, `BOTTOM_RIGHT`, `TOP_START`, `TOP_END`, `BOTTOM_START`, `BOTTOM_END` |
| absolutePositionX | Number | null | Sets the absolute x position of the menu. Should only be used when the menu is hoisted or using fixed positioning. |
| absolutePositionY | Number | null | Sets the absolute y position of the menu. Should only be used when the menu is hoisted or using fixed positioning. |
| hoistToBody | Boolean | false | Removes the menu-surface element from the DOM and appends it to the body element. Should be used to overcome overflow: hidden issues. |
| fixed | Boolean | false | Sets whether the menu surface is using fixed positioning. |
| wrapFocus | Boolean | true | Sets the list to allow the up arrow on the first element to focus the last element of the list and vice versa. |
| defaultFocusState | [Number, String] | `LIST_ROOT` | Sets default focus state where the menu should focus every time when menu is opened. Focuses the list root (`LIST_ROOT`) element by default. Can be one of the following: `NONE`, `LIST_ROOT`, `FIRST_ITEM`, `LAST_ITEM` |
| selectedIndex | Number | -1 | Sets the list item to the selected state at the specified index. Do nothing when value is lower than 0. |
| isHoisted | Boolean | false | Sets whether the menu surface has been hoisted to the body so that the offsets are calculated relative to the page and not the anchor. |
 
### Events

| Event | Payload | Description |
|-------|---------|-------------|
| selected | { index: Number, item: HTMLElement } | emitted when menu item is selected |

### Slots

| Slot |  Description |
|------|--------------|
| default | menu content (list) |

## Menu Anchor

### Slots

| Slot | Description |
|------|-------------|
| default | should be the menu |

## Menu Surface 

### Markup

```html
<m-menu-surface>
 ...
</m-menu-surface>
```

#### Anchor To Parent

```html
<div id="toolbar" class="toolbar mdc-menu-surface--anchor">
  <m-menu-surface>
  ...
  </m-menu-surface>
</div>
```

#### Anchor To Element Within Wrapper

```html
<m-menu-anchor>
  <button id="menu-surface-button" @click="open=true">Open Menu Surface</button>
  <m-menu-surface v-model="open">
  ...
  </m-menu-surface>
</m-menu-anchor>
```

```javascript
data() {
    return {
        open: false
    }
}
```

#### Fixed Position

```html
<m-menu-surface fixed></m-menu-surface>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| quickOpen | Boolean | false | Sets whether the menu surface should open and close without animation. |
| open | Boolean | false | Opens the menu surface (could be v-modeled). |
| anchorCorner | [Number, String] | `TOP_LEFT` | Sets the corner that the menu surface will be anchored to. Can be one of the following: `TOP_LEFT`, `TOP_RIGHT`, `BOTTOM_LEFT`, `BOTTOM_RIGHT`, `TOP_START`, `TOP_END`, `BOTTOM_START`, `BOTTOM_END` |
| absolutePositionX | Number | null | Sets the absolute x position of the menu surface. Should only be used when the menu is hoisted or using fixed positioning. |
| absolutePositionY | Number | null | Sets the absolute y position of the menu surface. Should only be used when the menu is hoisted or using fixed positioning. |
| hoistToBody | Boolean | false | Removes the menu-surface element from the DOM and appends it to the body element. Should be used to overcome `overflow: hidden` issues. |
| fixed | Boolean | false | Sets whether the menu surface is using fixed positioning. |
| isHoisted | Boolean | false | Sets whether the menu surface has been hoisted to the body so that the offsets are calculated relative to the page and not the anchor. |
 
 ### Slots
 
| Slot | Description |
|------|-------------|
| default | content in the menu surface |

## Menu Selection Group

Used to wrap a group of `<m-list-item>` that will represent a selection group.

```html
<m-list>
  <li>
    <m-menu-selection-group>
      <m-list-item></m-list-item>
    </m-menu-selection-group>
  </li>
</m-list>
```

### Slots

| Slot | Description |
|------|-------------|
| default | a group of `<m-list-item>` that will represent a selection group |


### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu