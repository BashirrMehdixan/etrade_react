export const SmartphonesData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
}

export const smartphoneDetail = async ({params}) => {
    const {id} = params;
    const res = await fetch('https://dummyjson.com/products/' + id);
    return (res.json());
}