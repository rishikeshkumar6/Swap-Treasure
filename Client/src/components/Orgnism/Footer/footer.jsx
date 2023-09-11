import React from 'react';
import styles from './footer.module.css'
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div >
       <MDBFooter Color='white' className={`${styles.footer} text-center text-lg-start text-muted `}  >
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 ' >
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Swap Treasure
              </h6>
              <p>
               Swap Treasure is a open source. that allows the customer to sell and buy the secend hand Products. 
              You can buy and sell diffrent types of secend  product such as Smartphone, Tv , Laptop , Cricket Kit ,
              Headphone , Airpod , Calculator , Books , Trolly , Powerbank etc. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Smartphone
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laptop
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Airpod
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Headphone
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Menu</h6>
              <p style={{color:'gray'}}>
               <Link to="/" style={{textDecoration:'none',color:'gray'}}>Buy Product</Link>
              </p>
              <p style={{color:'gray'}}>
                <Link to="/add" style={{textDecoration:'none',color:'gray'}}>Sell Product</Link>
              </p>
              <p style={{color:'gray'}}>
              <Link to="/update" style={{textDecoration:'none',color:'gray'}}>Update Product</Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Banglore, Karnatak, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                rishikeshkumarsingh438@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 6207654176
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          swaptreasure.com
        </a>
      </div>
     </MDBFooter> 
     </div>
   
  );
}
