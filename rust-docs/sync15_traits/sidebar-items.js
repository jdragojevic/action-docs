initSidebarItems({"enum":[["EngineSyncAssociation","Defines how an engine is associated with a particular set of records on a sync storage server. It's either disconnected, or believes it is connected with a specific set of GUIDs. If the server and the engine don't agree on the exact GUIDs, the engine will assume something radical happened so it can't believe anything it thinks it knows about the state of the server (ie, it will \"reset\" then do a full reconcile)"]],"mod":[["bridged_engine",""],["client","This module has to be here because of some hard-to-avoid hacks done for the tabs engine... See issue #2590"],["request",""],["telemetry","Manage recording sync telemetry. Assumes some external telemetry library/code which manages submitting."]],"struct":[["CollSyncIds",""],["Guid","This is a type intended to be used to represent the guids used by sync. It has several benefits over using a `String`:"],["Payload","Represents the decrypted payload in a Bso. Provides a minimal layer of type safety to avoid double-encrypting."],["RecordChangeset",""],["ServerTimestamp","Typesafe way to manage server timestamps without accidentally mixing them up with local ones."]],"trait":[["SyncEngine","A \"sync engine\" is a thing that knows how to sync. It's often implemented by a \"store\" (which is the generic term responsible for all storage associated with a component, including storage required for sync.)"]],"type":[["IncomingChangeset",""],["OutgoingChangeset",""]]});