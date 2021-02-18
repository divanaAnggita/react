import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import Login from './login'
import Pegawai from './pegawai'
import Register from './register'

const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/register' component={Register}/>
    </Switch>
)

export default Pages
