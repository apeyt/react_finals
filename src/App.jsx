import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
// import theme from './theme'
import themeOptions from './theme/index'
import router from './routes/router'
import { ToastContainer } from 'react-toastify'
import'react-toastify/dist/ReactToastify.min.css'
import './App.css'

function App() {

  return (
    <ThemeProvider theme={themeOptions}>
      <ToastContainer 
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pause

      />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
