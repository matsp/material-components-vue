## Drawer

### Markup

#### Minimal

```html
<m-drawer>
  <div class="mdc-drawer__content">
    <m-list>
      <m-list-item activated tabindex="0">
        <m-icon icon="inbox" slot="graphic"/>
        Inbox
      </m-list-item>
      <m-list-item>
        <m-icon icon="star" slot="graphic"/>
        Star
      </m-list-item>
    </m-list>
  </div>
</m-drawer>
```

#### With Header

Following examples are rendered completely the same.


Recommended:

```html
<m-drawer>
  <div class="mdc-drawer__header">
    <h3 class="mdc-drawer__title">title</h3>
    <h6 class="mdc-drawer__subtitle">subtitle</h6>
    <!-- other header content here -->
  </div>
  <div class="mdc-drawer__content">
   
  </div>
</m-drawer>
```

Other options:

```html
<m-drawer title="title" sub-title="subtitle">
  <m-drawer-content>
   
  </m-drawer-content>
</m-drawer>
```

```html
<m-drawer>
  <m-drawer-header title="title" sub-title="subtitle">
      <!-- other header content here -->
  </m-drawer-header>
  <m-drawer-content>
   
  </m-drawer-content>
</m-drawer>
```

#### Dismissible

```html
<m-drawer dismissible v-model="open">
  <div class="mdc-drawer__content">

  </div>
</m-drawer>
<m-drawer-app-content>
</m-drawer-app-content>
```

```js
data () {
  return {
    open: false // change to true to open the drawer
  }
}
```

#### Dismissible With Top App Bar

```html
<m-drawer dismissible>
  <div class="mdc-drawer__content">
     
  </div>
</m-drawer>
<m-drawer-app-content>
  <m-top-app-bar>

  </m-top-app-bar>
  <main class="main-content" id="main-content">
    <div class="mdc-top-app-bar--fixed-adjust">
      App Content
    </div>
  </main>
</m-drawer-app-content>
```

#### Dismissible Below Top App Bar

```html
<m-top-app-bar>

</m-top-app-bar>
<m-drawer dismissible class="mdc-top-app-bar--fixed-adjust">
  <div class="mdc-drawer__content">
     
  </div>
</m-drawer>
<m-drawer-app-content class="mdc-top-app-bar--fixed-adjust">
</m-drawer-app-content>
```

#### Modal

```html
<m-drawer modal v-model="open">
</m-drawer>
<m-drawer-scrim></m-drawer-scrim>
<div>Main Content</div>
```

```js
data () {
  return {
    open: false // change to true to open the drawer
  }
}
```

### Slots

| Slot | Description |
|------|-------------|
| header | header content |
| default | main content, usually `<m-drawer-content>` |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| opened | {} | emitted when the navigation drawer is opened |
| closed | {} | emitted when the navigation drawer is closed |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | String | '' | title in the header |
| subtitle | String | '' | subtitle in the header |
| modal | Boolean | '' | display drawer in modal variant |
| dismissible | Boolean | '' | display drawer in dismissible variant |

`modal` and `dismissible` can not be both true at the same times. When both are false, the drawer is shown permanently.

## Drawer Scrim

Mandatory for modal variant only. Used for the overlay on the app content.

### Markup

```html
<m-drawer modal>
</m-drawer>
<m-drawer-scrim></m-drawer-scrim>
```

## Drawer App Content

Mandatory for dismissible variant only. Sibling element that is resized when the drawer opens/closes.

### Markup

```html
<m-drawer dismissible>
</m-drawer>
<m-drawer-app-content>
</m-drawer-app-content>
```

## Accessibility 

### Focus Management

It is recommended to shift focus to the first focusable element in the main content when drawer is closed or one of the destination items is activated. (By default, MDC Drawer restores focus to the menu button which opened it.)

#### Dismissible Drawer

Restore focus to the first focusable element when a list item is activated or after the drawer closes. Do not close the drawer upon item activation, since it should be up to the user when to show/hide the dismissible drawer.

```html
<m-drawer dismissible @closed="onClosed">
  <m-drawer-content>
    <m-list @click="onClick">
    
    </m-list>
  </m-drawer-content>
</m-drawer>
<div class="main-content" ref="mainContent"></div>
```

```js
onClosed () {
  this.$refs.mainContent.$el.querySelector('input, button').focus();
},
onClick () {
  this.$refs.mainContent.$el.querySelector('input, button').focus();
}
```

#### Modal Drawer

```html
<m-drawer modal @closed="onClosed" v-model="open">
  <div class="mdc-drawer__content">
    <m-list @click="onClick">
        
    </m-list>
  </div>
</m-drawer>
<div class="main-content" ref="mainContent"></div>
```

```js
data () {
  return { open: false }
},
methods: {
  onClosed () {
    this.$refs.mainContent.$el.querySelector('input, button').focus();
  },
  onClick () {
    this.open = false
  }
}
```

## Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer
- https://github.com/matsp/material-components-vue/tree/master/components/list