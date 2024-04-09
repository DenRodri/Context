import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent.jsx'
import { ThemeProvider } from './ThemeContext.jsx'

export default function App() {


  return (
    
      <ThemeProvider>
        <FunctionContextComponent/>
      </ThemeProvider>
    
  )
}
