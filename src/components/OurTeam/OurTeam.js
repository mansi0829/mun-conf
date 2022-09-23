import React from "react";
import "./OurTeam.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Ahmed_Siddiqui from "../../assets/team/Ahmed_Siddiqui.jpeg";
import Malhaar_Formal from "../../assets/team/Malhaar_Formal.jpg";
import Zeel_Patel from "../../assets/team/Zeel_Patel.jpg";
import Sufiya_Sayyed from "../../assets/team/Sufiya_Sayyed.jpeg";
import Anuja_Patil from "../../assets/team/Anuja_Patil.jpg";
import Yash_Kale from "../../assets/team/Yash_Kale.jpg";
import Karthik_Formal from "../../assets/team/Karthik_Formal.jpeg";
import Saima_Ansari from "../../assets/team/Saima_Ansari.png";
import Abhishek_Bora from "../../assets/team/Abhishek_Bora.png";
import Soham_Naik from "../../assets/team/Soham_Naik.jpg";
import Mansi from "../../assets/team/Mansi.jpg";
import Rahul from "../../assets/team/rahul.jpg";
import Saifuddin from "../../assets/team/Saifuddin.jpg";
import Title from "./Title";
import Footer from "../Footer";

const OurTeam = () => {
  return (
    <div>
      <Title />

      <div class="container">
       
        
        <div class="heads">
        <div class="content_design">
        <div className="team_heading1">Secretariat 2022-23</div>
          <div class="card">
            <div class="content">
              <div class="imgBx1">
                <img src={Ahmed_Siddiqui} alt="person1" />
              </div>
              <div class="contentBx">
                <h3>
                  Ahmed Siddiqui
                  <br />
                  <span>Secretary General</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a
                  href="https://www.linkedin.com/in/ahmed-17-siddiqui/"
                  target="blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/med17sidd/" target="blank">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>

          <div class="card">
            <div class="content">
              <div class="imgBx1">
                <img src={Malhaar_Formal} alt="person1" />
              </div>
              <div class="contentBx">
                <h3>
                  Malhaar Karandikar
                  <br />
                  <span>Director General and USG Operations</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a
                  href="https://www.linkedin.com/in/malhaar-karandikar-20802a1b4/"
                  target="blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/to_be_mk/" target="blank">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>


        <div class="heads">
        <div class="content_design">
        <div class="card">
          <div class="content">
            <div class="imgBx1">
              <img src={Sufiya_Sayyed} alt="person1" />
            </div>
            <div class="contentBx">
              <h3>
                Sufiya Sayyed
                <br />
                <span>Charge d'Affaires and USG Content and Research</span>
              </h3>
            </div>
          </div>
          <ul class="sci">
            <li>
              <a
                href="https://www.linkedin.com/in/sufiya-sayyed-737534205/"
                target="blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/s.sufiya_/" target="blank">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div class="card">
          <div class="content">
            <div class="imgBx1">
              <img src={Yash_Kale} alt="person1" />
            </div>
            <div class="contentBx">
              <h3>
                Yash Kale
                <br />
                <span>Chief Strategy Officer and USG Marketing</span>
              </h3>
            </div>
          </div>
          <ul class="sci">
            <li>
              <a
                href="https://www.linkedin.com/in/yash-kale-0a92581ba/"
                target="blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/accounts/login/?next=/inferno_080/"
                target="blank"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        </div>
        </div>
      

        {/* Row 3 Design and Content Team */}

        <div class="heads">
          <div class="content_design">
            <div className="team_heading2">USG DESIGN</div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Karthik_Formal} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Karthik Panicker
                    <br />
                    <span>USG Content and Research</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/karthik-panicker-40a4b619b/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Saima_Ansari} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Saima Ansari
                    <br />
                    <span>USG Design and Technical Affairs</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saima-ansari-66a99b188/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_saimaansari_/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>



          <div class="content_design">
            <div className="team_heading2">USG CONTENT</div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Zeel_Patel} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Zeel Patel
                    <br />
                    <span>USG External Affairs and Publicity</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/zeelpatel2001/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zeel._/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Abhishek_Bora} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Abhishek Bora
                    <br />
                    <span>USG Publicity and Marketing</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="https://www.linkedin.com/in/abhishekbora09/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abhiiii__9/">
                    <InstagramIcon />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>


        {/* Row 4 Delegate Affairs and Operations Team */}

        <div class="heads">
          <div class="content_design">
            <div className="team_heading2">USG DELEGATE AFFAIRS</div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Karthik_Formal} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Karthik Panicker
                    <br />
                    <span>USG Content and Research</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/karthik-panicker-40a4b619b/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Saima_Ansari} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Saima Ansari
                    <br />
                    <span>USG Design and Technical Affairs</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saima-ansari-66a99b188/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_saimaansari_/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>



          <div class="content_design">
            <div className="team_heading2">USG OPERATIONS</div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Zeel_Patel} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Zeel Patel
                    <br />
                    <span>USG External Affairs and Publicity</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/zeelpatel2001/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zeel._/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Abhishek_Bora} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Abhishek Bora
                    <br />
                    <span>USG Publicity and Marketing</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="https://www.linkedin.com/in/abhishekbora09/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abhiiii__9/">
                    <InstagramIcon />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>




        {/* Row 5 Marketing and Out Reach */}

        <div class="heads">
          <div class="content_design">
            <div className="team_heading2">MARKETING</div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Karthik_Formal} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Karthik Panicker
                    <br />
                    <span>USG Content and Research</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/karthik-panicker-40a4b619b/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Saima_Ansari} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Saima Ansari
                    <br />
                    <span>USG Design and Technical Affairs</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saima-ansari-66a99b188/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_saimaansari_/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>



          <div class="content_design">
            <div className="team_heading2">USG OUTREACH</div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Zeel_Patel} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Zeel Patel
                    <br />
                    <span>USG External Affairs and Publicity</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/zeelpatel2001/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zeel._/" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Abhishek_Bora} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Abhishek Bora
                    <br />
                    <span>USG Publicity and Marketing</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="https://www.linkedin.com/in/abhishekbora09/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abhiiii__9/">
                    <InstagramIcon />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Row 6 Web Team  */}
        <>


        <div class="heads">
        <div class="content_design">

          <div class="heads">
            <div className="team_heading">WEB TEAM</div><br />
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Saifuddin} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Saifuddin Shaikh
                    <br />
                    <span>Web Team Member</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saifuddin-shaikh-87a0b2217"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>

            {/* <div class="card card1">
            <div class="content">
              <div class="imgBx">
                <img src={Saifuddin} alt="person1" />
              </div>
              <div class="contentBx">
                <h3>
                  Saifuddin Shaikh
                  <br />
                  <span>Web Team Member</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a
                  href="https://www.linkedin.com/in/saifuddin-shaikh-87a0b2217"
                  target="blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="/#" target="blank">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div> */}

            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Mansi} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Mansi Gundre
                    <br />
                    <span>Web Team Member</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mansi-gundre-a6a722207/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/mansii.iii.__" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="card card1">
              <div class="content">
                <div class="imgBx">
                  <img src={Rahul} alt="person1" />
                </div>
                <div class="contentBx">
                  <h3>
                    Rahul Amrutkar
                    <br />
                    <span>Web Team Member</span>
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/rahul-amrutkar-03149b221"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/rkamrutkar1234@" target="blank">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          </div>
        </>

      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default OurTeam;
