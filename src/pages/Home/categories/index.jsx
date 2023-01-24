import React, {useState} from "react";
import './style.scss';
import categoriesImg1 from "../../../assets/image/product/cat-1.jpg";
import categoriesImg2 from "../../../assets/image/product/cat-2.jpg";
import categoriesImg3 from "../../../assets/image/product/cat-3.jpg";
import categoriesImg4 from "../../../assets/image/product/cat-4.jpg";
import CategoriesList from "./categoriesList";

const Categories = () => {

    const [categories, setCategories] = useState([
        {
            title: 'Category Name',
            description: "100products",
            categories: 'clothes',
            categoriesImg: categoriesImg1,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'cares',
            categoriesImg: categoriesImg2,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'electronics',
            categoriesImg: categoriesImg3,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'shoes',
            categoriesImg: categoriesImg4,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'clothes',
            categoriesImg: categoriesImg1,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'cares',
            categoriesImg: categoriesImg2,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'electronics',
            categoriesImg: categoriesImg3,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'shoes',
            categoriesImg: categoriesImg4,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'clothes',
            categoriesImg: categoriesImg1,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'cares',
            categoriesImg: categoriesImg2,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'electronics',
            categoriesImg: categoriesImg3,
            alt: 'img'
        },
        {
            title: 'Category Name',
            description: "100products",
            categories: 'shoes',
            categoriesImg: categoriesImg4,
            alt: 'img'
        }
        ])

    return <div className='G-container'>
       <div className='G-flex-wrap G-justify-between'>
           {categories.length ? categories.map((item, index) => {
               return <CategoriesList item={item} key={index}/>
           }) : null}
       </div>
    </div>
}

export default Categories;