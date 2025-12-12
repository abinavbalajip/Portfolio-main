import '../globals.css'

export const metadata = {
  title: 'ABINAV BALAJI P — Portfolio',
  description: 'Product-focused developer portfolio showcasing projects, resume and contact information',
  themeColor: '#0a0f2e',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
