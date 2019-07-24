## Select

### Markup

```html
<m-select v-model="selected">
  <option
    v-for="option in selectOptions"
    :key="option.text"
    :value="option.value"
    :selected="selected === option.value">
    {{ option.text }}
    </option>
  <m-floating-label
    slot="label"
    :floatAbove="selected !== ''">
    Pick a food group
  </m-floating-label> 
  <m-line-ripple slot="line"/>
</m-select>

<m-select outlined>
  <option>...</option>
  <m-floating-label
    slot="label">
    Pick a food group
  </m-floating-label>
  <m-notched-outline slot="line"/>
</m-select>
```

### Script

```javascript
data() {
    return {
      selectOptions: [
        { text: 'Bread, Cereal, Rice and Pasta',
          value: 'grains'
        },
        {
          text: 'Vegetables',
          value: 'vegetables'
        },
        {
          text: 'Fruit',
          value: 'fruit'
        }
      ],
      selected: ''
    }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | Boolean | false | whether the select should be disabled |
| box | Boolean | false | renders a select box |
| outlined | Boolean | false | outlined select |

### Slots

| Slot | Description |
|------|-------------|
| default | native html select options |
| label | select label component |
| bottomLine | select bottom-line component |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-select
