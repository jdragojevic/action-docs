initSidebarItems({"fn":[["sync_multiple","Sync multiple engines"],["sync_multiple_with_command_processor","Like `sync_multiple`, but specifies an optional command processor to handle commands from the clients collection. This function is called by the sync manager, which provides its own processor."]],"struct":[["ClientInfo","Info about the client to use. We reuse the client unless we discover the client_init has changed, in which case we re-create one."],["MemoryCachedState","Info we want callers to engine in memory for us so that subsequent syncs are faster. This should never be persisted to storage as it holds sensitive information, such as the sync decryption keys."],["SyncMultipleDriver",""],["SyncRequestInfo","This is essentially a bag of information that the sync manager knows, but otherwise we won't. It should probably be rethought if it gains many more fields."]]});