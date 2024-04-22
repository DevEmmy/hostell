import toast from 'react-hot-toast';

export const successToast = (message)=>{
    toast.success(message || "Sucess")
}

export const errorToast = (message)=>{
    toast.error(message || "An Error Occurred")
}