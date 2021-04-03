initSidebarItems({"fn":[["invalid_header_name",""],["validate_header",""]],"static":[["VALID_HEADER_LUT",""]],"struct":[["HeaderName","Represents a header name that we know to be both valid and lowercase. Internally, this avoids allocating for headers that are constant strings, like the predefined ones in this crate, however even without that optimization, we would still likely have an equivalent of this for use as a case-insensitive string guaranteed to only have valid characters."],["InvalidHeaderName","Indicates an invalid header name. Note that we only emit this for response headers, for request headers, we panic instead. This is because it would likely come through as a network error if we emitted it for local headers, when it's actually a bug that we'd need to fix."]]});