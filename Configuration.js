function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
    var e = endpoints.addEndpoint("DbDatosProd_ProdXmin", "GPM Robot LPF", endpointType.genericSensor);
    e.variableTypeId = 1018;
    var e = endpoints.addEndpoint("DbDatosProd_datosActuales_OEE", "OEE", endpointType.genericSensor);
    e.variableTypeId = 1019;
    var e = endpoints.addEndpoint("DbDatosProd_datosActuales_fallas", "Fallas", endpointType.genericSensor);
    e.variableTypeId = 1018;
    var e = endpoints.addEndpoint("DbDatosProd_datosActuales_turno", "Turno", endpointType.genericSensor);
    e.variableTypeId = 1032;
    var e = endpoints.addEndpoint("DbDatosProd_datosActuales_prodOk", "Produccion", endpointType.genericSensor);
    e.variableTypeId = 1009;
    //var e = endpoints.addEndpoint("DbDatosProd_datosActuales_scrap", "Scrap", endpointType.genericSensor);
    //e.variableTypeId = 1019;
    
    endpoints.addEndpoint("DbDatosProd_datosActuales_horasMarcha", "Horas Marcha", endpointType.textContainer);
    endpoints.addEndpoint("DbDatosProd_datosActuales_horasParada", "Horas Parada", endpointType.textContainer);
    endpoints.addEndpoint("DbDatosProd_datosActuales_horasEspera", "Horas Espera", endpointType.textContainer);
    endpoints.addEndpoint("DbReceta_producto", "Formato", endpointType.textContainer);
   
    var e = endpoints.addEndpoint("DbDatosProd_datosActuales_velocidadPromedio", "Velocidad Promedio", endpointType.genericSensor);
    e.variableTypeId = 1018;

    var e = endpoints.addEndpoint("OEE_Linea", "OEE Celda Robotica", endpointType.genericSensor);
    e.variableTypeId = 1019;

    var e = endpoints.addEndpoint("GLY_Linea", "GLY Celda Robotica", endpointType.genericSensor);
    e.variableTypeId = 1019;

     var e = endpoints.addEndpoint("LEF_Linea", "LEF Celda Robotica", endpointType.genericSensor);
    e.variableTypeId = 1019;

}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
   rules.canDelete = true;
  // rules.canEditSubType = (endpoint.address == "2");
}
