/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-vaadin-grid',
    templateUrl: './vaadin-grid.component.html',
    styleUrls: ['./vaadin-grid.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class VaadinGridComponent implements OnInit {

    tableData = [
        {
            name: 'Superman',
            powers: 'flight, x-ray vision, invulnerability, super strength, heat vision, cold breath, super speed',
            identity: 'Clark Kent',
            vulnerability: 'kryptonite, magic, mind control'
        },
        {
            name: 'Deadpool',
            powers: 'healing, agility, accuracy with projectile weapons and swords, wise assery',
            identity: 'Wade Wilson',
            vulnerability: 'unicorns'
        },
        {
            name: 'Iron Man',
            powers: 'intelligence, wealth',
            identity: 'Tony Stark',
            vulnerability: 'vulnerable to standard human ailments'
        },
        {
            name: 'Batman',
            powers: 'intelligence, agility, wealth, martial arts',
            identity: 'Bruce Wayne',
            vulnerability: 'vulnerable to standard human ailments'
        },
        {
            name: 'Thor',
            powers: 'flight, super strength, invulnerability, can conjur lightning',
            identity: 'Thor',
            vulnerability: 'magic'
        },
        {
            name: 'Dr Strange',
            powers: 'master of the mystic arts',
            identity: 'Stephen Strange',
            vulnerability: 'magic, vulnerable to standard human ailments'
        },
        {
            name: 'Spider-Man',
            powers: 'agility, speed, can cling/crawl on surfaces, intelligence, spider-sense',
            identity: 'Peter Parker',
            vulnerability: 'Thanos\' snap'
        }
    ];

    exampleCode = `
			<vaadin-grid [items]="tableData" column-reordering-allowed multi-sort #myGrid>

				<vaadin-grid-column resizable width="0px">
					<template class="header">#</template>
					<template>[[index]]</template>
				</vaadin-grid-column>

				<vaadin-grid-column resizable width="100px">

					<template class="header" ngNonBindable>
						<vaadin-grid-sorter path="name">
							<vaadin-grid-filter aria-label="Name" path="name" value="[[_name]]">
								<paper-input value="{{_name::input}}" focus-target no-label-float label="Super Hero" style="display: inline-block; vertical-align:middle"></paper-input>
							</vaadin-grid-filter>
							<iron-icon icon="icons:arrow-upward" style="display: inline-flex; vertical-align:middle"></iron-icon>
						</vaadin-grid-sorter>
					</template>
					<template>[[item.name]]</template>
				</vaadin-grid-column>

				<vaadin-grid-column resizable>
					<template class="header">
						<vaadin-grid-sorter path="powers">
							Super Powers <iron-icon icon="icons:arrow-upward"></iron-icon>
						</vaadin-grid-sorter>
					</template>
					<template>[[item.powers]]</template>
				</vaadin-grid-column>

				<vaadin-grid-column resizable>
					<template class="header">
						<vaadin-grid-sorter path="identity">
							Secret Identity <iron-icon icon="icons:arrow-upward"></iron-icon>
						</vaadin-grid-sorter>
					</template>
					<template>[[item.identity]]</template>
				</vaadin-grid-column>

				<vaadin-grid-column resizable>
					<template class="header">
						<vaadin-grid-sorter path="vulnerability">
							Vulnerability <iron-icon icon="icons:arrow-upward"></iron-icon>
						</vaadin-grid-sorter>
					</template>
					<template>[[item.vulnerability]]</template>
				</vaadin-grid-column>

			</vaadin-grid>`;

    constructor() {
    }


    ngOnInit() {
    }
}
