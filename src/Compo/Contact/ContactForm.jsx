import React,{useContext} from 'react'
import { useForm } from "react-hook-form"
import { SiteData } from '../../App';


const ContactForm = () => {
    const SiteDataInfo = useContext(SiteData);

    const { register, handleSubmit,formState: { errors }  } = useForm();
    const SendData = (data) => {
        console.log(data);
        fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST',body:JSON.stringify(data)})
        .then((response) => response.json())
        .then((result) => console.log(result)); 
    };
    
    

    const registerOptions = {
        name: { required: "Name is required" },
        email: { required: "Email is required" },
      };
  return (
    <>
        <div className="col-md-5 my-sm-0 my-4">
            <h3 className="h3 text-start fw-bold">{SiteDataInfo.outPutArray.contact_title}</h3>
                <div className="blue-line my-2"></div>
                <form className="row g-3 mt-lg-3" onSubmit={handleSubmit(SendData)}>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">{SiteDataInfo.outPutArray.contact_name}</label>
                        <input type="text" className="form-control"  name="name" {...register('name', registerOptions.name)} />
                        <small className="text-danger">
                              {errors?.name && errors.name.message}
                         </small>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">{SiteDataInfo.outPutArray.contact_email}</label>
                        <input type="text" className="form-control" name="email" {...register('email', registerOptions.email)}/>
                        <small className="text-danger">
                             {errors?.email && errors.email.message}
                         </small>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">{SiteDataInfo.outPutArray.contact_message}</label>
                        <textarea rows="4" className="form-control w-100"  name='textarea' {...register('textarea')}></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-lg btn-primary px-5 py-2">{SiteDataInfo.outPutArray.contact_submit}</button>
                    </div>
                </form>
        </div>
    </>
  )
}

export default ContactForm