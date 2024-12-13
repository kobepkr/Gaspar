import React from 'react';
import './Protocolos.css';

const Protocolos = () => {
  return (
    <div className="protocolo-container">
      <h1 className="titulo-principal">Protocolos de Escuela Gaspar Cabrales</h1>

      <div class="subtitulo-articulo">
    Artículo 14. Protocolo de estrategias de prevención y de actuación frente a la detección de
    situaciones de vulneración de derechos en párvulos.
  </div>

      <p className="introduccion">
        Por medio de este protocolo, la Escuela Gaspar Cabrales, establece orientaciones, procedimientos y normativa de acuerdo a las leyes vigentes, con el objetivo de cautelar las condiciones educativas adecuadas que resguarden la integridad física y psicológica de los párvulos de nuestra escuela.
      </p>
      <p className="introduccion">
        La escuela, se adscribe a los mandatos establecidos en la “Convención de los Derechos del niño”, siendo como establecimiento educacional garante de derechos, por lo que hemos asumido definir, en el presente documento el protocolo de actuación frente a la vulneración de derechos de nuestros párvulos.
      </p>
      <p className="introduccion">
        Cuando en la escuela se sospecha de una situación de vulneración de derechos toda la comunidad educativa debe estar preparada para actuar y trabajar en conjunto, es decir, educadoras de párvulos, educadoras diferenciales y/o asistentes de aula, psicólogas, encargados de convivencia escolar y/o equipo directivo siendo clave para abordar este protocolo.
      </p>

      <h3 className="subtitulo">Detección Precoz de vulneraciones</h3>
      <p className="detalles">
        La Detección Precoz de vulneraciones significa que una persona es capaz de detectar o reconocer las señales de vulneración en los párvulos, pudiendo ser en el hogar, en la escuela o en otro lugar, que puedan afectar o dificultar el ejercicio de los derechos de nuestros niños/as. También significa anticiparse a la ocurrencia de ciertas situaciones o vulneraciones, es decir, llegar a tiempo. Los objetivos de detectar a tiempo son:
      </p>
      <ul className="lista-detalles">
        <li>a) Evitar que los niños/as sean vulnerados.</li>
        <li>b) Evitar que los niños/as que están siendo vulnerados sean más dañados.</li>
      </ul>

      <h3 className="subtitulo">Vulneraciones de derechos más frecuentes</h3>
      <ul className="lista-detalles">
        <li>a) El maltrato de golpes, gritos, empujones, entre otros.</li>
        <li>b) El abandono, es decir, falta de cuidados higiénicos, tiempo solos, entre otros.</li>
        <li>c) Vivir violencia intrafamiliar.</li>
        <li>d) Abuso sexual.</li>
        <li>e) Inasistencia a clases.</li>
        <li>f) Deserción escolar.</li>
      </ul>

      <h3 className="subtitulo">Consideraciones para actuar responsable y oportunamente</h3>
      <ul className="lista-detalles">
        <li>a) Es importante no actuar apresuradamente.</li>
        <li>b) El actuar debe ser preventivo y protector.</li>
        <li>c) Un procedimiento inadecuado puede amplificar el daño ya ocasionado o generar nuevos daños a la persona afectada o a involucrados inocentes.</li>
        <li>d) Siempre ha de primar el interés superior del estudiante, por lo tanto, no se puede minimizar la situación.</li>
      </ul>

      <h3 className="subtitulo">Acciones y etapas del procedimiento</h3>
      <p className="acciones">
        A continuación, detallamos las acciones y etapas del procedimiento de cómo se resolverán las denuncias relacionadas con la vulneración de derechos y maltrato de los estudiantes de Educación Parvularia.
      </p>
      
      <table className="tabla-procedimiento">
        <thead>
          <tr>
            <th>Acciones a seguir paso a paso</th>
            <th>Responsable/ Tiempo de acción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PASO 1: Recepción de la denuncia</td>
            <td>Inspectoría General y/o Encargado/a de convivencia escolar</td>
            <td>
              1. Recepcionar la denuncia y entregar la información a inspectoría y dirección.<br />
              2. Se activa el protocolo.<br />
              3. Informar al Encargado de convivencia y Dirección.
            </td>
          </tr>
          <tr>
            <td>PASO 2: Investigación de la situación y corroboración de los hechos</td>
            <td>Inspectoría y/o Encargado/a de convivencia escolar y/o dupla psicosocial. Tiempo resolución y denuncia: 24 horas</td>
            <td>
              1. Iniciar el proceso de la denunciada se deja por escrito en una entrevista.<br />
              2. Contención del estudiante vulnerando resguardando la intimidad e identidad del estudiante.
            </td>
          </tr>
          <tr>
            <td>PASO 3: Comunicación a los padres y/o tutor/a</td>
            <td>Inspectoría y/o encargado/a de convivencia escolar</td>
            <td>
              1. Citación vía telefónica a entrevista para informar la situación al apoderado y/o tutor/a.<br />
              2. Este tiene 24 horas para denunciar y enviar respaldo al establecimiento, de lo contrario se realizará la denuncia por parte del/la directora/a.
            </td>
          </tr>
          <tr>
            <td>PASO 4: Traslado a un centro asistencial, si corresponde</td>
            <td>Encargado/a de convivencia escolar. Dupla psicosocial.</td>
            <td>
              1. El estudiante es trasladado al centro asistencial en compañía del encargado/a de convivencia y/o dupla psicosocial.<br />
              2. El lugar de traslado será al centro médico más cercano a nuestra escuela (Hospital Carlos Van Buren).
            </td>
          </tr>
          <tr>
            <td>PASO 5: Denuncia</td>
            <td>Dupla psicosocial y Dirección. Dentro de 24 horas de haber recibido el relato de la vulneración.</td>
            <td>
              1. Elaboración de informe concluyente.<br />
              2. Elaboración del oficio, carta o email, para denunciar la vulneración de derecho a la Oficina de Protección de la infancia y/o Tribunal de familia, según corresponda.
            </td>
          </tr>
          <tr>
            <td>PASO 6: Seguimiento y monitoreo del caso</td>
            <td>Dupla psicosocial y encargado de C.E.</td>
            <td>
              1.- Se realizan llamados y/o entrevistas a apoderados/as y/o redes externas que se vean involucradas posterior a la denuncia para asegurar el bienestar superior del niño/a.
            </td>
          </tr>
          <tr>
            <td>PASO 7: Plan de intervención y apoyo</td>
            <td>Encargado/a de convivencia escolar y dupla.</td>
            <td>
              1. Citación al apoderado/a y/o Tutor/a del estudiante vulnerado para acompañar proceso de denuncia.<br />
              1.1 Se realizará un acompañamiento pedagógico por parte de la educadora de párvulos y de la educadora diferencial, en apoyo a su desempeño escolar, que podrá contener: evaluación diferenciada, recalendarización de evaluaciones, apoyo en aula de recursos y otros según necesidad de cada estudiante, con seguimiento semanal durante el semestre.<br />
              1.2 Medidas psicosociales: Confección de un plan de acompañamiento por parte de la dupla psicosocial, para el estudiante vulnerado a nivel individual, grupal y/o familiar, con seguimiento semanal durante el semestre.
            </td>
          </tr>
          <tr>
            <td>PASO 8: Si es un funcionario/a</td>
            <td>Inspectoría general y/o Encargado/a de Convivencia escolar. Dentro de 48 horas.</td>
            <td>
              Si el adulto involucrado en los hechos es funcionario/a del establecimiento, se activarán las medidas protectoras en resguardo de la integridad del estudiante conforme a la gravedad del caso.<br />
              1.- La separación del eventual responsable de su función directa, pudiendo ser trasladado/a a otras labores o funciones fuera del aula, hasta que termine la investigación.<br />
              2.- El estudiante recibe apoyo psicológico por parte de la psicóloga SEP o PIE según corresponda.
            </td>
          </tr>
        </tbody>
      </table>
      
      <div class="titulo-principal">
    Artículo 15. Estrategias de prevención y actuación frente a agresiones sexuales que atenten contra la integridad de las/os estudiantes.
  </div>

  <div class="introduccion">
    El bienestar superior de nuestras y nuestros estudiantes es un elemento fundamental en el desarrollo para nuestro establecimiento, entendiendo que el bienestar de las/os niños y jóvenes es responsabilidad de todos los actores de la comunidad educativa. Con la finalidad de salvaguardar los derechos de nuestras/os estudiantes, se establecen acciones ante la detección de posibles agresiones sexuales y posible vulneración de derechos. Las acciones y procedimientos específicos sobre estos casos se encuentran en las normas de acción frente vulneración de derechos y agresiones sexuales del presente Reglamento.
  </div>

  <div class="subtitulo">Medidas de prevención y capacitación:</div>
  <ul class="lista-detalles">
    <li>Capacitación regular a todos los funcionarios del Colegio: esta medida busca promover una cultura de protección en todo el personal que interacciona con los alumnos.</li>
    <li>Favorecer la educación en las/os estudiantes: facilitar instancias pedagógicas que potencien su desarrollo en Educación Transversal, entregando herramientas para identificar, reducir y manejar potenciales riesgos.</li>
  </ul>

  <div class="subtitulo">Definiciones:</div>
  <p>Las siguientes normas contienen los criterios preventivos y procedimientos frente a situaciones de maltrato infantil, abuso sexual infantil y de agresiones sexuales.</p>

  <div class="articulo-titulo">1. Maltrato físico</div>
  <div class="introduccion">
    Cualquier acción no accidental por parte de cuidadores, madres o padres, que provoque daño físico o enfermedad en el niño/a o adolescente, o signifique un grave riesgo de padecerlo. Puede tratarse de un castigo único o repetido y sumagnitudes variable (grave, menos grave o leve).
  </div>

  <div class="subtitulo">Algunas expresiones de maltrato físico:</div>
  <ul class="lista-detalles">
    <li>Empujar</li>
    <li>Golpear con manos o pies</li>
    <li>Quemar</li>
    <li>Cortar</li>
    <li>Zamarrear</li>
    <li>Amarrar</li>
    <li>Morder</li>
    <li>Pellizcar</li>
    <li>Lanzar objetos al niño o niña</li>
    <li>Tirar el pelo/orejas</li>
  </ul>

  <div class="subtitulo">Indicadores de sospecha de maltrato físico:</div>
  <table class="tabla-procedimiento">
    <thead>
      <tr>
        <th>Con señal física en el cuerpo</th>
        <th>Sin señal física</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Moretones</td>
        <td>Quejas de dolor en el cuerpo</td>
      </tr>
      <tr>
        <td>Rasguños</td>
        <td>Relatos de agresiones físicas por parte del niño(a).</td>
      </tr>
      <tr>
        <td>Quemaduras</td>
        <td>Cambios bruscos de conductas.</td>
      </tr>
      <tr>
        <td>Quebraduras</td>
        <td></td>
      </tr>
      <tr>
        <td>Cortes</td>
        <td></td>
      </tr>
      <tr>
        <td>Cicatrices anteriores</td>
        <td></td>
      </tr>
      <tr>
        <td>Lesiones accidentales reiterativas</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <div class="subtitulo">2. Maltrato emocional o psicológico</div>
  <div class="introduccion">
    Se trata del hostigamiento verbal habitual por medio de insultos, críticas, descréditos, ridiculizaciones, así como la indiferencia y el rechazo explícito o implícito hacia el niño/a o adolescente. Se incluye también en esta categoría, aterrorizarlo, ignorarlo o corromperlo. Ser testigo de violencia entre los miembros de la familia es otra forma de maltrato emocional o psicológico.
  </div>

  <div class="subtitulo">Expresiones de maltrato psicológico:</div>
  <ul class="lista-detalles">
    <li>Insultos</li>
    <li>Descalificaciones</li>
    <li>Manipulaciones</li>
    <li>Exceso de control y/o exigencias</li>
    <li>Agresiones verbales</li>
    <li>Atemorizar</li>
    <li>Culpar</li>
    <li>Ridiculizar</li>
    <li>Humillar</li>
    <li>Amenazar</li>
    <li>Falta de estimulación</li>
    <li>Relación ambivalente/desapego</li>
  </ul>

  <div class="subtitulo">Indicadores de sospecha de maltrato psicológico:</div>
  <table class="tabla-procedimiento">
    <thead>
      <tr>
        <th>Indicadores emocionales y psicológicos</th>
        <th>Indicadores conductuales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Se muestra triste o angustiado</td>
        <td>Autoagresiones</td>
      </tr>
      <tr>
        <td>Se observa a sus adultos cercanos descalificándolo</td>
        <td>Rechazo a un adulto</td>
      </tr>
      <tr>
        <td>Poca estimulación en su desarrollo integral</td>
        <td>Adulto distante emocionalmente</td>
      </tr>
      <tr>
        <td>Rechazo a un adulto</td>
        <td>Niño(a) relata agresiones verbales por parte de un adulto.</td>
      </tr>
      <tr>
        <td>Se muestra preocupado cuando otros niños(as) lloran</td>
        <td>Se muestra asustado al estar con otros adultos</td>
      </tr>
    </tbody>
  </table>
   {/* Enlace para descargar el manual */}
   <div className="download-section">
    <h3>Descargar el Manual Escolar Completo</h3>
    <a href="/manual.pdf" download="Manual.pdf" className="download-button">
      Descargar Manual
      </a>
  </div>

    </div>

 
  );
};

export default Protocolos;
