import './globals.css'

export const metadata = {
  title: 'WebQuest',
  description: 'Designed by Pradeep Joon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
