import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HomepageSectionPartner() {
  return (
    <section className="homepagesectionpartner">
      <div className="homepagesectionpartner__container">
        <p className="homepagesectionpartner__title">
          YOUR PARTNER in digital growth
        </p>
        <div className="homepagesectionpartner__content">
          <div className="homepagesectionpartner__content__colleft">
            <div className="homepagesectionpartner__content__item">
              <p className="homepagesectionpartner__content--number">500+</p>
              <p className="homepagesectionpartner__content--text">
                TRUSTED CLIENTS
              </p>
            </div>
            <div className="homepagesectionpartner__content__item">
              <p className="homepagesectionpartner__content--number">300+</p>
              <p className="homepagesectionpartner__content--text">
                SUCCESSFUL CAMPAIGNS
              </p>
            </div>
            <div className="homepagesectionpartner__content__item">
              <p className="homepagesectionpartner__content--number">1000+</p>
              <p className="homepagesectionpartner__content--text">
                TRUSTED CLIENTS
              </p>
            </div>
          </div>
          <div className="homepagesectionpartner__content__colrightmain">
            <p className="homepagesectionpartner__content__colright--text">
              notable clients
            </p>
            <div className="homepagesectionpartner__content__colrightimage">
              <div className="homepagesectionpartner__content__image hvr-bounce-in">
                <img src="/image/areus-atelier.jpg" />
              </div>
              <div className="homepagesectionpartner__content__image hvr-bounce-in">
                <img src="/image/renault.png" />
              </div>
              <div className="homepagesectionpartner__content__image hvr-bounce-in">
                <img src="/image/tpcom.png" />
              </div>
              <div className="homepagesectionpartner__content__image hvr-bounce-in">
                <img src="/image/ducati.png" />
              </div>
              <div className="homepagesectionpartner__content__image hvr-bounce-in">
                <img src="/image/hantec.png" />
              </div>
              <div className="homepagesectionpartner__content__image hvr-bounce-in">
                <img src="/image/livingcare.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="homepagesectionpartner__below">
          <div className="homepagesectionpartner__below__text">
            We offer advanced digital solutions tailored to your needs.
          </div>
          <a className="homepagesectionpartner__below__button">
            See our process <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </section>
  );
}
