import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente }) => {
    return (



        <div className={pacientes && pacientes.length ?'md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll' :'md:w-1/2 lg:w-3/5 md:h-screen'} >

            {pacientes && pacientes.length ?
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado de Pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {""}
                        <span className="font-bold text-indigo-600 ">Pacientes y Citas</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    )
                    )}
                </>
                :
                <>
                    <h2 className="font-black text-3xl text-center">
                        No hay Pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando {""}
                        <span className="font-bold text-indigo-600 ">Pacientes y Citas</span>
                    </p>
                </>
            }



        </div>
    )
}

export default ListadoPacientes