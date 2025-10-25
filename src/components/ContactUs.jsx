import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SecTitle from "./SecTitle";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          subject: "استشارة هندسية",
          from_name: data.name,
          from_email: data.email,
          message: `
            name: ${data.name},
            email: ${data.email},
            message: ${data.message}
          `,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("✅ تم إرسال الرسالة بنجاح!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });

      reset();
    } catch (error) {
      console.error("❌ خطأ أثناء الإرسال:", error);

      toast.error("❌ حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <section className="bg-secBg text-white py-20 relative">
      <SecTitle title="تواصل معنا" />

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* معلومات التواصل */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6 text-orange">
            نحن هنا لخدمتك
          </h3>
          <p className="text-textColor mb-8 leading-relaxed">
            سواء كان لديك مشروع جديد أو تحتاج استشارة هندسية، تواصل معنا وسيسعد
            فريقنا بالرد عليك في أسرع وقت.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange" size={20} />
              <span className="text-textColor">القاهرة، مصر</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-orange" size={20} />
              <Link to="https://wa.me/01210056162" className="text-textColor"> 1210056162 +20</Link>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange" size={20} />
              <Link
                className="text-textColor"
                to="mailto:ahmedezzat.mohamed12@gmail.com"
              >
                ahmedezzat.mohamed12@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-orange" size={20} />
              <span className="text-textColor">السبت - الخميس: 9 ص - 6 م</span>
            </div>
          </div>
        </div>

        {/* نموذج التواصل */}
        <div className="bg-cardBg/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-orange mb-2">الاسم الكامل</label>
              <input
                type="text"
                placeholder="اكتب اسمك هنا"
                className="w-full p-3 rounded-lg bg-secBg/60 border border-primary/40 text-white focus:outline-none focus:border-orange"
                {...register("name", {
                  required: "الاسم مطلوب",
                  minLength: {
                    value: 3,
                    message: "الاسم يجب أن يكون 3 أحرف على الأقل",
                  },
                })}
              />

              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-orange mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full p-3 rounded-lg bg-secBg/60 border border-primary/40 text-white focus:outline-none focus:border-orange"
                {...register("email", {
                  required: "البريد الإلكتروني مطلوب",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "البريد الإلكتروني غير صالح",
                  },
                })}
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-orange mb-2">الرسالة</label>
              <textarea
                rows="4"
                placeholder="اكتب رسالتك..."
                className="w-full p-3 rounded-lg bg-secBg/60 border border-primary/40 text-white focus:outline-none focus:border-orange resize-none"
                {...register("message", {
                  required: "الرسالة مطلوبة",
                  minLength: {
                    value: 10,
                    message: "الرسالة يجب أن تكون 10 أحرف على الأقل",
                  },
                })}
              ></textarea>

              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-secBg text-white font-bold rounded-lg hover:bg-darkBlue transition-all duration-300 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  جاري الإرسال...
                </span>
              ) : (
                "إرسال الرسالة"
              )}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer rtl />
    </section>
  );
};

export default ContactUs;
