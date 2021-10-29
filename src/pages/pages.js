import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import Login from './login'
import Pegawai from './pegawai'
import Register from './register'
import pelanggaran from './pelanggaran'
import Siswa from './siswa'
import PelanggaranSiswa from './pelanggaran_siswa'
import Jurusan from './jurusan'


const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/register' component={Register}/>
        <Route path='/pelanggaran' component={pelanggaran}/>
        <Route path='/siswa' component={Siswa}/>
        <Route path='/pelanggaran_siswa' component={PelanggaranSiswa}></Route>
        <Route path='/jurusan' component={Jurusan}></Route>
    </Switch>
)

export default Pages
