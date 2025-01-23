import React from 'react';
import "../styles/style.css";
import "../styles/about.css";
import "../styles/responsive.css";
import image2 from "../assets/img/2.png";  // Import the image for the about us section
import icon1 from "../assets/icons/icon1.png"; // Import icon for mission
import icon2 from "../assets/icons/icon2.png"; // Import icon for vision
import icon3 from "../assets/icons/icon3.png"; 
import ArabicFooter from '../components/Arabic-Footer';
import ArabicNavbar from '../components/Arabic-Navbar';

const AboutAr = () => {
  return (
   <>
   <ArabicNavbar />
   <section class="about-us">
        <div class="about-content">
            <div class="about-header text-right">
                <h1>إعــرف المزيـد عنّــــا!</h1>
               
              </div>
            <p class="about-content-2 text-right">
            فريق متخصص يجمعه شغف العمل من أجل رفاه الأطفال،
وخصوصاً أصحاب الهمم. مهمتنا هي دعم تطورهم وتمكينهم
من التمتع بأقصى قدراتهم، من خلال الرعاية المتخصصة
والاهتمام الفردي
               </p>
        </div>
        <div class="about-image-2">
            <img src={image2} alt="About Us Image" />
        </div>

        
    </section>
    <section>
        <div class="info-card-container">
            <div class="info-card info-card-2">
              <div class="icon">
                <img src={icon1} alt="Icon 1" />
              </div>
              <div class="text text-right text-right-new">
                <h3>مهمتنــا</h3>
                <p>
                فهم السمات الفريدة لكل طفل، وتوفير خطط تأهيل مصممة
بشكل فردي وتدخلات عالية الجودة، وتحقيق أهداف قابلة
للقياس تهدف الى إطلاق أقصى إمكانات الطفل</p>
              </div>
            </div>
          
            <div class="info-card info-card-2">
              <div class="icon">
                <img src={icon2} alt="Icon 2" />
              </div>
              <div class="text text-right text-right-new">
                <h3>رؤيتنــا</h3>
                <p>
                أن نكون مركزًا رائدًا للتميز والثقة، نعتني بتطور الأطفال
أصحاب الهمم بمنظور شمولي، وندعم عائلاتهم مع المساهمة
في بناء مجتمع يتفهم أصحاب الهمم ويقبلهم ويمكنهم</p>
              </div>
            </div>
          
            <div class="info-card info-card-2">
              <div class="icon">
                <img src={icon3} alt="Icon 3" />
              </div>
              <div class="text text-right text-right-new">
                <h3>قيمنا</h3>
                <p>الاحترام - التفاني – الصدق – القبول – التعاون - الاتساق 
                </p>
              </div>
            </div>
          </div>
          
    </section>
    <ArabicFooter />
   </>
  )
}

export default AboutAr ;
