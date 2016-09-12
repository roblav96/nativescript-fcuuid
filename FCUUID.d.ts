
declare class FCUUID extends NSObject {

	static alloc(): FCUUID; // inherited from NSObject

	static new(): FCUUID; // inherited from NSObject

	static uuid(): string;

	static uuidForDevice(): string;

	static uuidForDeviceMigratingValueCommitMigration(value: string, commitMigration: boolean): string;

	static uuidForDeviceMigratingValueForKeyCommitMigration(key: string, commitMigration: boolean): string;

	static uuidForDeviceMigratingValueForKeyServiceAccessGroupCommitMigration(key: string, service: string, accessGroup: string, commitMigration: boolean): string;

	static uuidForDeviceMigratingValueForKeyServiceCommitMigration(key: string, service: string, commitMigration: boolean): string;

	static uuidForInstallation(): string;

	static uuidForKey(key: any): string;

	static uuidForSession(): string;

	static uuidForVendor(): string;

	static uuidValueIsValid(uuidValue: string): boolean;

	static uuidsOfUserDevices(): NSArray<any>;

	static uuidsOfUserDevicesExcludingCurrentDevice(): NSArray<any>;
}

declare var FCUUIDVersionNumber: number;

declare var FCUUIDVersionString: interop.Reference<number>;

declare var FCUUIDsOfUserDevicesDidChangeNotification: string;
