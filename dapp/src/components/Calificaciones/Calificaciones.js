import {newContextComponents} from "@drizzle/react-components";
import CalificacionesHead from "./CalificacionesHead";
import CalificacionesBody from "./CalificacionesBody";
const {ContractData} = newContextComponents;
const {ContractForm} = newContextComponents;
const Calificaciones = (props) => (
    <section className="AppCalificaciones">
        <h2>Calificaciones</h2>
        <ContractData drizzle={props.drizzle}
                      drizzleState={props.drizzleState}
                      contract={"Asignatura"}
                      method={"matriculasLength"}
                      render={ml => <ContractData
                          drizzle={props.drizzle}
                          drizzleState={props.drizzleState}
                          contract={"Asignatura"}
                          method={"evaluacionesLength"}
                          render={el => <table>
                            <CalificacionesHead evaluacionesLength={el}/>
                            <CalificacionesBody drizzle={props.drizzle}
                                                drizzleState={props.drizzleState}
                                                matriculasLength={ml}
                                                evaluacionesLength={el}/>
                            </table>}
                        />}
        />
        <h3>Calificar</h3>
        <ContractData drizzle={props.drizzle} drizzleState={props.drizzleState}
                      contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                      render={addr => {
                            if (addr !== props.drizzleState.accounts[0]) {
                            return <p>"NO SOY EL PROFE"</p>
                            }
                            return <ContractForm drizzle={props.drizzle} drizzleState={props.drizzleState}
                                                contract="Asignatura" method="califica"
                                                labels={["Dirección Alumno", "Índice Evaluación",
                                                         "0=NP 1=Nota 2=MH", "Nota (x10)"]}
                            />
                      }}
        />

    </section>
);
export default Calificaciones;