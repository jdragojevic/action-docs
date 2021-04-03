initSidebarItems({"fn":[["define_functions",""],["delete_meta",""],["ensure_url_path","If `p` is a file URL, return it, otherwise try and make it one."],["get_meta",""],["init_sql_connection",""],["normalize_path","As best as possible, convert `p` into an absolute path, resolving all symlinks along the way."],["put_meta",""],["unurl_path","`Path` is basically just a `str` with no validation, and so in practice it could contain a file URL. Rusqlite takes advantage of this a bit, and says `AsRef<Path>` but really means \"anything sqlite can take as an argument\"."]],"mod":[["sql_fns",""]],"struct":[["StorageDb","A `StorageDb` wraps a read-write SQLite connection, and handles schema migrations and recovering from database file corruption. It can be used anywhere a `rusqlite::Connection` is expected, thanks to its `Deref{Mut}` implementations."]]});