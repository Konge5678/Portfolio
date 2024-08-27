export const metadata = {
  title: 'Resume',
  description: 'Kristian Haugsruds resume',
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
