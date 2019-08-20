## List

### Single-Line List

```html
<m-list>
    <m-list-item tabindex="0">
        <template slot="text">Single-line item</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Single-line item</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Single-line item</template>
    </m-list-item>
</m-list>
```

### Two-Line List

```html
<m-list two-line>
    <m-list-item tabindex="0">
        <template slot="primaryText">First-line text</template>
        <template slot="secondaryText">Second-line text</template>
    </m-list-item>
    <m-list-item>
        <template slot="primaryText">First-line text</template>
        <template slot="secondaryText">Second-line text</template>
    </m-list-item>
    <m-list-item>
        <template slot="primaryText">First-line text</template>
        <template slot="secondaryText">Second-line text</template>
    </m-list-item>
</m-list>
```

### List Groups

```html
<m-list-group>
    <m-list-group-subheader>List 1</m-list-group-subheader>
    <m-list>
        <m-list-item tabindex="0">
            <template slot="text">line item</template>
        </m-list-item>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
    </m-list>
    <m-list-group-subheader>List 2</m-list-group-subheader>
    <m-list>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
    </m-list>
</m-list-group>
```

### List Dividers

```html
<m-list>
    <m-list-item tabindex="0">
        <template slot="text">Item 1 - Division 1</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Item 2 - Division 1</template>
    </m-list-item>
    <m-list-divider></m-list-divider>
    <m-list-item>
        <template slot="text">Item 1 - Division 2</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Item 2 - Division 2</template>
    </m-list-item>
</m-list>
```

or

```html
<m-list>
    <m-list-item tabindex="0">
        <template slot="text">Item 1 - List 1</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Item 2 - List 1</template>
    </m-list-item>
</m-list>
<m-list-group-divider></m-list-group-divider>
<m-list>
    <m-list-item>
        <template slot="text">Item 1 - List 2</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Item 2 - List 2</template>
    </m-list-item>
</m-list>
```

### Single Selection List

```html
<m-list single-selection>
    <m-list-item tabindex="0">
        <template slot="text">Single-line item</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Single-line item</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Single-line item</template>
    </m-list-item>
</m-list>
```

#### Pre-selected list item

```html
<m-list single-selection>
    <m-list-item aria-selected="false">
        <template slot="text">Single-line item</template>
    </m-list-item>
    <m-list-item selected aria-selected="true" tabindex="0">
        <template slot="text">Single-line item</template>
    </m-list-item>
    <m-list-item aria-selected="false">
        <template slot="text">Single-line item</template>
    </m-list-item>
</m-list>
```

### List with radio group

```html
<m-list class="demo-list" role="radiogroup" v-model="selectedIndex">
    <m-list-item aria-checked="false" role="radio">
        <m-radio id="demo-list-radio-item-1"
                 name="demo-list-radio-item-group"
                 slot="meta" value="1"/>
        <label for="demo-list-radio-item-1">Dog Photos</label>
    </m-list-item>
    <m-list-item aria-checked="true" role="radio">
        <m-radio checked
                 id="demo-list-radio-item-2"
                 name="demo-list-radio-item-group" slot="meta" value="2"/>
        <label for="demo-list-radio-item-2">Cat Photos</label>
    </m-list-item>
    <m-list-divider/>
    <m-list-item aria-checked="false" role="radio">
        <m-radio id="demo-list-radio-item-3"
             name="demo-list-radio-item-group"
             slot="meta" value="3"/>
        <label for="demo-list-radio-item-3">Potatoes</label>
    </m-list-item>
    <m-list-item aria-checked="false" role="radio">
    <m-radio id="demo-list-radio-item-4"
           name="demo-list-radio-item-group"
           slot="meta" value="4"/>
    <label for="demo-list-radio-item-4">Carrots</label>
    </m-list-item>
</m-list>
```


```js
data () {
  return { selectedIndex: 1 }
}
```

### List with checkbox item

```html
<m-list aria-label="List with checkbox items" class="demo-list" role="group" v-model="selectedIndex">
    <m-list-item aria-checked="false" role="checkbox">
        <m-checkbox id="demo-list-checkbox-item-1"
                    name="demo-list-checkbox-item-group"
                    slot="meta" value="1"/>
        <label for="demo-list-checkbox-item-1">Dog Photos</label>
    </m-list-item>
    <m-list-item aria-checked="true" role="checkbox" tabindex="0">
        <m-checkbox checked
                    id="demo-list-checkbox-item-2"
                    name="demo-list-checkbox-item-group" slot="meta" value="2"/>
        <label for="demo-list-checkbox-item-2">Cat Photos</label>
    </m-list-item>
    <m-list-divider/>
    <m-list-item aria-checked="false" role="checkbox">
        <m-checkbox id="demo-list-checkbox-item-3"
                    name="demo-list-checkbox-item-group"
                    slot="meta" value="3"/>
        <label for="demo-list-checkbox-item-3">Potatoes</label>
    </m-list-item>
    <m-list-item aria-checked="false" role="checkbox">
        <m-checkbox id="demo-list-checkbox-item-4"
                    name="demo-list-checkbox-item-group"
                    slot="meta" value="4"/>
        <label for="demo-list-checkbox-item-4">Carrots</label>
    </m-list-item>
</m-list>
```


```js
data () {
  return { selectedIndex: [1] }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| avatar | Boolean | false | false | avatar list (large, circular start detail) |
| dense | Boolean | false | false | densed list |
| twoLine | Boolean | false | false | twoline list |
| nonInteractive | Boolean | false | false | disables interactivity |
| singleSelection | Boolean | false | false | Sets the list to be a selection list. Enables the enter and space keys for selecting/deselecting a list item. |
| vertical | Boolean | true | false | Sets the list to an orientation causing the keys used for navigation to change. true results in the Up/Down arrow keys being used. false results in the Left/Right arrow keys being used. |
| wrapFocus | Boolean | true | false | Sets the list to allow the up arrow on the first element to focus the last element of the list and vice versa. |
| selectedIndex | [Number, Array] | -1 | false | Can be `v-model`. Sets the selection state to given index or list of indexes if it is checkbox based list. |
| tag | String | `'ul'` | false | `'ul'` for `<ul class="m-list">`, `'nav'` for `<nav class="m-list">`, `'div'` for `<div class="m-list">` |
| js | Boolean | true | false | Whether or not to use an optional JavaScript component which can be used for keyboard interaction and accessibility. |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | list content |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| action | {index: number} | Indicates that a list item with the specified index has been activated. |

## List Divider and List Group Divider

### Markup 

```html
<m-list>
    <m-list-item tabindex="0">
        <template slot="text">Item 1 - Division 1</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Item 2 - Division 1</template>
    </m-list-item>
    <m-list-divider></m-list-divider>
    <m-list-item>
        <template slot="text">Item 1 - Division 2</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Item 2 - Division 2</template>
    </m-list-item>
</m-list>
```

or

```html
<m-list>
    <m-list-item tabindex="0">
        <template slot="text">Item 1 - List 1</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Item 2 - List 1</template>
    </m-list-item>
</m-list>
<m-list-group-divider></m-list-group-divider>
<m-list>
    <m-list-item>
        <template slot="text">Item 1 - List 2</template>
    </m-list-item>
    <m-list-item>
        <template slot="text">Item 2 - List 2</template>
    </m-list-item>
</m-list>
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| inset | Boolean | false | false | inset instead full-width divider |
| padded | Boolean | false | false | padded instead full-width divider |

## List Group

### Markup

```html
<m-list-group>
    <m-list-group-subheader>List 1</m-list-group-subheader>
    <m-list>
        <m-list-item tabindex="0">
            <template slot="text">line item</template>
        </m-list-item>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
    </m-list>
    <m-list-group-subheader>List 2</m-list-group-subheader>
    <m-list>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
        <m-list-item>
            <template slot="text">line item</template>
        </m-list-item>
    </m-list>
</m-list-group>
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| subheader | String | '' | false | Heading text displayed above the only list in the group. Not recommend to use if you have more than one list in the group. |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | content of List Group |

## List Group Subheader

Optional, heading text displayed above each list in a group.

### Markup

```html
<m-list-group-subheader>List 1</m-list-group-subheader>
```

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | group subheader |

## List Item

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activated | Boolean | false | activated item |
| selected | Boolean | false | selected item |
| href | String | '' | render as `<a class="m-list-item">` instead of default `<li class="m-list-item">` if presented |
| disabled | Boolean | false | disabled item |
| ripple | Boolean | true | use js ripple or not |

NOTE: In Material Design, the selected and activated states apply in different, mutually-exclusive situations:
* Selected state should be applied on the `<m-list-item>` when it is likely to frequently change due to user choice. E.g., selecting one or more photos to share in Google Photos.
* Activated state is more permanent than selected state, and will NOT change soon relative to the lifetime of the page. Common examples are navigation components such as the list within a navigation drawer.

### Slots

| Slot | Description |
|------|-------------|
| graphic | first tile |
| text | content when single-line list |
| primaryText | first row of content when twoline list |
| secondaryText | second row of content when twoline list |
| meta | end tile |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-list
