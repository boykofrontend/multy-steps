import 'normalize.css';
import './../styles/global.scss';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotec = Space_Grotesk({ subsets: ['latin'] })

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
      <body className={spaceGrotec.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
