import {
  createSlice
} from '@reduxjs/toolkit'
const initialStateCustomer = {
  fullname: '',
  nationalId: '',
  createdAt: '',
}

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialStateCustomer,
  reducer: {
    create: (state, action) => {
      state.fullname = action.payload,
      state.nationalId = action.payload,
      state.createdAt = action.payload
    },
    update: (state, action) => {
      state.fullname = action.payload
    }
  }
})

export const { create, update } = customerSlice.actions
export default customerReducer;


// const customerReducer = (state = initialStateCustomer, action) => {
//   switch (action.type) {
//     case 'customer/create':
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//           nationalId: action.payload.nationalId,
//           createdAt: action.payload.createdAt,
//       }
//       case 'customer/updateName':
//         return {
//           ...state,
//           fullname: action.payload,
//         }
//         default:
//           return state
//   }
// }

// export const createCustomer = (fullname, nationalId) => {
//   return {
//     type: 'customer/create',
//     payload: {
//       fullname: fullname,
//       nationalId: nationalId,
//       created: new Date().toISOString(),
//     },
//   }
// }

// export const updateName = (name) => {
//   return {
//     type: 'customer/updateName',
//     payload: name,
//   }
// }
