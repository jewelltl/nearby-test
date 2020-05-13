import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html'

import {
  loadNearbyCombos
} from '../../../actions/nearby'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.loadNearbyCombos()
  }

  loadNearbyCombos = () => {
    this.props.loadNearbyCombos({
      cb: data => {
        this.setState({
          loading: false
        }, () => {
          window.eval(this.props.script)
          this.appendScript()
        })
      }
    })
  }

  appendScript = () => {
    const script1 = document.createElement("script")
    const script2 = document.createElement("script")
    script1.src = 'https://d2gwjd5chbpgug.cloudfront.net/v3/scripts/heatmap.min.js'
    script2.src = 'https://d2gwjd5chbpgug.cloudfront.net/v4.1/scripts/nn_serviceareareviewscombo.min.js'
    script2.async = true
    script1.async = true
    document.body.appendChild(script1)
    document.body.appendChild(script2)
  }

  scriptLoaded = () => {

  }

  render () {
    const { loading } = this.state
    const { body, script } = this.props
    return (
      <Fragment>
        {
          loading && <p style={{ textAlign: 'center' }}>Loading ...</p>
        }
        {
          !loading &&
          <Fragment>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </Fragment>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  body: state.nearby.body,
  script: state.nearby.script
})

const mapDispatchToProps = {
  loadNearbyCombos
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)