## Card

### Markup

#### Minimal

```html
<m-card>
  <!-- ... content ... -->
</m-card>
```

#### Outlined

```html
<m-card outlined>
  <!-- ... content ... -->
</m-card>
```

#### With Primary Action

```html
<m-card>
  <m-primary-action>
      <!-- content within actionable area -->
  </m-primary-action>
    <!-- ... content ... -->
</m-card>
```

You can have more than one `<m-primary-action>` within a `<m-card>`

#### With Rich Media

```html
<m-card>
  <m-card-media class="my-card__media">
    Title        <!-- or other content on top of the media, usually a background-->
  </m-card-media>
      <!-- ... content ... -->
</m-card>
```

```css
.my-card__media {
  background-image: url("pretty.jpg");
}
```

#### Actions

The `actions` slot is used for showing different actions the user can take, typically at the bottom of a card. It’s often used with `<m-button>`

```html
<m-card>
  <template slot="actions">
    <m-button>
      action
    </m-button>
    <m-button>
      action
    </m-button>
  </template>
</m-card>
```

It can also be used with `<m-icon-button>`

```html
<m-card>
  <template slot="actions">
    <m-icon-button icon="share" title="Share">
    </m-icon-button>
    <m-icon-button icon="more_vert" title="More options">
    </m-icon-button>
  </template>
</m-card>
```


To display buttons and icons in the same row, wrap them in `actionButtons` and `actionIcons` slots.

```html
<m-card>
      <!-- ... content ... -->    
    <template slot="actionButtons">
      <m-button>
        action
      </m-button>
      <m-button>
        action
      </m-button>
    </template>
    <template slot="actionIcons">
      <m-icon-button icon="share" title="Share">
      </m-icon-button>
      <m-icon-button icon="more_vert" title="More options">
      </m-icon-button>
    </template>
  </m-card>
```
To have a single action button take up the entire width of the action row, use `fullBleedAction` prop.

```html
<m-card full-bleed-action>
  <m-button slot="actions">Button</m-button>
</m-card>
```

#### Combined example

```html
<m-card>
  <m-card-primary-action>
    <m-card-media square>
      Title
    </m-card-media>
        <!-- ... additional primary action content ... -->
  </m-card-primary-action>
  <template slot="actionButtons">
    <m-button>
      action
    </m-button>
    <m-button>
      action
    </m-button>
    </template>
    <template slot="actionIcons">
      <m-icon-button icon="share" title="Share">
      </m-icon-button>
      <m-icon-button icon="more_vert" title="More options">
      </m-icon-button>
    </template>
</m-card>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| outlined | Boolean | false | Removes the shadow and displays a hairline outline instead. |
| fullBleedAction | Boolean | false | A single action will take up the entire space in the row of actions |
| primaryAction | Boolean | false | DEPRECATED. Use `<m-card-primary-action>` instead. |

### Slots

| Slot | Description |
|------|-------------|
| default | card content |
| actionButtons | button components |
| actionIcons | icon components |
| fullBleedButton | DEPRECATED. Use `actions` slot instead |
| actions | actions the user can take |

## CardMedia

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| square | Boolean | true | square media |
| sixteenNine | Boolean | false | 16:9 media |

### Slots

| Slot | Description |
|------|-------------|
| default | media content on top of the media, usually a background |

## CardPrimaryAction 

### Props 

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ripple | Boolean | true | use js ripple or not |

### Slots

| Slot | Description |
|------|-------------|
| default | actionable content |


### Reference
- https://github.com/material-components/material-components-web/tree/master/packages/mdc-card
