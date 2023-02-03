import styled from 'styled-components';
import BGVideo from '../BGVideo';
import myVideo from '../../assets/myVideo.mp4';
import Hero from '../Hero';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import Button from '../Button';
const StyledMain = styled.main`
  h1 {
    text-align: center;
  }
  .showcase {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    padding: 50px;
    div {
      box-shadow: 2px 2px 5px #00000043;
      border-radius: 15px;
      padding: 20px;
      background-color: var(--color1);
      img {
        width: 90%;
        height: 60%;
        object-fit: cover;
        border-radius: 35px;
        padding: 20px;
        display: block;
        margin: auto;
      }
      p {
        padding: 20px;
        line-height: 1.5rem;
        margin: 0;
        span {
          display: inline-block;
        }
      }
    }
    h4 {
      margin: 0;
    }
    @media screen and (max-width: 1600px) {
      grid-template-columns: 1fr 1fr;
      row-gap: 30px;
      div:nth-child(3) {
        grid-column: span 2;
      }
    }
    @media screen and (max-width: 1100px) {
      grid-template-columns: 1fr;
      row-gap: 30px;
      div:nth-child(3) {
        grid-column: span 1;
      }
    }
  }
`;

const Home = () => {
  return (
    <StyledMain>
      <section>
        <Hero />
        <BGVideo source={myVideo} />
      </section>
      <section>
        <div className='showcase'>
          <div>
            <h4>Apply for a Skybank Credit Card Today</h4>
            <img src={image1} alt='random stock'></img>
            <p>
              Getting started is east. Checking eligibilty wont impact your
              <span>credit score.</span>
            </p>
            <Button>Learn More</Button>
          </div>
          <div>
            <h4>Choose the right Skynet Credit Card for You</h4>
            <img src={image2} alt='random stock'></img>
            <p>
              Explore SkyBank's credit card offers, featuring exclusive perks
              and benefits to reward your spending.
            </p>
            <Button>Learn More</Button>
          </div>
          <div>
            <h4>Save with CD rates over 3.00% APY</h4>
            <img src={image3} alt='random stock'></img>
            <p>
              Open a fixed-rate CD & enjoy the peace and mind that comses with a
              guaranteed interest rate for term of CD.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </section>
    </StyledMain>
  );
};

export default Home;
