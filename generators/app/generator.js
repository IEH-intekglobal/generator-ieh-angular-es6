'use strict';

import path from 'path';
import lodash from 'lodash';
import _s from 'underscore.string'
import {Base} from 'yeoman-generator';

lodash.mixin(_s.exports());

export default class Generator extends Base {
	
	constructor(...args){
		super(...args);
		
		this.option('coffee');
		
		this.log('executing this part');
		//this.argument('name', {type: String, required: true});

		this.appname = lodash.camelize(lodash.slugify(
			lodash.humanize(this.determineAppname()) ));
	}
	// initializing
	// prompting
	// configuring
	// default
	method1() {
		this.log('will run 1');
	}
	
	method2(){
		this.log('will run 2 ', this.appname);
	}
	// writing
	// conflicts
	// install
	// end
}