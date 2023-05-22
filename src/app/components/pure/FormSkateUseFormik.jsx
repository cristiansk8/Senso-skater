'use client'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const RegistrationValidationSchema = Yup.object({
    username: Yup.string().required('Required'),
    nickname: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    city: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    tiempoActividad: Yup.number().required('Required'),
    acceptTerms: Yup.boolean().oneOf([true], "Accept Terms and Conditions"),
});


const FormSkateUseFormik = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            nickname: '',
            city: '',
            email: '',
            tiempoActividad: '',
            acceptTerms: false
        },
        validationSchema: RegistrationValidationSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },

    });
    return (
        <section id="form" className="h-screen flex flex-col w-full">
            <div className="bg-gray-900 shadow-md rounded box-content w-full sm:w-5/6 md:w-2/3 lg:w-1/3  mx-auto">
                <h2 className="text-gray-700 text-2xl font-bold w-full text-center my-5">Registrar</h2>
                <form
                    onSubmit={formik.handleSubmit}
                    className="bg-gray-900 shadow-md rounded px-8 py-6 w-full">
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nickname">
                            City
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id='city'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                        >
                            <option value="">Seleccione ciudad</option>
                            <option value="Bogota">Bogotá</option>
                            <option value="Cali">Cali</option>
                            <option value="Pererira" >Pereira</option>
                        </select>
                        {formik.touched.nickname && formik.errors.nickname && (
                            <p className="text-red-500 text-xs italic">{formik.errors.city}</p>
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="acceptTerms">
                            <input
                                id='acceptTerms'
                                name='acceptTerms'
                                type="checkbox"
                                label="Acepta terminos"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.acceptTerms}
                            />Terminos y condiciones
                        </label>
                        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                            <p className="text-red-500 text-xs italic">
                                {formik.errors.acceptTerms}
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
            </div>
        </section>
    );
}

export default FormSkateUseFormik
