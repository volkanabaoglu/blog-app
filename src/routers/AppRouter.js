import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Header></Header>
                <Switch>
                    <Route component={HomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter