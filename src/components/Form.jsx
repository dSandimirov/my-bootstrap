import React from 'react';
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import axios from 'axios'
import {
    CircleMarker,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Tooltip,
    Polygon
} from 'react-leaflet';
const colorOptions={color:'lime'}
const centerPolygon=[
    [
        [61.114253, 72.532277],
        [61.108272, 72.564292],
        [61.091072, 72.534852],
        [61.103287, 72.514596]
    ]
]
const center=[61.102586, 72.590610];

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('https://641c3c071a68dc9e46040f97.mockapi.io/form', data)
        alert('Заявка отправлена')
        console.log(data);

    }
  
    // console.log(watch("example")); 
  return (
    <div>
        <div id='divForm'>
            <form id='form' onSubmit={handleSubmit(onSubmit)}> 
                <h3>Форма обратной связи</h3>
                <div className='input-group mb-3'>
                    <input
                    {...register('lastName', {
                        required: true,
                        maxLength:50,
                        pattern: /^[А-Яа-я]+$/i
                    })}
                    type="text"
                    className='form-control'
                    placeholder='Фамилия'/>
                </div>
                {errors?.lastName?.type === 'required'&&(
                    <p>Поле обязательно для заполнения</p>
                )}
                {errors?.lastName?.type === 'maxLength'&&(
                    <p>Поле не может содержать более 50 символов</p>
                )}
                {errors?.lastName?.type === 'pattern'&&(
                    <p>Поле заполненно некорректно</p>
                )}

                <div className='input-group mb-3'>
                    <input
                    {...register('firstName', {
                        required: true,
                        maxLength:50,
                        pattern: /^[А-Яа-я]+$/i
                    })}
                    type="text"
                    className='form-control'
                    placeholder='Имя'/>
                </div>
                {errors?.firstName?.type === 'required'&&(
                    <p>Поле обязательно для заполнения</p>
                )}
                {errors?.firstName?.type === 'maxLength'&&(
                    <p>Поле не может содержать более 50 символов</p>
                )}
                {errors?.firstName?.type === 'pattern'&&(
                    <p>Поле заполненно некорректно</p>
                )}

                <div className='input-group mb-3'>
                    <input
                    {...register('surname', {
                        required: true,
                        maxLength:50,
                        pattern: /^[А-Яа-я]+$/i
                    })}
                    type="text"
                    className='form-control'
                    placeholder='Отчество'/>
                </div>
                {errors?.surname?.type === 'required'&&(
                    <p>Поле обязательно для заполнения</p>
                )}
                {errors?.surname?.type === 'maxLength'&&(
                    <p>Поле не может содержать более 50 символов</p>
                )}
                {errors?.surname?.type === 'pattern'&&(
                    <p>Поле заполненно некорректно</p>
                )}
                <div className='input-group mb-3'>
                    <input
                    {...register('email', {
                        required: true,
                        maxLength:100,
                        pattern: /^[A-Za-z@._-]+$/i
                    })}
                    type="email"
                    className='form-control'
                    placeholder='Адрес электронной почты'/>
                </div>
                {errors?.email?.type === 'required'&&(
                    <p>Поле обязательно для заполнения</p>
                )}
                {errors?.email?.type === 'maxLength'&&(
                    <p>Поле не может содержать более 100 символов</p>
                )}
                {errors?.email?.type === 'pattern'&&(
                    <p>Поле заполненно некорректно</p>
                )}
                    
                <div>
                <input className='btn btn-outline-primary' type="submit" />
                </div>
            </form>
        </div>
        <br></br>
        <MapContainer center={center} zoom={10} style={{width: '100vw', height: '500px', margin: '5px'}}>
            <TileLayer
                url='https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=ohSJkkO2AJ1bM4z9sGPM'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <CircleMarker
                center={center}
                pathOptions={{color:'red'}}
                radius={10}
            />
            <Marker position={center}>
                <Popup>Йо-хо-хо! И Бутылка Рома!!!</Popup>
                <Tooltip>Привет пиратам...</Tooltip>
            </Marker>
            <Polygon positions={centerPolygon} pathOptions={colorOptions}/> 
        </MapContainer>
    </div>

    
  )
}

export default Form