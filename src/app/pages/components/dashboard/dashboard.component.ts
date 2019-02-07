/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent implements OnInit {

    heroes = [
        {
            name: 'Superman',
            powers: 'flight, x-ray vision, invulnerability, super strength, heat vision, cold breath, super speed',
            identity: 'Clark Kent',
            vulnerability: 'kryptonite, magic, mind control',
            id: 'superman',
            percentage: '95'
        },
        {
            name: 'Deadpool',
            powers: 'healing, agility, accuracy with projectile weapons and swords, wise assery',
            identity: 'Wade Wilson',
            vulnerability: 'unicorns',
            id: 'deadpool',
            percentage: '55'
        },
        {
            name: 'Iron Man',
            powers: 'intelligence, wealth',
            identity: 'Tony Stark',
            vulnerability: 'vulnerable to standard human ailments',
            id: 'ironman',
            percentage: '68'
        },
        {
            name: 'Batman',
            powers: 'intelligence, agility, wealth, martial arts',
            identity: 'Bruce Wayne',
            vulnerability: 'vulnerable to standard human ailments',
            id: 'batman',
            percentage: '62'
        },
        {
            name: 'Captain America',
            powers: 'super soldier, enhanced strength, enhanced agility, enhanced endurance',
            identity: 'Steve Rogers',
            vulnerability: 'vulnerable to standard human ailments',
            id: 'captainamerica',
            percentage: '60'
        },
        {
            name: 'Spider-Man',
            powers: 'agility, speed, can cling/crawl on surfaces, intelligence, spider-sense',
            identity: 'Peter Parker',
            vulnerability: 'Thanos\' snap',
            id: 'spiderman',
            percentage: '75'
        }
    ];

    setupCode1 = `import { WufDashboardModule } from '@anviltech/wuf-ang-dashboard';`;

    setupCode2 = `
	imports: [
		WufDashboardModule.forRoot(),
	]`;

    usageCode1 = `
		<wuf-content-main>
			<wuf-dashboard>my content here</wuf-dashboard>
		</wuf-content-main>
	`;

    usageCode2 = `
	:host {
		--wuf-content-padding: 0px;
	}
	
	wuf-content-header {
		// Make the page toolbar's shadow overlap the dashboard
		z-index: 4;
	}
	`;

    usageCode3 = `
		<wuf-content-main>
			<wuf-dashboard>
				<wuf-kpi label="KPI #1" value="12">details about KPI #1 here</wuf-kpi>
				<wuf-kpi label="KPI #2" value="34%" color="warning">I use a warning color</wuf-kpi>
				<wuf-kpi label="KPI #3" value="1,234,567" padding="0px">I don't have any content padding</wuf-kpi>
			</wuf-dashboard>
		</wuf-content-main>
	`;

    constructor() {
    }

    ngOnInit() {
    }

}
