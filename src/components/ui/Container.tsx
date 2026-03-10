import type { PropsWithChildren } from 'react'

function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
}

export default Container
