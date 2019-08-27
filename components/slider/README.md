## Slider

### Markup

```html
<m-slider v-model="sliderValue" :min="0" :max="50" :step="0.5" />
<m-slider discrete v-model="sliderValue" :min="0" :max="50" />
<m-slider discrete displayMarkers v-model="sliderValue" :min="0" :max="50" />
```

### Script

```javascript
data() {
    return {
        sliderValue: 0
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| displayMarkers | Boolean | - | false | whether markers should be rendered on the slider |
| discrete | Boolean | - | false | discrete slider values |
| value | Number | - | false | slider value, can be `v-model` |
| min | Number | - | true | minimum slider value |
| max | Number | - | true | maximum slider value |
| step | Number | - | false | step value |
| disabled | Boolean | - | false | whether the slider should be disabled |

Non prop attributes are mapped to the root element.

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| input | `value` | Emitted whenever the slider value is changed by way of a user event, e.g. when a user is dragging the slider or changing the value using the arrow keys. Payload is the current value of the slider. |
| change | `value` | Emitted whenever the slider value is changed and committed by way of a user event, e.g. when a user stops dragging the slider or changes the value using the arrow keys. Payload is the current value of the slider. |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider
