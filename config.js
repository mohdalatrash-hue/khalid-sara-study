/* ============================================================================
   إعدادات الموقع — تُعدّل مرة واحدة فقط · Site settings — edit once
   ============================================================================

   ① سجلّ المعلّم المركزي (اختياري)
      ضع هنا رابط تطبيق Google Apps Script لتجميع نتائج الطلاب في جدول خاص.
      اتركه فارغاً لإيقاف الإرسال. الخطوات في MASTER-LOG-SETUP.md.

   ② Google Analytics 4 — أفضل حلّ مجاني للإحصاءات التفصيلية
      • أنشئ حساباً على https://analytics.google.com (مجاني تماماً)
      • أنشئ Property جديدة → Web
      • انسخ Measurement ID (يبدأ بـ G-XXXXXXXXXX)
      • الصقه بين قوسَي GA_ID أدناه
      → يُفعّل: عدد الزيارات · الدول · الأجهزة · أكثر الصفحات استخداماً

   ③ GoatCounter — بديل خصوصيّ بدون ملفات تتبّع (cookies)
      • أنشئ موقعاً مجانياً على https://goatcounter.com
      • ضع كود الموقع (الجزء قبل .goatcounter.com) في GOAT_CODE أدناه
      → يُفعّل: زيارات مُجمَّعة · خصوصيّة كاملة · GDPR متوافق

   ④ HITS_PATH — مسار العداد · لا تغيّره
   ============================================================================ */

var LOG_ENDPOINT = "";

var GA_ID      = "";   /* Google Analytics 4  مثال: "G-XXXXXXXXXX"  */
var GOAT_CODE  = "";   /* GoatCounter         مثال: "khalid-sara"   */

/* مسار عداد الزيارات (hits.sh) — لا تغيّره */
var HITS_PATH  = "mohdalatrash-hue.github.io/khalid-sara-study";
