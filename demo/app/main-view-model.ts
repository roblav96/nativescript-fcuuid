import {Observable} from 'data/observable';
declare var FCUUID;

export class HelloWorldModel extends Observable {
	public message: string;

	constructor() {
		super();
		this.message = 'FCUUID: ' + FCUUID.uuidForDevice();
	}
}