const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar= ()=>{
        const respuesta = window.confirm('Deseas eliminar este paciente?');

        if(respuesta){
           eliminarPaciente(id);
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-xl px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase bg-gray-100 px-3 py-2">
                Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase  px-3 ">
                Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase  bg-gray-100 px-3 py-2">
                email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase  px-3">
                Fecha alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase  bg-gray-100 px-3 py-2">
                Sintomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg"
                    onClick={()=>setPaciente(paciente)}
                >
                Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                eliminar</button>
            </div>
        </div>
    )
}

export default Paciente