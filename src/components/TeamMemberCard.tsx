type SocialLink = {
  label: string
  href: string
}

export type TeamMemberCardProps = {
  name: string
  role: string
  image: string
  bio: string
  portfolio: string
  github: string
  linkedin: string
  twitter: string
}

function SocialIcon({ label }: { label: string }) {
  const sharedProps = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true as const,
  }

  switch (label) {
    case 'LinkedIn':
      return (
        <svg {...sharedProps}>
          <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.97 1.97 0 1 0 3.2 4.94a1.97 1.97 0 0 0 3.96 0ZM20.8 13.02c0-3.42-1.82-5-4.26-5-1.96 0-2.84 1.08-3.34 1.84V8.5H9.82c.04.9 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20H20.8v-6.98Z" fill="currentColor" />
        </svg>
      )
    case 'GitHub':
      return (
        <svg {...sharedProps}>
          <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.88 1.56 2.32 1.11 2.88.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.4.2 2.45.1 2.71.64.73 1.03 1.65 1.03 2.78 0 3.96-2.34 4.83-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" fill="currentColor" />
        </svg>
      )
    case 'Twitter':
      return (
        <svg {...sharedProps}>
          <path d="M18.9 3H22l-6.77 7.74L23 21h-6.1l-4.78-6.24L6.66 21H3.55l7.23-8.27L1 3h6.25l4.31 5.68L18.9 3Zm-1.07 16.16h1.72L6.32 4.75H4.48l13.35 14.41Z" fill="currentColor" />
        </svg>
      )
    default:
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
  }
}

function buildSocialLinks(props: TeamMemberCardProps): SocialLink[] {
  return [
    { label: 'Portfolio', href: props.portfolio },
    { label: 'GitHub', href: props.github },
    { label: 'LinkedIn', href: props.linkedin },
    { label: 'Twitter', href: props.twitter },
  ].filter((link) => link.href)
}

export default function TeamMemberCard(props: TeamMemberCardProps) {
  const links = buildSocialLinks(props)

  return (
    <article className="team-card">
      <div className="team-avatar">
        <img src={props.image} alt={`${props.name}, ${props.role} at Blorbmart`} loading="lazy" decoding="async" />
      </div>
      <h3>{props.name}</h3>
      <p className="team-role">{props.role}</p>
      <p className="team-bio">{props.bio}</p>
      <div className="team-socials">
        {links.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="team-social"
            aria-label={`${props.name} ${social.label}`}
            title={social.label}
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon label={social.label} />
          </a>
        ))}
      </div>
    </article>
  )
}
