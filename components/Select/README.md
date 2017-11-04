## Select

### Markup

```html
<m-select v-model="selected">
    <m-select-option id="11">A</m-select-option>
    <m-select-option id="33">B</m-select-option>
</m-select>

<m-select-multi v-model="selectedMulti" :size="4">
    <m-select-multi-group label="ABC">
        <m-select-multi-option id="42">A</m-select-multi-option>
        <m-select-multi-option id="81">B</m-select-multi-option>
        <m-select-multi-divider />
        <m-select-multi-option id="76">C</m-select-multi-option>
    </m-select-multi-group>
    <m-select-multi-group label="XYZ">
        ...
    </m-select-multi-group>>
</m-select-multi>
```

### Script

```javascript
data() {
    return {
        selected: null,
        selectedMulti: null
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| disabled | Boolean | - | false | whether the select should be disabled |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | select content |

## SelectOption

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| selected | Boolean | - | false | pre selected option |
| disabled | Boolean | - | false | disabled option |
| id | String | - | true | returned id if option will be selected |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | option content |

## SelectMulti

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| size | Number | - | false | vertical size of multi select |
| disabled | Boolean | - | false | whether the multi select should be disabled |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | multi select content |

## SelectMultiDivider

## SelectMultiGroup

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| label | String | - | true | multi group label |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | multi group content |

## SelectMultiOption

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| disabled | Boolean | - | false | disabled option |
| id | String | - | true | returned id if multi option will be selected |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | multi option content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-select