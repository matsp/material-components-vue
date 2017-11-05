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
        sliderValue: null
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| label | String | - | false | slider label |
| displayMarkers | Boolean | - | false | whether markers should be rendered on the slider |
| discrete | Boolean | - | false | discrete slider values |
| value | Number | - | false | slider value |
| min | Number | - | true | minimum slider value |
| max | Number | - | true | maximum slider value |
| step | Number | - | false | step value |
| disabled | Boolean | - | false | whether the slider should be disabled |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider
