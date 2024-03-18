import axiosPublic from "."


export const createPaymentIntent = async price => {
  
    const { data } = await axiosPublic.post('/create-payment-intent', price)
    return data
}
  
// save item info in db
export const saveItemInfo = async paymentInfo => {
    const { data } = await axiosPublic.post('/bookings', paymentInfo)
    return data
  }