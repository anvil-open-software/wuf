/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-button',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class AlertComponent implements OnInit {

    sampleCode: string = `
		<div class="alert alert-primary" role="alert">
			This is a primary alert—check it out!
		</div>
		
		<div class="alert alert-secondary" role="alert">
			This is a secondary alert—check it out!
		</div>
		
		<div class="alert alert-success" role="alert">
			This is a success alert—check it out!
		</div>
		
		<div class="alert alert-danger" role="alert">
			This is a danger alert—check it out!
		</div>
		
		<div class="alert alert-warning" role="alert">
			This is a warning alert—check it out!
		</div>
		
		<div class="alert alert-info" role="alert">
			This is a info alert—check it out!
		</div>
		
		<div class="alert alert-light" role="alert">
			This is a light alert—check it out!
		</div>
		
		<div class="alert alert-dark" role="alert">
			This is a dark alert—check it out!
		</div>
	`;

    constructor() {
    }

    ngOnInit() {
    }
}
