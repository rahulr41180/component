
import './App.css';

function App() {
  return (

    <div className="paymet-main">
      <div className="paymet-details">
        <div>
          <div className="payment_student">
            <span className="paymet-heading-color">Abcd</span>
          </div>

          <div className="section-heading1">
            <div className="class-name">Class details</div>
            <div>Grade - VII</div>
          </div>
          <div className="payment-section">
            <div>
              <h4 className="payment-subject-heading">English </h4>
              <div className="course_details">24 classes | 2 months | 3 class/week</div>
              <div className="course_details">Exams - weekly | monthly </div>
            </div>
            <div className="price-dollar">₹9,200</div>
          </div>
          <div className="border-bottom"></div>
          <div className="payment-total">
            <div className="total">Total amount <span className="gst-text">(Inclusive of GST)</span></div>
            <div className="amount">₹9,200</div>
          </div>
          <div className="space"></div>
        </div>
      </div>

      <div>
        <div className="payment-total-details">
          <div className="apply-cupon">Apply coupon </div>
          <div className="coupon-box">
            <input id="cupon" className="cupon-code-input" style={{ textTransform: "uppercase" }} />
            <button className="cupon-button">Apply</button>
          </div>
          {/* When Coupon Code Will Wrong */}
          <div className="cupon_error">Coupon code not valid</div>
          <div className="course-student-detail">
            <h4 className="pay-for-course">abcd</h4>
            <div className="price-dollar">₹9,200</div>
          </div>
          {/* When Coupon Will Valid */}
          <div className="course-student-detail">
            <h4 className="cupon_code_txt"> Coupon applied</h4>
            <div className="cupon_code_amt">-₹9,108</div>
          </div>
          <div className="border-bottom"></div>
          <div className="grand-total-gst-content ">
            <h3 className="grand-amt">Grand total <span className="gst-text">(Inclusive of GST)</span>
            </h3>
            <div>
              <span className="grand-value">₹9,200</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-payment-option">
        <div>
          <button type="button" className="register-back">Back</button>
          <button type="button" className="register-next-btn">Send Payment Link</button>
          <button type="button" className="register-next-btn register-next-btn2">Bank Transfer</button>
        </div>
        <div>
          <div className="total_value">
            <span className="grand-value">
              <span className="grand-value">₹92</span>
            </span>
          </div>
          <div className="total_amount">Total Amount</div>
        </div>
      </div>
    </div>
    
  );
}

export default App;