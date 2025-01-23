import React from 'react'
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/demo.css";


import newsimg from "../assets/images/about-container.png"

import newsimg2 from "../assets/images/unnamed.jpg"
import ArabicNavbar from '../components/Arabic-Navbar';
import ArabicFooter from '../components/Arabic-Footer';

const NewsAr = () => {
  return (
    <>
   
<ArabicNavbar />
     <section className="responsive-section" >
                  <div className="text-content text-right text-direction">
                    <h2 className="responsive-header">أخبارنـا</h2>
                    <p className="responsive-paragraph text-right text-direction">
                    إبق على اطلاع بكل ما يخص انشطتنا. في مركز الفرح،
نستمر بالتعلم ولا نتوقف عن دعم الأطفال، والفريق،
والمعلمين والأهل.
                    </p>
                  </div>
                  <div className="image-content">
                    <img src={newsimg} alt="Sample" className="responsive-image" />
                  </div>
                </section>

    {/* Event Card */}
    <div className="event-card text-reverse text-right ">
      {/* Left: Image */}
      <div className="event-image">
        <img src={newsimg2} alt="Event" />
      </div>

      {/* Middle: Event Details */}
      
<div className="event-details text-direction">
  <h3>مهرجان من تنظيم هيئة أبوظبي للطفولة المبكرة</h3>
  <p className="event-date">التاريخ: 31 أكتوبر إلى 3 نوفمبر 2024</p>
  <p className="event-location">الموقع: حديقة أم الإمارات</p>
  <p className="event-description ">
    انضموا إلينا في مهرجان هيئة أبوظبي للطفولة المبكرة! من 31 أكتوبر إلى 3 نوفمبر 2024، زوروا جناحنا في حديقة أم الإمارات. سنقدم أنشطة ممتعة للأطفال وسيكون خبراؤنا متواجدين للإجابة على جميع استفساراتكم حول تنمية الطفولة المبكرة. لا تفوتوا الفرصة للاستمتاع بالتجربة واكتساب معلومات قيمة. ننتظركم هناك!
  </p>
</div>
```

      {/* Right: Book Now Button (commented out) */}
      {/* <div className="event-action">
        <button className="book-now">Book Now</button>
      </div> */}
    </div>
    <ArabicFooter />
  </>
  )
}

export default NewsAr ;
