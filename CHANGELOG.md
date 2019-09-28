# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/matsp/material-components-vue/compare/v1.2.0-alpha.0...v1.2.0) (2019-09-25)

## [1.2.0-alpha.0](https://github.com/matsp/material-components-vue/compare/v1.1.0...v1.2.0-alpha.0) (2019-09-25)


### ⚠ BREAKING CHANGES

* **fab:** `extended` prop no longer in use
* **fab:** label and icon become separated component
* **fab:** icon slots no longer in use

fix the bug that can not implement an extended FAB with Text label followed by icon

make ripple optional

add snapshots and update docs

* doc(fab): update demos

### Bug Fixes

* **button:** fix bug similar to [#377](https://github.com/matsp/material-components-vue/issues/377) ([#382](https://github.com/matsp/material-components-vue/issues/382)) ([24d6a26](https://github.com/matsp/material-components-vue/commit/24d6a26))
* **card:** fix similar bug [#377](https://github.com/matsp/material-components-vue/issues/377) ([#383](https://github.com/matsp/material-components-vue/issues/383)) ([257952b](https://github.com/matsp/material-components-vue/commit/257952b))
* **deps:** update dependency material-components-web to v3 ([#310](https://github.com/matsp/material-components-vue/issues/310)) ([8bf719c](https://github.com/matsp/material-components-vue/commit/8bf719c))
* **deps:** update dependency material-components-web to v3.1.0 ([#356](https://github.com/matsp/material-components-vue/issues/356)) ([328c0a6](https://github.com/matsp/material-components-vue/commit/328c0a6))
* **deps:** update dependency material-components-web to v3.1.1 ([#390](https://github.com/matsp/material-components-vue/issues/390)) ([78c5583](https://github.com/matsp/material-components-vue/commit/78c5583))
* **deps:** update dependency material-components-web to v3.2.0 ([#430](https://github.com/matsp/material-components-vue/issues/430)) ([ed24163](https://github.com/matsp/material-components-vue/commit/ed24163))
* **dialog:** close via v-model ([#380](https://github.com/matsp/material-components-vue/issues/380)) ([13895fc](https://github.com/matsp/material-components-vue/commit/13895fc)), closes [#376](https://github.com/matsp/material-components-vue/issues/376)
* **menu:** missing import 'mutationobserver-shim' in test ([#399](https://github.com/matsp/material-components-vue/issues/399)) ([e3b5b81](https://github.com/matsp/material-components-vue/commit/e3b5b81))
* **radio:** v-model doesn't work correctly ([#412](https://github.com/matsp/material-components-vue/issues/412)) ([ed4bb75](https://github.com/matsp/material-components-vue/commit/ed4bb75))
* **ripple:** wrong implementation ([#368](https://github.com/matsp/material-components-vue/issues/368)) ([df0d8a5](https://github.com/matsp/material-components-vue/commit/df0d8a5))


### Features

* **menu:** update to mdc-web v3.1.0 ([#388](https://github.com/matsp/material-components-vue/issues/388)) ([8e6734e](https://github.com/matsp/material-components-vue/commit/8e6734e))
* add directive `v-ripple` ([#340](https://github.com/matsp/material-components-vue/issues/340)) ([d5d873e](https://github.com/matsp/material-components-vue/commit/d5d873e)), closes [#267](https://github.com/matsp/material-components-vue/issues/267)
* **card:** update card ([#369](https://github.com/matsp/material-components-vue/issues/369)) ([842a4c3](https://github.com/matsp/material-components-vue/commit/842a4c3))
* **drawer:** make header slot to be the content inside `<div class="… ([#400](https://github.com/matsp/material-components-vue/issues/400)) ([f8832dd](https://github.com/matsp/material-components-vue/commit/f8832dd))
* **drawer:** update to mdc-web v3.1.0 ([#381](https://github.com/matsp/material-components-vue/issues/381)) ([3055acd](https://github.com/matsp/material-components-vue/commit/3055acd)), closes [#377](https://github.com/matsp/material-components-vue/issues/377)
* **elevation:** add custom directive `v-elevation` ([#416](https://github.com/matsp/material-components-vue/issues/416)) ([60ee206](https://github.com/matsp/material-components-vue/commit/60ee206))
* **fab:** add trailingIcon slot ([#411](https://github.com/matsp/material-components-vue/issues/411)) ([ea2697b](https://github.com/matsp/material-components-vue/commit/ea2697b))
* update button to mdc-web v3.1.0 ([#365](https://github.com/matsp/material-components-vue/issues/365)) ([851f5c4](https://github.com/matsp/material-components-vue/commit/851f5c4))
* update dialog ([#361](https://github.com/matsp/material-components-vue/issues/361)) ([aa16de9](https://github.com/matsp/material-components-vue/commit/aa16de9)), closes [#360](https://github.com/matsp/material-components-vue/issues/360)
* update v-ripple directive ([#364](https://github.com/matsp/material-components-vue/issues/364)) ([e853751](https://github.com/matsp/material-components-vue/commit/e853751))
* **fab:** reimplementing FAB ([#403](https://github.com/matsp/material-components-vue/issues/403)) ([3615615](https://github.com/matsp/material-components-vue/commit/3615615))
* **list:** update to mdc-web v3.1.1 ([#397](https://github.com/matsp/material-components-vue/issues/397)) ([c24f7c8](https://github.com/matsp/material-components-vue/commit/c24f7c8))
* **radio:** allowing no js instantiation ([#398](https://github.com/matsp/material-components-vue/issues/398)) ([8de3032](https://github.com/matsp/material-components-vue/commit/8de3032))
* **switch:** bind all attributes to inner input ([#426](https://github.com/matsp/material-components-vue/issues/426)) ([3f649a7](https://github.com/matsp/material-components-vue/commit/3f649a7))

## [1.1.0](https://github.com/matsp/material-components-vue/compare/v1.0.2...v1.1.0) (2019-07-01)


### Bug Fixes

* eliminate eslint warnings ([#241](https://github.com/matsp/material-components-vue/issues/241)) ([1ba6f6a](https://github.com/matsp/material-components-vue/commit/1ba6f6a))
* **card:** bring back prop primaryAction ([#319](https://github.com/matsp/material-components-vue/issues/319)) ([3ad11bc](https://github.com/matsp/material-components-vue/commit/3ad11bc))
* **checkbox:** lack of disabled prop ([#251](https://github.com/matsp/material-components-vue/issues/251)) ([2fe244f](https://github.com/matsp/material-components-vue/commit/2fe244f))
* **deps:** update dependency material-components-web to v2.3.1 ([#271](https://github.com/matsp/material-components-vue/issues/271)) ([07bc3e6](https://github.com/matsp/material-components-vue/commit/07bc3e6))
* **radio:** missing watcher for value ([#262](https://github.com/matsp/material-components-vue/issues/262)) ([cb6bd2d](https://github.com/matsp/material-components-vue/commit/cb6bd2d))
* **snackbar:** Check empty actionButtonText ([2716a20](https://github.com/matsp/material-components-vue/commit/2716a20))
* **snackbar:** labelText is empty when using default slot as the label text ([#240](https://github.com/matsp/material-components-vue/issues/240)) ([f0ddd6c](https://github.com/matsp/material-components-vue/commit/f0ddd6c))
* **tab:** v-model not updating ([#286](https://github.com/matsp/material-components-vue/issues/286)) ([4863d00](https://github.com/matsp/material-components-vue/commit/4863d00))
* **tab-bar:** add a built-in scroller if the default slot is not a scroller ([#313](https://github.com/matsp/material-components-vue/issues/313)) ([0650e3d](https://github.com/matsp/material-components-vue/commit/0650e3d)), closes [#312](https://github.com/matsp/material-components-vue/issues/312)
* **text-field docs:** correcting component usage in readme ([#316](https://github.com/matsp/material-components-vue/issues/316)) ([e6d231d](https://github.com/matsp/material-components-vue/commit/e6d231d))


### Features

* **card:** add primary action component ([#292](https://github.com/matsp/material-components-vue/issues/292)) ([980e706](https://github.com/matsp/material-components-vue/commit/980e706))
* **select:** add select icon ([#243](https://github.com/matsp/material-components-vue/issues/243)) ([fb75ae2](https://github.com/matsp/material-components-vue/commit/fb75ae2))
* **text-field:** add text field icon ([#317](https://github.com/matsp/material-components-vue/issues/317)) ([8f271f1](https://github.com/matsp/material-components-vue/commit/8f271f1))


### Tests

* **floating-label:** add snapshots ([#263](https://github.com/matsp/material-components-vue/issues/263)) ([4a2b41f](https://github.com/matsp/material-components-vue/commit/4a2b41f))
* **linear-progress:** add snapshots ([#264](https://github.com/matsp/material-components-vue/issues/264)) ([25c93e1](https://github.com/matsp/material-components-vue/commit/25c93e1))
* **snackbar:** add snapshots ([#257](https://github.com/matsp/material-components-vue/issues/257)) ([c335269](https://github.com/matsp/material-components-vue/commit/c335269))



### [1.0.2](https://github.com/matsp/material-components-vue/compare/v1.0.1...v1.0.2) (2019-05-14)



### [1.0.1](https://github.com/matsp/material-components-vue/compare/v1.0.0...v1.0.1) (2019-05-14)



## [1.0.0](https://github.com/matsp/material-components-vue/compare/v1.0.0-alpha.2...v1.0.0) (2019-05-14)


### Bug Fixes

* **deps:** update dependency material-components-web to v2.2.0 ([#231](https://github.com/matsp/material-components-vue/issues/231)) ([938ad5c](https://github.com/matsp/material-components-vue/commit/938ad5c))
* **select:** v-model doesn't work with enhanced select ([#232](https://github.com/matsp/material-components-vue/issues/232)) ([9a48b88](https://github.com/matsp/material-components-vue/commit/9a48b88))


### Features

* **text-field:** add character counter ([#226](https://github.com/matsp/material-components-vue/issues/226)) ([1629619](https://github.com/matsp/material-components-vue/commit/1629619))



# [1.0.0-alpha.2](https://github.com/matsp/material-components-vue/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2019-05-02)


### Features

* **snackbar:** add dismiss button and make dismiss button and action button optional ([#214](https://github.com/matsp/material-components-vue/issues/214)) ([a90038e](https://github.com/matsp/material-components-vue/commit/a90038e))
* upgrade material-components-web to v2.0 ([#223](https://github.com/matsp/material-components-vue/issues/223)) ([2e5d6d9](https://github.com/matsp/material-components-vue/commit/2e5d6d9))


### BREAKING CHANGES

* MENU

"When using MDC List inside MDC Menu tabindex should be set on list root element where role="menu" is assigned."

* Menu: Implement new setDefaultFocusState() method

The property accepts both integers and strings.
The map is (case insensitive):
0 = none
1 = list_root
2 = first_item
3 = last_item

Either one of the values above can be used.

* Allow passing absolute position for either X or Y axis (not requiring to pass them both)

The `setAbsolutePosition` method has a default of `0` in case one value is null.
Using -1 as the default is not good as it does not allow negative values.

* Add HoistToBody property



# [1.0.0-alpha.1](https://github.com/matsp/material-components-vue/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2019-04-02)


### Bug Fixes

* incomplete rename from 'textfield' to 'text-field' ([#206](https://github.com/matsp/material-components-vue/issues/206)) ([2ce1299](https://github.com/matsp/material-components-vue/commit/2ce1299))
* lack of mdc-button style for the snackbar action button ([#209](https://github.com/matsp/material-components-vue/issues/209)) ([5f31e14](https://github.com/matsp/material-components-vue/commit/5f31e14))
* missing disabled prop in list item ([#211](https://github.com/matsp/material-components-vue/issues/211)) ([7c013e5](https://github.com/matsp/material-components-vue/commit/7c013e5))
* misspelled `closed` to `close` on @MDCDrawer:closed event and no closed event emitted after drawer closed ([#207](https://github.com/matsp/material-components-vue/issues/207)) ([d46290c](https://github.com/matsp/material-components-vue/commit/d46290c))
* pre-filled text field can not be disabled ([#213](https://github.com/matsp/material-components-vue/issues/213)) ([2d55655](https://github.com/matsp/material-components-vue/commit/2d55655))
* update label position when value is added in an empty text field ([#212](https://github.com/matsp/material-components-vue/issues/212)) ([3b40325](https://github.com/matsp/material-components-vue/commit/3b40325)), closes [#140](https://github.com/matsp/material-components-vue/issues/140)
* wrong payloads in event `closed` and `closing` emitted by snackbar ([#208](https://github.com/matsp/material-components-vue/issues/208)) ([491f361](https://github.com/matsp/material-components-vue/commit/491f361))



# [1.0.0-alpha.0](https://github.com/matsp/material-components-vue/compare/v0.26.1...v1.0.0-alpha.0) (2019-03-22)


### Bug Fixes

* **layout-grid:** Wrong phone identifier on layout grid ([#157](https://github.com/matsp/material-components-vue/issues/157)) ([eb625e5](https://github.com/matsp/material-components-vue/commit/eb625e5))
* **shape:** Property typo ([481fecc](https://github.com/matsp/material-components-vue/commit/481fecc))



<a name="0.26.1"></a>
## [0.26.1](https://github.com/matsp/material-components-vue/compare/v0.26.0...v0.26.1) (2018-08-16)


### Bug Fixes

* **textfield:** Pass events to inner elements (close [#144](https://github.com/matsp/material-components-vue/issues/144)) ([c5479ed](https://github.com/matsp/material-components-vue/commit/c5479ed))



<a name="0.26.0"></a>
# [0.26.0](https://github.com/matsp/material-components-vue/compare/v0.25.1...v0.26.0) (2018-08-15)


### Bug Fixes

* **line-ripple:** Remove potential memory leak ([58d297b](https://github.com/matsp/material-components-vue/commit/58d297b))
* **notched-outline:** Instantiate component ([#149](https://github.com/matsp/material-components-vue/issues/149)) ([34e5f55](https://github.com/matsp/material-components-vue/commit/34e5f55))


### Features

* **textfield:** Pass events to inner input (close [#144](https://github.com/matsp/material-components-vue/issues/144)) ([c9df358](https://github.com/matsp/material-components-vue/commit/c9df358))



<a name="0.25.1"></a>
## [0.25.1](https://github.com/matsp/material-components-vue/compare/v0.25.0...v0.25.1) (2018-07-17)



<a name="0.25.0"></a>
# [0.25.0](https://github.com/matsp/material-components-vue/compare/v0.24.1...v0.25.0) (2018-07-09)


### Features

* **fab:** Synchronise with mdc-web ([b2cad7f](https://github.com/matsp/material-components-vue/commit/b2cad7f))
* **select:** Synchronise with mdc-web ([91bc17f](https://github.com/matsp/material-components-vue/commit/91bc17f))


### BREAKING CHANGES

* **select:** Renamed slot 'bottomLine' to 'line'.
* **fab:** Introduced icon slot and replaced default slot for extended fab label.



<a name="0.24.1"></a>
## [0.24.1](https://github.com/matsp/material-components-vue/compare/v0.24.0...v0.24.1) (2018-07-01)



<a name="0.24.0"></a>
# [0.24.0](https://github.com/matsp/material-components-vue/compare/v0.23.8...v0.24.0) (2018-07-01)


### Bug Fixes

* **icon-button:** Use computed properties for slot toggling ([7aeccfa](https://github.com/matsp/material-components-vue/commit/7aeccfa))


### Features

* **demo:** Add IconButton demo ([19008d0](https://github.com/matsp/material-components-vue/commit/19008d0))
* **demo:** Add Menu demo ([d5c8620](https://github.com/matsp/material-components-vue/commit/d5c8620))



<a name="0.23.8"></a>
## [0.23.8](https://github.com/matsp/material-components-vue/compare/v0.23.7...v0.23.8) (2018-06-29)


### Bug Fixes

* **icon-button:**  Implement instance checks before constructor call (close [#132](https://github.com/matsp/material-components-vue/issues/132)) ([da4fe10](https://github.com/matsp/material-components-vue/commit/da4fe10))
* **menu:** Pass event to mdc component (close [#131](https://github.com/matsp/material-components-vue/issues/131)) ([ed4ac7e](https://github.com/matsp/material-components-vue/commit/ed4ac7e))



<a name="0.23.7"></a>
## [0.23.7](https://github.com/matsp/material-components-vue/compare/v0.23.6...v0.23.7) (2018-06-25)


### Bug Fixes

* **menu:** Access vue instance instead of rendered node ([#126](https://github.com/matsp/material-components-vue/issues/126)) ([a08936e](https://github.com/matsp/material-components-vue/commit/a08936e))
* **tab:** Correct conditional rendering (close [#129](https://github.com/matsp/material-components-vue/issues/129)) ([5ddd679](https://github.com/matsp/material-components-vue/commit/5ddd679))



<a name="0.23.6"></a>
## [0.23.6](https://github.com/matsp/material-components-vue/compare/v0.23.5...v0.23.6) (2018-06-21)


### Bug Fixes

* **fab:** Improve tagname detection ([fbc75f2](https://github.com/matsp/material-components-vue/commit/fbc75f2))



<a name="0.23.5"></a>
## [0.23.5](https://github.com/matsp/material-components-vue/compare/v0.23.4...v0.23.5) (2018-06-20)


### Bug Fixes

* **fab:** Only destroy ripple if not undefined ([f469db1](https://github.com/matsp/material-components-vue/commit/f469db1))



<a name="0.23.4"></a>
## [0.23.4](https://github.com/matsp/material-components-vue/compare/v0.23.3...v0.23.4) (2018-06-20)



<a name="0.23.3"></a>
## [0.23.3](https://github.com/matsp/material-components-vue/compare/v0.23.2...v0.23.3) (2018-06-20)


### Bug Fixes

* **fab:** Disable adding CSS class for SVGs ([f8c2118](https://github.com/matsp/material-components-vue/commit/f8c2118))



<a name="0.23.2"></a>
## [0.23.2](https://github.com/matsp/material-components-vue/compare/v0.23.1...v0.23.2) (2018-06-19)



<a name="0.23.1"></a>
## [0.23.1](https://github.com/matsp/material-components-vue/compare/v0.23.0...v0.23.1) (2018-06-14)


### Bug Fixes

* **checkbox:** Set indeterminate correctly after state change (close [#123](https://github.com/matsp/material-components-vue/issues/123)) ([bfd2f89](https://github.com/matsp/material-components-vue/commit/bfd2f89))



<a name="0.23.0"></a>
# [0.23.0](https://github.com/matsp/material-components-vue/compare/v0.22.5...v0.23.0) (2018-06-13)


### Bug Fixes

* **docs:** Fix import issue from node_modules ([c68e957](https://github.com/matsp/material-components-vue/commit/c68e957))


### Features

* **icon-button:** Add new package ([26771e8](https://github.com/matsp/material-components-vue/commit/26771e8))


### BREAKING CHANGES

* **icon-button:** IconToggle has been moved to IconButton. Please refer to the readme for changes and how to update.



<a name="0.22.5"></a>
## [0.22.5](https://github.com/matsp/material-components-vue/compare/v0.22.4...v0.22.5) (2018-05-28)


### Bug Fixes

* **icon:** Bind listeners (close [#114](https://github.com/matsp/material-components-vue/issues/114)) ([a8ad180](https://github.com/matsp/material-components-vue/commit/a8ad180))



<a name="0.22.4"></a>
## [0.22.4](https://github.com/matsp/material-components-vue/compare/v0.22.3...v0.22.4) (2018-05-28)


### Bug Fixes

* **babel:** Add workaround for config resolution ([0c401a4](https://github.com/matsp/material-components-vue/commit/0c401a4))



<a name="0.22.3"></a>
## [0.22.3](https://github.com/matsp/material-components-vue/compare/v0.22.2...v0.22.3) (2018-05-28)


### Bug Fixes

* **webpack:** Build with webpack target web ([250a241](https://github.com/matsp/material-components-vue/commit/250a241))



<a name="0.22.2"></a>
## [0.22.2](https://github.com/matsp/material-components-vue/compare/v0.22.1...v0.22.2) (2018-05-28)



<a name="0.22.1"></a>
## [0.22.1](https://github.com/matsp/material-components-vue/compare/v0.22.0...v0.22.1) (2018-05-27)


### Bug Fixes

* **drawer:** Add missing mixin import statements ([732ace2](https://github.com/matsp/material-components-vue/commit/732ace2))



<a name="0.22.0"></a>
# [0.22.0](https://github.com/matsp/material-components-vue/compare/v0.21.1...v0.22.0) (2018-05-27)


### Bug Fixes

* **floating-label): fix(floating-label:** Explicit bind attributes (close [#112](https://github.com/matsp/material-components-vue/issues/112)) ([969a06f](https://github.com/matsp/material-components-vue/commit/969a06f))
* **webpack:** Change target to web ([2ca9705](https://github.com/matsp/material-components-vue/commit/2ca9705))


### Features

* **form-field:** Set radio and checkbox component to input property (close [#105](https://github.com/matsp/material-components-vue/issues/105)) ([6e2eadd](https://github.com/matsp/material-components-vue/commit/6e2eadd))



<a name="0.21.1"></a>
## [0.21.1](https://github.com/matsp/material-components-vue/compare/v0.21.0...v0.21.1) (2018-05-23)



<a name="0.21.0"></a>
# [0.21.0](https://github.com/matsp/material-components-vue/compare/v0.20.3...v0.21.0) (2018-05-23)


### Bug Fixes

* **list:** Correct component names for instantiation (close [#111](https://github.com/matsp/material-components-vue/issues/111)) ([f980270](https://github.com/matsp/material-components-vue/commit/f980270))
* **list:** Correct CSS class for ListItem (close [#110](https://github.com/matsp/material-components-vue/issues/110)) ([404ea70](https://github.com/matsp/material-components-vue/commit/404ea70))
* **theme:** Add surface color to theming mixin. ([e2879c1](https://github.com/matsp/material-components-vue/commit/e2879c1))


### Features

* **build:** Add SSR support for library (close [#107](https://github.com/matsp/material-components-vue/issues/107)) ([cfd1070](https://github.com/matsp/material-components-vue/commit/cfd1070))



<a name="0.20.3"></a>
## [0.20.3](https://github.com/matsp/material-components-vue/compare/v0.20.2...v0.20.3) (2018-05-20)


### Bug Fixes

* **docs:** Correct base url ([b197fbe](https://github.com/matsp/material-components-vue/commit/b197fbe))



<a name="0.20.2"></a>
## [0.20.2](https://github.com/matsp/material-components-vue/compare/v0.20.1...v0.20.2) (2018-05-20)


### Bug Fixes

* **travis:** Not correct docs directory ([57793b5](https://github.com/matsp/material-components-vue/commit/57793b5))



<a name="0.20.1"></a>
## [0.20.1](https://github.com/matsp/material-components-vue/compare/v0.20.0...v0.20.1) (2018-05-20)



<a name="0.20.0"></a>
# [0.20.0](https://github.com/matsp/material-components-vue/compare/v0.19.2...v0.20.0) (2018-05-20)


### Bug Fixes

* **button:** Set ripple on class changes ([4ecd765](https://github.com/matsp/material-components-vue/commit/4ecd765))
* **chips:** Only render checkmark on filter chips ([37f675d](https://github.com/matsp/material-components-vue/commit/37f675d))
* **fab:** Set ripple on class changes ([f049ab3](https://github.com/matsp/material-components-vue/commit/f049ab3))
* **list:** Set ripple on class changes ([b921ede](https://github.com/matsp/material-components-vue/commit/b921ede))


### Features

* **chips:** Provide mdcChipSet for child chips ([23734b6](https://github.com/matsp/material-components-vue/commit/23734b6))
* **radio:** Map non prop attributes to the inner input element ([4472ccf](https://github.com/matsp/material-components-vue/commit/4472ccf))


### BREAKING CHANGES

* **list:** Removed interactive prop, ripple effect is now default.
* **fab:** Removed interactive prop, ripple effect is now default.
* **button:** Removed interactive prop, ripple effect is now default.



<a name="0.19.2"></a>
## [0.19.2](https://github.com/matsp/material-components-vue/compare/v0.19.1...v0.19.2) (2018-05-14)


### Bug Fixes

* **card:** Add ripple effect on card if primaryAction (closes [#106](https://github.com/matsp/material-components-vue/issues/106)) ([e908e47](https://github.com/matsp/material-components-vue/commit/e908e47))
* **card:** Move media slot out of content ([c3c8c85](https://github.com/matsp/material-components-vue/commit/c3c8c85))
* **checkbox:** Make indeterminate a reactive prop ([844576d](https://github.com/matsp/material-components-vue/commit/844576d))
* **radio:** Watch checked prop (closes [#104](https://github.com/matsp/material-components-vue/issues/104)) ([238000f](https://github.com/matsp/material-components-vue/commit/238000f))



<a name="0.19.1"></a>
## [0.19.1](https://github.com/matsp/material-components-vue/compare/v0.19.0...v0.19.1) (2018-05-05)


### Bug Fixes

* **build:** Explicitly use babel-loader ([c090124](https://github.com/matsp/material-components-vue/commit/c090124))
* **button:** Make interactive a reactive prop ([9fd1456](https://github.com/matsp/material-components-vue/commit/9fd1456))
* **layout-grid:** Correct validator function ([a764c0c](https://github.com/matsp/material-components-vue/commit/a764c0c))
* **radio:** Correct two-way binding with value ([6e6b80a](https://github.com/matsp/material-components-vue/commit/6e6b80a))



<a name="0.19.0"></a>
# [0.19.0](https://github.com/matsp/material-components-vue/compare/v0.18.0...v0.19.0) (2018-04-24)


* feat(typography):Update mdc-web to v0.35.0 (#96) ([7ddf97a](https://github.com/matsp/material-components-vue/commit/7ddf97a)), closes [#96](https://github.com/matsp/material-components-vue/issues/96)


### Bug Fixes

* **demo:** Adapt typography changes ([f0559bf](https://github.com/matsp/material-components-vue/commit/f0559bf))


### Code Refactoring

* **select:** Replace Label & BottomLine with FloatingLabel & ([43fe087](https://github.com/matsp/material-components-vue/commit/43fe087)), closes [#96](https://github.com/matsp/material-components-vue/issues/96)


### Features

* **button:** Synchronise with mdc-web ([#96](https://github.com/matsp/material-components-vue/issues/96)) ([b90c911](https://github.com/matsp/material-components-vue/commit/b90c911))
* **card:** Synchronise with mdc-web ([#96](https://github.com/matsp/material-components-vue/issues/96)) ([c69d1a3](https://github.com/matsp/material-components-vue/commit/c69d1a3))
* **chips:** Synchronise with mdc-web ([#96](https://github.com/matsp/material-components-vue/issues/96)) ([ff93da9](https://github.com/matsp/material-components-vue/commit/ff93da9))
* **shape:** Add shape component ([f280390](https://github.com/matsp/material-components-vue/commit/f280390))
* **textfield:** Synchronise with mdc-web ([#96](https://github.com/matsp/material-components-vue/issues/96)) ([fd8ecee](https://github.com/matsp/material-components-vue/commit/fd8ecee))
* **theme:** Synchronise with mdc-web ([#96](https://github.com/matsp/material-components-vue/issues/96)) ([ae60fb8](https://github.com/matsp/material-components-vue/commit/ae60fb8))
* **top-app-bar:** Synchronise with mdc-web ([#96](https://github.com/matsp/material-components-vue/issues/96)) ([e8d5e5a](https://github.com/matsp/material-components-vue/commit/e8d5e5a))


### BREAKING CHANGES

* **select:** Use FloatingLabel and LineRipple instead of the
removed SelectLabel and SelectBottomLine.
* Removed Display and Title, added Overline. Headline
has now a level between 1 and 6.
* **theme:** Checkout the docs reference for the new mdc-theme CSS
classes.
* **card:** Stroked prop is renamed to outlined.
* **button:** Stroked prop is renamed to outlined.



<a name="0.18.0"></a>
# [0.18.0](https://github.com/matsp/material-components-vue/compare/v0.17.0...v0.18.0) (2018-04-23)


### Bug Fixes

* **card:** Add slotOberserver reference ([e0cac12](https://github.com/matsp/material-components-vue/commit/e0cac12))
* **card:** Correct data function ([a4946c3](https://github.com/matsp/material-components-vue/commit/a4946c3))
* Add disconnect before destroyment ([63ccb4a](https://github.com/matsp/material-components-vue/commit/63ccb4a))
* **demo:** Fix menu item ([3edc907](https://github.com/matsp/material-components-vue/commit/3edc907))
* Fix type check ([4a667b8](https://github.com/matsp/material-components-vue/commit/4a667b8))
* Fix typo ([df3c08c](https://github.com/matsp/material-components-vue/commit/df3c08c))


### Features

* **button:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([b115d8f](https://github.com/matsp/material-components-vue/commit/b115d8f))
* **card:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([b24651c](https://github.com/matsp/material-components-vue/commit/b24651c))
* **chip:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([cfbf749](https://github.com/matsp/material-components-vue/commit/cfbf749))
* **dialog:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([d6278b5](https://github.com/matsp/material-components-vue/commit/d6278b5))
* **fab:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([3668145](https://github.com/matsp/material-components-vue/commit/3668145))
* **grid-list:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([36f83b1](https://github.com/matsp/material-components-vue/commit/36f83b1))
* **image-list:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([4dc7e4b](https://github.com/matsp/material-components-vue/commit/4dc7e4b))
* **list:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([64c382d](https://github.com/matsp/material-components-vue/commit/64c382d))
* **list:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([7804dff](https://github.com/matsp/material-components-vue/commit/7804dff))
* **menu:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([7085946](https://github.com/matsp/material-components-vue/commit/7085946))
* **ripple:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([4ac021b](https://github.com/matsp/material-components-vue/commit/4ac021b))
* **ripple:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([4cea647](https://github.com/matsp/material-components-vue/commit/4cea647))
* **tabs:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([26b33c3](https://github.com/matsp/material-components-vue/commit/26b33c3))
* **textfield:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([e1221c5](https://github.com/matsp/material-components-vue/commit/e1221c5))
* **top-app-bar:** Use MutationObserver for reactive slot updates ([#92](https://github.com/matsp/material-components-vue/issues/92)) ([9a13f7e](https://github.com/matsp/material-components-vue/commit/9a13f7e))



<a name="0.17.0"></a>
# [0.17.0](https://github.com/matsp/material-components-vue/compare/v0.16.1...v0.17.0) (2018-04-19)


### Bug Fixes

* **demo:** Fix grid-cell span in SelectView ([e9bfa71](https://github.com/matsp/material-components-vue/commit/e9bfa71))


### Code Refactoring

* **dialog:** Implement two-way binding for open prop ([#83](https://github.com/matsp/material-components-vue/issues/83)) ([25ca33b](https://github.com/matsp/material-components-vue/commit/25ca33b))
* **linear-progress:** Use open prop for showing and hiding linear ([1db78b1](https://github.com/matsp/material-components-vue/commit/1db78b1))
* **menu:** Implement two-way binding for open prop ([#83](https://github.com/matsp/material-components-vue/issues/83)) ([f1d20a2](https://github.com/matsp/material-components-vue/commit/f1d20a2))
* **snackbar:** Implement two-way binding for open prop ([#83](https://github.com/matsp/material-components-vue/issues/83)) ([828edff](https://github.com/matsp/material-components-vue/commit/828edff))


### Features

* **demo:** Add menu demo ([#20](https://github.com/matsp/material-components-vue/issues/20)) ([d55aeb5](https://github.com/matsp/material-components-vue/commit/d55aeb5))
* **demo:** Add snackbar demo ([#20](https://github.com/matsp/material-components-vue/issues/20)) ([cc4a4b9](https://github.com/matsp/material-components-vue/commit/cc4a4b9))


### BREAKING CHANGES

* **linear-progress:** Public component methods for open / close no longer exist.
Please change your templates to use v-model instead.
* **dialog:** Public component methods for open / close no longer
exist. Please change your templates to use v-model instead.
* **snackbar:** Public component methods for open / close no longer
exist. Please change your templates to use v-model instead.
* **menu:** Public component methods for open / close no longer
exist. Please change your templates to use v-model instead.



<a name="0.16.1"></a>
## [0.16.1](https://github.com/matsp/material-components-vue/compare/v0.16.0...v0.16.1) (2018-04-13)



<a name="0.16.0"></a>
# [0.16.0](https://github.com/matsp/material-components-vue/compare/v0.15.1...v0.16.0) (2018-04-08)


### Code Refactoring

* **drawer:** Implement two-way binding for open prop ([#83](https://github.com/matsp/material-components-vue/issues/83)) ([fe246f2](https://github.com/matsp/material-components-vue/commit/fe246f2))


### Features

* **notched-outline:** Synchronise with mdc-web v0.34.1 (add notched prop) ([e19b0e0](https://github.com/matsp/material-components-vue/commit/e19b0e0))
* **select:** Synchronise with mdc-web v0.34.1 (rewrite of component) ([a2c94ac](https://github.com/matsp/material-components-vue/commit/a2c94ac))
* **theme:** Synchronise with mdc-web v0.34.1 (remove tonal variants) ([ad34970](https://github.com/matsp/material-components-vue/commit/ad34970))
* **top-app-bar:** Synchronise with mdc-web v0.34.1 (add dense style) ([e85c266](https://github.com/matsp/material-components-vue/commit/e85c266))
* **typography:** Synchronise with mdc-web v0.34.1 (remove adjustMargin prop) ([c333244](https://github.com/matsp/material-components-vue/commit/c333244))


### BREAKING CHANGES

* **select:** The select component now use a native html select, so
please update your templates as discribed in the docs.
* **typography:** Please remove adjustMargin prop in your templates.
* **theme:** Don't use tone variants e.g. secondary-light anymore.
* **drawer:** The toggle methods no longer exist, please use v-model
instead.



<a name="0.15.1"></a>
## [0.15.1](https://github.com/matsp/material-components-vue/compare/v0.15.0...v0.15.1) (2018-03-29)


### Bug Fixes

* **build:** Downgrade node-sass to fix ripple effect (closes [#87](https://github.com/matsp/material-components-vue/issues/87)) ([c724a7c](https://github.com/matsp/material-components-vue/commit/c724a7c))



<a name="0.15.0"></a>
# [0.15.0](https://github.com/matsp/material-components-vue/compare/v0.14.1...v0.15.0) (2018-03-27)


### Bug Fixes

* **demo:** Fix icon-toggle reference link ([4e27023](https://github.com/matsp/material-components-vue/commit/4e27023))
* **image-list:** Fix prop type in ImageListItem ([b826193](https://github.com/matsp/material-components-vue/commit/b826193))
* **image-list:** Fix prop validator functions ([1d10870](https://github.com/matsp/material-components-vue/commit/1d10870))
* **image-list:** Fix type comparison & use image slot in ImageListItem ([f0a7a1b](https://github.com/matsp/material-components-vue/commit/f0a7a1b))


### Features

* **chip:** Synchronise with mdc-web v0.33.0 (add checkmark) ([af17558](https://github.com/matsp/material-components-vue/commit/af17558))
* **demo:** Add image-list demo ([a9fad5e](https://github.com/matsp/material-components-vue/commit/a9fad5e))
* **demo:** Synchronise with mdc-web v0.33.0 (remove compact style) ([d82594b](https://github.com/matsp/material-components-vue/commit/d82594b))
* **image-list:** Synchronise with mdc-web v0.33.0 (add component) ([92168d6](https://github.com/matsp/material-components-vue/commit/92168d6))
* **notched-outline:** Synchronise with mdc-web v0.33.0 (add component) ([bbfa8eb](https://github.com/matsp/material-components-vue/commit/bbfa8eb))
* **top-app-bar:** Synchronise with mdc-web v0.33.0 (add prominent style) ([1e79429](https://github.com/matsp/material-components-vue/commit/1e79429))



<a name="0.14.1"></a>
## [0.14.1](https://github.com/matsp/material-components-vue/compare/v0.14.0...v0.14.1) (2018-03-23)


### Features

* **demo:** Improve demo load speed by preloading resources ([2059845](https://github.com/matsp/material-components-vue/commit/2059845))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/matsp/material-components-vue/compare/v0.13.1...v0.14.0) (2018-03-14)


### Features

* **textfield:** Change HTML Tag ([05a5c73](https://github.com/matsp/material-components-vue/commit/05a5c73))
* Add mdc-theme classes mixin (close [#67](https://github.com/matsp/material-components-vue/issues/67)) ([79dc321](https://github.com/matsp/material-components-vue/commit/79dc321))


### BREAKING CHANGES

* **textfield:** Please upgrade your textfields from <m-text-field> to
<m-textfield>



<a name="0.13.1"></a>
## [0.13.1](https://github.com/matsp/material-components-vue/compare/v0.13.0...v0.13.1) (2018-03-09)


### Bug Fixes

* **top-app-bar:** Remove validator & add attribute around default slot ([53f9e80](https://github.com/matsp/material-components-vue/commit/53f9e80))


### Features

* **demo:** Add top-app-bar demo ([c29f8e9](https://github.com/matsp/material-components-vue/commit/c29f8e9))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/matsp/material-components-vue/compare/v0.12.19...v0.13.0) (2018-03-07)


### Features

* **chips:** Synchronise with mdc-web v0.32.0 (add choice and filter) ([224b2e8](https://github.com/matsp/material-components-vue/commit/224b2e8))
* **demo:** Add chips demo ([7026e5f](https://github.com/matsp/material-components-vue/commit/7026e5f))
* **floating-label:** Synchronise with mdc-web v0.32.0 (add component) ([c2a13f5](https://github.com/matsp/material-components-vue/commit/c2a13f5))
* **top-app-bar:** Synchronise with mdc-web v0.32.0 (add component) ([ab379a4](https://github.com/matsp/material-components-vue/commit/ab379a4))



<a name="0.12.19"></a>
## [0.12.19](https://github.com/matsp/material-components-vue/compare/v0.12.18...v0.12.19) (2018-03-07)


### Bug Fixes

* **build:** Migrate library build tor new CSS plugin ([e202bce](https://github.com/matsp/material-components-vue/commit/e202bce))



<a name="0.12.18"></a>
## [0.12.18](https://github.com/matsp/material-components-vue/compare/v0.12.17...v0.12.18) (2018-03-06)



<a name="0.12.17"></a>
## [0.12.17](https://github.com/matsp/material-components-vue/compare/v0.12.16...v0.12.17) (2018-03-06)



<a name="0.12.16"></a>
## [0.12.16](https://github.com/matsp/material-components-vue/compare/v0.12.15...v0.12.16) (2018-03-05)


### Bug Fixes

* **demo:** Temporary use webpack's development mode for demos ([a569885](https://github.com/matsp/material-components-vue/commit/a569885))



<a name="0.12.15"></a>
## [0.12.15](https://github.com/matsp/material-components-vue/compare/v0.12.14...v0.12.15) (2018-03-05)


### Bug Fixes

* **build:** Disable splitting all chunks ([db922f5](https://github.com/matsp/material-components-vue/commit/db922f5))



<a name="0.12.14"></a>
## [0.12.14](https://github.com/matsp/material-components-vue/compare/v0.12.13...v0.12.14) (2018-03-05)


### Bug Fixes

* **build:** Fix split optimization (close [#79](https://github.com/matsp/material-components-vue/issues/79)) ([e21e57a](https://github.com/matsp/material-components-vue/commit/e21e57a))



<a name="0.12.13"></a>
## [0.12.13](https://github.com/matsp/material-components-vue/compare/v0.12.12...v0.12.13) (2018-03-05)


### Bug Fixes

* **build:** Fix CSS extract plugin (close [#78](https://github.com/matsp/material-components-vue/issues/78)) ([ec44f3c](https://github.com/matsp/material-components-vue/commit/ec44f3c))



<a name="0.12.12"></a>
## [0.12.12](https://github.com/matsp/material-components-vue/compare/v0.12.11...v0.12.12) (2018-03-05)



<a name="0.12.11"></a>
## [0.12.11](https://github.com/matsp/material-components-vue/compare/v0.12.10...v0.12.11) (2018-03-05)



<a name="0.12.10"></a>
## [0.12.10](https://github.com/matsp/material-components-vue/compare/v0.12.9...v0.12.10) (2018-03-05)



<a name="0.12.9"></a>
## [0.12.9](https://github.com/matsp/material-components-vue/compare/v0.12.8...v0.12.9) (2018-02-28)


### Bug Fixes

* **demo:** False config ([820af02](https://github.com/matsp/material-components-vue/commit/820af02))



<a name="0.12.8"></a>
## [0.12.8](https://github.com/matsp/material-components-vue/compare/v0.12.7...v0.12.8) (2018-02-28)


### Bug Fixes

* **demo:** Use postcss for demos ([0557508](https://github.com/matsp/material-components-vue/commit/0557508))



<a name="0.12.7"></a>
## [0.12.7](https://github.com/matsp/material-components-vue/compare/v0.12.6...v0.12.7) (2018-02-28)



<a name="0.12.6"></a>
## [0.12.6](https://github.com/matsp/material-components-vue/compare/v0.12.5...v0.12.6) (2018-02-28)


### Bug Fixes

* **demo:** Provide Promise poylfill via ProvidePlugin ([47661c3](https://github.com/matsp/material-components-vue/commit/47661c3))



<a name="0.12.5"></a>
## [0.12.5](https://github.com/matsp/material-components-vue/compare/v0.12.4...v0.12.5) (2018-02-28)


### Bug Fixes

* **demo:** Removed dynamic import function (closes [#73](https://github.com/matsp/material-components-vue/issues/73)) ([d1207a1](https://github.com/matsp/material-components-vue/commit/d1207a1))



<a name="0.12.4"></a>
## [0.12.4](https://github.com/matsp/material-components-vue/compare/v0.12.3...v0.12.4) (2018-02-28)


### Bug Fixes

* **demo:** Tried to use Promise before polyfill ([c61b5a3](https://github.com/matsp/material-components-vue/commit/c61b5a3))



<a name="0.12.3"></a>
## [0.12.3](https://github.com/matsp/material-components-vue/compare/v0.12.2...v0.12.3) (2018-02-28)


### Bug Fixes

* **demo:** Add promise polyfill if needed ([be8ec36](https://github.com/matsp/material-components-vue/commit/be8ec36))



<a name="0.12.2"></a>
## [0.12.2](https://github.com/matsp/material-components-vue/compare/v0.12.1...v0.12.2) (2018-02-26)


### Bug Fixes

* **webpack:** Fix CSS distribution name ([55a06ac](https://github.com/matsp/material-components-vue/commit/55a06ac))



<a name="0.12.1"></a>
## [0.12.1](https://github.com/matsp/material-components-vue/compare/v0.12.0...v0.12.1) (2018-02-26)


### Chores

* Upgrade Babel ([#70](https://github.com/matsp/material-components-vue/issues/70)) & publish ES5 with new transformations (closes [#71](https://github.com/matsp/material-components-vue/issues/71)) ([a944056](https://github.com/matsp/material-components-vue/commit/a944056))


### BREAKING CHANGES

* The distribution names changed, please update your build process!



<a name="0.12.0"></a>
# [0.12.0](https://github.com/matsp/material-components-vue/compare/v0.11.1...v0.12.0) (2018-02-24)


### Documentation

* **README:** Add necessary information about new distributions. ([d507485](https://github.com/matsp/material-components-vue/commit/d507485))


### BREAKING CHANGES

* **README:** There is no overall bundle anymore - please import only
components you need, not more...



<a name="0.11.1"></a>
## [0.11.1](https://github.com/matsp/material-components-vue/compare/v0.11.0...v0.11.1) (2018-02-20)


### Bug Fixes

* **README:** Update mdc-web version ([cac1af9](https://github.com/matsp/material-components-vue/commit/cac1af9))



<a name="0.11.0"></a>
# [0.11.0](https://github.com/matsp/material-components-vue/compare/v0.10.1...v0.11.0) (2018-02-20)


### Features

* **card:** Synchronise with mdc-web v0.31.0 (add primary action) ([ac51092](https://github.com/matsp/material-components-vue/commit/ac51092))
* **chip:** Synchronise with mdc-web v0.31.0 (add icons) ([d8793a4](https://github.com/matsp/material-components-vue/commit/d8793a4))
* **demo:** Add list component demo ([049bfbc](https://github.com/matsp/material-components-vue/commit/049bfbc))



<a name="0.10.1"></a>
## [0.10.1](https://github.com/matsp/material-components-vue/compare/v0.10.0...v0.10.1) (2018-02-19)



<a name="0.10.0"></a>
# [0.10.0](https://github.com/matsp/material-components-vue/compare/v0.9.0...v0.10.0) (2018-02-18)


### Bug Fixes

* **package:** update normalize.css to version 8.0.0 ([81f15b0](https://github.com/matsp/material-components-vue/commit/81f15b0))


### Features

* **demo:** Removed dark-theme switch ([9a174c8](https://github.com/matsp/material-components-vue/commit/9a174c8))
* **demo:** Replaced bottom-line with line-ripple in the textfield demo ([773864a](https://github.com/matsp/material-components-vue/commit/773864a))
* **drawer:** Decoupled drawer component for better customization (closes [#60](https://github.com/matsp/material-components-vue/issues/60)) ([c384a7a](https://github.com/matsp/material-components-vue/commit/c384a7a))


### BREAKING CHANGES

* **drawer:** There are new sub-components - have a look at the docs.



<a name="0.9.0"></a>
# [0.9.0](https://github.com/matsp/material-components-vue/compare/v0.8.0...v0.9.0) (2018-02-07)


### Features

* **card:** Synchronise with mdc-web v0.30.0 ([c73d745](https://github.com/matsp/material-components-vue/commit/c73d745))
* **card:** Synchronise with mdc-web v0.30.0 (add stroked prop) ([c384f99](https://github.com/matsp/material-components-vue/commit/c384f99))
* **checkbox:** Synchronise with mdc-web v0.30.0 ([ad92849](https://github.com/matsp/material-components-vue/commit/ad92849))
* **chips:** Synchronise with mdc-web v0.30.0 (add chip component) ([dd6a08a](https://github.com/matsp/material-components-vue/commit/dd6a08a))
* **line-ripple:** Synchronise with mdc-web v0.30.0 (add line-ripple component) ([bdd1f39](https://github.com/matsp/material-components-vue/commit/bdd1f39))
* **menu:** Synchronise with mdc-web v0.30.0 ([7a83af9](https://github.com/matsp/material-components-vue/commit/7a83af9))
* **menu:** Synchronise with mdc-web v0.30.0 ([8fea9c8](https://github.com/matsp/material-components-vue/commit/8fea9c8))
* **ripple:** Add missing method ([66f995f](https://github.com/matsp/material-components-vue/commit/66f995f))
* **select:** Synchronise with mdc-web v0.30.0 ([e8c3d59](https://github.com/matsp/material-components-vue/commit/e8c3d59))
* **textfield:** Synchronise with mdc-web v0.30.0 ([629df48](https://github.com/matsp/material-components-vue/commit/629df48))
* **theme:** Synchronise with mdc-web v0.30.0 ([1ef3026](https://github.com/matsp/material-components-vue/commit/1ef3026))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/matsp/material-components-vue/compare/v0.7.3...v0.8.0) (2018-01-30)


### Features

* **icon:** Decouple a few icon implementations in other components where possible (closes [#51](https://github.com/matsp/material-components-vue/issues/51)) ([d4a30d4](https://github.com/matsp/material-components-vue/commit/d4a30d4))



<a name="0.7.3"></a>
## [0.7.3](https://github.com/matsp/material-components-vue/compare/v0.7.2...v0.7.3) (2018-01-29)



<a name="0.7.2"></a>
## [0.7.2](https://github.com/matsp/material-components-vue/compare/v0.7.1...v0.7.2) (2018-01-29)


### Bug Fixes

* **webpack:** Fixes wrong module names ([6b6d559](https://github.com/matsp/material-components-vue/commit/6b6d559))



<a name="0.7.1"></a>
## [0.7.1](https://github.com/matsp/material-components-vue/compare/v0.7.0...v0.7.1) (2018-01-29)


### Bug Fixes

* **README:** Correct distributions table ([e4f9cc7](https://github.com/matsp/material-components-vue/commit/e4f9cc7))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/matsp/material-components-vue/compare/v0.6.0...v0.7.0) (2018-01-29)


### Features

* Add SASS style import for all mdc-web components (closes [#53](https://github.com/matsp/material-components-vue/issues/53)) ([16d6f2d](https://github.com/matsp/material-components-vue/commit/16d6f2d))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/matsp/material-components-vue/compare/v0.5.1...v0.6.0) (2018-01-25)


### Bug Fixes

* **drawer:** Only render slot when content is inserted ([7249010](https://github.com/matsp/material-components-vue/commit/7249010))
* **menu:** Add role and tabindex ([d00a8f8](https://github.com/matsp/material-components-vue/commit/d00a8f8))


### Features

* **demo:** Add select demo ([046827e](https://github.com/matsp/material-components-vue/commit/046827e))
* **drawer:** Add drawer toolbar spacer ([4feaa6c](https://github.com/matsp/material-components-vue/commit/4feaa6c))
* **list:** Synchronise component with mdc-web ([8c49711](https://github.com/matsp/material-components-vue/commit/8c49711))
* **select:** Synchronise component with mdc-web v0.29.0 ([f65d2b5](https://github.com/matsp/material-components-vue/commit/f65d2b5))
* **text-field:** Synchronise with mdc-web (closes [#47](https://github.com/matsp/material-components-vue/issues/47)) ([7eb23d3](https://github.com/matsp/material-components-vue/commit/7eb23d3))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/matsp/material-components-vue/compare/v0.5.0...v0.5.1) (2018-01-18)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/matsp/material-components-vue/compare/v0.4.0...v0.5.0) (2018-01-13)


### Bug Fixes

* **select:** Fixes to Select component ([b99e76f](https://github.com/matsp/material-components-vue/commit/b99e76f))


### Features

* **demo:** Add radio demo ([d75231b](https://github.com/matsp/material-components-vue/commit/d75231b))
* Integrates mdc-web v0.28.0 (closes [#42](https://github.com/matsp/material-components-vue/issues/42)) ([677fe0a](https://github.com/matsp/material-components-vue/commit/677fe0a))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/matsp/material-components-vue/compare/v0.3.0...v0.4.0) (2017-12-16)


### Features

* **demos:** Added demo for linear progress component ([584fba5](https://github.com/matsp/material-components-vue/commit/584fba5))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/matsp/material-components-vue/compare/v0.2.0...v0.3.0) (2017-12-15)


### Bug Fixes

* **babel:** Incorrect preset name ([be65935](https://github.com/matsp/material-components-vue/commit/be65935))
* **demo:** False commit ([bc238a8](https://github.com/matsp/material-components-vue/commit/bc238a8))
* **demos:** CSS optimizations ([9f33cd1](https://github.com/matsp/material-components-vue/commit/9f33cd1))
* Import babel-polyfill ([0e802ba](https://github.com/matsp/material-components-vue/commit/0e802ba))
* **demos:** Exchange drawer item components ([18ff382](https://github.com/matsp/material-components-vue/commit/18ff382))
* **switch:** Throw 'change' instead of 'changed' event ([6e309b1](https://github.com/matsp/material-components-vue/commit/6e309b1))
* **theme:** Fix CSS class ([4d4700e](https://github.com/matsp/material-components-vue/commit/4d4700e))
* **theme:** Removed SASS import ([7d33078](https://github.com/matsp/material-components-vue/commit/7d33078))
* **webpack:** Add polyfills commons chunk plugin entry ([ff09b94](https://github.com/matsp/material-components-vue/commit/ff09b94))
* **webpack:** Commons chunk plugin order ([21d2e5f](https://github.com/matsp/material-components-vue/commit/21d2e5f))
* **webpack:** Remove polyfill bundle ([56d3504](https://github.com/matsp/material-components-vue/commit/56d3504))
* **webpack:** Reorder common chunk plugin calls ([d885ede](https://github.com/matsp/material-components-vue/commit/d885ede))


### Features

* **demos:** Add dark theme switch ([c95ffcc](https://github.com/matsp/material-components-vue/commit/c95ffcc))
* **demos:** Add darkTheme state ([ee06275](https://github.com/matsp/material-components-vue/commit/ee06275))
* **fab:** Add exited state (fixes [#27](https://github.com/matsp/material-components-vue/issues/27)) ([44eda66](https://github.com/matsp/material-components-vue/commit/44eda66))
* **theme:** Add theme raw component ([d38249d](https://github.com/matsp/material-components-vue/commit/d38249d))
* **theme:** Allow custom styles for theme ([86b620b](https://github.com/matsp/material-components-vue/commit/86b620b))
* Introduce mutation types ([837d8b8](https://github.com/matsp/material-components-vue/commit/837d8b8))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/matsp/material-components-vue/compare/v0.1.0...v0.2.0) (2017-11-28)


### Features

* Adding fab demo ([6e3fb2c](https://github.com/matsp/material-components-vue/commit/6e3fb2c))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/matsp/material-components-vue/compare/v0.0.51...v0.1.0) (2017-11-20)


### Features

* Adding drawer demo ([ba2d6f5](https://github.com/matsp/material-components-vue/commit/ba2d6f5))
* Adding elevation demo ([d5055ba](https://github.com/matsp/material-components-vue/commit/d5055ba))



<a name="0.0.51"></a>
## [0.0.51](https://github.com/matsp/material-components-vue/compare/v0.0.50...v0.0.51) (2017-11-15)


### Bug Fixes

* build environment set false ([141c142](https://github.com/matsp/material-components-vue/commit/141c142))
* **linearProgress:** watched props set wrong ([7c8b8ef](https://github.com/matsp/material-components-vue/commit/7c8b8ef))
* **snackbar:** options property not set in show() ([d4e906f](https://github.com/matsp/material-components-vue/commit/d4e906f))
