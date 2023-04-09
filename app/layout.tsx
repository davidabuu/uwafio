import './globals.css'

export const metadata = {
  title: {
    default:'Swazzy',
    template: '%s | Swazzy',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
