import footerApi from '../../api/footerApi.json';
import {IoCallSharp} from 'react-icons/io5';
import {MdPlace} from 'react-icons/md';
import {TbMailPlus} from 'react-icons/tb';
import {NavLink} from 'react-router-dom';

const Footer = () => {
 
  // Mapping footerApi to icons
  // This assumes that footerApi contains objects with icon, title, and details properties
  // this is a object mapping to associate icons with their respective titles
  const footerIcons = {
    MdPlace: <MdPlace></MdPlace>,
    IoCallSharp: <IoCallSharp></IoCallSharp>,
    TbMailPlus: <TbMailPlus></TbMailPlus>
  }
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
      {
        footerApi.map((item, index) => {
          const { icon, title, details } = item;
          return (
            <div className="footer-contact" key={index}>
              <div className='icon'>{footerIcons[icon]}</div>
              <div className='footer-contact-text'>
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })
      }
      </div> 
        <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://github.com/sarojkumar2003" target="_blank">
                  Saroj Kumar Sharma
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://github.com/sarojkumar2003"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/sarojkumar2003/World_Atlas"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
           
    </footer>
  )
}

export default Footer;


