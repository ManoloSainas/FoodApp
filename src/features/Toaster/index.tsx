import { toast, Bounce } from 'react-toastify'

export const notify = (text: string) => {
  toast.success(`${text} added to cart!`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Bounce
  })
}
