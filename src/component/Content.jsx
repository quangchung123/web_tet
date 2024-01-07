import React, { useState } from "react";
import '../styles/content.css';
import productTet01 from "../data/productTet01";
import productTet02 from "../data/productTet02";
import ProductSlider from "../utils/ProductSlider";

const Content = () => {
    const [openDescription, setOpenDescription] = useState(false);
    const [backHome, setBackHome] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleDetail = (product) => {
        setOpenDescription(!openDescription);
        setSelectedProduct(product)
    }

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <p>
                    Đón xuân 2024 TẾT VIỆT cho ra mắt bộ sưu tập
                    <br />
                    PHÚ QUÝ ĐOÀN VIÊN DUY NHẤT TẠI VIỆT NAM
                </p>
                {openDescription && (
                    <div className="header-button ">
                        <button onClick={handleDetail} className="h-10 w-32 bg-red-700 rounded-3xl text-white ">Quay lại</button>
                    </div>
                )}
            </div>
            <div className="content-header-top">
                <p>
                    SẢN PHẨM BÁN CHẠY
                </p>
                <p className="content-header-line"></p>
            </div>
            {!openDescription ? (
                <div className="content-product">
                    <div className="product_list_one">
                        <div className="product_list_one_title">
                            Hộp quà tết mẫu 1
                            <span className="text-black text-base italic font-medium"> (chưa VAT)</span>
                        </div>
                        <div className="grid grid-cols-5 gap-4 mx-36 my-24">
                            {productTet01.map((product, index) => (
                                <div key={index} className="h-96 w-56 border-x-2 border-y-2 rounded-lg cursor-pointer shadow hover:shadow-xl">
                                    <img src={product.urlImage1} className="h-52 w-60" alt=""/>
                                    <p className="text-xl">
                                        {product.name}
                                    </p>
                                    <p className="font-medium">
                                        ({product.type})
                                    </p>
                                    <p className="text-red-800 font-semibold text-xl">
                                        {product.price}
                                        <span> đ</span>
                                    </p>
                                    <button className="h-10 w-32 bg-red-700 rounded-3xl text-white mt-4" onClick={() => handleDetail(product)}>Xem chi tiết</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="product_list_two">
                        <div className="product_list_two_title">
                            Hộp quà tết mẫu 2
                            <span className="text-black text-base italic font-medium"> (chưa VAT)</span>
                        </div>
                        <div className="grid grid-cols-5 gap-4 mx-36 my-24">
                            {productTet02.map((product, index) => (
                                <div key={index} className="h-96 w-56 border-x-2 border-y-2 rounded-lg cursor-pointer shadow hover:shadow-xl">
                                    <img src={product.urlImage1} className="h-52 w-60" alt=""/>
                                    <p className="text-xl">
                                        {product.name}
                                    </p>
                                    <p className="font-medium">
                                        ({product.type})
                                    </p>
                                    <p className="text-red-800 font-semibold text-xl">
                                        {product.price}
                                        <span> đ</span>
                                    </p>
                                    <button className="h-10 w-32 bg-red-700 rounded-3xl text-white mt-4" onClick={() => handleDetail(product)}>Xem chi tiết</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="product-description">
                    <ProductSlider selectedProduct={selectedProduct}/>
                </div>
            )}
        </div>
    );
};

export default Content;
