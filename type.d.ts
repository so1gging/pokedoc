type Page = {
  count: number
  next: string | null
  previous: string | null
  results: Array<any>
}

declare module '*.svg?url' {
  const content: any
  // eslint-disable-next-line import/no-unused-modules
  export default content
}
