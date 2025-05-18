import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <body className='bg-gradient-to-br from-blue-950 via-purple-950 to-gray-950 text-white z-1000'>
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          { children }
        </ThemeProvider>
      </body>
    </html>
  )
}