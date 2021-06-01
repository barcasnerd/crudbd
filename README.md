# BIENESTAR (CRUD: Javascript, Node.js, Express.js y MariaDB)

Se plantea un caso hipotetico, en el cual el Instituto [Colombiano de Bienestar Familiar](https://www.icbf.gov.co/) pide realizar la implementación de un sistema de información que permita conocer la situación real de los niños y niñas que están a su cargo y/o manutención de su relación con su padre. Teniendo en cuenta que:

- Un padre se puede poder registrar sin niños a su cargo. 
- De un padre se necesita una identificación y un nombre, del niño una identificación y un nombre.
- Un niño puede registrarse sin la información de padre o tutor, ya sea porque no se tiene en el momento o porque es huérfano.

Se propone el siguiente modelo Entidad-Relacion para el modelado de la base de datos:

![Entity Relationship Diagram!](/src/files/EntityRelationshipDiagram.png "Modelo Entidad-Relación")

Ademas, se presenta el siguiente Modelo Relaconal para la implementación de la base de datos:

![Relational Schema!](/src/files/RelationalSchema.png "Modelo Relacional")

### Construido con

Base de datos:
- [MariaDB](https://mariadb.org/)
- Se utilizó el driver de [MySQL](https://www.mysql.com/) para la conexión.

Creación del servidor:
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)

Interfaz de usuario:
- [HTML5](https://html.spec.whatwg.org/)
- [Embedded JavaScript templating (EJS)](https://ejs.co/)
- Temas [Bootswatch](https://bootswatch.com/) para [Bootstrap](https://bootswatch.com/)

## Creación de proyecto

Usted puede configurar este proyecto localmente clonando este repositorio.

### Prerrequisitos

- npm
  ```
  npm install
  ```
- [MariaDB](https://mariadb.org/)

### Instalación

1. Descargue y configure el motor de base de datos [MariaDB](https://mariadb.org/). Ademas, se recomienda usar el cliente [HeidiSQL](https://www.heidisql.com/) para la administración de la base de datos.

2. Cree la base de datos.

3. Clone el repositorio:
   ```
   git clone https://github.com/theblackbar/crudbd.git
   ```
4. Instale los paquetes NPM:
   ```
   npm install
   ```

## Funcionalidades

Con este proyecto se crear, leer, actualizar y borrar datos en la base de datos mediante el sistema de información. Actualmente, el sistema de información tiene implementadas las siguientes funciones:

- Inserta, actualiza y borra datos en la lista de hijos (tabla hijo).

- Inserta, actualiza y borra datos en la lista de padres (tabla padre).

- Muestra los padres disponibles para uno de ellos para mostrar el código y nombre de los hijos asociados a él.

- Muestra un listado de los padres que no tienen hijos.

- Muestra un listado de los hijos que no tienen padres.

- Muestra un listado delos padres que tienen hijos con la cantidad de hijos que tiene cada uno.

## Contribuciones
Todas las **Pull Requests** son bienvenidas. Para cambios importantes, por favor abra un problema primero para discutir lo que le gustaría cambiar.

Asegúrese de actualizar las pruebas según corresponda.

## Autores
Este sistema de información fue creado por: 

- [Martin Fuentes](https://github.com/Euphorichuman)
- [Jair Barcasnegras](https://github.com/theblackbar)
- [Helymar Acosta](https://github.com/helymar)
- [Santiago Palmet](https://github.com/pantosta0)
- [Omar Amell](https://github.com/OmarAmell)

## Licencia 

Este proyecto está bajo la licencia [Apache License 2.0](https://github.com/theblackbar/crudbd/blob/master/LICENSE).

[APACHE LICENSE, VERSION 2.0](http://www.apache.org/licenses/LICENSE-2.0)