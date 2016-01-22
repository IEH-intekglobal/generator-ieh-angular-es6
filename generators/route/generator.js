'use strict';

import path from 'path';
import url from 'url';
import {Base} from 'yeoman-generator';
//import {genNamedBase} from '../generator-base';

export default class Generator extends Base {
	/***********************************************************/
	constructor(...args){
		super(...args);
		
		this.argument('name', { type: String, required: true });
		
		this.option('dir', {
			desc: 'Parent directory for the route',
			type: String
		});
		
		this.option('route', {
			desc: 'URL for the route',
			type: String
		});
		
		this.option('app-suffix', {
			desc: 'Allow a custom suffix to be added to the module name',
			type: String,
			defaults: 'App'
		});
	}
	/***********************************************************/
	initializing(){
		// init shared generator properties and methods
		//genNamedBase(this);
	}
	/***********************************************************/
	prompting(){
		var done = this.async();
		var promptCb = (props) => {		
			this.dir = path.join(props.dir, this.name);
			this.url = url.resolve(props.dir, this.name);
			this.route = props.route;
			done();
		}
		
		var name = this.name;
		
		var base = this.config.get('routeDirectory') || '/app/';
		if(base.charAt(base.length-1) !== '/'){
			base += '/';
		}
		
		var prompts = [{
			name: 'dir',
			message: 'Where would you like to create this route?',
			default: base
		},{
			name: 'route',
			message: 'What will the URL of the route be?',
			default: '/' + name
		}];
		
		this.prompt(prompts, promptCb);	
	}
	/***********************************************************/
	configuring(){
		
		this.routeDest = path.join(this.options.dir ||
			this.config.get('dir') || 'client/app/', this.name);
			
		this.log('config.getAll(): ',this.config.getAll());
		this.log('scriptAppName: ',this.scriptAppName);
		this.log('dir: ', this.dir);
		this.log('route: ', this.route);
	}
	/***********************************************************
	writing(){		
		//this.sourceRoot(path.join(__dirname, './templates'));
		//this.processDirectory('.', this.routeDest);
	}
	/***********************************************************/
}