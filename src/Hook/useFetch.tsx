import React from "react";

function useFetch(API: RequestInfo | URL) {

   const [data, setData] = React.useState(null)
   const [loading, setLoading] = React.useState(false)
   const [error, setError] = React.useState<Error | null>(null)

   React.useEffect(() => {

      const controller = new AbortController()
      const signal = controller.signal

      async function fetchData() {
         setLoading(true)
         try {
            const response = await fetch(API, {signal})
            const json = await response.json()
            setData(json)
         } catch(error) {
            if(error instanceof Error)
            setError(error)
         } finally {
            setLoading(false)
         }
      }
      fetchData()

      return () => {
         controller.abort()
      }

   }, [API])

   return {data, loading, error}

}

export default useFetch