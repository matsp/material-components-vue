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

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | list content |

## ListDivider

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| inset | Boolean | false | false | inset instead full-width divider |
| padded | Boolean | false | false | padded instead full-width divider |

## ListGroup

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | content of ListGroup |

## ListGroupDivider

## ListGroupSubheader

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | group subheader |

## ListItem

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activated | Boolean | false | activated item |
| selected | Boolean | false | selected item |

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
