import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductSlider = ({ selectedProduct }) => {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const storedQuantity = localStorage.getItem('quantity');
        if (storedQuantity !== null) {
            setQuantity(parseInt(storedQuantity, 10));
        }
    }, []);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1;
            localStorage.setItem('quantity', newQuantity.toString());
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => {
                const newQuantity = prevQuantity - 1;
                localStorage.setItem('quantity', newQuantity.toString());
                return newQuantity;
            });
        }
    };
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const totalImages = [
        selectedProduct.urlImage1,
        selectedProduct.urlImage2,
        selectedProduct.urlImage3,
    ].filter(Boolean);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages.length) % totalImages.length);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages.length);
    };

    return (
        <div className="grid grid-cols-3 gap-4 mx-48 my-24">
            <div className="h-96">
                <img src={totalImages[currentImageIndex]} className="h-96 border-x-2" alt="" />
                {totalImages.length > 1 && (
                    <div className="slider-buttons">
                        <button onClick={handlePrevClick}>
                            <i className="bi-product bi-arrow-left-circle-fill "></i>
                        </button>
                        <button onClick={handleNextClick}>
                            <i className="bi-product bi-arrow-right-circle-fill"></i>
                        </button>
                    </div>
                )}
            </div>
            <div className="col-span-1 border-x border-y rounded-lg">
                <p className="name-product">
                    {selectedProduct.name}
                </p>
                <p className="line-product"></p>
                <p className="text-red-800 font-semibold text-2xl">
                    {selectedProduct.price}
                    <span> đ</span>
                </p>
                <div className="product-detail">
                   <span>
                    Thông tin chi tiết :
                </span>
                </div>
                <div className="mt-4 ml-4">
                    {selectedProduct.description.split('-').slice(1).map((item, index) => (
                        <div key={index} className="description-product">
                             - {item.trim()}
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-x border-y rounded-lg">
                <div>
                    <div className= "name-shop">
                        Tết Việt
                    </div>
                    <div className="line-product">
                    </div>
                    <div className="uppercase number-order">
                        Số lượng
                    </div>
                    <div className="group-input">
                        <div className="group-input">
                            <input
                                value="-"
                                type="button"
                                className="input-scanner"
                                onClick={handleDecrement}
                            />
                            <input
                                type="text"
                                className="input-hiden"
                                value={quantity}
                                readOnly
                            />
                            <input
                                value="+"
                                type="button"
                                className="input-scanner"
                                onClick={handleIncrement}
                            />
                        </div>
                    </div>
                    <div className="mt-7 font-medium">
                        Liên hệ chúng tôi để tư vấn trực tiếp
                    </div>
                    <div className="mt-3 font-bold text-lg">
                        <i className="bi bi-telephone-fill"></i>
                        <span className="ml-4">
                            0857938789
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
