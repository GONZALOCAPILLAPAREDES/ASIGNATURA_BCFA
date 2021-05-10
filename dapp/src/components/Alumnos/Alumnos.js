import {newContextComponents} from "@drizzle/react-components";
import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";
const {ContractData} = newContextComponents;
const {ContractForm} = newContextComponents;

const Alumnos = (props) => (
    <section className="AppAlumnos">
        <h2>Alumnos</h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"matriculasLength"}
            render={ml => (
                <table>
                    <AlumnosHead/>
                    <AlumnosBody drizzle={props.drizzle}
                            drizzleState={props.drizzleState}
                            matriculasLength={ml}/>
                </table>
            )}
        />
        <h3>Matricular</h3>
         <ContractForm drizzle={props.drizzle} drizzleState={props.drizzleState}
                                      contract="Asignatura" method="automatricula"
                                      labels={["Nombre Alumno", "Email Alumno"]}
         />
          
    </section>
);
export default Alumnos;