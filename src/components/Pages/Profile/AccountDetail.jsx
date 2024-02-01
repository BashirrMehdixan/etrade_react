import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AccountDetail = () => {
    const { user } = true;
    const [displayName, setDisplayName] = useState('');
    const [lastname, setLastname] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [matchPassword, setMatchPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState(null);

    const resetPassword = e => {
        e.preventDefault();
    }
    const updateHandle = e => {
        e.preventDefault();
    }
    return (
        <>
            <Helmet>
                <title>eTrade | Account Details</title>
            </Helmet>
            <form onSubmit={updateHandle}>
                <div className="detail-container">
                    {/*<div className="form-group form-full img-group">
                        <label className="absolute-item">
                            Avatar
                            <span className="req"></span>
                        </label>
                        <label htmlFor="avatar" className="avatar-label">
                            <input
                                type="file"
                                id="avatar"
                                className="form-item"
                                onChange={handleAvatarChange}
                            />
                            <img src={avatarPreview} alt="" className="avatar-preview"/>
                        </label>
                    </div>*/}
                    <div className="form-group">
                        <label className="absolute-item">
                            Firstname
                            <span className="req">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-item"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            placeholder={'Stephen'}
                        />
                    </div>
                    <div className="form-group">
                        <label className="absolute-item">
                            Lastname
                            <span className="req">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-item"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder={'Strange'} />
                    </div>
                    <div className="form-group form-full">
                        <label className="absolute-item">
                            Country / Region
                        </label>
                        <select name="" id="" className={'form-item'}>
                            <option value="UK">United Kingdom (UK)</option>
                            <option value="USA">United States (USA)</option>
                            <option value="UAE">United Arab Emirates (UAE)</option>
                            <option value="Australia">Australia (Australia)</option>
                        </select>
                        <p className={'small-text'}>
                            This will be how your name will be displayed in the account section and in reviews
                        </p>
                    </div>
                </div>
                <button type="submit" className="btn btn-blue">Save changes</button>
            </form>
            <form onSubmit={resetPassword}>
                <div className="detail-container">
                    <p className="head2">Password Change</p>
                    <div className="form-group form-full">
                        <label className="absolute-item">Password</label>
                        <input
                            type="password"
                            className="form-item"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group form-full">
                        <label className="absolute-item">New Password</label>
                        <input
                            type="password"
                            className="form-item"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group form-full">
                        <label className="absolute-item">Confirm New Password</label>
                        <input
                            type="password"
                            className="form-item"
                            value={matchPassword}
                            onChange={(e) => setMatchPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-blue">Reset password</button>
            </form>
        </>
    )
}

export default AccountDetail;