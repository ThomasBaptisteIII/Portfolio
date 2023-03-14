import './globals.css'

export const metadata = {
  title: 'Professional Profile: Thomas Baptiste Portfolio',
  description: 'Thomas Baptiste Portfolio',
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
