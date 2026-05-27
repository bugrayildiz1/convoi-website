/* ═══════════════════════════════════════════════════════════
   QAVIO — i18n.js  (TR / EN)
   ═══════════════════════════════════════════════════════════ */
'use strict';

const LANGS = {
  tr: {
    'page-title'      : 'Qavio — WhatsApp Otomasyon Sistemi',
    'meta-desc'       : 'Yapay zeka destekli WhatsApp chatbot ve Flow sistemi. Klinikler, salonlar ve işletmeler için 7/24 otomatik müşteri yönetimi.',
    'nav-features'    : 'Özellikler',
    'nav-sectors'     : 'Sektörler',
    'nav-pricing'     : 'Fiyatlar',
    'nav-cta'         : 'Demo İste →',
    'hero-tag'        : 'WhatsApp Otomasyon',
    'hero-h1'         : 'Müşteriniz Yazar,<br><em>Sistem</em> Halleder',
    'hero-desc'       : 'Müşterilerinize WhatsApp\'tan saniyeler içinde otomatik olarak yanıt verin, randevu alın, teklif gönderin — yapay zeka halleder, siz sadece sonuçlara bakın. 7/24, hiç durmadan.',
    'hero-btn-demo'   : 'Demo İste <span>→</span>',
    'hero-btn-how'    : 'Nasıl Çalışır?',
    'hero-note'       : '20+ işletme &nbsp;·&nbsp; ⭐ 4.9 puan',
    'marquee-text'    : 'WhatsApp Flow <span class="ms">·</span> AI Intent Algılama <span class="ms">·</span> Canlı Dashboard <span class="ms">·</span> 7/24 Aktif <span class="ms">·</span> Randevu Otomasyonu <span class="ms">·</span> KVKK Uyumlu <span class="ms">·</span> Türkçe Destek <span class="ms">·</span> Kurulum Dahil <span class="ms">·</span>',
    'stat-1'          : 'Kesintisiz aktif çalışır',
    'stat-2'          : 'Ortalama yanıt süresi',
    'stat-3'          : 'Mesaj otomasyon oranı',
    'stat-4'          : 'Gelen mesaj yanıt maliyeti',
    'ai-tag'          : 'Yapay Zeka ile İletişim',
    'ai-h2'           : 'Müşteriniz yazar,<br><em>AI hemen yanıtlar</em>',
    'ai-desc'         : 'Standart otomatik mesajların çok ötesinde. Qavio\'nun yapay zekası müşterilerinizin ne dediğini değil, <strong>ne demek istediğini</strong> anlar — ve saniyeler içinde doğru yanıtı gönderir. Siz uyurken bile.',
    'ai-pt1-title'    : 'Niyet Algılama',
    'ai-pt1-desc'     : 'Randevu mu, fiyat mı, bilgi mi? AI saniyeler içinde anlar ve doğru akışa yönlendirir.',
    'ai-pt2-title'    : 'Doğal Türkçe',
    'ai-pt2-desc'     : 'Müşteri ne yazarsa yazsın — kısa, uzun, yazım hatalı — AI anlar ve doğal bir dille yanıt verir.',
    'ai-pt3-title'    : '7/24, 3 Saniyede',
    'ai-pt3-desc'     : 'Hiçbir çalışanınız bu hız ve tutarlılıkta yanıt veremez. Yılın 365 günü, gece gündüz aktif.',
    'ai-chat-name'    : 'Restaurant Agent',
    'ai-chat-status'  : 'Qavio AI · Aktif',
    'ai-footer'       : 'Rezervasyon tamamlandı — yanıt süresi: <strong>2.1 saniye</strong>',
    'demo-tag'        : 'Nasıl Çalışır',
    'demo-h2'         : 'WhatsApp\'ın tüm gücünü<br><em>tek sistemde</em> kullanın',
    'demo-desc'       : 'Standart chatbot\'ların çok ötesinde. WhatsApp Flow teknolojisiyle müşterileriniz uygulamadan çıkmadan form dolduruyor, randevu seçiyor.',
    'step-01-h3'      : 'Yapay Zeka ile<br><em>Anında Karşılama</em>',
    'step-01-p'       : 'Müşteriniz WhatsApp\'tan mesaj attığında sistem 3 saniye içinde yanıt verir. "Randevu", "fiyat", "bilgi" gibi niyet kelimelerini AI otomatik algılar ve doğru akışa yönlendirir.',
    'step-01-pills'   : '<span class="pill">🤖 Müşteriyi anlayan AI</span><span class="pill">⚡ 3s yanıt</span><span class="pill">🌐 TR &amp; EN destekli</span>',
    'step-02-h3'      : 'WhatsApp Flow ile<br><em>Randevu Akışı</em>',
    'step-02-p'       : 'Rakiplerin sunamadığı özellik: WhatsApp uygulamasından çıkmadan interaktif randevu formu. Müşteri isim, tarih ve saat seçiyor — siz dashboard\'da anlık görüyorsunuz.',
    'step-02-pills'   : '<span class="pill">📱 Uygulama içi form</span><span class="pill">📅 Tarih-saat seçici</span><span class="pill">✅ Anında onay</span>',
    'step-03-h3'      : 'Otomatik Teklif<br><em>&amp; Fiyat Akışı</em>',
    'step-03-p'       : 'Müşteri "fiyat nedir?" dediğinde sistem otomatik teklif formunu açar. Hizmet türü, bütçe ve iletişim bilgilerini toplar. Siz sadece hazır teklifi onaylarsınız.',
    'step-03-pills'   : '<span class="pill">💰 Otomatik teklif</span><span class="pill">🎯 Hizmet seçimi</span><span class="pill">📊 Lead takibi</span>',
    'step-04-h3'      : 'Canlı Dashboard<br><em>&amp; Takvim</em>',
    'step-04-p'       : 'Tüm konuşmalar, randevular ve istatistikler tek panelde. Kaç mesaj geldi, kaçı randevuya dönüştü — anlık görerek karar alın.',
    'step-04-pills'   : '<span class="pill">📊 Canlı istatistik</span><span class="pill">📅 Takvim görünümü</span><span class="pill">📈 Haftalık rapor</span>',
    'feat-tag'        : 'Özellikler',
    'feat-h2'         : 'Rakiplerinizden sizi<br><em>ayıran</em> teknoloji',
    'feat-desc'       : 'Global SaaS araçlarının sunamadığı sektöre özel çözümler, Türkçe destek ve tam özelleştirme.',
    'feat-1-p'        : 'Gelen mesajın amacını yapay zeka otomatik algılar ve doğru akışa yönlendirir. Türkçe ve İngilizce destekli.',
    'feat-2-p'        : 'Müşteri WhatsApp\'tan çıkmadan interaktif form doldurur. Randevu, teklif, ön değerlendirme — hepsi tek akışta.',
    'feat-3-h'        : 'Canlı Takvim',
    'feat-3-p'        : 'Randevular otomatik takvime işlenir. Günlük, haftalık görünüm. Kimin ne zaman geleceğini tek bakışta görün.',
    'feat-4-h'        : 'KVKK Uyumlu',
    'feat-4-p'        : 'Tüm veriler AB sunucularında işlenir. KVKK ve GDPR gerekliliklerine tam uyumlu. Veri sahipliği sizde.',
    'feat-5-h'        : 'Kurulum Dahil',
    'feat-5-p'        : 'Meta Business API başvurusundan canlı yayına kadar her şey sizin adınıza. 7–10 gün içinde hazır.',
    'feat-6-h'        : 'Tek Muhatap',
    'feat-6-p'        : 'Sorun olduğunda call center değil, sizi tanıyan bir kişiyi arıyorsunuz. Flow güncellemeleriniz 24 saatte yapılır.',
    'how-tag'         : 'Süreç',
    'how-h2'          : '3 adımda<br><em>canlıya</em> geçin',
    'how-desc'        : 'Başvurudan canlı yayına ortalama 7–10 gün. Siz işinize bakın, biz halledelim.',
    'how-1-h'         : 'Keşif &amp; Kurulum',
    'how-1-p'         : 'İş süreçlerinizi anlıyoruz. Meta Business API başvurusunu sizin adınıza yapıyoruz. WhatsApp numaranızı sisteme bağlıyoruz.',
    'how-2-h'         : 'Özelleştirme &amp; Test',
    'how-2-p'         : 'Sektörünüze özel flow\'ları ayarlıyoruz. Mesajları, randevu akışını, teklif formunu yapılandırıyoruz. Canlı test yapıyoruz.',
    'how-3-h'         : 'Canlı Yayın &amp; Destek',
    'how-3-p'         : 'Sistemi yayına alıyoruz, dashboard erişimi veriyoruz. Aylık performans raporu ve öncelikli destek ile yanınızdayız.',
    'sec-tag'         : 'Sektörler',
    'sec-h2'          : 'Her sektöre özel<br><em>hazır çözümler</em>',
    'sec-desc'        : 'Genel amaçlı değil — işinize özgü.',
    'sec-1-h'         : 'Özel Klinik &amp; Hastane',
    'sec-1-p'         : 'Randevu, ön değerlendirme, hatırlatma mesajı',
    'sec-2-h'         : 'Güzellik &amp; Estetik',
    'sec-2-p'         : 'Seans rezervasyonu, danışma formu, tedavi akışı',
    'sec-3-h'         : 'Restoran',
    'sec-3-p'         : 'Rezervasyon, masa yönetimi, sipariş akışı',
    'sec-4-h'         : 'Otomotiv Servisi',
    'sec-4-p'         : 'Araç kabul formu, servis durumu, randevu',
    'sec-5-h'         : 'Gayrimenkul',
    'sec-5-p'         : 'İlan sorgulama, ziyaret randevusu, danışman yönlendirme',
    'sec-6-h'         : 'Hukuk &amp; Danışmanlık',
    'sec-6-p'         : 'Ön başvuru formu, müvekkil kabulü',
    'sec-7-h'         : 'Eğitim Kurumu',
    'sec-7-p'         : 'Kayıt formu, bilgi talebi, hatırlatma',
    'sec-8-h'         : 'E-Ticaret &amp; Butik',
    'sec-8-p'         : 'Sipariş takip, iade formu, ürün soruları',
    'price-tag'       : 'Fiyatlar',
    'price-h2'        : 'Şeffaf,<br><em>sürprizsiz</em> fiyatlandırma',
    'price-desc'      : 'Gizli ücret yok. Kurulum ücreti yok. Her paketle tam destek.',
    'tog-monthly'     : 'Aylık',
    'tog-yearly'      : 'Yıllık',
    'tog-save'        : '%20 İndirim',
    'plan-per'        : '/mo',
    'plan-1-yearly'   : '$149/yıl · $79 tasarruf',
    'plan-1-f1'       : 'Otomatik karşılama mesajı',
    'plan-1-f2'       : 'Randevu Flow (hazır şablon)',
    'plan-1-f3'       : 'WhatsApp Business API kurulumu',
    'plan-1-f4'       : '3.000 mesaj/ay',
    'plan-1-f5'       : '1 kullanıcı · E-posta destek',
    'plan-2-badge'    : 'En Popüler',
    'plan-2-yearly'   : '$389/yıl · $199 tasarruf',
    'plan-2-f1'       : 'Starter\'daki her şey',
    'plan-2-f2'       : '<strong>AI intent algılama</strong> (TR/EN)',
    'plan-2-f3'       : 'Teklif &amp; fiyat Flow\'u',
    'plan-2-f4'       : 'Canlı dashboard &amp; takvim',
    'plan-2-f5'       : '10.000 mesaj/ay · 3 kullanıcı',
    'plan-2-f6'       : 'Chatbot &amp; otomasyon',
    'plan-3-yearly'   : '$990/yıl · $558 tasarruf',
    'plan-3-f1'       : 'Growth\'taki her şey',
    'plan-3-f2'       : 'Özel ön değerlendirme Flow\'u',
    'plan-3-f3'       : 'API erişimi &amp; veri entegrasyonu',
    'plan-3-f4'       : '40.000 mesaj/ay · 10 kullanıcı',
    'plan-3-f5'       : 'GDPR/KVKK uyumlu · Sınırsız şablon',
    'plan-3-f6'       : 'Öncelikli destek',
    'plan-cta'        : 'Demo İste',
    'price-note'      : '7 günlük ücretsiz deneme &nbsp;·&nbsp; Kredi kartı gerekmez &nbsp;·&nbsp; İstediğin zaman iptal',
    'contact-tag'     : 'İletişim',
    'contact-h2'      : 'Demo isteyin,<br><em>sistemi</em> görün',
    'contact-p'       : '15 dakikalık canlı demoda kendi işletmenize özel kurulu sistemi görün. Hiçbir ücret veya taahhüt olmadan.',
    'ch-wa-lbl'       : 'WhatsApp',
    'ch-wa-val'       : 'Hemen yazın',
    'ch-email-lbl'    : 'E-posta',
    'reply-lbl'       : '🕐 Yanıt süresi',
    'reply-val'       : 'İş günleri 2 saat içinde',
    'reply-sub'       : 'Hafta sonu formlar Pazartesi yanıtlanır',
    'form-name-lbl'   : 'Ad Soyad *',
    'form-name-ph'    : 'Ahmet Yılmaz',
    'form-phone-lbl'  : 'WhatsApp Numarası *',
    'form-phone-ph'   : '+90 532 000 00 00',
    'form-email-lbl'  : 'E-posta',
    'form-email-ph'   : 'ahmet@sirket.com',
    'form-sector-lbl' : 'İşletme Türü *',
    'form-sector-ph'  : 'Seçiniz...',
    'form-sector-opts': ['Özel Klinik / Hastane','Güzellik & Estetik Merkezi','Saç Ekimi Kliniği','Otomotiv Servisi','Gayrimenkul Ofisi','Hukuk Bürosu / Danışmanlık','Eğitim Kurumu','E-Ticaret / Butik','Diğer'],
    'form-msg-lbl'    : 'Mesajınız',
    'form-msg-ph'     : 'İşletmeniz ve ihtiyaçlarınız hakkında kısaca bilgi verin...',
    'form-submit'     : 'Demo İste — Ücretsiz →',
    'success-h'       : 'Mesajınız alındı!',
    'success-p'       : '2 iş saati içinde WhatsApp veya e-posta ile geri dönüyoruz.',
    'footer-brand-p'  : 'WhatsApp chatbot ve Flow otomasyonu. Yapay zeka destekli müşteri iletişimi.',
    'footer-p-title'  : 'Ürün',
    'footer-p-feat'   : 'Özellikler',
    'footer-p-price'  : 'Fiyatlar',
    'footer-p-sec'    : 'Sektörler',
    'footer-c-title'  : 'İletişim',
    'footer-c-demo'   : 'Demo İste',
    'footer-copy'     : '© 2026 Qavio. Tüm hakları saklıdır.',
    'footer-privacy'  : 'KVKK &amp; Gizlilik',
    /* Hero pscreens */
    'ps-chat': {
      waName:'Qavio', waStatus:'çevrimiçi',
      bot1:'Merhaba! 👋 Nasıl yardımcı olabilirim?',
      b1:'📅 Randevu Al', b2:'💰 Fiyat Öğren', b3:'ℹ️ Bilgi Al',
      userMsg:'Randevu almak istiyorum',
      formLabel:'🗓️ RANDEVU FORMU',
      formText:'Randevu almak için formu açınız...',
      formBtn:'Formu Aç →',
      inp:'Mesaj yazın...',
    },
    'ps-flow': {
      title:'Randevu Bilgileri', sub:'Formu doldurun, hemen onaylayalım',
      lblName:'Adınız Soyadınız', valName:'Ahmet Yılmaz',
      lblSvc:'Hizmet', valSvc:'Saç Ekimi Konsültasyon',
      lblDate:'Tarih', lblTime:'Saat',
      dates:['Sal','Çar','Per','Cum'], dateDays:['20','21','22','23'],
      times:['10:00','11:30','14:00'],
      btn:'Randevuyu Onayla ✓',
    },
    'ps-dash': {
      title:'📊 Canlı Dashboard', date:'21 Mayıs 2026',
      lbl1:'Bugün mesaj', lbl2:'Randevu', lbl3:'Otomasyon', lbl4:'Ort. yanıt',
      section:'Bugünkü Randevular',
      rows:[
        {name:'Ayşe Demir', time:'10:00 · Konsültasyon', badge:'Onaylı', dotCls:'dot-g', badgeCls:'bg-g'},
        {name:'Emre Çelik', time:'11:30 · FUE Saç',     badge:'Bekliyor',dotCls:'dot-y', badgeCls:'bg-y'},
        {name:'Fatma Kaya', time:'14:00 · Kaş Ekimi',   badge:'Onaylı', dotCls:'dot-g', badgeCls:'bg-g'},
      ],
    },
    /* AI demo chat */
    'ai-demo': {
      u1:          'Rezervasyon yapmak istiyorum 🍽️',
      b1:          'Merhaba! 😊 Rezervasyon formunu açın:',
      fCardTitle:  'Rezervasyon Formu',
      fCardSub:    'Kişi sayısı, tarih ve saat seçin',
      fCardBtn:    'Formu Aç →',
      fBarTitle:   '📅 Rezervasyon',
      fH1:         'Rezervasyon Bilgileri',
      fSub:        'Formu doldurun, hemen onaylayalım',
      fLbl1:       'Kişi Sayısı',
      fSize:       ['👤 2','👥 4','🎉 6+'], fSizeSel: 1,
      fLbl2:       'Tarih',
      fDates:      ['Sal','Çar','Per','Cum'], fDays:['20','21','22','23'], fDateSel: 1,
      fLbl3:       'Saat',
      fTimes:      ['19:00','20:00','21:00'], fTimeSel: 1,
      fSubmit:     'Rezervasyonu Onayla ✓',
      fBizLoc:     'Qavio AI · Masa Rezervasyonu',
      b2:          'Rezervasyonunuz onaylandı! 🎉<br><strong>Bu akşam 20:00 · 4 kişilik</strong> masa sizi bekliyor.<br>İyi akşamlar! 🍷',
    },
    /* Demo section phone slides */
    'demo-slide-0': {
      waStatus:'çevrimiçi',
      msgOut1:'Merhaba 👋',
      msgIn1:'Merhaba! Hoş geldiniz 😊',
      msgIn1sub:'Nasıl yardımcı olabilirim?',
      btn1:'📅 Randevu Al', btn2:'💰 Fiyat Öğren', btn3:'ℹ️ Bilgi Al',
      msgOut2:'Randevu istiyorum',
      msgIn2:'Harika! Randevu formunu doldurabilirsiniz.',
      inp:'Mesaj yazın...',
    },
    'demo-slide-1': {
      barTitle:'📅 Randevu Al',
      title:'Randevu Bilgileri', sub:'Formu doldurun, hemen onaylayalım',
      lblName:'Adınız Soyadınız', valName:'Ahmet Yılmaz',
      lblSvc:'Hizmet', valSvc:'Saç Ekimi Konsültasyon',
      lblDate:'Tarih', lblTime:'Saat',
      dates:['Sal','Çar','Per','Cum'], dateDays:['20','21','22','23'],
      times:['10:00','11:30','14:00'],
      btn:'Randevuyu Onayla ✓',
    },
    'demo-slide-2': {
      barTitle:'💰 Teklif İste',
      title:'Fiyat Teklifi', sub:'Bilgileri girin, 2 saat içinde dönelim',
      lblName:'Adınız', valName:'Mehmet Kaya',
      lblSvc:'İlgilendiğiniz Hizmet',
      svc1:'Saç Ekimi (FUE)', svc2:'Sakal Ekimi', svc3:'Kaş Ekimi',
      lblBudget:'Bütçe', btn:'Teklif İste →',
    },
    'demo-slide-3': {
      title:'📊 Canlı Dashboard', date:'21 Mayıs 2026',
      lbl1:'Bugün mesaj', lbl2:'Randevu', lbl3:'Otomasyon', lbl4:'Ort. yanıt',
      section:'Bugünkü Randevular',
      rows:[
        {name:'Ayşe Demir', time:'10:00 · Konsültasyon', badge:'Onaylı',  dotCls:'dot-g', badgeCls:'bg-g'},
        {name:'Emre Çelik', time:'11:30 · FUE Saç',      badge:'Bekliyor',dotCls:'dot-y', badgeCls:'bg-y'},
        {name:'Fatma Kaya', time:'14:00 · Kaş Ekimi',    badge:'Onaylı',  dotCls:'dot-g', badgeCls:'bg-g'},
      ],
    },
  },

  en: {
    'page-title'      : 'Qavio — WhatsApp Automation System',
    'meta-desc'       : 'AI-powered WhatsApp chatbot and Flow system. 24/7 automated customer management for clinics, salons, and businesses.',
    'nav-features'    : 'Features',
    'nav-sectors'     : 'Sectors',
    'nav-pricing'     : 'Pricing',
    'nav-cta'         : 'Get Demo →',
    'hero-tag'        : 'WhatsApp Automation',
    'hero-h1'         : 'Customer Messages,<br><em>System</em> Handles',
    'hero-desc'       : 'Reply to customers on WhatsApp in seconds, book appointments, send quotes automatically — AI handles it all while you focus on results. 24/7, non-stop.',
    'hero-btn-demo'   : 'Get Demo <span>→</span>',
    'hero-btn-how'    : 'How It Works?',
    'hero-note'       : '20+ businesses &nbsp;·&nbsp; ⭐ 4.9 rating',
    'marquee-text'    : 'WhatsApp Flow <span class="ms">·</span> AI Intent Detection <span class="ms">·</span> Live Dashboard <span class="ms">·</span> 24/7 Active <span class="ms">·</span> Appointment Automation <span class="ms">·</span> GDPR Compliant <span class="ms">·</span> Full Support <span class="ms">·</span> Setup Included <span class="ms">·</span>',
    'stat-1'          : 'Always active, non-stop',
    'stat-2'          : 'Average response time',
    'stat-3'          : 'Message automation rate',
    'stat-4'          : 'Cost per incoming reply',
    'ai-tag'          : 'AI-Powered Communication',
    'ai-h2'           : 'Customer writes,<br><em>AI instantly replies</em>',
    'ai-desc'         : 'Far beyond standard auto-messages. Qavio\'s AI understands not what your customers <strong>say</strong>, but what they <strong>mean</strong> — and sends the right reply in seconds. Even while you sleep.',
    'ai-pt1-title'    : 'Intent Detection',
    'ai-pt1-desc'     : 'Appointment, price, or info? AI understands in seconds and routes to the right flow.',
    'ai-pt2-title'    : 'Natural Language',
    'ai-pt2-desc'     : 'Whatever the customer writes — short, long, typos — AI understands and replies naturally.',
    'ai-pt3-title'    : '24/7, in 3 Seconds',
    'ai-pt3-desc'     : 'No employee can match this speed and consistency. Active 365 days a year, day and night.',
    'ai-chat-name'    : 'Restaurant Agent',
    'ai-chat-status'  : 'Qavio AI · Active',
    'ai-footer'       : 'Reservation completed — response time: <strong>2.1 seconds</strong>',
    'demo-tag'        : 'How It Works',
    'demo-h2'         : 'Harness the full power of WhatsApp<br>in <em>one system</em>',
    'demo-desc'       : 'Far beyond standard chatbots. With WhatsApp Flow technology, your customers fill out forms and book appointments without leaving the app.',
    'step-01-h3'      : 'AI-Powered<br><em>Instant Welcome</em>',
    'step-01-p'       : 'When your customer messages on WhatsApp, the system responds within 3 seconds. AI automatically detects intent keywords like "appointment", "price", "info" and routes to the right flow.',
    'step-01-pills'   : '<span class="pill">🤖 AI that understands customers</span><span class="pill">⚡ 3s response</span><span class="pill">🌐 TR &amp; EN support</span>',
    'step-02-h3'      : 'WhatsApp Flow for<br><em>Appointments</em>',
    'step-02-p'       : 'The feature competitors can\'t offer: interactive appointment form without leaving WhatsApp. Customer selects name, date, and time — you see it instantly in the dashboard.',
    'step-02-pills'   : '<span class="pill">📱 In-app form</span><span class="pill">📅 Date-time picker</span><span class="pill">✅ Instant confirm</span>',
    'step-03-h3'      : 'Automated Quote<br><em>&amp; Pricing Flow</em>',
    'step-03-p'       : 'When a customer asks "what\'s the price?", the system automatically opens the quote form. Collects service type, budget, and contact info. You just approve the ready quote.',
    'step-03-pills'   : '<span class="pill">💰 Auto quote</span><span class="pill">🎯 Service selection</span><span class="pill">📊 Lead tracking</span>',
    'step-04-h3'      : 'Live Dashboard<br><em>&amp; Calendar</em>',
    'step-04-p'       : 'All conversations, appointments, and statistics in one panel. See how many messages came in, how many converted — make real-time decisions.',
    'step-04-pills'   : '<span class="pill">📊 Live stats</span><span class="pill">📅 Calendar view</span><span class="pill">📈 Weekly report</span>',
    'feat-tag'        : 'Features',
    'feat-h2'         : 'The technology that sets you<br><em>apart</em> from competitors',
    'feat-desc'       : 'Industry-specific solutions, full support, and complete customization that global SaaS tools can\'t offer.',
    'feat-1-p'        : 'Incoming message intent is automatically detected by AI and routed to the right flow. Turkish and English supported.',
    'feat-2-p'        : 'Customers fill out interactive forms without leaving WhatsApp. Appointment, quote, pre-evaluation — all in one flow.',
    'feat-3-h'        : 'Live Calendar',
    'feat-3-p'        : 'Appointments are automatically added to the calendar. Daily and weekly views. See who\'s coming when at a glance.',
    'feat-4-h'        : 'GDPR Compliant',
    'feat-4-p'        : 'All data is processed on EU servers. Fully compliant with KVKK and GDPR requirements. You own your data.',
    'feat-5-h'        : 'Setup Included',
    'feat-5-p'        : 'From Meta Business API application to live launch, everything is handled for you. Ready within 7–10 days.',
    'feat-6-h'        : 'Single Point of Contact',
    'feat-6-p'        : 'When there\'s an issue, you call someone who knows you — not a call center. Flow updates are completed within 24 hours.',
    'how-tag'         : 'Process',
    'how-h2'          : 'Go live in<br><em>3 steps</em>',
    'how-desc'        : 'Average 7–10 days from sign-up to live. You focus on your business, we handle everything.',
    'how-1-h'         : 'Discovery &amp; Setup',
    'how-1-p'         : 'We understand your business processes. We apply for Meta Business API on your behalf. We connect your WhatsApp number to the system.',
    'how-2-h'         : 'Customization &amp; Testing',
    'how-2-p'         : 'We configure industry-specific flows. We set up messages, appointment flow, and quote form. We conduct live testing.',
    'how-3-h'         : 'Go Live &amp; Support',
    'how-3-p'         : 'We launch the system and provide dashboard access. Monthly performance reports and priority support by your side.',
    'sec-tag'         : 'Sectors',
    'sec-h2'          : 'Ready solutions<br>for <em>every industry</em>',
    'sec-desc'        : 'Not one-size-fits-all — tailored to your business.',
    'sec-1-h'         : 'Private Clinic &amp; Hospital',
    'sec-1-p'         : 'Appointments, pre-evaluations, reminder messages',
    'sec-2-h'         : 'Beauty &amp; Aesthetics',
    'sec-2-p'         : 'Session bookings, consultation forms, treatment flow',
    'sec-3-h'         : 'Restaurant',
    'sec-3-p'         : 'Reservations, table management, order flow',
    'sec-4-h'         : 'Auto Service',
    'sec-4-p'         : 'Vehicle intake form, service status, appointment',
    'sec-5-h'         : 'Real Estate',
    'sec-5-p'         : 'Listing queries, visit appointments, agent routing',
    'sec-6-h'         : 'Legal &amp; Consulting',
    'sec-6-p'         : 'Initial application form, client intake',
    'sec-7-h'         : 'Educational Institution',
    'sec-7-p'         : 'Registration form, info request, reminders',
    'sec-8-h'         : 'E-Commerce &amp; Boutique',
    'sec-8-p'         : 'Order tracking, return forms, product queries',
    'price-tag'       : 'Pricing',
    'price-h2'        : 'Transparent,<br><em>no-surprise</em> pricing',
    'price-desc'      : 'No hidden fees. No setup fee. Full support with every plan.',
    'tog-monthly'     : 'Monthly',
    'tog-yearly'      : 'Yearly',
    'tog-save'        : '20% Off',
    'plan-per'        : '/mo',
    'plan-1-yearly'   : '$149/yr · save $79',
    'plan-1-f1'       : 'Automatic welcome message',
    'plan-1-f2'       : 'Appointment Flow (ready template)',
    'plan-1-f3'       : 'WhatsApp Business API setup',
    'plan-1-f4'       : '3,000 messages/mo',
    'plan-1-f5'       : '1 user · Email support',
    'plan-2-badge'    : 'Most Popular',
    'plan-2-yearly'   : '$389/yr · save $199',
    'plan-2-f1'       : 'Everything in Starter',
    'plan-2-f2'       : '<strong>AI intent detection</strong> (TR/EN)',
    'plan-2-f3'       : 'Quote &amp; pricing Flow',
    'plan-2-f4'       : 'Live dashboard &amp; calendar',
    'plan-2-f5'       : '10,000 messages/mo · 3 users',
    'plan-2-f6'       : 'Chatbot &amp; automation',
    'plan-3-yearly'   : '$990/yr · save $558',
    'plan-3-f1'       : 'Everything in Growth',
    'plan-3-f2'       : 'Custom pre-evaluation Flow',
    'plan-3-f3'       : 'API access &amp; data integration',
    'plan-3-f4'       : '40,000 messages/mo · 10 users',
    'plan-3-f5'       : 'GDPR/KVKK compliant · Unlimited templates',
    'plan-3-f6'       : 'Priority support',
    'plan-cta'        : 'Get Demo',
    'price-note'      : '7-day free trial &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Cancel anytime',
    'contact-tag'     : 'Contact',
    'contact-h2'      : 'Request a demo,<br><em>see the system</em>',
    'contact-p'       : 'See the system set up specifically for your business in a 15-minute live demo. No cost or commitment.',
    'ch-wa-lbl'       : 'WhatsApp',
    'ch-wa-val'       : 'Message us now',
    'ch-email-lbl'    : 'Email',
    'reply-lbl'       : '🕐 Response time',
    'reply-val'       : 'Within 2 hours on business days',
    'reply-sub'       : 'Weekend forms are answered on Monday',
    'form-name-lbl'   : 'Full Name *',
    'form-name-ph'    : 'John Doe',
    'form-phone-lbl'  : 'WhatsApp Number *',
    'form-phone-ph'   : '+1 555 000 0000',
    'form-email-lbl'  : 'Email',
    'form-email-ph'   : 'john@company.com',
    'form-sector-lbl' : 'Business Type *',
    'form-sector-ph'  : 'Select...',
    'form-sector-opts': ['Private Clinic / Hospital','Beauty & Aesthetics Center','Hair Transplant Clinic','Auto Service','Real Estate Office','Law Firm / Consulting','Educational Institution','E-Commerce / Boutique','Other'],
    'form-msg-lbl'    : 'Your Message',
    'form-msg-ph'     : 'Tell us briefly about your business and needs...',
    'form-submit'     : 'Get Demo — Free →',
    'success-h'       : 'Message received!',
    'success-p'       : 'We\'ll get back to you within 2 business hours via WhatsApp or email.',
    'footer-brand-p'  : 'WhatsApp chatbot and Flow automation. AI-powered customer communication.',
    'footer-p-title'  : 'Product',
    'footer-p-feat'   : 'Features',
    'footer-p-price'  : 'Pricing',
    'footer-p-sec'    : 'Sectors',
    'footer-c-title'  : 'Contact',
    'footer-c-demo'   : 'Get Demo',
    'footer-copy'     : '© 2026 Qavio. All rights reserved.',
    'footer-privacy'  : 'GDPR &amp; Privacy',
    /* Hero pscreens */
    'ps-chat': {
      waName:'Qavio', waStatus:'online',
      bot1:'Hello! 👋 How can I help you?',
      b1:'📅 Book Appointment', b2:'💰 Get Quote', b3:'ℹ️ Get Info',
      userMsg:'I want to make an appointment',
      formLabel:'🗓️ APPOINTMENT FORM',
      formText:'Please open the form to book...',
      formBtn:'Open Form →',
      inp:'Type a message...',
    },
    'ps-flow': {
      title:'Appointment Details', sub:'Fill in the form, we\'ll confirm right away',
      lblName:'Full Name', valName:'John Doe',
      lblSvc:'Service', valSvc:'Hair Transplant Consultation',
      lblDate:'Date', lblTime:'Time',
      dates:['Tue','Wed','Thu','Fri'], dateDays:['20','21','22','23'],
      times:['10:00','11:30','14:00'],
      btn:'Confirm Appointment ✓',
    },
    'ps-dash': {
      title:'📊 Live Dashboard', date:'May 21, 2026',
      lbl1:'Today\'s messages', lbl2:'Appointments', lbl3:'Automation', lbl4:'Avg. response',
      section:'Today\'s Appointments',
      rows:[
        {name:'Emma Johnson',  time:'10:00 · Consultation', badge:'Confirmed', dotCls:'dot-g', badgeCls:'bg-g'},
        {name:'James Smith',   time:'11:30 · FUE Hair',     badge:'Pending',   dotCls:'dot-y', badgeCls:'bg-y'},
        {name:'Sophia Davis',  time:'14:00 · Eyebrow',      badge:'Confirmed', dotCls:'dot-g', badgeCls:'bg-g'},
      ],
    },
    /* AI demo chat */
    'ai-demo': {
      u1:          'I\'d like to make a reservation 🍽️',
      b1:          'Hello! 😊 Please open the reservation form:',
      fCardTitle:  'Reservation Form',
      fCardSub:    'Select party size, date and time',
      fCardBtn:    'Open Form →',
      fBarTitle:   '📅 Reservation',
      fH1:         'Reservation Details',
      fSub:        'Fill in the form, we\'ll confirm right away',
      fLbl1:       'Party Size',
      fSize:       ['👤 2','👥 4','🎉 6+'], fSizeSel: 1,
      fLbl2:       'Date',
      fDates:      ['Tue','Wed','Thu','Fri'], fDays:['20','21','22','23'], fDateSel: 1,
      fLbl3:       'Time',
      fTimes:      ['7:00 PM','8:00 PM','9:00 PM'], fTimeSel: 1,
      fSubmit:     'Confirm Reservation ✓',
      fBizLoc:     'Qavio AI · Table Reservation',
      b2:          'Reservation confirmed! 🎉<br><strong>Tonight at 8:00 PM · Table for 4</strong> is ready.<br>Enjoy your evening! 🍷',
    },
    /* Demo section phone slides */
    'demo-slide-0': {
      waStatus:'online',
      msgOut1:'Hello 👋',
      msgIn1:'Hello! Welcome 😊',
      msgIn1sub:'How can I help you?',
      btn1:'📅 Book Appointment', btn2:'💰 Get Quote', btn3:'ℹ️ Get Info',
      msgOut2:'I want to make an appointment',
      msgIn2:'Great! Please fill in the appointment form.',
      inp:'Type a message...',
    },
    'demo-slide-1': {
      barTitle:'📅 Book Appointment',
      title:'Appointment Details', sub:'Fill in the form, we\'ll confirm right away',
      lblName:'Full Name', valName:'John Doe',
      lblSvc:'Service', valSvc:'Hair Transplant Consultation',
      lblDate:'Date', lblTime:'Time',
      dates:['Tue','Wed','Thu','Fri'], dateDays:['20','21','22','23'],
      times:['10:00','11:30','14:00'],
      btn:'Confirm Appointment ✓',
    },
    'demo-slide-2': {
      barTitle:'💰 Get Quote',
      title:'Price Quote', sub:'Fill in details, we\'ll reply within 2 hours',
      lblName:'Your Name', valName:'John Smith',
      lblSvc:'Service of Interest',
      svc1:'Hair Transplant (FUE)', svc2:'Beard Transplant', svc3:'Eyebrow Transplant',
      lblBudget:'Budget', btn:'Request Quote →',
    },
    'demo-slide-3': {
      title:'📊 Live Dashboard', date:'May 21, 2026',
      lbl1:'Today\'s messages', lbl2:'Appointments', lbl3:'Automation', lbl4:'Avg. response',
      section:'Today\'s Appointments',
      rows:[
        {name:'Emma Johnson', time:'10:00 · Consultation', badge:'Confirmed', dotCls:'dot-g', badgeCls:'bg-g'},
        {name:'James Smith',  time:'11:30 · FUE Hair',     badge:'Pending',   dotCls:'dot-y', badgeCls:'bg-y'},
        {name:'Sophia Davis', time:'14:00 · Eyebrow',      badge:'Confirmed', dotCls:'dot-g', badgeCls:'bg-g'},
      ],
    },
  },
};

/* ─── Core ─────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('qavio-lang') || 'tr';

function t(key) { return LANGS[currentLang][key] ?? LANGS.tr[key] ?? key; }

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('qavio-lang', lang);
  document.documentElement.lang = lang;

  /* title + meta */
  document.title = t('page-title');
  const md = document.querySelector('meta[name="description"]');
  if (md) md.content = t('meta-desc');

  /* data-i18n text/html */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v && typeof v === 'string') el.innerHTML = v;
  });

  /* placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t(el.dataset.i18nPh);
    if (v) el.placeholder = v;
  });

  /* select options */
  const sel = document.querySelector('[name="sector"]');
  if (sel) {
    sel.options[0].text = t('form-sector-ph');
    const opts = t('form-sector-opts');
    if (Array.isArray(opts)) {
      opts.forEach((o, i) => { if (sel.options[i + 1]) sel.options[i + 1].text = o; });
    }
  }

  /* marquee */
  document.querySelectorAll('.marquee-item').forEach(el => { el.innerHTML = t('marquee-text'); });

  /* pscreens */
  renderPscreens();

  /* demo section phone slides */
  renderDemoSlides();

  /* ai demo */
  renderAiDemo();

  /* dropdown: update current label (desktop + mobile) + active states */
  document.querySelectorAll('.js-lang-current').forEach(el => el.textContent = lang.toUpperCase());
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  /* re-apply TL prices after language switch overwrites i18n strings */
  if (typeof applyGeoPrice === 'function') applyGeoPrice();
}

/* ─── Pscreen renderer ──────────────────────────────────────── */
function renderPscreens() {
  const chat = t('ps-chat');
  const flow = t('ps-flow');
  const dash = t('ps-dash');

  /* — Screen 0: Chat — */
  const s0 = document.getElementById('pscreen-0');
  if (s0) {
    const waName = s0.querySelector('.wa-nm'); if (waName) waName.textContent = chat.waName;
    const waSt   = s0.querySelector('.wa-st'); if (waSt)   waSt.textContent   = chat.waStatus;
    const msgs   = s0.querySelectorAll('[data-anim]');
    if (msgs[0]) msgs[0].childNodes[0].textContent = chat.bot1;
    if (msgs[1]) msgs[1].textContent = chat.b1;
    if (msgs[2]) msgs[2].textContent = chat.b2;
    if (msgs[3]) msgs[3].textContent = chat.b3;
    if (msgs[4]) msgs[4].textContent = chat.userMsg;
    /* bot2 message */
    const bot2 = s0.querySelectorAll('.msg.msg-i')[1];
    if (bot2) {
      const lbl = bot2.querySelector('span[style]'); if (lbl) lbl.textContent = chat.formLabel;
      const nodes = Array.from(bot2.childNodes).filter(n => n.nodeType === 3);
      if (nodes[0]) nodes[0].textContent = ' ' + chat.formText + ' ';
      const fbtn = bot2.querySelector('div[style]'); if (fbtn) fbtn.textContent = chat.formBtn;
    }
    const inp = s0.querySelector('.wa-inp'); if (inp) inp.textContent = chat.inp;
  }

  /* — Screen 1: Flow — */
  const s1 = document.getElementById('pscreen-1');
  if (s1) {
    const fh1 = s1.querySelector('.flow-h1'); if (fh1) fh1.textContent = flow.title;
    const fsub = s1.querySelector('.flow-sub'); if (fsub) fsub.textContent = flow.sub;
    const lbls = s1.querySelectorAll('.flow-lbl');
    if (lbls[0]) lbls[0].textContent = flow.lblName;
    if (lbls[1]) lbls[1].textContent = flow.lblSvc;
    if (lbls[2]) lbls[2].textContent = flow.lblDate;
    if (lbls[3]) lbls[3].textContent = flow.lblTime;
    const valName = s1.querySelector('.flow-val-name'); if (valName) valName.firstChild.textContent = flow.valName;
    const valSvc  = s1.querySelector('.flow-val-svc');  if (valSvc)  valSvc.firstChild.textContent  = flow.valSvc;
    const chips   = s1.querySelectorAll('.date-chip:not(.time-chip)');
    flow.dates.forEach((d, i) => {
      if (chips[i]) chips[i].innerHTML = d + '<br><b>' + flow.dateDays[i] + '</b>';
    });
    const tChips = s1.querySelectorAll('.time-chip');
    flow.times.forEach((tm, i) => { if (tChips[i]) tChips[i].textContent = tm; });
    const fbtn = s1.querySelector('.flow-btn-gr'); if (fbtn) fbtn.textContent = flow.btn;
  }

  /* — Screen 2: Dashboard — */
  const s2 = document.getElementById('pscreen-2');
  if (s2) {
    const dt = s2.querySelector('.dash-t'); if (dt) dt.textContent = dash.title;
    const dd = s2.querySelector('.dash-d'); if (dd) dd.textContent = dash.date;
    const lbls = s2.querySelectorAll('.dash-lbl');
    [dash.lbl1, dash.lbl2, dash.lbl3, dash.lbl4].forEach((l, i) => { if (lbls[i]) lbls[i].textContent = l; });
    const sec = s2.querySelector('.dash-sec'); if (sec) sec.textContent = dash.section;
    const rows = s2.querySelectorAll('.dash-row');
    dash.rows.forEach((r, i) => {
      if (!rows[i]) return;
      const dot = rows[i].querySelector('.dash-dot');
      dot.className = 'dash-dot ' + r.dotCls;
      rows[i].querySelector('.dash-rn').textContent = r.name;
      rows[i].querySelector('.dash-rt').textContent = r.time;
      const badge = rows[i].querySelector('.dash-badge');
      badge.className = 'dash-badge ' + r.badgeCls;
      badge.textContent = r.badge;
    });
  }
}

/* ─── Demo Slides renderer ──────────────────────────────────── */
function renderDemoSlides() {
  const phone = document.getElementById('demo-phone');
  if (!phone) return;
  const slides = phone.querySelectorAll('.phone-slide');
  if (slides.length < 4) return;

  /* — Slide 0: Chat — */
  const s0 = t('demo-slide-0');
  const sl0 = slides[0];
  const waSt = sl0.querySelector('.wa-st');
  if (waSt) waSt.textContent = s0.waStatus;
  const msgs = sl0.querySelectorAll('.wa-msgs .msg');
  /* msg[0] = user "Merhaba 👋", msg[1] = bot with buttons, msg[2] = user reply, msg[3] = bot reply */
  if (msgs[0]) {
    const tn = msgs[0].firstChild;
    if (tn && tn.nodeType === 3) tn.textContent = s0.msgOut1;
  }
  if (msgs[1]) {
    const mt = msgs[1].querySelector('.msg-t');
    const timeHTML = mt ? mt.outerHTML : '<div class="msg-t">14:23</div>';
    msgs[1].innerHTML =
      s0.msgIn1 + '<br><br>' + s0.msgIn1sub +
      '<div class="msg-btns">' +
        `<div class="msg-btn">${s0.btn1}</div>` +
        `<div class="msg-btn">${s0.btn2}</div>` +
        `<div class="msg-btn">${s0.btn3}</div>` +
      '</div>' + timeHTML;
  }
  if (msgs[2]) {
    const tn = msgs[2].firstChild;
    if (tn && tn.nodeType === 3) tn.textContent = s0.msgOut2;
  }
  if (msgs[3]) {
    const mt = msgs[3].querySelector('.msg-t');
    const timeHTML = mt ? mt.outerHTML : '<div class="msg-t">14:24</div>';
    msgs[3].innerHTML = s0.msgIn2 + timeHTML;
  }
  const inp = sl0.querySelector('.wa-inp');
  if (inp) inp.textContent = s0.inp;

  /* — Slide 1: Appointment Flow — */
  const s1 = t('demo-slide-1');
  const sl1 = slides[1];
  const ft = sl1.querySelector('.flow-bar-t'); if (ft) ft.textContent = s1.barTitle;
  const fh1 = sl1.querySelector('.flow-h1');  if (fh1) fh1.textContent = s1.title;
  const fsub = sl1.querySelector('.flow-sub'); if (fsub) fsub.textContent = s1.sub;
  const lbls1 = sl1.querySelectorAll('.flow-lbl');
  if (lbls1[0]) lbls1[0].textContent = s1.lblName;
  if (lbls1[1]) lbls1[1].textContent = s1.lblSvc;
  if (lbls1[2]) lbls1[2].textContent = s1.lblDate;
  if (lbls1[3]) lbls1[3].textContent = s1.lblTime;
  const vals1 = sl1.querySelectorAll('.flow-val');
  if (vals1[0]) vals1[0].textContent = s1.valName;
  if (vals1[1]) vals1[1].textContent = s1.valSvc;
  const chips1 = sl1.querySelectorAll('.date-chip:not(.time-chip)');
  s1.dates.forEach((d, i) => {
    if (chips1[i]) chips1[i].innerHTML = d + '<br><b>' + s1.dateDays[i] + '</b>';
  });
  const fbtn1 = sl1.querySelector('.flow-btn-gr'); if (fbtn1) fbtn1.textContent = s1.btn;

  /* — Slide 2: Quote Flow — */
  const s2 = t('demo-slide-2');
  const sl2 = slides[2];
  const ft2 = sl2.querySelector('.flow-bar-t'); if (ft2) ft2.textContent = s2.barTitle;
  const fh2 = sl2.querySelector('.flow-h1');   if (fh2) fh2.textContent = s2.title;
  const fs2 = sl2.querySelector('.flow-sub');  if (fs2) fs2.textContent = s2.sub;
  const lbls2 = sl2.querySelectorAll('.flow-lbl');
  if (lbls2[0]) lbls2[0].textContent = s2.lblName;
  if (lbls2[1]) lbls2[1].textContent = s2.lblSvc;
  if (lbls2[2]) lbls2[2].textContent = s2.lblBudget;
  const nameVal = sl2.querySelector('.flow-val'); if (nameVal) nameVal.textContent = s2.valName;
  const svcItems = sl2.querySelectorAll('[style*="DCFCE7"], [style*="10.5px"]');
  if (svcItems[0]) svcItems[0].textContent = '✓ ' + s2.svc1;
  if (svcItems[1]) svcItems[1].textContent = s2.svc2;
  if (svcItems[2]) svcItems[2].textContent = s2.svc3;
  const fbtn2 = sl2.querySelector('.flow-btn-gr'); if (fbtn2) fbtn2.textContent = s2.btn;

  /* — Slide 3: Dashboard — */
  const s3 = t('demo-slide-3');
  const sl3 = slides[3];
  const dt = sl3.querySelector('.dash-t'); if (dt) dt.textContent = s3.title;
  const dd = sl3.querySelector('.dash-d'); if (dd) dd.textContent = s3.date;
  const dlbls = sl3.querySelectorAll('.dash-lbl');
  [s3.lbl1, s3.lbl2, s3.lbl3, s3.lbl4].forEach((l, i) => { if (dlbls[i]) dlbls[i].textContent = l; });
  const dsec = sl3.querySelector('.dash-sec'); if (dsec) dsec.textContent = s3.section;
  const drows = sl3.querySelectorAll('.dash-row');
  s3.rows.forEach((r, i) => {
    if (!drows[i]) return;
    drows[i].querySelector('.dash-dot').className = 'dash-dot ' + r.dotCls;
    drows[i].querySelector('.dash-rn').textContent = r.name;
    drows[i].querySelector('.dash-rt').textContent = r.time;
    const badge = drows[i].querySelector('.dash-badge');
    badge.className = 'dash-badge ' + r.badgeCls;
    badge.textContent = r.badge;
  });
}

/* ─── AI Demo renderer ──────────────────────────────────────── */
function renderAiDemo() {
  const d       = t('ai-demo');
  const wrap    = document.getElementById('ai-demo-msgs');
  const overlay = document.getElementById('ai-flow-overlay');
  if (!wrap) return;

  const msgs = wrap.querySelectorAll('.ai-msg');
  const [u1, botCard, botConfirm] = msgs;

  /* user message */
  if (u1) u1.textContent = d.u1;

  /* bot: WhatsApp Flow card message */
  if (botCard) {
    const label = botCard.querySelector('.ai-msg-label');
    if (label) label.textContent = t('ai-chat-name');
    const intro = botCard.querySelector('.afm-intro');
    if (intro) intro.textContent = d.b1;
    const title = botCard.querySelector('.afmc-title');
    if (title) title.textContent = d.fCardTitle;
    const sub = botCard.querySelector('.afmc-sub');
    if (sub) sub.textContent = d.fCardSub;
    const btn = botCard.querySelector('.afmc-btn');
    if (btn) btn.textContent = d.fCardBtn;
  }

  /* flow overlay content */
  if (overlay) {
    const bizName = overlay.querySelector('.afo-biz-name');
    if (bizName) bizName.textContent = t('ai-chat-name');
    const bizLoc = overlay.querySelector('.afo-biz-loc');
    if (bizLoc) bizLoc.textContent = d.fBizLoc;
    const barT = overlay.querySelector('.flow-bar-t');
    if (barT) barT.textContent = d.fBarTitle;
    const h1 = overlay.querySelector('.flow-h1');
    if (h1) h1.textContent = d.fH1;
    const flowSub = overlay.querySelector('.flow-sub');
    if (flowSub) flowSub.textContent = d.fSub;
    const lbls = overlay.querySelectorAll('.flow-lbl');
    if (lbls[0]) lbls[0].textContent = d.fLbl1;
    if (lbls[1]) lbls[1].textContent = d.fLbl2;
    if (lbls[2]) lbls[2].textContent = d.fLbl3;
    const rows = overlay.querySelectorAll('.date-row');
    if (rows[0]) rows[0].innerHTML = d.fSize.map(s =>
      `<div class="date-chip">${s}</div>`).join('');
    if (rows[1]) rows[1].innerHTML = d.fDates.map((dt, i) =>
      `<div class="date-chip">${dt}<br><b>${d.fDays[i]}</b></div>`).join('');
    if (rows[2]) rows[2].innerHTML = d.fTimes.map(tm =>
      `<div class="date-chip time-chip">${tm}</div>`).join('');
    const submitBtn = document.getElementById('afo-submit');
    if (submitBtn) submitBtn.textContent = d.fSubmit;
  }

  /* confirmation message */
  if (botConfirm) {
    const label = botConfirm.querySelector('.ai-msg-label');
    const lbl   = label ? label.outerHTML : '';
    botConfirm.innerHTML = lbl + '<br>' + d.b2;
  }

  /* chat bar + footer */
  const barName   = document.querySelector('.ai-chat-name');
  const barStatus = document.querySelector('.ai-chat-status');
  if (barName)   barName.textContent = t('ai-chat-name');
  if (barStatus) barStatus.innerHTML = `<span class="ai-online-dot"></span>${t('ai-chat-status')}`;
  const footer = document.querySelector('.ai-card-footer span[data-i18n="ai-footer"]');
  if (footer) footer.innerHTML = t('ai-footer');
}

/* ─── Init ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('lang-trigger');
  const menu    = document.getElementById('lang-menu');

  if (trigger && menu) {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const opening = !menu.classList.contains('open');
      menu.classList.toggle('open', opening);
      trigger.classList.toggle('open', opening);
    });

    menu.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        applyLang(opt.dataset.lang);
        menu.classList.remove('open');
        trigger.classList.remove('open');
      });
    });

    document.addEventListener('click', () => {
      menu.classList.remove('open');
      trigger.classList.remove('open');
    });
  }

  /* Mobile lang options */
  const mobileLangMenu    = document.getElementById('mobile-lang-menu');
  const mobileLangTrigger = document.getElementById('mobile-lang-trigger');
  if (mobileLangMenu) {
    mobileLangMenu.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        applyLang(opt.dataset.lang);
        mobileLangMenu.classList.remove('open');
        mobileLangTrigger?.classList.remove('open');
      });
    });
  }

  applyLang(currentLang);
});
