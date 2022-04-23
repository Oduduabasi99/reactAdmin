import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import "./product.css"
import {productData} from '../../data'
import Avatar from "../../images/avater.jpg"
import { Publish } from "@material-ui/icons"

export default function Product() {
  return (
      <div className="product">
          <div className="productTitleContainer">
              <h1 className="productTile">Product</h1>
              <Link to="/newProduct">
                  <button className="productAddBtn">Create</button>
                  </Link>
          </div>
          <div className="productTop">
              <div className="productTopLeft">
                  <Chart data={productData} dataKey="Sales" title="Sales Performance" />
              </div>
              <div className="productTopRight">
                  <div className="productInfoTop">
                      <img src={Avatar} alt="" className="productInfoImg" />
                      <span className="productName">Apple</span>
                  </div>
                  <div className="productInfoBottom">
                  <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">1423</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
                  </div>
              </div>
          </div>
          <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Mango" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={Avatar} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish />
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productBtn">Update</button>
              </div>
          </form>
          </div>
    </div>
  )
}
