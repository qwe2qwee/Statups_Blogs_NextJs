# 🚀 Startups Blog Platform | منصة مدونات الشركات الناشئة

A modern, bilingual (English/Arabic) platform for startups to pitch their ideas, connect with entrepreneurs, and participate in virtual competitions. Built with Next.js 15, Sanity CMS, and NextAuth.

منصة حديثة ثنائية اللغة (إنجليزي/عربي) للشركات الناشئة لعرض أفكارها، والتواصل مع رواد الأعمال، والمشاركة في المسابقات الافتراضية. مبنية باستخدام Next.js 15 و Sanity CMS و NextAuth.

---

## ✨ Features | الميزات

### English
- 🌍 **Bilingual Support**: Fully supports both English and Arabic with RTL layout
- 🔐 **GitHub Authentication**: Secure sign-in using GitHub OAuth via NextAuth
- 📝 **Content Management**: Powered by Sanity CMS with real-time updates
- 🎨 **Modern UI**: Built with Tailwind CSS and Radix UI components
- 🔍 **Search Functionality**: Search and filter startups easily
- 👤 **User Profiles**: Personalized profiles for entrepreneurs
- 📊 **Startup Pitches**: Submit, view, and vote on startup ideas
- 🌙 **Theme Support**: Dark/Light mode with next-themes
- 📱 **Responsive Design**: Mobile-first design approach
- 🎯 **Error Tracking**: Integrated with Sentry for monitoring
- ⚡ **Performance**: Optimized with Next.js 15 App Router

### العربية
- 🌍 **دعم ثنائي اللغة**: دعم كامل للغتين الإنجليزية والعربية مع واجهة RTL
- 🔐 **مصادقة GitHub**: تسجيل دخول آمن باستخدام GitHub OAuth عبر NextAuth
- 📝 **إدارة المحتوى**: مدعوم بـ Sanity CMS مع تحديثات فورية
- 🎨 **واجهة حديثة**: مبنية باستخدام Tailwind CSS ومكونات Radix UI
- 🔍 **وظيفة البحث**: البحث عن الشركات الناشئة وتصفيتها بسهولة
- 👤 **ملفات تعريف المستخدمين**: ملفات شخصية لرواد الأعمال
- 📊 **عروض الشركات الناشئة**: تقديم الأفكار ومشاهدتها والتصويت عليها
- 🌙 **دعم السمات**: الوضع الداكن/الفاتح مع next-themes
- 📱 **تصميم متجاوب**: نهج تصميم يعطي الأولوية للهاتف المحمول
- 🎯 **تتبع الأخطاء**: متكامل مع Sentry للمراقبة
- ⚡ **الأداء**: محسّن باستخدام Next.js 15 App Router

---

## 🛠️ Tech Stack | التقنيات المستخدمة

### Frontend
- **Framework**: [Next.js 15.2.2](https://nextjs.org/) with App Router
- **React**: 19.0.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Markdown Editor**: [@uiw/react-md-editor](https://uiwjs.github.io/react-md-editor/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Drag & Drop**: [@dnd-kit](https://dndkit.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

### Backend & CMS
- **CMS**: [Sanity](https://www.sanity.io/) v3.79.0
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) v5 (GitHub Provider)
- **Database**: Sanity Content Lake

### Developer Tools
- **Language**: TypeScript 5
- **Linting**: ESLint
- **Error Tracking**: Sentry
- **Package Manager**: npm

---

## 📋 Prerequisites | المتطلبات

Before you begin, ensure you have the following installed:
قبل البدء، تأكد من تثبيت ما يلي:

- **Node.js**: 18.x or higher | 18.x أو أعلى
- **npm**: 9.x or higher | 9.x أو أعلى
- **Git**: Latest version | أحدث إصدار
- **Sanity Account**: [Create one here](https://www.sanity.io/) | [أنشئ حساباً هنا](https://www.sanity.io/)
- **GitHub OAuth App**: [Create one here](https://github.com/settings/developers) | [أنشئ تطبيقاً هنا](https://github.com/settings/developers)

---

## 🚀 Installation | التثبيت

### 1. Clone the repository | استنساخ المستودع

```bash
git clone https://github.com/yourusername/Statups_Blogs_NextJs.git
cd Statups_Blogs_NextJs
```

### 2. Install dependencies | تثبيت الحزم

```bash
npm install
```

### 3. Set up environment variables | إعداد متغيرات البيئة

Create a `.env.local` file in the root directory:
أنشئ ملف `.env.local` في المجلد الجذر:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-03-06
SANITY_WRITE_TOKEN=your_write_token

# NextAuth Configuration
AUTH_SECRET=your_auth_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Sentry (Optional)
SENTRY_DSN=your_sentry_dsn
```

#### Getting Sanity Credentials | الحصول على بيانات Sanity

1. Go to [sanity.io/manage](https://www.sanity.io/manage) | انتقل إلى [sanity.io/manage](https://www.sanity.io/manage)
2. Create a new project or select existing one | أنشئ مشروعاً جديداً أو اختر مشروعاً موجوداً
3. Copy the Project ID | انسخ معرّف المشروع
4. Go to API settings and create a token with Editor permissions | انتقل إلى إعدادات API وأنشئ رمزاً بصلاحيات Editor

#### Getting GitHub OAuth Credentials | الحصول على بيانات GitHub OAuth

1. Go to [GitHub Settings → Developer Settings → OAuth Apps](https://github.com/settings/developers)
2. Click "New OAuth App" | اضغط على "New OAuth App"
3. Fill in:
   - **Application name**: Your app name | اسم التطبيق
   - **Homepage URL**: `http://localhost:3000` (for development)
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and generate a Client Secret | انسخ Client ID وأنشئ Client Secret

#### Generate AUTH_SECRET | إنشاء AUTH_SECRET

```bash
openssl rand -base64 32
```

### 4. Initialize Sanity | تهيئة Sanity

```bash
npm run typegen
```

This command will:
هذا الأمر سوف:
- Extract Sanity schema | يستخرج مخطط Sanity
- Generate TypeScript types | ينشئ أنواع TypeScript

---

## 🏃 Running the Application | تشغيل التطبيق

### Development Mode | وضع التطوير

```bash
npm run dev
```

The application will start at:
سيبدأ التطبيق على:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Sanity Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)

### Production Build | بناء الإنتاج

```bash
npm run build
npm start
```

---

## 📁 Project Structure | بنية المشروع

```
Statups_Blogs_NextJs/
├── app/                          # Next.js App Router
│   ├── (root)/                   # Main application routes
│   │   └── [lang]/               # Language-based routing (en/ar)
│   │       ├── page.tsx          # Home page
│   │       ├── startup/          # Startup routes
│   │       │   ├── [id]/         # Individual startup page
│   │       │   └── create/       # Create startup page
│   │       └── user/[id]/        # User profile pages
│   ├── studio/                   # Sanity Studio
│   ├── layout.tsx                # Root layout
│   └── global-error.tsx          # Error boundary
├── components/                   # React components
│   ├── Home/                     # Home page components
│   ├── ui/                       # Reusable UI components
│   └── ...
├── lib/                          # Utility functions
├── sanity/                       # Sanity CMS configuration
│   ├── lib/                      # Sanity client & queries
│   ├── schemaTypes/              # Content schemas
│   ├── env.ts                    # Environment config
│   └── types.ts                  # TypeScript types
├── public/                       # Static assets
├── auth.ts                       # NextAuth configuration
├── middleware.ts                 # Next.js middleware
├── sanity.config.ts              # Sanity Studio config
├── tailwind.config.ts            # Tailwind CSS config
└── package.json                  # Dependencies & scripts
```

---

## 🌐 Language Support | دعم اللغات

The application supports two languages with automatic RTL layout:
يدعم التطبيق لغتين مع واجهة RTL تلقائية:

- **English**: `/en` route | مسار `/en`
- **Arabic**: `/ar` route | مسار `/ar`

Example routes | أمثلة على المسارات:
- English Home: `http://localhost:3000/en`
- Arabic Home: `http://localhost:3000/ar`
- English Startup: `http://localhost:3000/en/startup/123`
- Arabic Startup: `http://localhost:3000/ar/startup/123`

---

## 📜 Available Scripts | الأوامر المتاحة

| Command | Description (English) | الوصف (العربية) |
|---------|----------------------|------------------|
| `npm run dev` | Start development server | تشغيل خادم التطوير |
| `npm run build` | Build for production | بناء للإنتاج |
| `npm start` | Start production server | تشغيل خادم الإنتاج |
| `npm run lint` | Run ESLint | تشغيل ESLint |
| `npm run typegen` | Generate Sanity types | إنشاء أنواع Sanity |

---

## 🎨 Customization | التخصيص

### Tailwind Configuration | تكوين Tailwind

Modify `tailwind.config.ts` to customize:
عدّل `tailwind.config.ts` لتخصيص:
- Colors | الألوان
- Fonts | الخطوط
- Spacing | المسافات
- Breakpoints | نقاط التوقف

### Sanity Schemas | مخططات Sanity

Add or modify content types in `sanity/schemaTypes/`:
أضف أو عدّل أنواع المحتوى في `sanity/schemaTypes/`:
- `author.ts` - Author/User schema | مخطط المؤلف/المستخدم
- `startup.ts` - Startup schema | مخطط الشركة الناشئة
- And more... | والمزيد...

---

## 🔒 Authentication Flow | سير المصادقة

1. User clicks "Sign In with GitHub" | المستخدم يضغط "تسجيل الدخول بـ GitHub"
2. Redirected to GitHub OAuth | إعادة التوجيه إلى GitHub OAuth
3. User authorizes the app | المستخدم يوافق على التطبيق
4. NextAuth creates session | NextAuth ينشئ جلسة
5. User data saved to Sanity | بيانات المستخدم تُحفظ في Sanity
6. User redirected back to app | المستخدم يُعاد توجيهه للتطبيق

---

## 🐛 Debugging | تصحيح الأخطاء

### Common Issues | المشاكل الشائعة

#### Sanity Connection Error
```bash
# Verify environment variables
echo $NEXT_PUBLIC_SANITY_PROJECT_ID
echo $NEXT_PUBLIC_SANITY_DATASET

# Re-run typegen
npm run typegen
```

#### GitHub OAuth Error
- Check callback URL matches exactly | تحقق من تطابق رابط callback
- Verify CLIENT_ID and CLIENT_SECRET | تحقق من CLIENT_ID و CLIENT_SECRET
- Ensure AUTH_SECRET is set | تأكد من تعيين AUTH_SECRET

---

## 📦 Deployment | النشر

### Vercel (Recommended | موصى به)

1. Push code to GitHub | ادفع الكود إلى GitHub
2. Import project in Vercel | استورد المشروع في Vercel
3. Add environment variables | أضف متغيرات البيئة
4. Deploy! | انشر!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables for Production
Don't forget to add all `.env.local` variables to your hosting platform!
لا تنسَ إضافة جميع متغيرات `.env.local` إلى منصة الاستضافة!

---

## 🤝 Contributing | المساهمة

Contributions are welcome! Please follow these steps:
المساهمات مرحب بها! يرجى اتباع هذه الخطوات:

1. Fork the repository | انسخ المستودع
2. Create a feature branch | أنشئ فرعاً للميزة
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes | أثبت تغييراتك
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch | ادفع إلى الفرع
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request | افتح طلب سحب

---

## 📝 License | الترخيص

This project is private and proprietary.
هذا المشروع خاص ومملوك.

---

## 🙏 Acknowledgments | الشكر والتقدير

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Sanity](https://www.sanity.io/) - Powerful CMS
- [Vercel](https://vercel.com/) - Deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Accessible components

---

## 📞 Support | الدعم

For support and questions:
للدعم والأسئلة:

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/Statups_Blogs_NextJs/issues)
- 📖 Documentation: [Next.js Docs](https://nextjs.org/docs)

---

<div align="center">

**Made with ❤️ by Your Team**

**صُنع بـ ❤️ بواسطة فريقك**

</div>
