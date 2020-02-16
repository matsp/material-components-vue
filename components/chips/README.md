## ChipSet

### Basic Usage

```html
<m-chip-set>
  <m-chip>Chip content</m-chip>
  <m-chip>
    <m-icon
      icon="event"
      slot="leadingIcon"/>
    Add to calendar
    <m-icon
      icon="cancel"
      slot="trailingIcon"/>
  </m-chip>
</m-chip-set>
```

### Choice Chips

```html
<m-chip-set choice v-model="selectedIds">
  <m-chip id="choice1" v-model="selected[0]">Add to email</m-chip>
  <m-chip id="choice2" v-model="selected[1]">Add to calendar</m-chip>
</m-chip-set>
```

#### Script

```javascript
data() {
  return {
    selected: [false, false],
    selectedIds: []
  }
}
```

### Filter Chips

```html
<m-chip-set filter v-model="selectedIds">
  <m-chip id="choice1" v-model="selected[0]">Add to email</m-chip>
  <m-chip id="choice2" v-model="selected[1]">Add to calendar</m-chip>
</m-chip-set>
```

#### Script

```javascript
data() {
  return {
    selected: [false, false],
    selectedIds: []
  }
}
```

### Adding chips

Using `v-if` or `v-for`

```html
<m-chip-set>
  <m-chip>Add to email</m-chip>
  <m-chip v-if="calendar">Add to calendar</m-chip>
</m-chip-set>
```

#### Scripts

```javascript
data() {
  return {
    calendar: false // change this to true to add it to the chip set
  }
}
```

### Removing chips

```html
<m-chip-set>
  <m-chip>Blue</m-chip>
  <m-chip @removal="removeRed" v-if="red">
    Red
    <m-icon
      icon="cancel"
      slot="trailingIcon"/>
  </m-chip>
</m-chip-set>
```

#### Scripts

```javascript
export default {
  data () {
    return {
      red: true
    }
  },
  methods: {
    removeRed () {
      this.red = false
    }
  }
}
```

### Programmatically removing a chip

```html
<m-chip-set>
  <m-chip>Blue</m-chip>
  <m-chip @removal="removeRed" :exit="exit" v-if="red">
    Red
    <m-icon
      icon="cancel"
      slot="trailingIcon"/>
  </m-chip>
</m-chip-set>
```

#### Scripts

```javascript
export default {
  data () {
    return {
      red: true,
      exit: false
    }
  },
  methods: {
    removeRed () {
      this.red = false
    },
    triggerRemove () { // calling this method to trigger removing
      this.exit = true
    }   
  }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| choice | Boolean | false | single selection chips in set |
| filter | Boolean | false | multiple selection chips in set |
| input | Boolean | false | indicates that the chips in the set are input chips (for converting text in a chip) |
| selectedChipIds | Array | [] | An array of the IDs of all selected chips, (could be v-modeled) |

### Slots

| Slot | Description |
|------|-------------|
| default | chips |

## Chip

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| selected | Boolean | false | state of chip (could be v-modeled) |
| shouldRemoveOnTrailingIconClick | Boolean | true | Sets whether a trailing icon click should trigger exit/removal of the chip |
| exit | Boolean | false | setting from `false` to `true` to trigger chip removal |

### Slots

| Slot | Description |
|------|-------------|
| default | chip content |
| leadingIcon | leading icon |
| trailingIcon | trailing icon |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips
