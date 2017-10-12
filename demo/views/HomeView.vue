<template>
    <m-layout-grid-inner>
        <m-fab :mini="true" :absoluteRight="true" icon="favorite" @click="openDialog" />
        <!-- <m-snackbar :show="iconToggle" message="Hello" actionText="Click me" :actionHandler="openDialog" /> -->
        <m-dialog ref="dialog" @accepted="dialogAccepted" @canceled="dialogCanceled">
            <m-typo-headline slot="header">Header</m-typo-headline>
            </span>
            <span slot="body"> Body </span>
            <m-button slot="acceptButton"> Accept </m-button>
            <m-button slot="cancelButton"> Cancel </m-button>
            <m-button slot="dialogButton"> Anything </m-button>
        </m-dialog>
        <m-layout-grid-cell :span="4">
            <m-form-field :alignEnd="true">
                <m-checkbox id="checkboxOne" v-model="checkboxOne" :indeterminate="true" disabled/>
                <label for="checkboxOne">Checkbox</label>
            </m-form-field>
            <m-form-field :alignEnd="true">
                <m-checkbox id="checkboxTwo" v-model="checkboxOne" />
                <label for="checkboxTwo">Checkbox</label>
            </m-form-field>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="4">
            <m-icon-toggle v-model="iconToggle" :accent="true" icon="favorite" />
        </m-layout-grid-cell>

        <m-layout-grid-cell :span="6">
            <m-menu-anchor>
                <m-button @click="showMenu"> open </m-button>
                <m-menu ref="menu" v-model="selectedMenu">
                    <m-menu-item @click="openDialog">
                        Hallo
                    </m-menu-item>
                    <m-menu-item>
                        Hallo
                    </m-menu-item>
                </m-menu>
            </m-menu-anchor>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="6">
            <m-select v-model="selected">
                <m-select-option id="11">
                    A
                </m-select-option>
                <m-select-option id="33">
                    B
                </m-select-option>
            </m-select>
        </m-layout-grid-cell>
        <m-layout-grid-cell>
            <m-select-multi v-model="selectedMulti" :size="4">
                <m-select-multi-group label="ABC">
                    <m-select-multi-option id="42">
                        A
                    </m-select-multi-option>
                    <m-select-multi-option id="81">
                        B
                    </m-select-multi-option>
                    <m-select-multi-option id="76">
                        C
                    </m-select-multi-option>
                </m-select-multi-group>
            </m-select-multi>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="6">
            <m-radio v-model="checkboxOne" />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="6">
            <m-slider v-model="sliderValue" :min="0" :max="50" />
            <m-slider discrete v-model="sliderValue" :min="0" :max="50" />
            <m-slider discrete displayMarkers v-model="sliderValue" :min="0" :max="50" />
            <m-button @click="resetSlider"> Reset </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="8">
            <div class="mdc-theme--dark">
                <m-linear-progress ref="progress" open :progress="0.5" :buffer="0.5" indeterminate/>
                <br />
                <m-button @click="stopProgress" raised interactive> Hide </m-button>
                <m-button @click="startProgress"> Show </m-button>
            </div>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="12">
            <m-typo-headline>Heading</m-typo-headline>
            <m-typo-title>Title</m-typo-title>
            <m-typo-subheading :value="1">Subheading1</m-typo-subheading>
            <m-typo-subheading :value="2">Subheading2</m-typo-subheading>

        </m-layout-grid-cell>

    </m-layout-grid-inner>
</template>

<script>

export default {
    data() {
        return {
            dialogVisible: false,
            checkboxOne: false,
            iconToggle: false,
            selected: null,
            selectedMulti: null,
            selectedMenu: null,
            sliderValue: null
        }
    },
    methods: {
        stopProgress() {
            this.$refs.progress.hide()
        },
        startProgress() {
            this.$refs.progress.show()
        },
        resetSlider() {
            this.sliderValue = 0.0
        },
        showMenu() {
            this.$refs.menu.show()
        },
        openDialog() {
            this.$refs.dialog.show()
        },
        dialogAccepted() {
            console.log('accepted')
        },
        dialogCanceled() {
            console.log('canceled')
        },
        selectedLog(event) {
            console.log(event)
        }
    },
    computed: {

    }
}
</script>

