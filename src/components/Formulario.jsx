import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState("")

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion de Formulario si completa todos los campos
        if ([nombre, propietario, email, fecha, sintomas].includes("")) {

            setError(true)
        }else{
            setError(false)

            //objeto de paciente
            const objetoPaciente = {
                nombre, 
                propietario, 
                email, 
                fecha, 
                sintomas
            }

            if (paciente.id) {
                //Editando el Registro
                objetoPaciente.id = paciente.id

                const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                    paciente.id ? objetoPaciente : pacienteState)
                setPacientes(pacientesActualizados)
                setPaciente({})
            } else {
                //nuevo Registro
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente])
            }

            //reiniciar formulario
            setEmail("")
            setFecha("")
            setNombre("")
            setPropietario("");
            setSintomas("");
        } 
    }

    
    return (
        <div className=" md:w-1/2 lg:w-2/5 ">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="mt-5 text-lg text-center mb-10">Añade Pacientes y {""}

                <span className="text-indigo-600 font-bold text-lg">Administralos </span>
            </p>

            <form
                className="bg-white shadow-xl rounded-lg py-10 px-5"
                onSubmit={handleSubmit}
            >
                {error && <Error><p>"Todos los campos son Obligatorios"</p></Error>
                }

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className={paciente.id ? "bg-green-500 w-full p-3 text-white uppercase font-bold hover:bg-green-600 transition-all rounded-md"
                                            : "bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 transition-all rounded-md"}
                    value={paciente.id ? "Editar Paciente" : "agregar paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario