// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    )
  }
}

const mapStateToProps = ({ preloader }) => ({
  preloader: preloader.show
})

export default withRouter(connect(mapStateToProps)(App))