import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <body className='bg-gradient-to-br from-blue-900 via-purple-900 to-gray-500 text-white z-700'>
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