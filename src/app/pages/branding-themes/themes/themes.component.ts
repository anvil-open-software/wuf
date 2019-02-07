/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ThemeListService } from '../../../internal/theme-list.service';


@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

    @ViewChild('swatches') swatches: ElementRef;
    @ViewChild('exampleButtonWrap') exampleButtonWrap: ElementRef;
    @ViewChild('exampleButton') exampleButton: ElementRef;

    constructor(public themeList: ThemeListService) {
    }

    exampleTextColor: string;
    exampleFillColor: string;
    exampleFontSize: string;
    exampleFontWeight: string;
    exampleTextDecoration: string;
    exampleFontFace: string;
    exampleBorderRadius: string;
    buttonTheme: any = {id: 'dematic'};
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
		$kg-brand-primary:      #fdbb30;
		$kg-brand-secondary:    #0879c9;
		$kg-brand-accent:       #fa6400;
		$kg-brand-success:      #5cb85c;
		$kg-brand-info:         #03A9F4;
		$kg-brand-warning:      #fdd835;
		$kg-brand-danger:       #dd2c00;
	
		/***** create a theme *****/
		@include wuf-theme-colors((
			"primary":      $kg-brand-primary,
			"secondary":    $kg-brand-secondary,
			"accent":       $kg-brand-accent,
			"success":      $kg-brand-success,
			"info":         $kg-brand-info,
			"warning":      $kg-brand-warning,
			"danger":       $kg-brand-danger
		));
		}
	`;

    exampleLogoCode = `
	body {
		/***** logo *****/
		@include wuf-theme-logo("/assets/images/example_images/logos/walmart.svg", 140px, 45px);
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
		/***** typography *****/
		$kg-brand-body-color:                  var(--wuf-color-gray-700);
		$kg-brand-font-family-sans-serif:      Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
		$kg-brand-font-family-serif:           "Times New Roman", Times, serif;
		$kg-brand-font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		$kg-brand-font-family-base:            $kg-brand-font-family-serif;
		$kg-brand-font-size-base:              1rem;
		$kg-brand-headings-font-family:        inherit;
		$kg-brand-headings-font-weight:        700;
		$kg-brand-headings-color:              var(--wuf-color-primary-darker-10);
		$kg-brand-h1-font-size:                2.5rem;
		$kg-brand-h2-font-size:                2rem;
		$kg-brand-h3-font-size:                1.75rem;
		$kg-brand-h4-font-size:                1.5rem;
		$kg-brand-h5-font-size:                1.25rem;
		$kg-brand-h6-font-size:                1rem;
	
		@include wuf-theme-typography(
			$kg-brand-body-color,
			$kg-brand-font-family-sans-serif,
			$kg-brand-font-family-serif,
			$kg-brand-font-family-monospace,
			$kg-brand-font-family-base,
			$kg-brand-font-size-base,
			$kg-brand-headings-font-family,
			$kg-brand-headings-font-weight,
			$kg-brand-headings-color,
			$kg-brand-h1-font-size,
			$kg-brand-h2-font-size,
			$kg-brand-h3-font-size,
			$kg-brand-h4-font-size,
			$kg-brand-h5-font-size,
			$kg-brand-h6-font-size
		);
	}
	`;

    exampleCodeComplete = `
	body {
		/***** set color values to use in theme *****/
		$kg-brand-primary:      #fdbb30;
		$kg-brand-secondary:    #0879c9;
		$kg-brand-accent:       #fa6400;
		$kg-brand-success:      #5cb85c;
		$kg-brand-info:         #03A9F4;
		$kg-brand-warning:      #fdd835;
		$kg-brand-danger:       #dd2c00;
	
		/***** create a theme *****/
		@include wuf-theme-colors((
			"primary":      $kg-brand-primary,
			"secondary":    $kg-brand-secondary,
			"accent":       $kg-brand-accent,
			"success":      $kg-brand-success,
			"info":         $kg-brand-info,
			"warning":      $kg-brand-warning,
			"danger":       $kg-brand-danger
		));
			
		/***** logo *****/
		@include wuf-theme-logo("/assets/images/example_images/logos/walmart.svg", 140px, 45px);
		
		/***** buttons *****/
		@include wuf-theme-button-radius(20px);
		
		/***** typography *****/
		$kg-brand-body-color:                  var(--wuf-color-gray-700);
		$kg-brand-font-family-sans-serif:      Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
		$kg-brand-font-family-serif:           "Times New Roman", Times, serif;
		$kg-brand-font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		$kg-brand-font-family-base:            $kg-brand-font-family-serif;
		$kg-brand-font-size-base:              1rem;
		$kg-brand-headings-font-family:        inherit;
		$kg-brand-headings-font-weight:        700;
		$kg-brand-headings-color:              var(--wuf-color-primary-darker-10);
		$kg-brand-h1-font-size:                2.5rem;
		$kg-brand-h2-font-size:                2rem;
		$kg-brand-h3-font-size:                1.75rem;
		$kg-brand-h4-font-size:                1.5rem;
		$kg-brand-h5-font-size:                1.25rem;
		$kg-brand-h6-font-size:                1rem;
	
		@include wuf-theme-typography(
			$kg-brand-body-color,
			$kg-brand-font-family-sans-serif,
			$kg-brand-font-family-serif,
			$kg-brand-font-family-monospace,
			$kg-brand-font-family-base,
			$kg-brand-font-size-base,
			$kg-brand-headings-font-family,
			$kg-brand-headings-font-weight,
			$kg-brand-headings-color,
			$kg-brand-h1-font-size,
			$kg-brand-h2-font-size,
			$kg-brand-h3-font-size,
			$kg-brand-h4-font-size,
			$kg-brand-h5-font-size,
			$kg-brand-h6-font-size
		);
	}
	`;
}
