import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='mx-auto max-w-2xl md:max-w-[1550px] '>{children}</body>
    </html>
  )
}
