import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/blogs" component={BlogListPage} />
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter