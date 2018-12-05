/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/***** grid styles *****/
const $_documentContainer1 = document.createElement('div');
$_documentContainer1.setAttribute('style', 'display: none;');
$_documentContainer1.innerHTML = `
<dom-module id="my-grid" theme-for="vaadin-grid">
	<template>
		<style>
			/* Table */
			#table {
				background-color: var(--kg-table-bg-color);
			}
			
			/* Headers and footers */
			[part="row"]:only-child [part~="header-cell"] {
				min-height: auto;
			}
			
			[part~="header-cell"]:not([part~="details-cell"]) {
				background-color: var(--kg-table-head-bg-color);
				color: var(--kg-body-color);
				box-shadow: 0 3px 3px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.2);
				position: relative;
				height: 55px;
			}
			
			[part~="header-cell"] ::slotted(vaadin-grid-cell-content), 
			[part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
				font-size: 1rem;
				font-weight: bold;
				padding: 15px var(--lumo-space-m, 20px) 5px var(--lumo-space-m, 20px);
				overflow-y: visible;
				
				/***** paper-input mixins *****/
				/* Reference: https://github.com/PolymerElements/paper-input/blob/master/paper-input-container.html */
				--paper-input-container: {
					position: relative;
					top: -14px;
				};
				
				/***** make the filter's floating label use the primary color both on focus and when there is a value in the input.  As per UX Board guidelines, a filter with a value should always show its label using the primary color. *****/
				--paper-input-container-label-floating: {
					color: var(--kg-color-primary, var(--primary-color));
				};
				--paper-input-container-label-focus: {
					color: var(--kg-color-primary, var(--primary-color));
				};
			}
			
			/* Table body */
			[part~="cell"] {
				background-color: transparent;
			}
			[part~="body-cell"] {
				background-color: transparent;
				color: var(--kg-body-color);
			}
		
			/* Row stripes */
			[part~="row"] {
				background-color: var(--kg-table-bg-color);
			}
			[part~="row"]:not([odd]) [part~="body-cell"],
			[part~="row"]:not([odd]) [part~="details-cell"] {
				background-color: var(--kg-table-accent-bg-color);
				background-repeat: repeat-x;
			}
			[part~="row"]:hover [part~="body-cell"] {
				background-color: var(--kg-table-hover-bg-color);
			}
		</style>
	</template>
</dom-module>`;
document.head.appendChild($_documentContainer1);

/***** column sorter *****/
//
const $_documentContainer2 = document.createElement('div');
$_documentContainer2.setAttribute('style', 'display: none;');
$_documentContainer2.innerHTML = `
<dom-module id="my-grid-sorter" theme-for="vaadin-grid-sorter">
	<template>
		<style>
			:host {
				line-height: inherit;
				color: var(--kg-body-color);
			}
			
			[part="indicators"]::before {
				/* hide the default sort icon */
				display: none;
			}
		</style>
	</template>
</dom-module>`;
document.head.appendChild($_documentContainer2);

const $_documentContainer3 = document.createElement('div');
$_documentContainer3.setAttribute('style', 'display: none;');
$_documentContainer3.innerHTML = `
<custom-style>
  <style>
	
	vaadin-grid-sorter,
	vaadin-grid-sorter[direction] {
		color: var(--kg-body-color);
	}
	
	vaadin-grid-sorter iron-icon {
		transform: scale(0.8) translateZ(0);
		transition: all 0.3s;
		display:inline-block;
		color: var(--kg-body-color);
	}
	
	/* left-align sorter */
	/* vaadin-grid-sorter iron-icon {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	} */
	
	vaadin-grid-sorter[direction] iron-icon {
		opacity: 1;
	}

	vaadin-grid-sorter:not([direction]) iron-icon {
		opacity: .3;
	}
	
	vaadin-grid-sorter:not([direction]):hover iron-icon {
		opacity: .6;
	}

	vaadin-grid-sorter[direction=desc] iron-icon {
		transform: scale(0.8) rotate(180deg) translateZ(0);
	}
	
	vaadin-grid-filter paper-input {
		top: 5px;
	    position: relative;
	}
	
	vaadin-grid-filter paper-input ::slotted(.input-content.label-is-floating) {
		/*border: 1px solid red;*/
	}
	
	
	vaadin-grid-filter paper-input .input-content.label-is-floating ::slotted(label), 
	vaadin-grid-filter paper-input .input-content.label-is-floating ::slotted(.paper-input-label) {
		/*color: red!important;*/
	}
	
	vaadin-grid-filter + iron-icon {
		/* move the sorter icon down when using a paper-input filter so that it aligns with non-filterable column header sorters */
		position: relative;
		top: 14px;
	}


  </style>
</custom-style>`;

document.head.appendChild($_documentContainer3);
