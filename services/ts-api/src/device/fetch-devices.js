const devices = [
  { id: 1, name: 'Device #1' },
  { id: 2, name: 'Device #2' },
  { id: 3, name: 'Device #3' },
  { id: 4, name: 'Device #4' }
]

//
// const fetchDevices = async (event) => {
//     const response = {
//       statusCode: 200,
//       headers: {
//         'x-custom-header': 'My Header',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(
//         {
//           data: devices
//         },
//         null,
//         2
//       ),
//     };

//     return response
//   };

export const fetchDevices = async () => {
  return devices
}
