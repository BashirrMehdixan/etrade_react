import { useContext, useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../../firebase";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../context/AuthContext";

const AccountDetail = ({ updateAvatarUrl }) => {
    const { currentUser } = useContext(AuthContext);
    const [avatar, setAvatar] = useState('');
    const [data, setData] = useState(currentUser);
    const [perc, setPerc] = useState(null);

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + avatar.name;
            const storageRef = ref(storage, avatar.name)
            const uploadTask = uploadBytesResumable(storageRef, avatar);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPerc(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default: break;
                    }
                },
                (error) => {
                    toast.error(error.message)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData(prev => ({ ...prev, img: downloadURL }))
                    });
                }
            );
        }

        avatar && uploadFile();
    }, [avatar])
    const handleData = e => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    }
    const resetPassword = e => {
        e.preventDefault();
    }
    const updateHandle = async e => {
        e.preventDefault();
        try {
            await setDoc(doc(db, "users", currentUser.user.uid), {
                firstname: data.firstname,
                lastname: data.lastname,
                img: data.img,
            }, { merge: true });
            if (avatar) {
                const storageRef = ref(storage, avatar.name);
                const uploadTask = uploadBytesResumable(storageRef, avatar);
                await uploadTask;
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setData((prev) => ({ ...prev, img: downloadURL }));
                updateAvatarUrl(downloadURL);
            }

            toast.success('Profile updated successfully');
        } catch (error) {
            toast.error(error.message);
        }
    }

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
                                onChange={e => setAvatar(e.target.files[0])}
                            />
                            {avatar && <img src={URL.createObjectURL(avatar)} alt="" className="avatar-preview" />}
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
                            onChange={handleData}
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
                <button disabled={!perc == null && perc < 100} type="submit" className="btn btn-blue">Save changes</button>
            </form>
            <form onSubmit={resetPassword}>
                <div className="detail-container">
                    <p className="head2">Password Change</p>
                    <div className="form-group form-full">
                        <label className="absolute-item">Password</label>
                        <input
                            type="password"
                            className="form-item"
                            onChange={handleData}
                        />
                    </div>
                    <div className="form-group form-full">
                        <label className="absolute-item">New Password</label>
                        <input
                            type="password"
                            className="form-item"
                            onChange={handleData}
                        />
                    </div>
                    <div className="form-group form-full">
                        <label className="absolute-item">Confirm New Password</label>
                        <input
                            type="password"
                            className="form-item"
                            onChange={handleData}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-blue">Reset password</button>
            </form>
        </>
    )
}

export default AccountDetail;