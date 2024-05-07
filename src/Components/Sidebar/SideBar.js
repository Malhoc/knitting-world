import React, { useEffect } from "react";

import { Button } from "reactstrap";

import { Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  resetFilters,
  setFilters
} from "../../store/reducer/productReducer";

function SideBar() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const filters = useSelector((state) => state.products.filters);


  const categories = allProducts.reduce((uniqueCategories, product) => {
    const category = product.category.toUpperCase();
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
    return uniqueCategories;
  }, []);
  const colors = allProducts.reduce((uniqueColors, product) => {
    product.colors.forEach((color) => {
      const colorLowerCase = color.toLowerCase();
      if (!uniqueColors.includes(colorLowerCase)) {
        uniqueColors.push(colorLowerCase);
      }
    });
    return uniqueColors;
  }, []);
  const sizes = allProducts.reduce((acc, product) => {
    product.size.forEach((size) => {
      if (!acc.includes(size)) {
        acc.push(size);
      }
    });
    return acc;
  }, []);

  const handleCategoryClick = (category) => {
    const index = filters.category.indexOf(category);
    if (index === -1) {
      dispatch(
        setFilters({ ...filters, category: [...filters.category, category] })
      );
    } else {
      const updatedCategories = [...filters.category];
      updatedCategories.splice(index, 1);
      dispatch(setFilters({ ...filters, category: updatedCategories }));
    }
  };

  const handleColorClick = (color) => {
    dispatch(setFilters({ ...filters, colors: color }));
  };
  const handleSizeClick = (size) => {
    dispatch(setFilters({ ...filters, size: size }));
  };
  const handlePriceChange = (value) => {
    dispatch(setFilters({ ...filters, prices: value }));
  };
  const resetPriceFilter = () => {
    dispatch(setFilters({ ...filters, prices: [0, 10000] }));
  };
  useEffect(() => {
    dispatch(filterProducts());
  }, [filters]);

  return (
    <div className="p-5 py-5 rounded-4 border border-light">
      <div className="pb-4 mb-4 mb-4 border-bottom border-light">
        <Button
          style={{ width: "65px", height: "30px" }}
          onClick={() => {
            dispatch(resetFilters());
          }}
          className="bg-transparent p-0 text-dark"
        >
          Reset
        </Button>
      </div>
      <div className=" mb-4 pb-4 border-light">
        <h4 className=" mb-3">Categories</h4>
        {categories.map((category) => (
          <div className="form-check mb-2">
            <input
              id={category}
              type="checkbox"
              className="form-check-input"
              style={{ opacity: 1, background: 'none', pointerEvents: 'auto' }}
              value={category}
              checked={
                filters.category.includes(category) ? true : false
              }
              onClick={() => handleCategoryClick(category)}
            />
            <label className="form-check-label" style={{ background: 'none' }} key={category}>
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4 pb-4 border-bottom">
        <h4 className="mb-3">Price</h4>
        <button
          className="border-0 p-0 bg-transparent btn-link"
          onClick={() => resetPriceFilter()}
        >
          clear
        </button>
        <div className="price_slider_wrapper">
          <Slider
            range
            min={0}
            max={10000}
            defaultValue={filters.prices}
            onChange={(value) => handlePriceChange(value)}
          />
        </div>
      </div>
      <div className="mb-4 pb-4 border-bottom border-light">
        <h4 className="mb-3">Color</h4>
        <ul
          className="list-inline"
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
            gridGap: "10px",
          }}
        >
          {colors.map((col, index) => (
            <li key={index} className="form-check pl-0">
              <div className="form-check pl-0">
                <input type="checkbox" value={col} checked={filters.colors === col} onChange={() => handleColorClick(col)} className="form-check-input" id={col} />
                <label className="form-check-label" style={{ background: col }} htmlFor={col} />
              </div><small>{col}</small>
            </li>
          ))}

        </ul>
      </div>
      <div className="mb-4 pb-4 border-bottom border-light widget-size">
        <h4 className=" mb-3">Size</h4>
        <div
          className="pl-0"
          style={{
            display: "grid",
            justifyContent: "center",
            // height: "40px",
            gridTemplateColumns: "repeat(5, 1fr)", // show 4 items in one row

            //gridAutoFlow: "column",
            paddingBottom: "5px",
            gap: "5px",
          }}
        >
          {sizes.map((size, index) => (

            < li key={index} >
              <input name="sc" type="checkbox" onChange={() => handleSizeClick(size)} checked={filters.size === size} value={size} id={size} />
              <label htmlFor={size}>{size}</label>
            </li>
          ))}
        </div>
      </div>
    </div >
  );
}

export default SideBar;
