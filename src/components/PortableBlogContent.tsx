import type { ReactNode } from 'react'
import { PortableText } from '@portabletext/react'

type PortableBlogContentProps = {
  value?: unknown[]
}

const components = {
  block: {
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="mt-10 font-['Sora'] text-3xl font-semibold tracking-[-0.03em] text-slate-900">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mt-8 font-['Sora'] text-2xl font-semibold tracking-[-0.03em] text-slate-900">{children}</h3>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mt-5 text-lg leading-8 text-slate-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4"
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
}

export default function PortableBlogContent({ value }: PortableBlogContentProps) {
  if (!value?.length) {
    return null
  }

  return <PortableText value={value as never} components={components} />
}
