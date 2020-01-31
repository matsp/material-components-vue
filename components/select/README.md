## Select

### Markup

#### Basic

```html
<m-select v-model="selected">
  <template slot="default">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="banana">Banana</option>
  </template>
  <m-floating-label for="select_demo" id="select_demo_label" slot="label">Fruit</m-floating-label>
  <m-line-ripple slot="line"/>
</m-select>
```

#### Enhanced

```html
<m-select enhanced>
  <template slot="default" v-model="selected">
    <m-list-item data-value="apple">Apple</m-list-item>
    <m-list-item data-value="orange">Orange</m-list-item>
    <m-list-item data-value="banana">Banana</m-list-item>
  </template>
  <m-floating-label for="select_demo" id="select_demo_label" slot="label">Fruit</m-floating-label>
  <m-line-ripple slot="line"/>
</m-select>
```

#### Outlined Basic

```html
<m-select v-model="selected" outlined>
  <template slot="default">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="banana">Banana</option>
  </template>
  <m-floating-label for="select_demo" id="select_demo_label" slot="label">Fruit</m-floating-label>
</m-select>
```

#### Outlined Enhanced

```html
<m-select enhanced outlined>
  <template slot="default" v-model="selected">
    <m-list-item data-value="apple">Apple</m-list-item>
    <m-list-item data-value="orange">Orange</m-list-item>
    <m-list-item data-value="banana">Banana</m-list-item>
  </template>
  <m-floating-label for="select_demo" id="select_demo_label" slot="label">Fruit</m-floating-label>
</m-select>
```

### Script

```javascript
data() {
    return {
      selected: ''
    }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | Boolean | false | Whether or not the component is disabled. Setting this sets the disabled state on the component. |
| enhanced | Boolean | false | Renders an enhanced select |
| outlined | Boolean | false | Styles the select as outlined select. |
| name | String | '' | A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. Same as `name` in `<input>` or `<select>` |
| width | String | '400px' | Width of the enhanced select. |
| valid | Boolean | true | Whether or not the component is in a valid state. Setting this updates styles on the component, but does not affect the native validity state. |
| required | Boolean | false | Whether or not the component is required. Setting this updates the `required` or `aria-required` attribute on the component and enables validation. |
| value | String | '' | The value/data-value of the currently selected option. Can be `v-model` |
| selectedTextId | String | 'demo-selected-text' | `id` of the inner selected text. Required if you have more than one select in your page. |

> Note: When using enhanced select, `outlined` can not be reactive.

### Slots

| Slot | Description |
|------|-------------|
| default | select options |
| label | select label component |
| line | line ripple component |
| leadingIcon | leading icon component |

> Note: The `data-value` attribute _must_ be present on each `<m-menu-item>` option.


### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-select

## Select Icon

### Markup

> Note: Select Icon can not be dynamically added to an existing enhanced select.

#### Using Material Icons

```html
<m-select v-model="selected">
  <m-select-icon icon="favorite" slot="leadingIcon"></m-select-icon>
   <!-- other parts of the select-->
</m-select>
```

#### Using other icon like Font Awesome

```html
<m-select v-model="selected">
  <m-select-icon class="fas fa-camera" slot="leadingIcon"></m-select-icon>
   <!-- other parts of the select-->
</m-select>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| clickable | Boolean | true | Whether or not the icon is clickable. |
| icon | String | '' | The material icon to be used. |

### Slots

| Slot | Description |
|------|-------------|
| default | icon content |

## Select Helper Text

> Note: Select Helper Text can not be dynamically added to an existing select.

### Markup

```html
<m-select></m-select>
<m-select-helper-text>Helper</m-select-helper-text>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| persistent | Boolean | false | Sets the helper text as persistent. |
| validationMsg | Boolean | false | Sets the helper text as a validation message. |

### Slots

| Slot | Description |
|------|-------------|
| default | helper text content |