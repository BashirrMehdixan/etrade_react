import { useState, useContext } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, storage, passwordUpdate } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../context/AuthContext";

const AccountDetail = ({ accountData }) => {
    const { currentUser } = useContext(AuthContext);
    const [avatar, setAvatar] = useState(null);
    const [data, setData] = useState(accountData);

    const handleData = e => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    }
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };
    const resetPassword = async e => {
        e.preventDefault();
        if (data.password || data.matchPassword || data.newPassword || data.newPassword !== data.password || data.newPassword === data.matchPassword) {
            await setDoc(doc(db, "users", currentUser.user.uid), {
                password: data.newPassword
            }, { merge: true })
            await passwordUpdate(data.newPassword);
        } else if (data.newPassword === data.password) {
            toast.error('Old password and new password is the same');
        }
    }
    const updateHandle = async (e) => {
        e.preventDefault();

        try {
            await setDoc(doc(db, "users", currentUser.user.uid), {
                firstname: data.firstname,
                lastname: data.lastname,
                img: data.img,
                country: data.country
            }, { merge: true });

            if (avatar) {
                const storageRef = ref(storage, `avatars/${currentUser.user.uid}`);
                await uploadBytesResumable(storageRef, avatar);
                const downloadURL = await getDownloadURL(storageRef);
                await setDoc(doc(db, "users", currentUser.user.uid), { img: downloadURL }, { merge: true });
                accountData.img = downloadURL;
            }

            toast.success("Profile updated successfully");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>eTrade | Account Details</title>
            </Helmet>
            <form onSubmit={updateHandle}>
                <div className="detail-container">
                    <div className="form-group form-full img-group">
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
                            <img src={avatar ? URL.createObjectURL(avatar) : accountData.img} alt="" className="avatar-preview" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="absolute-item">
                            Firstname
                            <span className="req">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            className="form-item"
                            defaultValue={accountData.firstname}
                            onChange={handleData}
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
                            id="lastname"
                            className="form-item"
                            defaultValue={accountData.lastname}
                            onChange={handleData}
                            placeholder={'Strange'} />
                    </div>
                    <div className="form-group form-full">
                        <label className="absolute-item">
                            Country / Region
                        </label>
                        <select
                            onChange={handleData}
                            id="country"
                            defaultValue={accountData.country}
                            className={'form-item'}
                        >
                            <option value="Australia">Australia (Australia)</option>
                            <option value="Azerbaijan">Azerbaijan (Azerbaijan)</option>
                            <option value="UK">United Kingdom (UK)</option>
                            <option value="USA">United States (USA)</option>
                            <option value="UAE">United Arab Emirates (UAE)</option>
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
                            id="password"
                            className="form-item"
                            onChange={handleData}
                        />
                    </div>
                    <div className="form-group form-full">
                        <label className="absolute-item">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            className="form-item"
                            onChange={handleData}
                        />
                    </div>
                    <div className="form-group form-full">
                        <label className="absolute-item">Confirm New Password</label>
                        <input
                            type="password"
                            id="matchPassword"
                            className="form-item"
                            onChange={handleData}
                        />
                    </div>
                </div>
                <button
                    disabled={!data.password || !data.matchPassword || !data.newPassword || data.newPassword === data.password || data.newPassword !== data.matchPassword}
                    type="submit"
                    className="btn btn-blue">
                    Reset password
                </button>
            </form>
        </>
    )
}

export default AccountDetail;