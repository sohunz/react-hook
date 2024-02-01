import React from 'react'
import { useTheme } from './themeContext'
import { useToggleTheme } from './themeContext'
import Child from './Child'

const Test = () => {

    const theme = useTheme()

    const toggleTheme = useToggleTheme()

    const styled = {
        backgroundColor: theme ? 'blue' : 'red'
    }

  return (
    <div>
      <p  style={styled}> Hello word</p>
        <button className='border mt-5' onClick={toggleTheme}>Change Theme</button>
        <Child />
    </div>
  )
}

export default Test