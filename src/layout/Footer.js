import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div className="footer__row">
        <div className="colum-1">
          <img src="/image/Logo Ondigitals Footer.png" />
          <div>
            <p>ON DIGITALS COMPANY LIMITED</p>
            <p>
              <span>Address:</span> 7th floor, 75 Ho Hao Hon, Co Giang Ward,
              District 1, Ho Chi Minh City
            </p>
            <p>
              <span>Hotline:</span>0906648177
            </p>
            <p>
              <span>Work-time:</span> 9AM - 6PM (Monday to Friday)
            </p>
          </div>
        </div>
        <div className="colum-2">
          <div>
            <p>SERVICES</p>
            <ul>
              <li>
                <a>SEO</a>
              </li>
              <li>
                <a>PPC</a>
              </li>
              <li>
                <a>Social Media</a>
              </li>
              <li>
                <a>Website / E-commerce</a>
              </li>
              <li>
                <a>Mobile App Development</a>
              </li>
              <li>
                <a>Creative Design</a>
              </li>
            </ul>
          </div>
          <div className="colum-2__right">
            <ul>
              <li>
                <a>Content Marketing</a>
              </li>
              <li>
                <a>Video Marketing</a>
              </li>
              <li>
                <a>KOL Marketing</a>
              </li>
              <li>
                <a>OOH Advertising</a>
              </li>
              <li>
                <a>TVC Advertising</a>
              </li>
              <li>
                <a>Telemarketing</a>
              </li>
              <li>
                <a>Email Marketing</a>
              </li>
              <li>
                <a>Event Marketing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="colum-3">
          <div>
            <p>EXPLORE</p>
            <ul>
              <li>
                <a>About On Digitals</a>
              </li>
              <li>
                <a>Our Policy</a>
              </li>
              <li>
                <a>Case Study</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="colum-4">
          <p>FOLLOW US</p>
          <div className="icon__homepage--social">
            <a>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="icon--Zalo">Zalo</a>
          </div>
        </div>
        <div className="colum-4">
          <p>FOLLOW US</p>
          <div className="icon__homepage--social">
            <a>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="icon--Zalo">Zalo</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
