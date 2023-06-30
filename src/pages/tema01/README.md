# 1. Análisis

## 1.1 Revisión de especificación de requisitos.

Haremos un repaso de lo que son los Requerimientos tanto funcionales como no funcionales

::: tip <span> Requisitos No funcionales:</span>
 Definen cómo debe cómo debe ser el sistema. ser el sistema. 
 :::

 ::: tip <span>Requisitos Funcionales:</span>
 Los requisitos funcionales definen qué debe hacer un sistema.
 :::

Los **_requerimientos_** han de ser:

    *Claros y concretos
    *Concisos
    *Completos y consistentes

Los **_requerimientos_** han de indicar:

    *lo que se espera que haga el sistema (¿qué)
    *su justificación (¿por qué ha de ser así?)
    *los criterios de aceptación que sean aplicables (¿cómo se verificará su cumplimiento?).



CLASIFICACIÓN DE REQUERIMIENTOS:

![Requerimientos](https://cdn.goconqr.com/uploads/media/image/12046407/desktop_196e5048-65d3-4a72-9078-958bf07fc67d.jpg)


---
## 1.2 Norma IEEE830

<span>El estándar IEEE 830</span> se conoce como el documento de especificación de requerimientos de software y comprende un listado de los requerimientos y del contexto de la solución, así como una descripción general del diseño por medio de los casos de uso y los escenarios.

::: warning ¿Que significa IEE?
El Instituto de Ingenieros Eléctricos y Electrónicos (IEEE por sus siglas en inglés) es la sociedad técnico-profesional más grande y prestigiosa del mundo, dedicada a promover y divulgar los avances científicos en las áreas de Ingeniería Eléctrica, Electrónica, Energética, Informática y afines.
:::


[formato]: https://www.fdi.ucm.es/profesor/gmendez/docs/is0809/ieee830.pdf

Aquí tienes el enlace para conocer el [formato del **Estandar IEEE-830**][formato] para la Especificación de Requisitos.

---
## 1.3 Trazabilidad de requisitos

<span>La trazabilidad de requerimientos</span> se define como la habilidad para describir y seguir la vida de un requerimiento en ambos sentidos, hacia sus orígenes o hacia su implementación, a través de todas las especificaciones generadas durante el proceso de desarrollo de software.

El término en sí es una combinación de dos palabras, _rastreo y capacidad_, y sustenta tres procesos críticos de gestión empresarial: **gestión de calidad** (que permite a las organizaciones alcanzar objetivos de calidad/cumplir con las expectativas del cliente), **gestión de cambios** (que realiza un seguimiento de los cambios en el producto durante el desarrollo) y **gestión de riesgos** (que rastrea y verifica las vulnerabilidades de la integridad del producto).

~~~
¿Por qué es importante?
* Facilita el análisis de impacto.
* Ayuda a hacer los cambios correctamente. Por lo tanto, mejora la calidad del producto.
* También ayuda a definir los enlaces de trazabilidad de manera que también registra el conocimiento de ingeniería inversa.
*En caso de que un miembro del equipo con conocimientos vitales abandone la empresa, tener una transparencia informativa completa ayuda mucho. Reduce en gran medida el riesgo de un revelado incorrecto. 
* Confirma una cobertura de prueba del 100 % a través de un proceso de verificación adecuado.
~~~



Tecnicamente hay tres tipos de trazabilidad de requisitos:

* Trazabilidad Directa o hacia adelante.
* Trazabilidad hacia atrás.
* Trazabilidad bidireccional.

::: warning Trazabilidad directa:
Es la trazabilidad desde los requisitos hasta los casos de prueba. Se realiza para garantizar que el proyecto avance en la dirección correcta y que todos y cada uno de los requisitos se prueben correctamente. 
:::

::: warning Trazabilidad hacia atrás:
Es la trazabilidad desde los casos de prueba hasta los requisitos. Se realiza para garantizar que el proyecto se mueva en la dirección deseada y que no se agreguen características adicionales o no especificadas al producto.
:::

::: warning Trazabilidad bidireccional:
es la trazabilidad tanto hacia adelante como hacia atrás. Aquí, los casos de prueba se asignan a los requisitos y viceversa. Se realiza para garantizar que todos los casos de prueba sean rastreables para cada requisito y que todos los requisitos especificados sean precisos y que haya casos de prueba válidos para cada uno de ellos.
:::

VENTAJAS DE LA TRAZABILIDAD:

* Permite realizar el control y apoyo para la toma de decisiones en el proyecto.

• Determinar si todos los requisitos han sido considerados y si las instancias que han sido generadas pueden asociarse con un requisito válido.

• Tenemos la posibilidad de identificar el origen de cada requisito y realizar el seguimiento de cada cambio que se realice sobre el mismo. 

• Será posible responder a los cambios de forma más controlada y con más información.

• Asegurar que los requisitos son aprobados y gestionados de manera correcta a lo largo del ciclo de vida del proyecto

::: danger Puntos a considerar:
* Demasiada trazabilidad puede impactar directamente en coste, recursos y tiempo de proyecto. 

• El esfuerzo de trazabilidad tiene que corresponderse con el proyecto en el que trabajamos.

• Solo se obtienen beneficios cuando se utiliza de manera continua, por eso si nuestra organización no dispone de las herramientas, podemos plantearnos utilizar directamente una hoja de cálculo para la gestión de la trazabilidad.

• No registrar las trazas, suele provocar que posteriormente no se registren las dependencias o que se registren de manera incompleta debido a posibles olvidos por parte de los participantes responsables.

• Se deben considerar aquellos elementos de interés para el diseño y las pruebas que permitan confirmar que los requisitos han sido adecuadamente cubiertos

* La trazabilidad de requerimientos de proyecto es bidireccional, esto es, partiendo de un determinado requisito del proyecto se puede referir al entregable que lo satisface, de la misma forma, si tenemos un entregable de proyecto podemos establecer cuales requisitos han sido abarcados por este. 

• Se debe desarrollar la habilidad para seguir la vida de un requisito en ambos sentidos: hacia su origen o hacia su implementación, a través de las especificaciones generadas en el proceso de desarrollo.

• La trazabilidad direccional debe ser: Rastreable hacia adelante y rastreable hacia atrás. Y este mecanismo puede resultar defectuoso sino permite hacerlo en ambas direcciones
:::

<span class='text-blue'>Diagrama de trazabilidad </span>

![Ejemplo trazabilidad](/images/image-1.png)

<span>Usando la matriz de trazabilidad de requisitos</span>

La **matriz de trazabilidad de requisitos** es una tabla que vincula los requisitos a lo largo del proceso de desarrollo. Ayuda a garantizar que no se pierda ningún requisito y permite una gestión de cambios eficiente cuando se producen cambios.

![matriz de trazabilidad- 1](/images/matriz-trazabilidad.png)

---

## 1.4 Descripción de procesos actuales

En el proceso de Modelado de negocio, al momento de hacer la recopilación de los requerimientos del negocio, se definen los procesos actuales, los cuales nos permitieron conocer:

* Quienes participan en el proceso (stakeholders)

* Cuáles son las actividades que realiza cada stakeholder

* La documentación importante utilizada en cada proceso

* Las reglas de negocio que definen la funcionalidad de cada proceso.

Con base en este análisis, se realizan los diagramas de Modelado los cuales son: **_Diagrama de Funciones Cruzadas (DFC)_** y el **_Diagrama de actividades_**

:::danger NOTA:
No se verán en este apartado, ya que han sido descritas y detalladas en el programa de Fundamentos de Ingeniería de Software.
:::

___

## 1.5 Diagramas UML

En la asignatura de Fundamentos de Ingeniería de Software, que antecede a esta materia, se analizaron y aplicaron algunos de los Diagramas UML que nos permiten documentar y desarrollar el proceso de software del proyecto. Estos fueron: DFC, Diagramas de Actividades, el Documento de Visión y Alcance, Diagramas y Especificación de Casos de Uso, Diagramas de Dominio o de Clases y Diccionarios de datos.

En esta ocasión se conocerán y analizarán algunos otros como son: **Diagramas de secuencia** , **Diagramas de paquetes** y **Diagramas de implementación**

1.5.1 <span> Diagramas de Secuencia.</span>

Los **_Diagramas de Secuencia_** modelan las interacciones entre los objetos de un solo _caso de uso_. Ilustran la forma en que las diferentes partes de un sistema interactúan entre sí para llevar a cabo una función, y el orden en que se producen las interacciones cuando se ejecuta un caso de uso concreto. En palabras más sencillas, un diagrama de secuencia muestra diferentes partes de un sistema trabajando en una “secuencia” para conseguir algo.

En un _diagrama de secuencia_, un **objeto** se muestra como caja en la parte superior de una línea vertical punteada. 

Esta línea vertical se llama **línea de vida** del objeto. Esta línea representa la vida del objeto durante la interacción.

Cada **mensaje** se representa con una flecha con línea contínua entre las líneas de vida de dos objetos. El orden en que se dan estos mensajes transcurre de arriba hacia abajo. Cada mensaje debe ser etiquetado al menos con el nombre del mensaje u se mpuede mostrar la **autodelegación** que es un mensaje que un objeto se envía así mismo. regresando la flecha de mensaje de vuelta a la misma línea de vida.

Dos partes de la información de control son valiosas:

* La **condición**, que indica cuándo se envía un mensaje. El mensaje se envía sólo si la condición es verdadera.

* La **iteración**, que muestra que un mensaje se envía muchas veces a varios objetos receptores o que la acción representada es repetitiva (ej. el chequeo de productos en un punto de venta)

Estos diagramas incluyen un **regreso**, el cual indica el regreso de un mensaje, no un nuevo mensaje. Los regresos difieren de los mensajes normales en que la línea es punteada.

:::tip Algo importante:
Todos los regresos se hallan implícitos por el modo como se secuencian los mensajes, pero, se sugiere sólo utilizar regresos cuando aumentan la claridad del diagrama.
:::

<span class='text-blue'>Ejemplo de un diagrama de secuencia</span>

![Secuencia](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots_2019/Sequenzdiagramme-ES-6.png)


Conoce más en [google](https://www.ionos.mx/digitalguide/paginas-web/desarrollo-web/diagramas-de-secuencia/)

[visio]: https://support.microsoft.com/es-es/office/crear-un-diagrama-de-secuencia-de-uml-c61c371b-b150-4958-b128-902000133b26

Hay algunas herramientas CASE como [Visio de Microsoft][visio], que te permite construir Diagramas más fácilmente. 


::: danger Fin del tema 01.
Aqui concluímos el contenido del Tema 1. Deberás repasar cada uno de los subtemas revisados y elaborar las actividades que a continuación se numeran.
:::

:::tip Actividades Tema 01:
1. Revisar la documentación correspondiente a los requerimientos y elaborar las correcciones necesarias.
2. Revisar y corregir las observaciones de _Casos de Uso_ en la doumentación desarrollada.
3. Elaborar el documento de _Especificación de requerimientos_ de acuerdo a **la norma IEEE-830**, con base en el _Documento de Visión y Alcance_.
4. Elaborar las dos primeras **matrices de trazabilidad de requisitos**.
5. Elaborar los **diagramas de secuencia** correspondientes a cada _Caso de Uso_ elaborado en Fundamentos de Ingeniería de Software.




