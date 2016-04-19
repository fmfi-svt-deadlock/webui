import Deadlock from './deadlock/Deadlock.jsx'
import './main.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'webpack-zepto'

var root = document.getElementById('deadlock') || document.body
$.get('/API_URL.conf', (response) => {
    response = response.trim()
    console.log('=====', 'loaded', new Date(), '=====')
    console.log('API URL:', response)
    ReactDOM.render(<Deadlock api_url={response} />, root)
})
