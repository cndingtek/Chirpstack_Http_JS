// Version 1.2, Date:20220817
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
//Below payload is buffer from Chirpstack http integration to other app like thingsboard.User should use the real content to replace below OR remove below two lines.
let payload = [123, 10, 32, 32, 32, 32, 34, 100, 101, 100, 117, 112, 108, 105, 99, 97, 116, 105, 111, 110, 73, 100, 34, 58, 32, 34, 101, 48, 101, 102, 54, 98, 101, 97, 45, 100, 49, 51, 97, 45, 52, 97, 53, 101, 45, 56, 51, 57, 52, 45, 100, 54, 55, 57, 56, 49, 102, 52, 101, 100, 52, 101, 34, 44, 10, 32, 32, 32, 32, 34, 116, 105, 109, 101, 34, 58, 32, 34, 50, 48, 50, 50, 45, 49, 48, 45, 48, 51, 84, 48, 51, 58, 49, 55, 58, 49, 48, 46, 52, 50, 55, 52, 51, 48, 49, 50, 48, 43, 48, 48, 58, 48, 48, 34, 44, 10, 32, 32, 32, 32, 34, 100, 101, 118, 105, 99, 101, 73, 110, 102, 111, 34, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 116, 101, 110, 97, 110, 116, 73, 100, 34, 58, 32, 34, 49, 50, 100, 98, 57, 102, 100, 101, 45, 55, 48, 98, 48, 45, 52, 48, 101, 101, 45, 98, 54, 53, 52, 45, 101, 48, 97, 99, 49, 56, 48, 98, 102, 55, 99, 48, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 116, 101, 110, 97, 110, 116, 78, 97, 109, 101, 34, 58, 32, 34, 68, 105, 110, 103, 116, 101, 107, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 73, 100, 34, 58, 32, 34, 49, 101, 98, 100, 99, 53, 98, 55, 45, 100, 52, 51, 100, 45, 52, 54, 101, 48, 45, 57, 97, 52, 101, 45, 98, 100, 53, 48, 97, 100, 50, 100, 56, 54, 100, 50, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 78, 97, 109, 101, 34, 58, 32, 34, 68, 67, 54, 48, 48, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 118, 105, 99, 101, 80, 114, 111, 102, 105, 108, 101, 73, 100, 34, 58, 32, 34, 101, 100, 54, 54, 54, 56, 48, 57, 45, 56, 57, 101, 48, 45, 52, 48, 54, 99, 45, 56, 102, 51, 102, 45, 99, 98, 99, 99, 57, 101, 48, 51, 54, 102, 101, 50, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 118, 105, 99, 101, 80, 114, 111, 102, 105, 108, 101, 78, 97, 109, 101, 34, 58, 32, 34, 69, 85, 56, 54, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 118, 105, 99, 101, 78, 97, 109, 101, 34, 58, 32, 34, 55, 67, 45, 70, 57, 45, 53, 55, 45, 50, 48, 45, 70, 67, 45, 48, 49, 45, 53, 70, 45, 69, 70, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 118, 69, 117, 105, 34, 58, 32, 34, 55, 99, 102, 57, 53, 55, 50, 48, 102, 99, 48, 49, 53, 102, 101, 102, 34, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 34, 100, 101, 118, 65, 100, 100, 114, 34, 58, 32, 34, 48, 48, 100, 57, 56, 56, 98, 51, 34, 44, 10, 32, 32, 32, 32, 34, 97, 100, 114, 34, 58, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 34, 100, 114, 34, 58, 32, 53, 44, 10, 32, 32, 32, 32, 34, 102, 67, 110, 116, 34, 58, 32, 50, 44, 10, 32, 32, 32, 32, 34, 102, 80, 111, 114, 116, 34, 58, 32, 49, 48, 44, 10, 32, 32, 32, 32, 34, 99, 111, 110, 102, 105, 114, 109, 101, 100, 34, 58, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 34, 100, 97, 116, 97, 34, 58, 32, 34, 103, 65, 65, 86, 65, 82, 85, 65, 65, 65, 65, 65, 65, 87, 56, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 81, 67, 66, 34, 44, 10, 32, 32, 32, 32, 34, 114, 120, 73, 110, 102, 111, 34, 58, 32, 91, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 103, 97, 116, 101, 119, 97, 121, 73, 100, 34, 58, 32, 34, 48, 48, 48, 48, 49, 99, 52, 57, 55, 98, 99, 98, 49, 56, 101, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 117, 112, 108, 105, 110, 107, 73, 100, 34, 58, 32, 52, 56, 51, 49, 53, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 115, 115, 105, 34, 58, 32, 45, 55, 52, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 110, 114, 34, 58, 32, 57, 46, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 104, 97, 110, 110, 101, 108, 34, 58, 32, 53, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 102, 67, 104, 97, 105, 110, 34, 58, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 99, 97, 116, 105, 111, 110, 34, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 97, 116, 105, 116, 117, 100, 101, 34, 58, 32, 52, 48, 46, 48, 51, 56, 48, 49, 49, 49, 48, 55, 51, 55, 53, 49, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 110, 103, 105, 116, 117, 100, 101, 34, 58, 32, 49, 49, 54, 46, 53, 48, 55, 57, 51, 50, 52, 54, 53, 56, 55, 48, 49, 49, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111, 110, 116, 101, 120, 116, 34, 58, 32, 34, 88, 108, 104, 51, 84, 65, 61, 61, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 103, 105, 111, 110, 95, 110, 97, 109, 101, 34, 58, 32, 34, 101, 117, 56, 54, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 103, 105, 111, 110, 95, 99, 111, 109, 109, 111, 110, 95, 110, 97, 109, 101, 34, 58, 32, 34, 69, 85, 56, 54, 56, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 93, 44, 10, 32, 32, 32, 32, 34, 116, 120, 73, 110, 102, 111, 34, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 101, 113, 117, 101, 110, 99, 121, 34, 58, 32, 56, 54, 56, 49, 48, 48, 48, 48, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 109, 111, 100, 117, 108, 97, 116, 105, 111, 110, 34, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 114, 97, 34, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 98, 97, 110, 100, 119, 105, 100, 116, 104, 34, 58, 32, 49, 50, 53, 48, 48, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 112, 114, 101, 97, 100, 105, 110, 103, 70, 97, 99, 116, 111, 114, 34, 58, 32, 55, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111, 100, 101, 82, 97, 116, 101, 34, 58, 32, 34, 67, 82, 95, 52, 95, 53, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 125];
let metadata = { "Integration Name": "Dingtek Chirpstack Integration" };

// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

//return payload;
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

//return payload;
/** Decoder **/

// decode payload to string
//var payloadStr = decodeToString(payload);
var payloadJson = decodeToJson(payload);
//return payloadJson;
var in_data = payloadJson;
// decode payload to JSON
var device_info = payloadJson.deviceInfo;
//var data = device_info;
//var deviceName = device_info.deviceName.replace(/-/g, "");
var deviceLabel = device_info.deviceName.replace(/-/g, "")
    .toUpperCase();
var deviceName = device_info.devEui.toUpperCase();
var deviceType = device_info.applicationName;
var customerName = device_info.tenantName;
var deviceWireless = "LoRaWAN";
//validate length
if (payloadJson.data == null) return NaN;
switch (deviceType) {
    case "DT311":
    case "DT310":
        result = Parse_Code_DT311(payloadJson, metadata);
        break;

    default:
        result = Parse_Code_Other(payloadJson, metadata);
        break;
}
return result;

//For temperature sensor DT311
function Parse_Code_DT311(payload_in, metadata_in) {
    var incomingHexData = base64ToHex(payload_in.data);
    //console.log(payload_in);
    //0x01/02 packet
    if (
        (incomingHexData.substring(0, 10) == "80001F0212" ||
            incomingHexData.substring(0, 10) == "80001F0112"
            ) &&
        incomingHexData.length == 36
    ) {
        var temp_sign = parseInt(incomingHexData.substring(
            16, 18), 16);
        var re = {
            deviceName: deviceName,
            deviceType: deviceType,
            deviceLabel: deviceLabel,
            customerName: customerName,
            attributes: {
                devAddr: payload_in.devAddr,
                devEui: payload_in.deviceInfo.devEui,
                rssi: payload_in.rxInfo[0].rssi,
                snr: payload_in.rxInfo[0].snr,
                gatewayId: payload_in.rxInfo[0]
                    .gatewayId.toUpperCase(),
                gatewayLong: payload_in.rxInfo[0]
                    .location.longitude,
                gatewayLat: payload_in.rxInfo[0]
                    .location.latitude,
                band: payload_in.rxInfo[0].metadata
                    .region_name.toUpperCase(),
                wireless: "LoRaWAN",
            },
            telemetry: {
                temperature: temp_sign == 0 ? parseInt(
                    incomingHexData.substring(18,
                        22)) / 100 : 0 - parseInt(
                    incomingHexData.substring(18,
                        22)) / 100,
                humidity: parseInt(incomingHexData
                    .substring(22, 26)) / 100,
                alarmHighTemperature: parseInt(
                    incomingHexData.substring(26,
                        27), 16) > 0 ? true : false,
                alarmLowTemperature: parseInt(
                    incomingHexData.substring(27,
                        28), 16) > 0 ? true : false,
                alarmHighHumidity: parseInt(
                    incomingHexData.substring(28,
                        29), 16) > 0 ? true : false,
                alarmLowHumidity: parseInt(
                    incomingHexData.substring(29,
                        30), 16) > 0 ? true : false,
                alarmBattery: parseInt(incomingHexData
                        .substring(14, 16), 16) == 1 ?
                    true : false,
                volt: parseInt(incomingHexData
                    .substring(10, 14), 16) / 100,
                frameCounter: parseInt(incomingHexData
                    .substring(30, 34), 16),
            },
        };
    } else if (
        incomingHexData.substring(0, 8) == "80001F03" &&
        incomingHexData.length == 36
    ) {
        //0x03 packet
        var high_temp = parseInt(incomingHexData.substring(
            18, 22), 16);
        var low_temp = parseInt(incomingHexData.substring(
            22, 26), 16);
        var re = {
            deviceName: deviceName,
            deviceType: deviceType,
            attributes: {
                devAddr: payload_in.devAddr,
                devEui: payload_in.deviceInfo.devEui,
                rssi: payload_in.rxInfo[0].rssi,
                snr: payload_in.rxInfo[0].snr,
                gatewayId: payload_in.rxInfo[0]
                    .gatewayId.toUpperCase(),
                gatewayLong: payload_in.rxInfo[0]
                    .location.longitude,
                gatewayLat: payload_in.rxInfo[0]
                    .location.latitude,
                band: payload_in.rxInfo[0].metadata
                    .region_name.toUpperCase(),
                wireless: "LoRaWAN",
                firmware: parseInt(incomingHexData
                        .substring(10, 12), 16) +
                    "." +
                    parseInt(incomingHexData.substring(
                        12, 14), 16),
                uploadInterval: parseInt(incomingHexData
                    .substring(14, 16), 16),
                detectInterval: parseInt(incomingHexData
                    .substring(16, 18), 16),
                highTemperatureThreshold: high_temp >
                    255 ? 256 - high_temp : high_temp,
                lowTemperatureThreshold: low_temp >
                    255 ? 256 - low_temp : low_temp,
                highHumidityThreshold: parseInt(
                    incomingHexData.substring(26,
                        28), 16),
                lowHumidityThreshold: parseInt(
                    incomingHexData.substring(28,
                        30), 16),
                batteryThreshold: parseInt(
                    incomingHexData.substring(32,
                        34), 16),
                workMode: parseInt(incomingHexData
                    .substring(30, 32), 16),
            },
        };
    }
    //console.log(re);
    return re;
}

//For other products
function Parse_Code_Other(payload_in, metadata_in) {
    return null;
}
/** protocol decode function**/

/**string to IEEE754 float**/
function str2IEEE754(in_data) {
    if (in_data.length != 8) return NaN;
    var buffer = new ArrayBuffer(4);
    var bytes = new Uint8Array(buffer);
    bytes[0] = parseInt(in_data.substring(6, 8), 16);
    bytes[1] = parseInt(in_data.substring(4, 6), 16);
    bytes[2] = parseInt(in_data.substring(2, 4), 16);
    bytes[3] = parseInt(in_data.substring(0, 2), 16);
    var view = new DataView(buffer);
    var out_data = view.getFloat32(0, false);
    return out_data;
}
/** Helper functions **/

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    // covert payload to string.
    var str = decodeToString(payload);

    // parse string to JSON
    var data = JSON.parse(str);
    return data;
}

function base64ToHex(str) {
    var raw = atob(str);
    var res = "";
    for (var i = 0; i < raw.length; i++) {
        var hex = raw.charCodeAt(i).toString(16);
        res += hex.length === 2 ? hex : "0" + hex;
    }
    return res.toUpperCase();
}
/* Converts hex string to byte array*/
function hexStringToByteArray(str) {
    if (!str) {
        return new Uint8Array();
    }
    var a = [];
    for (var i = 0, len = str.length; i < len; i += 2) {
        a.push(parseInt(str.substr(i, 2), 16));
    }
    return new Uint8Array(a);
}