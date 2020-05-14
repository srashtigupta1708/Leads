import { Component, Input, forwardRef } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    Validator,
    FormControl
} from '@angular/forms';

@Component({
    selector: 'app-loc-type-selector',
    templateUrl: './location-selector.component.html',
    styleUrls: ['./location-selector.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LocationTypeSelectorComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => LocationTypeSelectorComponent),
            multi: true
        }
    ]
})
export class LocationTypeSelectorComponent implements ControlValueAccessor, Validator {
    @Input()
    public isRequired: boolean;

    public isDisabled: boolean;
    public selectedLocationType: string;

    public locationTypes: string[] = [
        'City',
        'State',
        'Country'
    ];

    private onChange = (locType: string) => { };

    constructor() {

    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {

    }

    public setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public writeValue(locType: string) {
        this.selectedLocationType = locType;
        this.onChange(locType);
    }

    public validate(control: FormControl) {
        return (!this.isRequired ? null :
            (this.selectedLocationType ? null :
                { error: true }));
    }
}
