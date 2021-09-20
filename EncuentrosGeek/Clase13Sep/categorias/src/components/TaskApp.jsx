import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { H2, DivBox, Inputs, Textarea, Button, DivTareas, DivTara, PTarea, ButtonEliminar, ButtonEditar, ButtonDetalle, DivLista } from '../styles/TaskAppStyle'

const TaskApp = () => {
    const url = 'http://localhost:3001/tareas'

    const [inputs, setInputs] = useState({
        url: '',
        name: '',
        descripcion: ''
    })
    const [tareas, setTareas] = useState([])
    const [editar, setEditar] = useState([])

    const postData = async(e)=> {
        axios.post(url, inputs)
        .then(()=> alert('Tarea cargada con exito'))
    }

    const handleChange = (e)=> {
        setInputs({ ...inputs,
            [e.target.name]: e.target.value})
    }

    const deleteItem = (e)=> {
        axios.delete(`${url}/${e.target.id}`)
        .then(()=> alert("Borrado con exito"))
    }

    const putItem = (e)=> {
        fetch(`${url}/${e.target.id}`)
        .then(resp => resp.json())
        .then(data => setEditar(data))
    }

    useEffect(() => {
        axios.get(url)
        .then(resp => setTareas(resp.data))
    }, [inputs])

    return (
        <div>
            <h1>Tareas</h1>
            <hr />
            <DivBox>
                <DivLista>
                    <H2>Lista de tareas</H2>
                    <div>
                        {
                            tareas.map(work => (
                                    <DivTara key={work.id}>
                                        <PTarea>{work.name}</PTarea>
                                        <ButtonEliminar id={work.id} onClick={deleteItem}>Eliminar</ButtonEliminar>
                                        <ButtonEditar id={work.id} onClick={putItem}>Editar</ButtonEditar>
                                        <ButtonDetalle>Detalle</ButtonDetalle>
                                    </DivTara>
                                ))
                        }
                    </div>
                </DivLista>
                <DivTareas>
                    <H2>Agregar Tareas</H2>
                    <Inputs name="url" type="link" placeholder="Url" value={editar.url || ''} onChange={handleChange} />
                    <Inputs name="name" type="text" placeholder="Nombre Tarea" value={editar.name || ''} onChange={handleChange} />
                    <Textarea name="descripcion" id="" cols="40" rows="5" value={editar.descripcion || ''} onChange={handleChange}></Textarea>
                    <Button type="submit" onClick={postData}>Guardar</Button>
                </DivTareas>
            </DivBox>
        </div>
    )
}

export default TaskApp
