'use client'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const RegistrationValidationSchema = Yup.object({
    username: Yup.string().required('Required'),
    nickname: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    /* ciudad: Yup.string().required('Required'),
    modalidadSkate: Yup.string().required('Required'), */
    email: Yup.string().email('Invalid email').required('Required'),
    tiempoActividad: Yup.number().required('Required'),
});


const FormSkateUseFormik = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            nickname: '',
            /* ciudad: '',
            modalidadSkate: '', */
            email: '',
            tiempoActividad: 0,
        },
        validationSchema: RegistrationValidationSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },

    });
    return (
        <div>
            <div className="w-full max-w-xs">
                <form onSubmit={formik.handleSubmit}
                    className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className='text-gray-700 text-xl
                     font-bold mt-5 mb-5'>Registrar</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username && (
                            <p className="text-red-500 text-xs italic">{formik.errors.username}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nickname">
                            Nick-name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nickname"
                            type="text"
                            placeholder="Nickname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nickname}
                        />
                        {formik.touched.nickname && formik.errors.nickname && (
                            <p className="text-red-500 text-xs italic">{formik.errors.nickname}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tiempoActividad">
                            Time activite
                        </label>
                        <input
                            className={
                                `${formik.touched.tiempoActividad && formik.errors.tiempoActividad
                                    ? 'border-red-500'
                                    : ''
                                }shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline
                                `
                            }
                            id="tiempoActividad"
                            type="number"
                            placeholder="Time activite"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.tiempoActividad}
                        />
                        {formik.touched.tiempoActividad && formik.errors.tiempoActividad && (
                            <p className="text-red-500 text-xs italic">
                                {formik.errors.tiempoActividad}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="text-slate-300 bg-gray-700 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default FormSkateUseFormik
