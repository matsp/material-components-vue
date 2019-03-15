<template>
    <div>
        <ComponentSection>
            <m-button @click="dialogOpen=true" raised>Open</m-button>
            <m-dialog :scrollable="radioProps[3].value"
                      @closed="onDialogClosed"
                      class="my-dialog"
                      v-model="dialogOpen">
                <template slot="header" v-if="!radioProps[0].value">
                    {{header}}
                </template>
                <p slot="body" v-if="radioProps[0].value">Discard draft?</p>
                <m-list avatar slot="body" v-if="radioProps[1].value">
                    <m-list-item data-mdc-dialog-action="user1@example.com" tabindex="0">
                        <m-icon icon="person" slot="graphic"/>
                        <template slot="text">user1@example.com</template>
                    </m-list-item>
                    <m-list-item data-mdc-dialog-action="user2@example.com">
                        <m-icon icon="person" slot="graphic"/>
                        <template slot="text">user2@example.com</template>
                    </m-list-item>
                    <m-list-item data-mdc-dialog-action="add">
                        <m-icon icon="add" slot="graphic"/>
                        <template slot="text">Add account</template>
                    </m-list-item>
                </m-list>
                <m-list role="radiogroup" slot="body" v-if="radioProps[2].value">
                    <m-list-item aria-checked="true" role="radio" tabindex="0">
                        <span slot="graphic">
                            <m-radio checked id="test-dialog-baseline-confirmation-radio-1"
                                     name="test-dialog-baseline-confirmation-radio-group" value="1"/>
                        </span>
                        <label for="test-dialog-baseline-confirmation-radio-1">Never Gonna Give You Up</label>
                    </m-list-item>
                    <m-list-item aria-checked="false" role="radio">
                        <span slot="graphic">
                            <m-radio id="test-dialog-baseline-confirmation-radio-2"
                                     name="test-dialog-baseline-confirmation-radio-group" value="2"/>
                        </span>
                        <label for="test-dialog-baseline-confirmation-radio-2">Hot Cross Buns</label>
                    </m-list-item>
                    <m-list-item aria-checked="false" role="radio">
                        <span slot="graphic">
                            <m-radio id="test-dialog-baseline-confirmation-radio-3"
                                     name="test-dialog-baseline-confirmation-radio-group" value="3"/>
                        </span>
                        <label for="test-dialog-baseline-confirmation-radio-3">None</label>
                    </m-list-item>
                </m-list>
                <template slot="body" v-if="radioProps[3].value">
                    <p><a href="https://www.gutenberg.org/ebooks/55" rel="noopener noreferrer" target="_blank">Read the
                        full book</a></p>
                    <p>Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and
                        Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be
                        carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and
                        this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four
                        chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little
                        bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the
                        ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds
                        arose, mighty enough to crush any building in its path. It was reached by a trap door in the
                        middle of the floor, from which a ladder led down into the small, dark hole.</p>
                    <p>When Dorothy stood in the doorway and looked around, she could see nothing but the great gray
                        prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached
                        to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass,
                        with little cracks running through it. Even the grass was not green, for the sun had burned the
                        tops of the long blades until they were the same gray color to be seen everywhere. Once the
                        house had been painted, but the sun blistered the paint and the rains washed it away, and now
                        the house was as dull and gray as everything else.</p>
                    <p>When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her,
                        too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red
                        from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now.
                        When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's
                        laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice
                        reached her ears; and she still looked at the little girl with wonder that she could find
                        anything to laugh at.</p>
                    <p>Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was.
                        He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and
                        rarely spoke.</p>
                    <p>It was Toto that made Dorothy laugh, and saved her from growing as gray as her other
                        surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black
                        eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and
                        Dorothy played with him, and loved him dearly.</p>
                    <p>Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at
                        the sky, which was even grayer than usual. Dorothy stood in the door with Toto in her arms, and
                        looked at the sky too. Aunt Em was washing the dishes.</p>
                    <p>From the far north they heard a low wail of the wind, and Uncle Henry and Dorothy could see where
                        the long grass bowed in waves before the coming storm. There now came a sharp whistling in the
                        air from the south, and as they turned their eyes that way they saw ripples in the grass coming
                        from that direction also.</p>
                </template>
                <m-button
                        class="mdc-dialog__button" slot="cancelButton"
                        v-if="!radioProps[1].value">
                    {{cancel}}
                </m-button>
                <m-button
                        class="mdc-dialog__button" slot="acceptButton"
                        v-if="!radioProps[1].value">
                    {{accept}}
                </m-button>
            </m-dialog>
            <m-typography>{{message}}</m-typography>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'DialogDemo',
    data () {
      return {
        radioProps: [
          { prop: 'alert', value: true },
          { prop: 'simple', value: false },
          { prop: 'confirmation', value: false },
          { prop: 'scrollable', value: false }
        ],
        checkboxProps: [],
        dialogOpen: false,
        message: '',
      }
    },
    computed: {
      header () {
        if (this.radioProps[1].value) {
          return 'Select an account'
        } else if (this.radioProps[2].value) {
          return 'Phone ringtone'
        } else if (this.radioProps[3].value) {
          return 'The Wonderful Wizard of Oz'
        } else return ''
      },
      accept () {
        if (this.radioProps[0].value) {
          return 'Discard'
        } else if (this.radioProps[2].value) {
          return 'OK'
        } else if (this.radioProps[3].value) {
          return 'Accept'
        } else return ''
      },
      cancel () {
        if (this.radioProps[0].value || this.radioProps[2].value) {
          return 'Cancel'
        } else if (this.radioProps[3].value) {
          return 'Decline'
        } else return ''
      }
    },
    methods: {
      onDialogClosed (e) {
        this.message = e.action
      }
    }
  }
</script>

<style lang="scss" scoped>
    .my-dialog {
        z-index: 20;
    }
</style>
