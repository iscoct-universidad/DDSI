# DDSI
Proyecto de DDSI

## Avisos
* Datos de la base de datos
 > __Nombre__: aux\
 __Usuario__: iscoct\
 __Contraseña__: Vamos a aprobar DDSI de 3\
 \
 Se pueden cambiar en el archivo _operaciones.js_, pero si se hace no subir la modificación a Git
 
* Guía de instalación
> * __Instalar NodeJS__
> * __Instalar MySQL__
> * Una vez configurada bien la base de datos y creado el usuario, por este orden se puede comprobar el buen funcionamiento de estos
> * Comprobamos que con el fichero operacionesTablas.js en Comun/js, al hacer node operacionesTablas.js una vez insertado nuestras tablas y tuplas en crearTodasLasTuplas/crearLasTablas, este crea todas las tablas y tuplas correctamente
> * __Mi recomendación es que creeis un fichero operacionesMarketing.js (en vuestro caso con vuestras operacionesX.js) y una vez implementado cada operación siguiendo el modelo de mi fichero, vayais probando debajo de la función que la operación funciona__
> * Vamos creando una a una las operaciones que tenemos que realizar utilizando a ser preferible funciones de Comun/js/operaciones.js y vamos comprobando el buen funcionamiento estas
> * Creamos server.js y vamos probando que las operaciones se conectan bien entre server.js y operaciones.js, para ello en el navegador ponemos localhost:808X/__codigoOperacion(recomendable)__?nombreCampoFormulario1=valor1&...
> * Creamos los html con los formularios

 
* Si vais a hacer varios cambios seguidos hacedlos todos de golpe por favor :sweat_smile:

## Cosas por hacer
**Comunes**
  * Mejorar la presentación de los HTML __(opcional)__
    > Podemos mirar Twitter Bootstrap, creo que era bastante sencillo de utilizar

**Recursos Humanos**
  * Modificar el mostrar por pantalla de DBMS
  * Creación de tablas e inserción de tuplas __(Por comprobar)__
  * Operaciones JS
    * Crear Empleado __(Por comprobar)__
    * Modificar Empleado __(Por comprobar)__
    * Consultar Empleado __(Por comprobar)__
    * Eliminar Empleado __(Por comprobar)__  
    * Crear Departamento __(Por comprobar)__
    * Modificar Departamento __(Por comprobar)__
    * Consultar Departamento __(Por comprobar)__  
    * Eliminar Departamento __(Por comprobar)__  
    * Operaciones adicionales (cursor, tabla Pertenece y demás)
