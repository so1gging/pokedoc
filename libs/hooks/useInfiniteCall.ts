import { useCallback, useEffect, useRef, useState } from 'react'

interface Props<T extends Page> {
  fetcher: (params: { page?: number }) => Promise<T | undefined>
}
const useInfiniteCall = <T extends Page>({ fetcher }: Props<T>) => {
  const obsRef = useRef(null)

  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [list, setList] = useState<T>()

  const obsHandler: IntersectionObserverCallback = (entries) => {
    //옵저버 콜백함수
    const target = entries[0]
    if (target.isIntersecting && list?.next) {
      onPageChange(pageNum + 1)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 })
    if (obsRef.current) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])

  const getApiCall = useCallback(async () => {
    setLoading(true)

    const res = await fetcher({ page: pageNum })
    if (res) {
      setList((prev) => (pageNum === 1 ? res : { ...res, results: prev?.results.concat(...res.results) }))
      setError(false)
    } else {
      setError(true)
    }

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum])

  useEffect(() => {
    getApiCall()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum])
  const onPageChange = (page: number) => setPageNum(page)

  return { list, loading, error, pageNum, pageChange: onPageChange, obsRef }
}

export default useInfiniteCall
