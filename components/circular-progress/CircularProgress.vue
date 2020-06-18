<script>
import { MDCCircularProgress } from '@material/circular-progress'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    large: {
      type: Boolean,
      default: true
    },
    medium: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    determinate: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  watch: {
    large () {
      this.needReInstantiate = true
    },
    small () {
      this.needReInstantiate = true
    },
    medium () {
      this.needReInstantiate = true
    },
    determinate (v) {
      if (this.mdcCircularProgress) {
        this.mdcCircularProgress.determinate = v
      }
    },
    progress (v) {
      if (this.mdcCircularProgress) {
        this.mdcCircularProgress.progress = v
      }
    },
    close (v) {
      if (this.mdcCircularProgress) {
        if (v) this.mdcCircularProgress.close()
        else this.mdcCircularProgress.open()
      }
    }
  },
  mounted () {
    this.instantiate()
  },
  activated () {
    this.instantiate()
  },
  beforeUpdate () {
    if (this.needReInstantiate) {
      this.destroy()
    }
  },
  updated () {
    if (this.needReInstantiate) {
      this.instantiate()
    }
    this.needReInstantiate = false
  },
  deactivated () {
    this.destroy()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    instantiate () {
      if (this.mdcCircularProgress == null) {
        this.mdcCircularProgress = MDCCircularProgress.attachTo(this.$el)
        this.mdcCircularProgress.determinate = this.determinate
        this.mdcCircularProgress.progress = this.progress
      }
    },
    destroy () {
      if (
        this.mdcCircularProgress != null &&
        typeof this.mdcCircularProgress.destroy === 'function'
      ) {
        this.mdcCircularProgress.destroy()
        this.mdcCircularProgress = null
      }
    }
  },
  render (h) {
    return h(
      'div',
      {
        staticClass: 'mdc-circular-progress',
        class: {
          'mdc-circular-progress--large': this.large,
          'mdc-circular-progress--medium': this.medium,
          'mdc-circular-progress--small': this.small
        },
        attrs: {
          role: 'progressbar',
          'aria-valuemin': '0',
          'aria-valuemax': '1',
          ...this.$attrs
        },
        on: this.$listeners
      },
      [
        h(
          'div',
          { staticClass: 'mdc-circular-progress__determinate-container' },
          [
            h(
              'svg',
              {
                staticClass:
                      'mdc-circular-progress__determinate-circle-graphic',
                attrs: {
                  viewBox: this.large ? '0 0 48 48' : this.medium ? '0 0 32 32' : '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg'
                }
              },
              [
                h('circle', {
                  staticClass: 'mdc-circular-progress__determinate-circle',
                  attrs: {
                    cx: this.large ? '24' : this.medium ? '16' : '12',
                    cy: this.large ? '24' : this.medium ? '16' : '12',
                    r: this.large ? '18' : this.medium ? '12.5' : '8.75',
                    'stroke-dasharray': this.large ? '113.097' : this.medium ? '78.54' : '54.978',
                    'stroke-dashoffset': this.large ? '113.097' : this.medium ? '78.54' : '54.978'
                  }
                })
              ]
            )
          ]
        ),
        h(
          'div',
          { staticClass: 'mdc-circular-progress__indeterminate-container' },
          [
            h('div', { staticClass: 'mdc-circular-progress__spinner-layer' }, [
              h(
                'div',
                {
                  staticClass:
                    'mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left'
                },
                [
                  h(
                    'svg',
                    {
                      staticClass:
                        'mdc-circular-progress__indeterminate-circle-graphic',
                      attrs: {
                        viewBox: this.large ? '0 0 48 48' : this.medium ? '0 0 32 32' : '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg'
                      }
                    },
                    [
                      h('circle', {
                        attrs: {
                          cx: this.large ? '24' : this.medium ? '16' : '12',
                          cy: this.large ? '24' : this.medium ? '16' : '12',
                          r: this.large ? '18' : this.medium ? '12.5' : '8.75',
                          'stroke-dasharray': this.large ? '113.097' : this.medium ? '78.54' : '54.978',
                          'stroke-dashoffset': this.large ? '56.549' : this.medium ? '39.27' : '27.489'
                        }
                      })
                    ]
                  )
                ]
              ),
              h('div', { staticClass: 'mdc-circular-progress__gap-patch' }, [
                h(
                  'svg',
                  {
                    staticClass:
                      'mdc-circular-progress__indeterminate-circle-graphic',
                    attrs: {
                      viewBox: this.large ? '0 0 48 48' : this.medium ? '0 0 32 32' : '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg'
                    }
                  },
                  [
                    h('circle', {
                      attrs: {
                        cx: this.large ? '24' : this.medium ? '16' : '12',
                        cy: this.large ? '24' : this.medium ? '16' : '12',
                        r: this.large ? '18' : this.medium ? '12.5' : '8.75',
                        'stroke-dasharray': this.large ? '113.097' : this.medium ? '78.54' : '54.978',
                        'stroke-dashoffset': this.large ? '56.549' : this.medium ? '39.27' : '27.489'
                      }
                    })
                  ]
                )
              ]),
              h(
                'div',
                {
                  staticClass:
                    'mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right'
                },
                [
                  h(
                    'svg',
                    {
                      staticClass:
                        'mdc-circular-progress__indeterminate-circle-graphic',
                      attrs: {
                        viewBox: this.large ? '0 0 48 48' : this.medium ? '0 0 32 32' : '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg'
                      }
                    },
                    [
                      h('circle', {
                        attrs: {
                          cx: this.large ? '24' : this.medium ? '16' : '12',
                          cy: this.large ? '24' : this.medium ? '16' : '12',
                          r: this.large ? '18' : this.medium ? '12.5' : '8.75',
                          'stroke-dasharray': this.large ? '113.097' : this.medium ? '78.54' : '54.978',
                          'stroke-dashoffset': this.large ? '56.549' : this.medium ? '39.27' : '27.489'
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  }
}
</script>
