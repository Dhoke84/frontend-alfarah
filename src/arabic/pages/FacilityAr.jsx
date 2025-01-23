import React from 'react';
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/responsive.css";
import "../styles/facility.css";
import "../styles/demo.css";
import icon4 from "../assets/icons/icon1.png"; // Import icon for mission
import icon2 from "../assets/icons/icon2.png"; // Import icon for vision
import icon3 from "../assets/icons/icon3.png"; 

import image11 from "../assets/img/11.png";
import icon1 from '../assets/icons/icon4.png';
import ArabicNavbar from '../components/Arabic-Navbar';
import ArabicFooter from '../components/Arabic-Footer';


const FacilityAr = () => {
  return (
   <>
    <ArabicNavbar />
      {/* Offerings Section */}
   

        <section className="responsive-section" style={{ backgroundColor: "white" }}>
              <div className="text-content text-right text-direction">
                <h2 className="responsive-header ">غرف الأنشطة</h2>
                <p className="responsive-paragraph text-direction">
                نسعى إلى أن يعكس المكان نوعية الرعاية التي سيتلقاها الطفل
ونركز على تكامل الأمكنة مع توافر الأدوات اللازمة في جو
من البهجة يستمتع به الطفل خلال الأنشطة التأهيلية.
نولي أهمية قصوى لشروط الصحة والسلامة فضلاً عن
معايير الخصوصية للأهل.
                </p>
              </div>
              <div className="image-content">
                <img src={image11} alt="Sample" className="responsive-image" />
              </div>
            </section>

      {/* Card Section */}
      <section>
        <div className="card-grid">
          {/* Card Item 1 */}
          <div className="card-item text-reverse">
            <div className="icon">
              <img src={icon1} alt="Icon 1" />
            </div>
            <div className="text text-right text-right-new">
              <h3>صفوف البرنامج النهاري المتكامل</h3>
              <p>تنظم أنشطة البرنامج داخل الصفوف مع توفر البيئة الآمنة
              والمحفزة لاكتساب وتنمية المهارات.</p>
            </div>
          </div>

          {/* Card Item 2 */}
          <div className="card-item text-reverse">
            <div className="icon">
              <img src={icon2} alt="Icon 2" />
            </div>
            <div className="text text-right text-right-new">
              <h3>غرف العلاج الفردي</h3>
              <p>توفر هذه الغرف الأدوات والخصوصية اللازمة للتركيز على
              رعاية كل طفل بحسب حاجاته المتفردة.</p>
            </div>
          </div>

          {/* Card Item 3 */}
          <div className="card-item text-reverse">
            <div className="icon">
              <img src={icon3} alt="Icon 3" />
            </div>
            <div className="text text-right text-right-new">
              <h3>الغرفة الحسية</h3>
              <p>تمثل هذه الغرفة واحة للتحفيز والمعالجة الحسية، مزودة
              بأحدث مستلزمات الأنشطة الحسية.</p>
            </div>
          </div>

          {/* Card Item 4 */}
          <div className="card-item text-reverse">
            <div className="icon">
              <img src={icon4} alt="Icon 4" />
            </div>
            <div className="text text-right text-right-new">
              <h3>الصالة الرياضية</h3>
              <p>تعطي الصالة مساحةً لدعم حاجة الطفل للحركة والتمتع
باكتشاف قدراته الجسدية كما توفر المعدات اللازمة للتمارين
التي تستهدف التطور الحركي لكل طفل بحسب برنامج التأهيل
الخاص به.</p>
            </div>
          </div>
        </div>
      </section>
      <ArabicFooter />
    </>
  )
}

export default FacilityAr ;
