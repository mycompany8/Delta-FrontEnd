import React, { useCallback } from 'react'
import { debounce } from "lodash";


function useDebonce(setSearch) {
   const debouncedSearch = useCallback(
     debounce((term) => setSearch(term), 500),
     []
   );
   return debouncedSearch
}

export default useDebonce