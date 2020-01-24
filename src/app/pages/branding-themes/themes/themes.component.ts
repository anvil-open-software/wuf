/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ThemeListService } from '../../../_internal/theme-list.service';


@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

    @ViewChild('swatches', {static: false}) swatches: ElementRef;
    @ViewChild('exampleButtonWrap', {static: false}) exampleButtonWrap: ElementRef;
    @ViewChild('exampleButton', {static: false}) exampleButton: ElementRef;

    constructor(public themeList: ThemeListService) {
    }

    exampleTextColor: string;
    exampleFillColor: string;
    exampleFontSize: string;
    exampleFontWeight: string;
    exampleTextDecoration: string;
    exampleFontFace: string;
    exampleBorderRadius: string;
    buttonTheme: any = {id: 'default'};
    themes: any;

    ngOnInit() {
        this.themes = this.themeList.themes;
        // this.getButtonStyles(); //TODO: This causes tests to timeout
    }

    onButtonThemeSelectChange($event) {
        this.exampleButtonWrap.nativeElement.setAttribute('wuf-theme', this.buttonTheme.config.theme);
        this.getButtonStyles();
    }

    //TODO: This function causes tests to timeout
    getButtonStyles() {
        let button = this.exampleButton['_elementRef'].nativeElement; // We're using an Angular Material button here so need to access nativeElement in a different way
        let computedStyle: any = window.getComputedStyle(button);

        this.exampleTextColor = computedStyle['color'];
        this.exampleFillColor = computedStyle['background-color'];
        this.exampleFontSize = computedStyle['font-size'];
        this.exampleFontWeight = computedStyle['font-weight'];
        this.exampleTextDecoration = computedStyle['text-decoration'];
        this.exampleFontFace = computedStyle['font-family'];
        this.exampleBorderRadius = computedStyle['border-radius'];
    }

    exampleColorCode = `
	body {
		/***** set color values to use in theme *****/
		$wuf-brand-primary:      #fdbb30;
		$wuf-brand-secondary:    #0879c9;
		$wuf-brand-accent:       #fa6400;
		$wuf-brand-success:      #5cb85c;
		$wuf-brand-info:         #03A9F4;
		$wuf-brand-warning:      #fdd835;
		$wuf-brand-danger:       #dd2c00;

		/***** create a theme *****/
		@include wuf-theme-colors((
			"primary":      $wuf-brand-primary,
			"secondary":    $wuf-brand-secondary,
			"accent":       $wuf-brand-accent,
			"success":      $wuf-brand-success,
			"info":         $wuf-brand-info,
			"warning":      $wuf-brand-warning,
			"danger":       $wuf-brand-danger
		));
    }
	`;

    exampleLogoCode = `
	body {
		/***** logo *****/
		@include wuf-theme-logo('/assets/images/logo.svg', 200px, 35px);
	}
	`;

    exampleButtonCode = `
	body {
		/***** buttons *****/
		@include wuf-theme-button-radius(20px);
	}
	`;

    exampleFontCode = `

	body {
	    /***** import font *****/
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

		/***** typography *****/
		$wuf-brand-body-color:                  var(--wuf-color-gray-700);
		$wuf-brand-font-family-sans-serif:      Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
		$wuf-brand-font-family-serif:           "Times New Roman", Times, serif;
		$wuf-brand-font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		$wuf-brand-font-family-base:            $wuf-brand-font-family-serif;
		$wuf-brand-font-size-base:              1rem;
		$wuf-brand-headings-font-family:        inherit;
		$wuf-brand-headings-font-weight:        700;
		$wuf-brand-headings-color:              var(--wuf-color-primary-darker-10);
		$wuf-brand-h1-font-size:                2.5rem;
		$wuf-brand-h2-font-size:                2rem;
		$wuf-brand-h3-font-size:                1.75rem;
		$wuf-brand-h4-font-size:                1.5rem;
		$wuf-brand-h5-font-size:                1.25rem;
		$wuf-brand-h6-font-size:                1rem;

		@include wuf-theme-typography(
			$wuf-brand-body-color,
			$wuf-brand-font-family-sans-serif,
			$wuf-brand-font-family-serif,
			$wuf-brand-font-family-monospace,
			$wuf-brand-font-family-base,
			$wuf-brand-font-size-base,
			$wuf-brand-headings-font-family,
			$wuf-brand-headings-font-weight,
			$wuf-brand-headings-color,
			$wuf-brand-h1-font-size,
			$wuf-brand-h2-font-size,
			$wuf-brand-h3-font-size,
			$wuf-brand-h4-font-size,
			$wuf-brand-h5-font-size,
			$wuf-brand-h6-font-size
		);
	}
	`;

    exampleCodeComplete = `
	body {
		/***** set color values to use in theme *****/
		$wuf-brand-primary:      #fdbb30;
		$wuf-brand-secondary:    #0879c9;
		$wuf-brand-accent:       #fa6400;
		$wuf-brand-success:      #5cb85c;
		$wuf-brand-info:         #03A9F4;
		$wuf-brand-warning:      #fdd835;
		$wuf-brand-danger:       #dd2c00;

		/***** create a theme *****/
		@include wuf-theme-colors((
			"primary":      $wuf-brand-primary,
			"secondary":    $wuf-brand-secondary,
			"accent":       $wuf-brand-accent,
			"success":      $wuf-brand-success,
			"info":         $wuf-brand-info,
			"warning":      $wuf-brand-warning,
			"danger":       $wuf-brand-danger
		));

		/***** logo *****/
		@include wuf-theme-logo("/assets/images/example_images/logos/walmart.svg", 140px, 45px);

		/***** buttons *****/
		@include wuf-theme-button-radius(20px);

		/***** typography *****/
		$wuf-brand-body-color:                  var(--wuf-color-gray-700);
		$wuf-brand-font-family-sans-serif:      Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
		$wuf-brand-font-family-serif:           "Times New Roman", Times, serif;
		$wuf-brand-font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		$wuf-brand-font-family-base:            $wuf-brand-font-family-serif;
		$wuf-brand-font-size-base:              1rem;
		$wuf-brand-headings-font-family:        inherit;
		$wuf-brand-headings-font-weight:        700;
		$wuf-brand-headings-color:              var(--wuf-color-primary-darker-10);
		$wuf-brand-h1-font-size:                2.5rem;
		$wuf-brand-h2-font-size:                2rem;
		$wuf-brand-h3-font-size:                1.75rem;
		$wuf-brand-h4-font-size:                1.5rem;
		$wuf-brand-h5-font-size:                1.25rem;
		$wuf-brand-h6-font-size:                1rem;

		@include wuf-theme-typography(
			$wuf-brand-body-color,
			$wuf-brand-font-family-sans-serif,
			$wuf-brand-font-family-serif,
			$wuf-brand-font-family-monospace,
			$wuf-brand-font-family-base,
			$wuf-brand-font-size-base,
			$wuf-brand-headings-font-family,
			$wuf-brand-headings-font-weight,
			$wuf-brand-headings-color,
			$wuf-brand-h1-font-size,
			$wuf-brand-h2-font-size,
			$wuf-brand-h3-font-size,
			$wuf-brand-h4-font-size,
			$wuf-brand-h5-font-size,
			$wuf-brand-h6-font-size
		);
	}
	`;
}
