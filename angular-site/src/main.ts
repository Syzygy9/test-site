import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import {RadioOverviewExample} from './app/form-controls/radio-button/radio-overview-example';
import {RadioNgModelExample} from './app/form-controls/radio-button/radio-ng-model-example';
import {CheckboxOverviewExample} from './app/form-controls/checkbox/checkbox-overview-example';
import {CheckboxConfigurableExample} from './app/form-controls/checkbox/checkbox-configurable-example';
import {SlideToggleOverviewExample} from './app/form-controls/slide-toggle/slide-toggle-overview-example';
import {SlideToggleConfigurableExample} from './app/form-controls/slide-toggle/slide-toggle-configurable-example';
import {AutocompleteOverviewExample} from './app/form-controls/autocomplete/autocomplete-overview-example';
import {AutocompleteSimpleExample} from './app/form-controls/autocomplete/autocomplete-simple-example';
import {AutocompleteDisplayExample} from './app/form-controls/autocomplete/autocomplete-display-example';
import {AutocompleteFilterExample} from './app/form-controls/autocomplete/autocomplete-filter-example';
import {AutocompleteOptgroupExample} from './app/form-controls/autocomplete/autocomplete-optgroup-example';
import {AutocompleteAutoActiveFirstOptionExample} from './app/form-controls/autocomplete/autocomplete-auto-active-first-option-example';
import {SelectOverviewExample} from './app/form-controls/select/select-overview-example';
import {SelectValueBindingExample} from './app/form-controls/select/select-value-binding-example';
import {SelectFormExample} from './app/form-controls/select/select-form-example';
import {SelectHintErrorExample} from './app/form-controls/select/select-hint-error-example';
import {SelectDisabledExample} from './app/form-controls/select/select-disabled-example';
import {SelectResetExample} from './app/form-controls/select/select-reset-example';
import {SelectOptgroupExample} from './app/form-controls/select/select-optgroup-example';
import {SelectMultipleExample} from './app/form-controls/select/select-multiple-example';
import {SelectCustomTriggerExample} from './app/form-controls/select/select-custom-trigger-example';
import {SelectNoRippleExample} from './app/form-controls/select/select-no-ripple-example';
import {SelectPanelClassExample} from './app/form-controls/select/select-panel-class-example';
import {SelectErrorStateMatcherExample} from './app/form-controls/select/select-error-state-matcher-example';
import {InputOverviewExample} from './app/form-controls/input/input-overview-example';
import {InputErrorStateMatcherExample} from './app/form-controls/input/input-error-state-matcher-example';
import {TextFieldAutosizeTextareaExample} from './app/form-controls/input/text-field-autosize-textarea-example';
import {InputClearableExample} from './app/form-controls/input/input-clearable-example';
import {InputErrorsExample} from './app/form-controls/input/input-errors-example';
import {InputFormExample} from './app/form-controls/input/input-form-example';
import {InputHintExample} from './app/form-controls/input/input-hint-example';
import {InputPrefixSuffixExample} from './app/form-controls/input/input-prefix-suffix-example';
import {SliderOverviewExample} from './app/form-controls/slider/slider-overview-example';
import {SliderFormattingExample} from './app/form-controls/slider/slider-formatting-example';
import {SliderConfigurableExample} from './app/form-controls/slider/slider-configurable-example';
import {DatepickerOverviewExample} from './app/form-controls/datepicker/datepicker-overview-example';
import {DatepickerStartViewExample} from './app/form-controls/datepicker/datepicker-start-view-example';
import {DatepickerValueExample} from './app/form-controls/datepicker/datepicker-value-example';
import {DatepickerMinMaxExample} from './app/form-controls/datepicker/datepicker-min-max-example';
import {DatepickerFilterExample} from './app/form-controls/datepicker/datepicker-filter-example';
import {DatepickerEventsExample} from './app/form-controls/datepicker/datepicker-events-example';
import {DatepickerDisabledExample} from './app/form-controls/datepicker/datepicker-disabled-example';
import {DatepickerTouchExample} from './app/form-controls/datepicker/datepicker-touch-example';
import {DatepickerApiExample} from './app/form-controls/datepicker/datepicker-api-example';
// import {DatepickerLocaleExample} from './app/form-controls/datepicker/datepicker-locale-example';
// import {DatepickerMomentExample} from './app/form-controls/datepicker/datepicker-moment-example';
// import {DatepickerFormatsExample} from './app/form-controls/datepicker/datepicker-formats-example';
import {FormFieldOverviewExample} from './app/form-controls/form-field/form-field-overview-example';
import {FormFieldLabelExample} from './app/form-controls/form-field/form-field-label-example';
import {FormFieldAppearanceExample} from './app/form-controls/form-field/form-field-appearance-example';
import {FormFieldHintExample} from './app/form-controls/form-field/form-field-hint-example';
import {FormFieldErrorExample} from './app/form-controls/form-field/form-field-error-example';
import {FormFieldPrefixSuffixExample} from './app/form-controls/form-field/form-field-prefix-suffix-example';
import {FormFieldThemingExample} from './app/form-controls/form-field/form-field-theming-example';
import {FormFieldCustomControlExample, MyTelInput} from './app/form-controls/form-field/form-field-custom-control-example';
import {MenuOverviewExample} from './app/navigation/menu/menu-overview-example';
import {MenuIconsExample} from './app/navigation/menu/menu-icons-example';
import {NestedMenuExample} from './app/navigation/menu/nested-menu-example';
import {ToolbarOverviewExample} from './app/navigation/toolbar/toolbar-overview-example';
import {ToolbarMultirowExample} from './app/navigation/toolbar/toolbar-multirow-example';
import {SidenavOverviewExample} from './app/navigation/sidenav/sidenav-overview-example';
import {SidenavDrawerOverviewExample} from './app/navigation/sidenav/sidenav-drawer-overview-example';
// There should be some more sidenavs
import {SidenavAutosizeExample} from './app/navigation/sidenav/sidenav-autosize-example';
// There should be some more sidenavs
import {CardOverviewExample} from './app/layout/card/card-overview-example';
import {CardFancyExample} from './app/layout/card/card-fancy-example';
import {DividerOverviewExample} from './app/layout/divider/divider-overview-example';
import {ExpansionOverviewExample} from './app/layout/expansion-panel/expansion-overview-example';
import {ExpansionStepsExample} from './app/layout/expansion-panel/expansion-steps-example';
import {GridListOverviewExample} from './app/layout/grid-list/grid-list-overview-example';
import {GridListDynamicExample} from './app/layout/grid-list/grid-list-dynamic-example';
import {ListOverviewExample} from './app/layout/list/list-overview-example';
import {ListSectionsExample} from './app/layout/list/list-sections-example';
import {TreeDynamicExample} from './app/layout/tree/tree-dynamic-example';
import {TreeFlatOverviewExample} from './app/layout/tree/tree-flat-overview-example';
import {TreeChecklistExample} from './app/layout/tree/tree-checklist-example';
import {TreeNestedOverviewExample} from './app/layout/tree/tree-nested-overview-example';
import {TreeLoadmoreExample} from './app/layout/tree/tree-loadmore-example';
import {StepperOverviewExample} from './app/layout/stepper/stepper-overview-example';
import {StepperOptionalExample} from './app/layout/stepper/stepper-optional-example';
import {TabGroupBasicExample} from './app/layout/tab/tab-group-basic-example';
import {TabGroupCustomLabelExample} from './app/layout/tab/tab-group-custom-label-example';
import {TabGroupDynamicHeightExample} from './app/layout/tab/tab-group-dynamic-height-example';
import {TabGroupDynamicExample} from './app/layout/tab/tab-group-dynamic-example';
import {TabGroupHeaderBelowExample} from './app/layout/tab/tab-group-header-below-example';
import {TabGroupLazyLoadedExample} from './app/layout/tab/tab-group-lazy-loaded-example';
import {TabGroupThemeExample} from './app/layout/tab/tab-group-theme-example';
import {TabGroupAsyncExample} from './app/layout/tab/tab-group-async-example';
import {TabNavBarBasicExample} from './app/layout/tab/tab-nav-bar-basic-example';
import {ButtonTypesExample} from './app/buttons-and-indicators/button/button-types-example';
import {ButtonToggleOverviewExample} from './app/buttons-and-indicators/button-toggle/button-toggle-overview-example';
import {ButtonToggleExclusiveExample} from './app/buttons-and-indicators/button-toggle/button-toggle-exclusive-example';
import {BadgeOverviewExample} from './app/buttons-and-indicators/badge/badge-overview-example';
import {ChipsOverviewExample} from './app/buttons-and-indicators/chips/chips-overview-example';
import {ChipsStackedExample} from './app/buttons-and-indicators/chips/chips-stacked-example';
import {ChipsAutocompleteExample} from './app/buttons-and-indicators/chips/chips-autocomplete-example';
import {ChipsInputExample} from './app/buttons-and-indicators/chips/chips-input-example';
import {IconOverviewExample} from './app/buttons-and-indicators/icon/icon-overview-example';
//import {IconSvgExample} from './app/buttons-and-indicators/icon/icon-svg-example';
import {ProgressSpinnerOverviewExample} from './app/buttons-and-indicators/progress-spinner/progress-spinner-overview-example';
import {ProgressSpinnerConfigurableExample} from './app/buttons-and-indicators/progress-spinner/progress-spinner-configurable-example';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
let components: any[] =
    [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
      SlideToggleConfigurableExample, AutocompleteOverviewExample, AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample,
      AutocompleteOptgroupExample, AutocompleteAutoActiveFirstOptionExample, SelectOverviewExample, SelectValueBindingExample, SelectFormExample,
      SelectHintErrorExample, SelectDisabledExample, SelectResetExample, SelectOptgroupExample, SelectMultipleExample, SelectCustomTriggerExample,
      SelectNoRippleExample, SelectPanelClassExample, InputOverviewExample, SelectErrorStateMatcherExample, InputErrorStateMatcherExample,
      TextFieldAutosizeTextareaExample, InputClearableExample, InputErrorsExample, InputFormExample, InputHintExample, InputPrefixSuffixExample,
      SliderOverviewExample, SliderFormattingExample, SliderConfigurableExample, DatepickerOverviewExample, DatepickerStartViewExample,
      DatepickerValueExample, DatepickerMinMaxExample, DatepickerFilterExample, DatepickerEventsExample, DatepickerDisabledExample,
      DatepickerTouchExample, DatepickerApiExample,
      FormFieldOverviewExample, FormFieldLabelExample, FormFieldAppearanceExample, FormFieldHintExample, FormFieldErrorExample,
      FormFieldPrefixSuffixExample, FormFieldThemingExample, FormFieldCustomControlExample, MyTelInput, MenuOverviewExample, MenuIconsExample,
      NestedMenuExample, ToolbarOverviewExample, ToolbarMultirowExample, SidenavOverviewExample, SidenavDrawerOverviewExample,
      SidenavAutosizeExample, CardOverviewExample, CardFancyExample, DividerOverviewExample, ExpansionOverviewExample, ExpansionStepsExample,
      GridListOverviewExample, GridListDynamicExample, ListOverviewExample, ListSectionsExample, TreeDynamicExample, TreeFlatOverviewExample,
      TreeChecklistExample, TreeNestedOverviewExample, TreeLoadmoreExample, StepperOverviewExample, StepperOptionalExample, TabGroupBasicExample,
      TabGroupCustomLabelExample, TabGroupDynamicHeightExample, TabGroupDynamicExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample,
      TabGroupThemeExample, TabGroupAsyncExample, TabNavBarBasicExample,
      ButtonTypesExample, ButtonToggleOverviewExample, ButtonToggleExclusiveExample, BadgeOverviewExample, ChipsOverviewExample,
      ChipsStackedExample, ChipsAutocompleteExample, ChipsInputExample, IconOverviewExample, //IconSvgExample,
      ProgressSpinnerOverviewExample, ProgressSpinnerConfigurableExample];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: components,
  declarations: components,
  bootstrap: components,
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
