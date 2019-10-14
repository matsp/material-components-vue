## Tab Bar

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. The Tab Bar contains the Tab Scroller and Tab components.

### Markup

```html
<m-tab-bar>
    <m-tab-scroller>
        <m-tab>
            <m-icon slot="icon" icon="home"/>
            Home
        </m-tab>
        <m-tab>
            <m-icon slot="icon" icon="favorite"/>
            Like me
        </m-tab>
        <m-tab>
            <m-icon slot="icon" icon="person"/>
            About me
        </m-tab>
    </m-tab-scroller>
</m-tab-bar>
```

or the `0.x.y` versions compatible way (not suggested) 

```html
<m-tab-bar>
    <m-tab>
        <m-icon slot="icon" icon="home"/>
        Home
    </m-tab>
    <m-tab>
        <m-icon slot="icon" icon="favorite"/>
        Like me
    </m-tab>
    <m-tab>
        <m-icon slot="icon" icon="person"/>
        About me
    </m-tab>
</m-tab-bar>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| focusOnActivate | Boolean | true | Sets whether tabs focus themselves when activated. |
| useAutomaticActivation | Boolean | true | Sets how tabs activate in response to keyboard interaction. Automatic (true) activates as soon as a tab is focused with arrow keys; manual (false) activates only when the user presses space/enter. The default is automatic (true). |
| activateTab | Number | 0 | Activates the tab at the given index. |
| scrollIntoView | Number | 0 | Scrolls the tab at the given index into view. |
| align | String | '' | __Only use when `<m-tab-scroller>` is not provided in the default slot.__ Sets the elements inside the scroll content element to be aligned to the `start`, `center`, or `end` of the scroll content element. |
### Slots

| Slot | Description |
|------|-------------|
| default | tab bar content (tabs, or tabs within `<m-tab-scroller>`) |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| activated | {"index": number} | Emitted when a Tab is activated with the index of the activated Tab. Listen for this to update content when a Tab becomes active. |

## Tab Scroller

A Tab Scroller allows for smooth native and animated scrolling of tabs.

### Props

| Prop | Type | Default | Description |
|------|------|---------|------------|
| align | String | '' | Sets the elements inside the scroll content element to be aligned to the `start`, `center`, or `end` of the scroll content element. |

### Slots

| Slot | Description |
|------|-------------|
| default | tabs |

## Tab

### Props

| Prop | Type | Default | Description | 
|------|------|---------|------------|
| active | Boolean | false | whether the tab should be marked as active |
| spanningOnlyContent | Boolean | true | whether the label in the default slot should be visible |
| focusOnActivate | Boolean | true | Sets whether the tab should focus itself when activated. |
| stacked | Boolean | false |  Indicates that the tab icon and label should flow vertically instead of horizontally. |
| minWidth | Boolean | false | Indicates that the tab should shrink in size to be as narrow as possible without causing text to wrap. |
| id | String | '' | Value of the root tab element's id attribute. |
| fade | Boolean | false | __Only use when `<m-tab-indicator>` is not provided in the `indicator` slot.__ Sets up the tab indicator to fade in on activation and fade out on deactivation. |
| indicatorIcon | '' | __Only use when `<m-tab-indicator>` is not provided in the `indicator` slot.__ The icon content of the tab indicator content.
| indicatorIconClass | 'material-icons' | __Only use when `<m-tab-indicator>` is not provided in the `indicator` slot.__ The icon class of the tab indicator content.
| href | '' | whether the tab should be a hyperlink and should use anchor tag instead of a button |
> _NOTE_: The tab indicator is an underline indicator by default. You can change it to a icon indicator by setting `indicatorIcon` or `indicatorClass` to a different value or provide a `<m-tab-indicator>` in the `indicator` slot.

> _NOTE_: In case of using anchor tag for tab (`<m-tab href="some/url">`) it is required to switch off automatic activation in parent component (`<m-tab-bar :useAutomaticActivation="false">`).

### Slots

| Slot | Description |
|------|-------------|
| default | tab label |
| icon | icon |
| indicator | tab indicator |

## Tab Indicator

A Tab Indicator is a visual guide that shows which Tab is active.

### Props

| Prop | Type | Default | Description |
|------|------|---------|------------|
| fade | Boolean | false | Sets up the tab indicator to fade in on activation and fade out on deactivation. |
| icon | String | '' | The icon to use when using as an icon indicator |
| active | Boolean | false | Activates or deactivates the indicator. |
| iconClass | String | 'material-icons' | The class applied to the icon when using as an icon indicator. |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs
