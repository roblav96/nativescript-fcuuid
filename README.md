# NativeScript-fcuuid


Fill in a little about your plugin!

## License
This plugin is licensed under the MITlicense by Rob Laverty

## Installation
To install type

```
tns plugin add nativescript-fcuuid
```

## Usages

## Example

```
import {Observable} from 'data/observable';
declare var FCUUID;

export class HelloWorldModel extends Observable {
	public message: string;

	constructor() {
		super();
		this.message = 'FCUUID: ' + FCUUID.uuidForDevice();
	}
}
```