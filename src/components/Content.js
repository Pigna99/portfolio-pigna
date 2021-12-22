import React from 'react'
import {Routes as Switch, Route} from 'react-router-dom';
import {About, Blog, Home, Contact, Settings, Works} from './pages/index';

function Content() {
    return (
        <div className='box content'>
            <main className='content-inside'>
                <Switch>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/aboutme" element={<About/>}/>
                    <Route path="/works" element={<Works/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Switch>
            </main>
            
        </div>
    )
}

export default Content
