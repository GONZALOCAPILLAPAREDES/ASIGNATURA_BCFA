import {newContextComponents} from "@drizzle/react-components";
import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";
const {ContractData} = newContextComponents;
const {ContractForm} = newContextComponents;
const Evaluaciones = (props) => (
    <section className="AppEvaluaciones">
        <h2>Evaluaciones</h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"evaluacionesLength"}
            render={el => (
                <table>
                    <EvaluacionesHead/>
                    <EvaluacionesBody drizzle={props.drizzle}
                                      drizzleState={props.drizzleState}
                                      evaluacionesLength={el}/>
                </table>
            )}
        />
        <h3>Crear Evaluacion</h3>
        <ContractData drizzle={props.drizzle} drizzleState={props.drizzleState}
                      contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                      render={addr => {
                            if (addr !== props.drizzleState.accounts[0]) {
                            return <p>"NO SOY EL PROFE"</p>
                            }
                            return <ContractForm drizzle={props.drizzle} drizzleState={props.drizzleState}
                                                contract="Asignatura" method="creaEvaluacion"
                                                labels={["Nombre", "Fecha ","Puntos"]}
                            />
                      }}
        />
    </section>
);
export default Evaluaciones;