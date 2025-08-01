import { useEffect } from 'react';
import error from '../../assets/Oops.svg'
const Error = () => {

     useEffect(() => {
        document.title = "Error";
    }, []);

  return (
    <>
      <section className="min-vh-100 d-flex justify-content-center align-items-center">
      <img src={error} alt="erorr 404" className="w-50 mt-4" />
    </section>
    </>
  )
}

export default Error
