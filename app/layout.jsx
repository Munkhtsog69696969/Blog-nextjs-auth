export const metadata = {
  title: 'Blog',
  description: 'Find nice blogs here',
}

import Navbar from "@/components/Navbar"
import Provider from "@/components/Provider"
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar></Navbar>
          {children}
        </Provider>
      </body>
    </html>
  )
}
