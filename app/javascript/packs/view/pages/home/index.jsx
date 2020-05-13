import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

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
          this.appendScript()
        })
      }
    })
  }

  appendScript = () => {
    const script = document.createElement("script")
    script.src = 'https://d2gwjd5chbpgug.cloudfront.net/v3/scripts/heatmap.min.js'
    script.async = true
    script.onload = () => this.scriptLoaded()

    document.body.appendChild(script)
  }

  scriptLoaded = () => {
    console.log(window)
    window.h337.create()
  }

  render () {
    const { loading } = this.state
    const { body } = this.props
    return (
      <div>
        {
          !loading &&
          <Fragment>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  body: state.nearby.body
})

const mapDispatchToProps = {
  loadNearbyCombos
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)