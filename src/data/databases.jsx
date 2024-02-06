export const Smartphones = async () => {
    const res = await fetch('https://databases-0ekr.onrender.com/smartphone');
    return res.json();
}

export const smartphoneDetail = async ({ params }) => {
    const { id } = params;
    const res = await fetch('https://databases-0ekr.onrender.com/smartphone/?id=' + id);
    return (res.json());
}