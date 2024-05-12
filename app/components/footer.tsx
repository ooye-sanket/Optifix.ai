import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">
        Unlock Infinite Conversations: Your Personal AI Companion, Tailored to You.
      </div>
      <span>
        Star me on{' '}
        <a
          className="underline"
          target="_blank"
          href="https://github.com/ooye-sanket/OptiFix"
        >
          Github
        </a>
      </span>
    </div>
  )
}
