import React from 'react'
import { useRecoilState } from 'recoil';
import withAuth from '../hocs/withAuth';
import { authState } from '../states/auth';

const Profile = () => {
    const [auth] = useRecoilState(authState);

    return (
        <div className="container">
            <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div className="user-avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                                    </div>
                                    <h5 className="user-name">{auth.user.name}</h5>
                                    <h6 className="user-email">{auth.user.email}</h6>
                                </div>
                                <div className="about">
                                    <h5>About</h5>
                                    {/* <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mb-2 text-primary">Personal Details</h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input
                                        readOnly
                                        value={auth.user.name || ''}
                                        type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                                    <div className="form-group">
                                        <label htmlFor="eMail">Email</label>
                                        <input
                                        readOnly
                                        value={auth.user.email}
                                        disabled
                                        type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                        disabled={!auth.user.phoneNumber}
                                        type="text" className="form-control" id="phone" placeholder="Enter phone number" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                                    <div className="form-group">
                                        <label htmlFor="website">Website URL</label>
                                        <input
                                        disabled={!auth.user.website}
                                        type="url" className="form-control" id="website" placeholder="Website url" />
                                    </div>
                                </div>
                            </div>
                           
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                                    <div className="text-right">
                                        <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                        &nbsp;
                                        <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(Profile)
