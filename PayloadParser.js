function parseUplink(device, payload)
{
    function ExtractTagData(tagValuesObject){
        v = null;
        q = null;
        ts = null;
        return {
            v: (tagValuesObject["v"]),//.toFixed(2)),
            q: tagValuesObject["q"],
            ts: new Date(tagValuesObject["ts"]).toUTCString()
        }
    }

    var N3uronData = payload.asJsonObject();

    var TMarcha;
    var TEspera;
    var TParada;
    var OEE_Ts;
	
    env.log(N3uronData);
 
   //Recorremos cada "tag" del array del json y procesamos lo que nos interesan
   for (let tag in N3uronData) {
  
        switch (tag){
            case "/RobotLPF/DbDatosProd_ProdXmin":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_ProdXmin");
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                });
            
            case "/RobotLPF/DbDatosProd_datosActuales_turno":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_turno");
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                });
                break;
                
            
            case "/RobotLPF/DbDatosProd_datosActuales_prodOk":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_prodOk");
                    var productOk = ValueData.v * 0.05;
                    etv1.updateGenericSensorStatus(productOk, ValueData.ts);
                    //etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                });
                break;

            case "/RobotLPF/DbDatosProd_datosActuales_OEE":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_OEE");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            /*case "/RobotLPF/DbDatosProd_datosActuales_scrap":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_scrap");
                    //etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;*/

            case "/RobotLPF/DbDatosProd_datosActuales_fallas":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_fallas");
                    //etv1.updateGenericSensorStatus(ValueData.v.toFixed(0), ValueData.ts);
                });
                break;

            case "/RobotLPF/DbDatosProd_datosActuales_horasMarcha":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_horasMarcha");
                    etv1.updateTextContainerStatus(ValueData.v.slice(11,19), ValueData.ts);
                    TMarcha=ValueData.v.slice(11,19);
                    OEE_Ts=ValueData.ts;
                });
                break;

            case "/RobotLPF/DbDatosProd_datosActuales_horasEspera":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_horasEspera");
                    etv1.updateTextContainerStatus(ValueData.v.slice(11,19), ValueData.ts);
                    TEspera=ValueData.v.slice(11,19);
                });
                break;

            case "/RobotLPF/DbDatosProd_datosActuales_horasParada":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_horasParada");
                    etv1.updateTextContainerStatus(ValueData.v.slice(11,19), ValueData.ts);
                    TParada=ValueData.v.slice(11,19);
                });
                break;

            case "/RobotLPF/DbReceta_producto":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbReceta_producto");
                    etv1.updateTextContainerStatus(ValueData.v, ValueData.ts);
                });
                break;
                

            case "/RobotLPF/DbDatosProd_datosActuales_velocidadPromedio":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("DbDatosProd_datosActuales_velocidadPromedio");
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                });
                break;

            
                
	    }
   }

   
    //OEE Celda Robotica Online 
    //var marcha = parseFloat(TMarcha.slice(1,2))+parseFloat(TMarcha.slice(4,5)*60)+parseFloat(TMarcha.slice(7,2)*3600);
    //var espera = parseFloat(TEspera.slice(1,2))+parseFloat(TEspera.slice(4,5)*60)+parseFloat(TEspera.slice(7,2)*3600);
    //var parada = parseFloat(TParada.slice(1,2))+parseFloat(TParada.slice(4,5)*60)+parseFloat(TParada.slice(7,2)*3600);
    
    var etv1 = device.endpoints.byAddress("OEE_Linea");
    //etv1.updateGenericSensorStatus((espera+parada)/marcha, OEE_Ts);
    etv1.updateGenericSensorStatus(OEE_Celda(TMarcha,TParada,TEspera).toFixed(2), OEE_Ts);

     
    var etv1 = device.endpoints.byAddress("GLY_Linea");
    //etv1.updateGenericSensorStatus((espera+parada)/marcha, OEE_Ts);
    etv1.updateGenericSensorStatus(GLY_Celda(TMarcha,TParada,TEspera).toFixed(2), OEE_Ts);

    var etv1 = device.endpoints.byAddress("LEF_Linea");
    //etv1.updateGenericSensorStatus((espera+parada)/marcha, OEE_Ts);
    etv1.updateGenericSensorStatus(LEF_Celda(TMarcha,TParada,TEspera).toFixed(2), OEE_Ts);
                
}

function OEE_Celda(marcha, parada, espera)
{
    var marcha = parseFloat(marcha.slice(1,2))+parseFloat(marcha.slice(4,5))/60+parseFloat(marcha.slice(7,8))/3600;
    var espera = parseFloat(espera.slice(1,2))+parseFloat(espera.slice(4,5))/60+parseFloat(espera.slice(7,8))/3600;
    var parada = parseFloat(parada.slice(1,2))+parseFloat(parada.slice(4,5))/60+parseFloat(parada.slice(7,8))/3600;
    return (marcha - espera)/ (marcha + parada - espera) * 100;
}

function GLY_Celda(marcha, parada, espera)
{
    var marcha = parseFloat(marcha.slice(1,2))+parseFloat(marcha.slice(4,5)/60)+parseFloat(marcha.slice(7,8)/3600);
    var espera = parseFloat(espera.slice(1,2))+parseFloat(espera.slice(4,5)/60)+parseFloat(espera.slice(7,8)/3600);
    var parada = parseFloat(parada.slice(1,2))+parseFloat(parada.slice(4,5)/60)+parseFloat(parada.slice(7,8)/3600);
    return (marcha - espera) / (marcha + parada) * 100;
}

function LEF_Celda(marcha, parada, espera)
{
    var marcha = parseFloat(marcha.slice(1,2))+parseFloat(marcha.slice(4,5)/60)+parseFloat(marcha.slice(7,8)/3600);
    var espera = parseFloat(espera.slice(1,2))+parseFloat(espera.slice(4,5)/60)+parseFloat(espera.slice(7,8)/3600);
    var parada = parseFloat(parada.slice(1,2))+parseFloat(parada.slice(4,5)/60)+parseFloat(parada.slice(7,8)/3600);
    return (1 - (parada) / (marcha+parada)) * 100 ;
}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}8