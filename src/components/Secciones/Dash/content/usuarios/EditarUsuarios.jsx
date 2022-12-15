import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import helpAxios from '../../../../utils/helpAxios';
import { formatDate } from '../../../../utils/Utils';

const EditarUsuarios = ({setSeccionTitle}) => {

    useEffect(() => {
        setSeccionTitle('Editar Usuarios');
        document.title = `Banco Pide Ya - Editar Usuarios`;
        getRoles()
        getInformationUser()
    }, []);


    const { usuario } = useParams();
    const navigate = useNavigate();

    const [fecha_nacimiento_text, setFechaNacimientoType] = useState('text');
    const [avatar, setAvatar] = useState('/src/images/avatar.png');
    const [roles, setRoles] = useState([]);

    const [datos, setDatos] = useState({
      'nombre': '',
      'email': '',
      'telefono': '',
      'password': '',
      'fecha_nacimiento': ''
    });


    const getInformationUser = async() => {
        helpAxios(true).get('/api/usuarios/obtenerUsuario/'+usuario)
          .then(function ({data}) {
            data.fecha_nacimiento = formatDate(data.fecha_nacimiento);
            data['roles[]'] = data.roles;
            setDatos(data);
            
            if(data.avatar != undefined){
              setAvatar(window.URL_API_BACKEND + "storage/img_users/" + data.avatar);
            }
          })
          .catch(function (error) {
            captureHelpAxiosAuth(error);
            if(error.response.status == 400){
                setError(error.response.data.msg);
            }
          });
      }

    const handleInputChange = (e) => {
      let {name, value} = e.target;
      console.log(e.target);
      if(name.includes('[]')){
        const selectes = [];
        document.querySelectorAll("[id='" + e.target.id + "']" + " option:checked").forEach((el) => {
          selectes.push(el.value);
        });

        let newDatos = {...datos, [name]: selectes};
        setDatos(newDatos);
      }else{
        let newDatos = {...datos, [name]: value};
        setDatos(newDatos);
      }
    };

    const [error, setError] = useState("");


    const handleFoto = () => {
      document.getElementById('avatar').click();
    }

    const handleFile = (e) => {
      setAvatar(URL.createObjectURL(e.target.files[0]));
      let newDatos = {...datos, ['avatar']: e.target.files[0]};
      setDatos(newDatos);
    }

    const getRoles = async () => {
      helpAxios(true).get('/api/roles/obtenerRoles')
      .then(function ({data}) {
        setRoles(data);
      })
      .catch(function (error) {
        console.log(error);
        if(error.response.data.msg != undefined){
          setError(error.response.data.msg);
        }
      });
    }

    const hanndleSubmit = async(e) => {
      e.preventDefault();
      if(!e.target.checkValidity()){
        console.log("no validado");
      }else{
        var data_form = new FormData();
        data_form.append("nombre", datos.nombre);
        data_form.append("email", datos.email);
        data_form.append("telefono", datos.telefono);
        data_form.append("password", datos.password);
        data_form.append("fecha_nacimiento", datos.fecha_nacimiento);
        data_form.append("roles", datos['roles[]']);
        if(datos.avatar != undefined && datos.avatar.name != undefined){
          data_form.append("avatar", datos.avatar, datos.avatar.name);
        }

        helpAxios(true).post('/api/usuarios/actualizarUsuario/'+usuario, data_form)
          .then(function (response) {
            console.log(response);
            Swal.fire( 
                'Actualizacion Exitosa',
                'Actualizacion de usuario correctamente',
                'success')
              .then((respuesta) =>{
                navigate('/dash/config/usuarios');
              });
            })
          .catch(function (error) {
            console.log(error);
            if(error.response.data.msg != undefined){
              setError(error.response.data.msg);
            }
          });
      }
    };
  return (
    <div className='w-full'>
    <div className='w-3/6 mx-auto'>
        <div className={"mb-3 text-red-600 " + (error == '' ? '' : 'd-none')}>
            {error}
        </div>
        <h1 className='text-center font-bold text-green-600 text-xl'>Avatar</h1>
        <form onSubmit={hanndleSubmit} className='' autoComplete={"off"}>
            <div className='w-full text-center'>
                <img src={avatar || ''} className="w-20 h-20 rounded-full cursor-pointer mx-auto mb-4" onClick={handleFoto}/>
                <input type="file" name="avatar" accept='image/*' className='hidden' id='avatar' onChange={handleFile}/>
            </div>
            <div className="mb-6">
                <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={datos.nombre || ''}
                name="nombre"
                required
                min={3}
                />
            </div>

        <div className="mb-6">
            <input
            type={fecha_nacimiento_text}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Fecha Nacimiento" 
            onFocus={() => {
                setFechaNacimientoType('date')
            }}
            name="fecha_nacimiento"
            onChange={handleInputChange}
            value={datos.fecha_nacimiento || ''}
            required
            />
        </div>

        <div className="mb-6">
            <input
            type="number"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Celular"
            name="telefono"
            onChange={handleInputChange}
            value={datos.telefono || ''}
            required
            minLength={7}
            maxLength={10}
            />
        </div>

        <div className="mb-6">
            <input
            type="email"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email address"
            name="email"
            onChange={handleInputChange}
            value={datos.email || ''}
            required
            />
        </div>

        <div className="mb-6">
            <input
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Contrasena"
            name="password"
            onChange={handleInputChange}
            value={datos.password || ''}
            minLength={3}
            autoComplete={"off"}
            />
        </div>

        <div className="mb-6">
          <select
            id="selector_multiple"
            name="roles[]"
            multiple
            placeholder="Select roles..."
            autoComplete="off"
            className="block w-full rounded-sm cursor-pointer focus:outline-none select"
            onChange={handleInputChange}
            value={datos['roles[]'] || []}
            required
          >
          {
            roles.map((rol, index) => {
              return (
                <option value={rol._id} key={index}>{rol.nombre}</option>
              );
            })
          }
        </select>
        </div>

        <div className="text-center">
            <button
            type="submit"
            className="inline-block px-7 py-3 bg-green-600 text-white text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out font-bold"
            >
            Actualizar Usuario
            </button>
        </div>
        </form>
    </div>
</div>
  )
}

export default EditarUsuarios