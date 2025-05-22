import { toast } from 'react-toastify';

const ToastService = {
  success : (msg)=>{toast.success(msg)},
  error : (msg)=>{toast.error(msg)},
  info : (msg)=>{toast.info(msg)},
  warn : (msg)=>{toast.warn(msg)},
};

export default ToastService;
