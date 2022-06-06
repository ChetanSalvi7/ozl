import React from 'react'
import Clogo from '../storage/logo.svg'

const LoginClient = () => {
    const Username = 'Username';
    const Password = 'Password'
    const SignUpName = 'LogIn';
  return (
    <>
    <section className="py-3 py-lg-5">
    <div className="container-xxl px-lg-5">
        <div className="row justify-content-center">
            <div className="col-md-2 col-6">
                <div className="text-center mb-3 mb-lg-5">
                    <img src={Clogo} alt="Logo" className="img-fluid"/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center login-client">
            <div className="col-md-6">
                <div className="border p-3">
                    <p className="fs-5 fw-bold">Login</p>
                    <div className="pt-3">
                        <label for="name" className="pb-2">{Username}</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="pt-3">
                        <label for="name" className="pb-2">{Password}</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="pt-3 text-end">
                        <a className="btn btn-lg btn-primary text-uppercase">{SignUpName}</a>
                    </div>
                </div>
                <p className="text-center pt-2">Cincom V1.4.4  powered by Cinovo AG</p>
            </div>
        </div>

    </div>
</section>

    </>
  )
}

export default LoginClient