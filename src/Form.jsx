import React from 'react'
import "./App.css"
import { Button } from './Button'

export const Form = () => {
    
  return (
    <section className='form'>

       <form>

       <input className='input' name="nombre" id="nombre" placeholder='Ingrese Nombre'/>
       <input className='input' name="apellido" id="apellido" placeholder='Ingrese Apellido'/>
       <input className='input' name="email" id="email" placeholder='Ingrese Email'/>
       <input className='input' name="telefono" id="telefono" placeholder='Ingrese Telefono'/>
       <input className='input' name="password" id="password" placeholder='Ingrese Password'/>
       <input className='input' name="confirmpass" id="confirmpass" placeholder='Ingrese Nuevamente Password'/>
       
       <p className='term'>Terminos y Condiciones</p>
       <Button/>
       <h1></h1>

       </form>


    </section>
    
  )
}
