import React from "react";
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/demo.css";
import "../styles/responsive.css";

import therapy1 from "../assets/img/1.png";
import therapy2 from "../assets/img/2.png";
import therapy3 from "../assets/img/3.png";
import ArabicNavbar from "../components/Arabic-Navbar";
import ArabicFooter from "../components/Arabic-Footer";

const servicesData = [
  {
    id: 1,
    title: "التقييمات",
    description:
      "يعتمد مركز الفرح على استخدام تقييمات مقننة ومعتمدة في مجال تطور الطفل والقدرة على التعلم. تعتبر التقييمات مطلبًا أساسيًّا لتحديد احتياجات العلاج قبل التدخل، وتستخدم أيضًا لإعادة الاختبار لمتابعة نتائج العلاج وتقدمه. بعد التقييم يتم إصدار تقرير رسمي، ويتم عقد اجتماع لمناقشة النتائج للوصول إلى فهم متبادل لخطة الدعم التي تناسب الطفل. تغطي مجموعة التقييمات المتاحة مجالات الرفاه النفسي والسلوكي، والقدرات المعرفية، والأداء الأكاديمي، والمهارات الحركية، والتكامل الحسي، والقدرات اللغوية.",
    image: therapy1,
  },
  {
    id: 2,
    title: "البرنامج النهاري المتكامل",
    description:
      "فعاليات صفية منظمة تركز على بناء وتطوير المهارات للأطفال ذوي الاضطرابات النمائية؛ كاضطراب طيف التوحد والإعاقة الذهنية. يشمل هذا البرنامج الأعمار من 4 إلى 18 عامًا، حيث يحضر الأطفال يوميًّا لمدة خمسة أيام في الأسبوع، من الساعة 8 صباحًا إلى الساعة 1 ظهرًا.",
    image: therapy2,
    subSection1: {
      heading: "لفئة الأعمار الصغيرة",
      text: "يركز البرنامج على مهارات الاستعداد للمدرسة، شاملًا السلوك التكيفي، المهارات الإدراكية، اللعب، التواصل، المهارات ما قبل الأكاديمية، وتنظيم المشاعر.",
    },
    subSection2: {
      heading: "للفئة الأكبر عمرًا",
      text: "يركز البرنامج على تعزيز المهارات الحياتية اليومية بشكل أساسي، فضلًا عن السلوك التكيفي، والمهارات الأكاديمية الأساسية في القراءة والكتابة والحساب.",
      bulletPoints: [
        "استخدام مناهج مبنية على الأدلة العلمية يطبقها كادر التربية الخاصة",
        "الاهتمام الخاص حيث ينضم الطفل إلى مجموعة صغيرة لضمان التركيز",
        "اكتساب المهارات الاجتماعية عبر التفاعل مع الأقران",
        "توفر المواصلات ذهابًا وإيابًا",
      ],
    },
  },
  {
    id: 3,
    title: "الجلسات الفردية",
    description:
      "الهدف الأساسي للعلاج في مركز الفرح هو تحفيز تطور الطفل، ورفع مستوى رفاهية الطفل، وتعزيز قدرته على تعلم مهارات جديدة بطريقة صحية. تُعقد الجلسات بشكل فردي لمدة 45 دقيقة باستخدام مناهج علاجية مبنية على الأدلة العلمية.",
    image: therapy3,
    subSection1: {
      bulletPoints: [
        "العلاج السلوكي.",
        "علاج النطق واللغة.",
        "العلاج الوظيفي.",
        "المعالجة الحسية.",
      ],
    },
  },
  {
    id: 4,
    title: "العلاج السلوكي",
    description:
      "يسعى فريقنا إلى فهم أنماط السلوك وتغييرها من خلال التعزيز الإيجابي، وبناء مهارات الطفل في مجالات مختلفة.",
    image: therapy3,
    subSection1: {
      heading: "متطلبات التعلم",
      text: "الانتباه التشاركي، واللعب والمحاكاة، واتباع التعليمات.",
    },
    subSection2: {
      heading: "التنظيم الانفعالي",
      text: "بناء قدرة الطفل على ضبط انفعالاته وتحسين التفاعل الاجتماعي.",
    },
    subSection3: {
      heading: "تعزيز الثقة بالنفس",
      text: "توفير فرص المشاركة في الأنشطة التي تشعر الطفل بالإنجاز والنجاح.",
    },
  },
  {
    id: 5,
    title: "علاج النطق واللغة",
    description:
      "يهدف هذا العلاج إلى تنمية قدرة الطفل على التواصل بشكل أفضل من خلال تطوير المفردات، تحسين النطق، أو استخدام وسائل التواصل البديلة.",
    image: therapy3,
    subSection1: {
      text: "في حالات التأخر اللغوي، يتم تطوير لغة الطفل عبر زيادة حصيلة المفردات وفهم تركيب الجمل.",
    },
    subSection2: {
      text: "في حالات اضطرابات النطق، نركز على الطلاقة والوعي الصوتي.",
    },
    subSection3: {
      text: "في حال وجود تحديات لتطوير اللغة المنطوقة، ندعم ذلك باستخدام وسائل التواصل البديلة.",
    },
  },
  {
    id: 6,
    title: "العلاج الوظيفي",
    description:
      "يركز العلاج الوظيفي على تمكين الأطفال من أداء الأنشطة اليومية بشكل مستقل من خلال تحسين المهارات الحركية والحسية.",
    image: therapy3,
    subSection1: {
      heading: "المهارات الحركية",
      text: "تشمل الحركات الجسمية الكبيرة كالمشي والتوازن، والدقيقة كالتلوين والكتابة.",
    },
    subSection2: {
      heading: "المعالجة الحسية والذهنية",
      text: "تنظيم مدخلات الحواس وتحسين القدرة على الانتباه والذاكرة.",
    },
    subSection3: {
      heading: "المهارات الحياتية والاجتماعية",
      text: "تدريب الأطفال على الاستقلالية في أداء المهام اليومية وتطوير التفاعل الاجتماعي.",
    },
  },
  {
    id: 7,
    title: "التدخلات النفسية",
    description:
      "تهدف التدخلات النفسية إلى تحسين التوازن العاطفي والسلوكي للأطفال، وتنمية الذكاء العاطفي.",
    image: therapy1,
    subSection1: {
      heading: "تشمل التدخلات",
      text: "تنظيم الانفعالات، معالجة القلق، تحسين السلوك الاجتماعي، تعزيز الثقة بالنفس، وإرشاد الوالدين.",
      bulletPoints: [
        "التقييمات العاطفية والتعليمية.",
        "الجلسات العلاجية الفردية والجماعية.",
        "إرشاد الأهل لدعم الطفل.",
        "برامج دعم الأقران للأطفال أصحاب الهمم.",
      ],
    },
  },
];


const SubSection = ({ heading, text, bulletPoints }) => (
  <div className="subsection2">
    {heading && <h4>{heading}</h4>}
    {text && <p>{text}</p>}
    {bulletPoints && (
      <ul className="bullet-points2">
        {bulletPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

const ServicesAr = () => {
  return (
    <>
      <ArabicNavbar />
      {/* Offerings Section */}
      <section className="responsive-section">
        <div className="text-content text-right text-direction">
          <h2 className="responsive-header">الخدمــات</h2>
          <p className="responsive-paragraph text-direction">
            نحن نقدم مجموعة واسعة من الخدمات التي تهدف إلى تحسين نوعية
            الحياة وتعزيز الرفاهية الشخصية. اكتشف كيف يمكننا مساعدتك في تحقيق
            أهدافك
          </p>
        </div>
        <div className="image-content">
          <img
            src={therapy3}
            alt="الخدمات"
            className="responsive-image"
          />
        </div>
      </section>

      {/* Services Page */}
      <div className="services-page">
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-item ${
                index % 2 === 0 ? "left-aligned" : "right-aligned"
              }`}
            >
              {/* Therapy Image */}
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              {/* Therapy Text */}
              <div className="service-text text-direction text-right">
                <h2>{service.title}</h2>
                <p>{service.description}</p>

                {/* Subsections (conditionally rendered) */}
                <div className="service-subsections">
                  {service.subSection1 && (
                    <SubSection
                      heading={service.subSection1.heading}
                      text={service.subSection1.text}
                      bulletPoints={service.subSection1.bulletPoints}
                    />
                  )}
                  {service.subSection2 && (
                    <SubSection
                      heading={service.subSection2.heading}
                      text={service.subSection2.text}
                      bulletPoints={service.subSection2.bulletPoints}
                    />
                  )}
                  {service.subSection3 && (
                    <SubSection
                      heading={service.subSection3.heading}
                      text={service.subSection3.text}
                      bulletPoints={service.subSection3.bulletPoints}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ArabicFooter />
    </>
  );
};

export default ServicesAr;
