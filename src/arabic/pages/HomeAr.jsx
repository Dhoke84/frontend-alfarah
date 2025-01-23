import React, { useState } from "react";
import "../styles/style.css";
import "../styles/responsive.css";
import homeImage from "../assets/img/1.png";
import fullDayProgramIcon from "../assets/icons/full_day_program.png";
import assessmentIcon from "../assets/icons/assessment.png";
import speechTherapyIcon from "../assets/icons/speech_language_therapy.png";
import behavioralTherapyIcon from "../assets/icons/behavioral_therapy.png";
import occupationalTherapyIcon from "../assets/icons/occupational_therapy.png";
import individualSessionIcon from "../assets/icons/individual_session.png";
import emailIcon from "../assets/icons/email.png";
import phoneIcon from "../assets/icons/phone.png";
import locationIcon from "../assets/icons/location.png";
import infoIcon from "../assets/icons/info.png";
import sensoryRoomIcon from "../assets/icons/sensoryRoomIcon.png"
import gymIcon from '../assets/icons/icon4.png';
import serviceImage1 from '../assets/images/11.jpg';
import serviceImage2 from '../assets/images/10.jpg';
import serviceImage3 from '../assets/images/14.jpg';
import serviceImage4 from '../assets/images/13.jpg';
import individualTherapyIcon from "../assets/icons/individual.png"
import fullDayProgramIconSmall from "../assets/icons/filldayclass.png"
import { Link } from "react-router-dom"; // For navigation
import ArabicNavbar from "../components/Arabic-Navbar";
import ArabicFooter from "../components/Arabic-Footer";

const HomeAr = () => {
  // State for the modal

  return (
    <>
      {/* Home Section */}
      <ArabicNavbar />
      <section className="home-section">
        <div className="home-text">
          <h1 className="text-right">
          الفرح يحييكم
          </h1>
          <h2 className="text-right">
          معًا نمهد طريق طفلكم نحو <br />
            <span>التعلم، والمتعة، والتطور</span>
          </h2>
          <p className="text-right">
          نعمل على توفير بيئة تزهر فيها إمكانات الطفل، ونضمن أعلى
مستويات الرعاية والدعم للأطفال أصحاب الهمم من خلال
برامج متخصصة شاملة
          </p>
          <Link to="/arabic-services" className="gradient-button text-right-two"> {/* Fixed link to services page */}
          اكتشف المزيد
          </Link>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Home" />
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="facilities-content">
          <div className="facilities-header">
            <h1>خدماتنا</h1>
            <p>
            استكشف الخيارات المتعددة التي نقدمها لتعزيز تجربتك
            وتوفير خدمات عالية الجود لطفلك
            </p>
          </div>
          <div className="facilities-cards">
            <div className="card-facility card-facility-2">
              <img src={fullDayProgramIcon} alt="Full-Day Program" className="card-icon-facilities-2" />
              <h3>البرنامج النهاري المتكامل</h3>
              <p>فعاليات صفية منظمة تركز على بناء وتطوير المهارات
للأطفال ذوي الاضطرابات النمائية؛ كاضطراب طيف التوحد،
والإعاقة الذهنية</p>
            </div>
            <div className="card-facility card-facility-2">
              <img src={assessmentIcon} alt="Assessment" className="card-icon-facilities-2" />
              <h3>التقييمات</h3>
              <p>يعتمد مركز الفرح على استخدام تقييمات مقننة ومعتمدة في
              مجال تطور الطفل والقدرة على التعلم</p>
            </div>
            <div className="card-facility card-facility-2">
              <img src={speechTherapyIcon} alt="Speech and Language Therapy" className="card-icon-facilities-2" />
              <h3>علاج النطق واللغة</h3>
              <p>القدرة على التواصل هي حق لكل فرد؛ لذلك يهتم فريقنا بتنمية مهارات التواصل لدى الأطفال؛ لتمكينهم من التواصل مع
              محيطهم بأكثر طريقة فعالة ممكنة</p>
            </div>
            <div className="card-facility card-facility-2">
              <img src={behavioralTherapyIcon} alt="Behavioral Therapy" className="card-icon-facilities-2" />
              <h3>العلاج السلوكي</h3>
              <p>يستثمر فريقنا مكامن القوة عند الطفل لغرس مهارات جديدة،
              وتعديل السلوك بما يحقق فرصة أكبر للطفل للنجاح والتأقلم</p>
            </div>
            <div className="card-facility card-facility-2">
              <img src={occupationalTherapyIcon} alt="Occupational Therapy" className="card-icon-facilities-2" />
              <h3>العلاج الوظيفي</h3>
              <p>يوفر العلاج الوظيفي الأنشطة التي تركز على أداء المهام
الحركية والحسية التي تهدف إلى زيادة القدرة على أداء المهام
الحياتية اليومية وصولًا إلى تحقيق الاستقلالية</p>
            </div>
            <div className="card-facility card-facility-2">
              <img src={individualSessionIcon} alt="Psychological Interventions" className="card-icon-facilities-2" />
              <h3>التدخلات النفسية</h3>
              <p>تهدف التدخلات النفسية إلى موازنة أنماط التفكير، والمشاعر،
              والسلوك، تشمل أيضًا تنمية الوظائف الذهنية والذكاء العاطفي</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <div className="button">
            <Link to="/services" style={{ color: "#003C71" }}> {/* Fixed link to services page */}
            إكتشف المزيد
            </Link>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </section>

      <section className="services-section">
      <div className="image-over-side-5"></div>

      <div className="services-left">
        <div className="collage">
          <img src={serviceImage1} alt="Service 1" id="image-1" className="collage-item one" />
          <img src={serviceImage2} alt="Service 2" id="image-2" className="collage-item two" />
          <img src={serviceImage3} alt="Service 3" id="image-3" className="collage-item three" />
          <img src={serviceImage4} alt="Service 4" id="image-4" className="collage-item four" />
        </div>
      </div>

      <div className="services-right text-right">
        <h1>غرف الأنشطة</h1>
        <p>
        نسعى إلى أن يعكس المكان نوعية الرعاية التي سيتلقاها الطفل
ونركز على تكامل الأمكنة مع توافر الأدوات اللازمة في جو
من البهجة يستمتع به الطفل خلال الأنشطة التأهيلية.
نولي أهمية قصوى لشروط الصحة والسلامة فضلاً عن
معايير الخصوصية للأهل
        </p>

        <div className="services-cards">
          <a href="./facility.html" className="card-link">
            <div className="card-new">
              <div className="card-header card-header-2">
                <img src={sensoryRoomIcon} alt="Card 1" className="card-icon-new" />
                <h3 className="card-header-2">الغرفة الحسية</h3>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>

          <a href="./facility.html" className="card-link">
            <div className="card-new">
              <div className="card-header card-header-2">
                <img src={fullDayProgramIconSmall} alt="Card 2" className="card-icon-new" />
                <h3 className="card-header-2">صفوف برنامج التدخل النهاري المتكامل</h3>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>

          <a href="./facility.html" className="card-link">
            <div className="card-new">
              <div className="card-header card-header-2">
                <img src={individualTherapyIcon} alt="Card 3" className="card-icon-new" />
                <h3 className="card-header-2">غرف العلاج الفردي</h3>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>

          <a href="./facility.html" className="card-link">
            <div className="card-new">
              <div className="card-header card-header-2">
                <img src={gymIcon} alt="Card 4" className="card-icon-new" />
                <h3 className="card-header-2">صالة الرياضة</h3>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>


    <section className="contact-section contact-section-2">
      <div className="contact-info-2 text-right">
        <h2 className="contact-info-2">تواصل معنا</h2>
        <div className="contact-item contact-item-2">
          <img src={emailIcon} alt="Email Icon" className="contact-icon" />
          <p>البريد الإليكتروني: info@alfarahcenter.com</p>
        </div>
        <div className="contact-item contact-item-2">
          <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
          <p>رقم الهاتف : 0567019877</p>
        </div>
        <div className="contact-item contact-item-2">
          <img src={locationIcon} alt="Location Icon" className="contact-icon" />
          <p>
          شارع النوافل – مدينة خليفة- قطاع 33- أبو ظبي
          </p>
        </div>
        <div className="contact-item contact-item-2">
          <img src={infoIcon} alt="Info Icon" className="contact-icon" />
          <p>
          فريق متخصص يجمعه شغف العمل من أجل رفاه الأطفال
          وخصوصًا أصحاب الهمم
          </p>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.307835839213!2d54.566214574812186!3d24.40537086331785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e465fb41e0aa3%3A0xf25db3b6b1ae0fdd!2sAl%20Nawafil%20St%20-%20Khalifa%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1729500853190!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Modal Popup Form */}
      <section id="get-help"></section>
    \

      <div className="contact-form contact-form-2 text-right text-right-new">
        <div className="background-design"></div>
        <h2 class="text-right text-right-new">تواصل معنا</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <div className="form-group">
            <input
              type="hidden"
              name="access_key"
              value="d7a9c841-de73-439d-9695-b548bdd993e8"
            />
            <input
              type="hidden"
              name="cc"
              value="admin@alfarahcenter.com"
            />
            <label htmlFor="first-name">الإسم</label>
            <input type="text" id="first-name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">رقم الهاتف</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">البريد الإليكتروني</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">رسالتك</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="send-button">
          أرسل الرسالة
          </button>
        </form>
      </div>
    </section>
    <ArabicFooter />
    </>
  );
};

export default HomeAr ;
