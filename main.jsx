import WebUI from './webui/WebUI.jsx'
import './common/root.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'webpack-zepto'

var root = document.getElementById('deadlock-webui') || document.body
$.get('/API_URL.conf', (response) => {
    response = response.trim()
    console.log('=====', 'loaded', new Date(), '=====')
    console.log('API URL:', response)
    ReactDOM.render(<WebUI api_url={response} />, root)
})
